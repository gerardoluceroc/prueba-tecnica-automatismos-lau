package com.automatismoslau.prueba_tecnica.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.automatismoslau.prueba_tecnica.entities.UserEntity;
import com.automatismoslau.prueba_tecnica.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;


    // Permite obtener todos los usuarios del sistema.
    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers(){
        
        //Se obtienen los usuarios y se envían en formato JSON
        try{
            List<UserEntity> users = userService.getAllUsers();
            return ResponseEntity.ok(users);
        
        } 
        //En caso de haber un error, se informa en la respuesta. Por seguridad no se envía el error como tal.
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al obtener los usuarios");
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody UserEntity user) {

        //Se agrega el usuario y se indica que fue agregado con éxito
        try{
            userService.addUser(user);
            return ResponseEntity.ok().body("Usuario agregado o actualizado con éxito");
        
        } 
        //En caso de haber un error, se informa en la respuesta. Por seguridad no se envía el error como tal.
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al agregar o actualizar el usuario");
        }
        
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteUser(@RequestBody UserEntity user) {

        //Se elimina el usuario y se indica que la operación fue exitosa
        try{
            userService.deleteUser(user);
            return ResponseEntity.ok().body("Usuario eliminado con éxito");
        
        } 
        //En caso de haber un error, se informa en la respuesta. Por seguridad no se envía el error como tal.
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al eliminar el usuario" + e);
        }
        
    }
    
    
    
}
