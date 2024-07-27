package com.automatismoslau.prueba_tecnica.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.automatismoslau.prueba_tecnica.entities.UserEntity;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {
} 