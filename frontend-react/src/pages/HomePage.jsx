import React from 'react'
import { UsersTable } from '../components/UsersTable'
import { Button } from '@mui/material'

export default function HomePage() {
    return (
        <>
            <h1 style={{display: "flex", justifyContent: "center"}}>Listado de usuarios</h1>
    
            <UsersTable/>
        </>

    )
  }