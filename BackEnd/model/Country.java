package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Country {
    private final UUID id;
    private final String name;
    private final String flag;

    public Country(@JsonProperty("id") UUID id, @JsonProperty("name") String name,@JsonProperty("flag") String flag) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.flag = flag;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getFlag() {
        return flag;
    }

    @Override
    public String toString(){
        return name;
    }
}
