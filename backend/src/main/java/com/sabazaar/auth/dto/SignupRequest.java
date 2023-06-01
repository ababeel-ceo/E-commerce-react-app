package com.sabazaar.auth.dto;

import com.sabazaar.auth.entity.ERole;
import lombok.Data;

import java.util.Set;
@Data
public class SignupRequest
{
    private String username;
    private String email;
    private String password;
    private Set<String> role;
}
