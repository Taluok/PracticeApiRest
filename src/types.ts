/*export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'bad' | 'poor'*/

export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
};

export enum Visibility {
    Great = 'great',
    Good = 'good',
    Bad = 'bad',
    Poor = 'poor'
}

export interface DiaryEntry { //interface tiene la posibilidad de ampliar la inf a largo plazo
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
};

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id'| 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type newDiaryEntry = Omit<DiaryEntry, 'id'>

