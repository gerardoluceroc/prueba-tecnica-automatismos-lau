import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser } from '../api/spring-api';

export default function DeleteUserDialog({ isOpen, onClose, executeFunction}) {
  const deleteSelectedUser = (user) => {
    executeFunction();
    // deleteUser(user);
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
          {"Eliminar usuario"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Está seguro que desea eliminar a este usuario?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteSelectedUser(null)}>Aceptar</Button>
          <Button onClick={onClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}