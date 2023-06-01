package com.sabazaar.auth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse {
    @JsonProperty("accessToken")
    public String jwt;
    public String tokenType;
    private Long id;
    private String username;
    private String password;
    private List<String> roles;
}
