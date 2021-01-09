package com.example.demo.PersonRepo;

import com.example.demo.model.BasicUser;
import com.example.demo.model.Person;

import java.util.List;

public interface PersonDao {

    int insertPerson(Person person);

    List<Person> getAllPeople();

    public BasicUser getPerson(String username);

}
