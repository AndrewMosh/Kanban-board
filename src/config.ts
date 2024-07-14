export interface Task {
    id: number;
    name: string;
    description?: string;
    stat: string;
}

export interface allCards {
    id: number;
    title: string;
    tasks: Task[];
    isActive: boolean
}

export const Cards: allCards[] = [
    {
        id: 0,
        title: "Backlog",
        tasks: [],
        isActive: false
    },
    {
        id: 1,
        title: "Ready",
        tasks: [],
        isActive: false
    },
    {
        id: 2,
        title: "In progress",
        tasks: [],
        isActive: false
    },
    {
        id: 3,
        title: "Finished",
        tasks: [],
        isActive: false
    },
];
