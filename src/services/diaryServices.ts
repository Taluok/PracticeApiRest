import { DiaryEntry, NonSensitiveInfoDiaryEntry, newDiaryEntry } from '../types'
import diaryData from '../services/diaries.json';


const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry> 

export const getEntries = (): DiaryEntry [] => diaries //para recuperar las entries 

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => { //quito el comment como una informacion clasificada
    const entry = diaries.find(d => d.id === id)
    if (entry != null) { 
        const{comment, ...restOfDiary} = entry
        return restOfDiary
    }
    return undefined
};

export const getEntriesWithoutSensetiveInfo = () : NonSensitiveInfoDiaryEntry [] => {
    //hago el map para que se filtre correctamente el comments 
    return diaries.map(({id, date, weather, visibility}) => {
        return {
            id, 
            date,
            weather,
            visibility
        }
    }) 
};

export const addDiary = (newDiaryEntry: newDiaryEntry ): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1, //de esta forma nos aseguramos si el id no es consecutivo
        //diaries.length + 1 //esto teniendo en cuenta que los id siempre sean consecutivos
        ...newDiaryEntry // el ... es de añadir todos
    };
    diaries.push(newDiary)
    return newDiary;
}

