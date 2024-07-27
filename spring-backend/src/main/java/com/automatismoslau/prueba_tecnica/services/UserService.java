package com.automatismoslau.prueba_tecnica.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.automatismoslau.prueba_tecnica.entities.UserEntity;
import com.automatismoslau.prueba_tecnica.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    //Agregar o editar usuario
    public void addUser(UserEntity user){
        userRepository.save(user);
    }

    //Eliminar a usuario de acuerdo a su ID
    public void deleteUser(UserEntity user){
        userRepository.delete(user);
    }

    //Obtener usuario de acuerdo a su ID
    public Optional<UserEntity> getUserById(Long user_id){
        return userRepository.findById(user_id);
    }

    //Obtener todos los usuarios
    public List<UserEntity>  getAllUsers(){
        return (List<UserEntity>) userRepository.findAll();
    }
    
}