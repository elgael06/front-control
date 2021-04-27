
export type userInitial = {
    id: string,
    create: string,
    email: string,
    name: string,
    lastName: string,
    puesto?: string,
};

const usuarios = {
    LISTA_USUARIOS: 'LISTA_USUARIOS',
    REMOVE_USUARIOS:'REMOVE_USUARIOS',
    SELECTED_USER_ID: 'SELECTED_USER_ID',
    DEFAULT_USER_ID: 'DEFAULT_USER_ID',
    USER_NAME: 'USER_NAME',
    USER_LAST_NAME: 'USER_LAST_NAME',
    USER_EMAIL: 'USER_EMAIL',
    USER_PUESTO:'USER_PUESTO',
}
export default usuarios;