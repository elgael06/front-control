export type messageInitial = {
    title: string,
    text: string,
    status: boolean,
    type:'danger'| 'info'
}

export type efectaInitial = {
    loadding: boolean,
    message: messageInitial,
    toask: messageInitial,
    statusModal:boolean,
    
}

const effects = {
    ON_LOADDING: 'ON_LOADDING',
    OFF_LOADDING: 'OFF_LOADDING',
    ON_MESSAGE: 'ON_MESSAGE',
    OFF_MESSAGE: 'OFF_MESSAGE',
    ON_TOASK: 'ON_TOASK',
    OFF_TOASK: 'OFF_TOASK',
    ON_MODAL: 'ON_MODAL',
    OFF_MODAL:'OFF_MODAL'
}
export default effects;