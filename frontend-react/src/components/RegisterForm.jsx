import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import { CreateUser } from '../api/spring-api';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 14px;
    justify-content: center;
  }

`
export default function RegisterForm({ user }) {

  // Inicializa los estados para los campos de texto
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleClick = () => {

    event.preventDefault();

    //En caso de que el id se encuentre vació, quiere decir que se trata de un usuario nuevo
    if (user.id == "" || user.id == null || user.id == undefined){

      // Se crea un nuevo usuario con los valores de los TextField y se envía al servidor
      const updatedUser = {
        name: name,
        lastname: lastname,
        email: email,
        phoneNumber: phoneNumber
      };
      CreateUser(updatedUser);

    //Sino, quiere decir que se trata de un usuario que ya existe, por lo que se copia su ID para actualizarlo
    } else {

      // Se crea un nuevo usuario con los valores de los TextField y el id del usuario original y se envía al servidor
      const updatedUser = {
        id: user.id,
        name: name,
        lastname: lastname,
        email: email,
        phoneNumber: phoneNumber,
      };
      CreateUser(updatedUser);
    }

  };

  return (
    <>
      <Container>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Nombres"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="small"
          />
          <TextField
            label="Apellidos"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            size="small"
          />
        </Box>
        <TextField
          label="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
        />
        <TextField
          label="Teléfono"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          size="small"
        />
        <Button type='submit' variant="contained" onClick={handleClick}>Actualizar Usuario</Button>
      </Container>
    </>
  );
}