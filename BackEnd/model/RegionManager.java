package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class RegionManager extends Person{


    List<String> countryList;

    public RegionManager(@JsonProperty("name") String name,
                         @JsonProperty("mail") String mail,
                         @JsonProperty("password") String password,
                         @JsonProperty("Countries") List<String> countries){
        super(name,mail,password);
        this.countryList = countries;
    }
    public List<String> getCountryList()
    {
        return this.countryList;
    }
    @Override
    public String toString() {
        return "RegionManager";
    }
}
