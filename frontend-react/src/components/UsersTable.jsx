import { useEffect, useState } from "react"
import { deleteUser, getAllUsers } from "../api/spring-api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteUserDialog from "./DeleteUserDialog";


export const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isOpenDeleteUserDialog, setIsOpenDeleteUserDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        setUsers(users);
        console.log("Los usuarios son: ", users);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Función para alternar el estado de isOpenDeleteUserDialog
  const toggleDeleteUserDialog = (user) => {
    setIsOpenDeleteUserDialog(prevIsOpen => !prevIsOpen);

    //Se cambia el estado del usuario seleccionado en la tabla para editar o eliminar
    setSelectedUser(user);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Identificador</TableCell>
              <TableCell align="right">Nombres</TableCell>
              <TableCell align="right">Apellidos</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Teléfono</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.lastname}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.phoneNumber}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => {toggleDeleteUserDialog(user)}}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="edit" color="primary">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Mostrar el DeleteUserDialog si isOpenDeleteUserDialog es true */}
      <DeleteUserDialog isOpen={isOpenDeleteUserDialog} onClose={toggleDeleteUserDialog} executeFunction={() => {deleteUser(selectedUser)}} />
    </>
  );
};