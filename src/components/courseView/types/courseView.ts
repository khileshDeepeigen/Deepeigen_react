export interface Lecture {
    id: number;
    title: string;
    duration: string;
    completed: boolean;
}

export interface Section {
    name: string;
    lectures: Lecture[];
}

export interface Week {
    id: number;
    name: string;
    sections: Section[];
}
