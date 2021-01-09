package com.example.demo.model;

public abstract class Person {

    private final String name;
    private final String mail;
    private final String password;

    public Person(String name, String mail, String password) {
        this.name = name;
        this.mail = mail;
        this.password = password;
    }


    public String getMail() {
        return mail;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public abstract String toString();
}
