export interface IBoard {
    id?: string;
    title?: string;
    priority?: number;
    tasks?: ITask[];
}

export interface ITask {
    description?: string;
    label?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}