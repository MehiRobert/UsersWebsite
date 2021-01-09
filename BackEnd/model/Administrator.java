package com.example.demo.model;

import java.util.ArrayList;

public class Administrator extends Person{


    public Administrator(String name,String mail,String password){
        super(name,mail,password);

    }


    @Override
    public String toString() {
        return "admin";
    }
}
