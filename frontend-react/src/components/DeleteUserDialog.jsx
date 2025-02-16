import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteUserDialog({ isOpen, onClose, executeFunction}) {

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