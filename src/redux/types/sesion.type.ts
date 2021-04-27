export type sesionStateType = {
    create  : string;
    email   : string;
    id      : string;
    lastName: string;
    name    : string;
    token   : string;
    status  : boolean;
};

const sesion={
    ADD_SESION: 'ADD_SESION',
    REMOVE_SESION:'REMOVE_SESION'
}
export default sesion;