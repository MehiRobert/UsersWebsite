package com.example.demo.PersonRepo;

import com.example.demo.model.Administrator;
import com.example.demo.model.BasicUser;
import com.example.demo.model.Person;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository("initial repo")
public class PersonDataAccess implements PersonDao{

    private static List<Person> personList;
    public PersonDataAccess(){
        personList = new ArrayList<>();
        personList.add(new Administrator("MehiRobert","mehirobert@gmail.com","john"));
    }
    @Override
    public int insertPerson(Person person) {
        personList.add(person);
        return 1;
    }

    @Override
    public List<Person> getAllPeople() {
        return personList;
    }

    @Override
    public BasicUser getPerson(String username) {
        for (var person : personList)
        {
            if(person.getName().equals(username))
            {
                return (BasicUser) person;
            }
        }
        return null;
    }

}
