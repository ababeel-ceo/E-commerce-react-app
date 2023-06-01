package com.sabazaar.auth.repo;

import com.sabazaar.auth.entity.ERole;
import com.sabazaar.auth.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface RoleRepo extends JpaRepository<Role,Long>
{
    Optional<Role> findByName(ERole eRole);
}
