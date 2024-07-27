export const URL_SERVER = "http://localhost:8080"
export const PATH_USERS = "/users"
export const PATH_GET_ALL_USERS = "/all"
export const PATH_DELETE_USER = "/delete"

//Función para obtener todos los usuarios del sustema
export const getAllUsers = async () => {
    const response = await fetch(`${URL_SERVER}${PATH_USERS}${PATH_GET_ALL_USERS}`);
    const users = await response.json();
    return users;
}

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

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw error;
    }


}