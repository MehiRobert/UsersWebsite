package com.example.demo.Service;

import com.example.demo.PersonRepo.PersonDao;
import com.example.demo.model.BasicUser;
import com.example.demo.model.Country;
import com.example.demo.model.Person;
import com.example.demo.model.RegionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final PersonDao personDao;

    @Autowired
    public UserService(@Qualifier("initial repo") PersonDao personDao) {
        this.personDao = personDao;
    }


    public void addBasicUser(BasicUser person){
        personDao.insertPerson(person);
    }

    public void addRegionManager(RegionManager person) {
        personDao.insertPerson(person);
    }

    public List<String> getCountriesByUsername(String username){
        for(var user : personDao.getAllPeople())
        {
            if(user instanceof RegionManager && user.getName().equals(username))
            {
                return ((RegionManager) user).getCountryList();
            }
        }
        return null;
    }
    public BasicUser getPersonByName(String username)
    {
        return personDao.getPerson(username);
    }
    public List<Person> getAllPersons(){
        return personDao.getAllPeople();
    }
}
