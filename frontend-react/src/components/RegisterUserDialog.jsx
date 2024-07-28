import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import RegisterForm from './RegisterForm';


export default function RegisterUserDialog({ isOpen, onClose, user}) {

  const deleteSelectedUser = () => {

    //Se ejecuta la función, en este caso aquella que le envía al servidor la petición para eliminar un usario específico
    executeFunction();
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Editar/Registrar Usuario"}
        </DialogTitle>
        <RegisterForm user={user}/>
      </Dialog>
    </React.Fragment>
  );
}