export const URL_SERVER = "http://localhost:8080"
export const PATH_USERS = "/users"
export const PATH_GET_ALL_USERS = "/all"
export const PATH_DELETE_USER = "/delete"
export const PATH_CREATE_USER = "/add"

//Función para obtener todos los usuarios del sustema
export const getAllUsers = async () => {
    const response = await fetch(`${URL_SERVER}${PATH_USERS}${PATH_GET_ALL_USERS}`);
    const users = await response.json();
    return users;
}


//Función para pedirle al servidor que elimine un usuario
export const deleteUser = async (user) => {

    try {
        const response = await fetch(`${URL_SERVER}${PATH_USERS}${PATH_DELETE_USER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar el usuario: ${response.status}`);
        }

        setTimeout(() => {
            //Se recarga la pagina luego de 1 segundo
            window.location.reload();
          }, 1000);

    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw error;
    }


}



//Función para solicitarle al servidor que agregue o edite la información de un usuario
export const CreateUser = async (user) => {

    try {
        const response = await fetch(`${URL_SERVER}${PATH_USERS}${PATH_CREATE_USER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error(`Error al crear el usuario: ${response.status}`);
        };

        setTimeout(() => {
            //Se recarga la pagina luego de 1 segundo
            window.location.reload();
          }, 1000);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error;
    }


}