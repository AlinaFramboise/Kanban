const LIST_TYPES = {
    BACKLOG: 'Backlog',
    READY: 'Ready',
    IN_PROGRESS: 'InProgress',
    FINISHED: 'Finished',
}

const LIST_COPY = {
    [LIST_TYPES.BACKLOG]: 'Можно делать',
    [LIST_TYPES.READY]: 'Готово',
    [LIST_TYPES.IN_PROGRESS]: 'В процессе',
    [LIST_TYPES.FINISHED]: 'Сделано',
}

const LIST_COLORS = {
    [LIST_TYPES.BACKLOG]: '#b95959',
    [LIST_TYPES.IN_PROGRESS]: '#4b69b1',
    [LIST_TYPES.FINISHED]: '#a0b959',
}

export {LIST_TYPES, LIST_COPY, LIST_COLORS}