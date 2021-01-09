package com.example.demo.api;

import com.example.demo.Service.CountryService;
import com.example.demo.Service.UserService;
import com.example.demo.model.BasicUser;
import com.example.demo.model.Country;
import com.example.demo.model.Person;
import com.example.demo.model.RegionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnResource;
import org.springframework.web.bind.annotation.*;

import javax.swing.plaf.basic.BasicIconFactory;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RequestMapping("api/")
@RestController
public class Controller {

    private final UserService userService;

    private final CountryService countryService;

    @Autowired
    public Controller(UserService userService, CountryService countryService) {
        this.userService = userService;
        this.countryService = countryService;
    }


    @PostMapping("admin/BasicUser") //post request(adding a resource to my server)
    public void addPerson(@RequestBody BasicUser person){
        userService.addBasicUser(person);
    }
    @PostMapping("admin/RegionManager") //post request(adding a resource to my server)
    public void add(@RequestBody RegionManager person){
        userService.addRegionManager(person);
    }
    @GetMapping("RegionManager/{username}")
    public List<Country> getRegionalCountries(@PathVariable String username){
            var countriesString = userService.getCountriesByUsername(username);
            List<Country> countryList= new ArrayList<>();
            for(var country : countriesString)
            {
                countryList.add(countryService.getCountryByName(country));
            }
            return countryList;

    }
    @GetMapping("BasicUser/{username}")
    public Country getCountryForBasicUser(@PathVariable String username){
           var basicU = this.userService.getPersonByName(username);
           return this.countryService.getCountryByName(basicU.getSpecificCountry());
    }
    @GetMapping("admin") //get request(retrieving)
    @CrossOrigin
    public List<Person> getAllPeople(){
        return userService.getAllPersons();
    }

    @PostMapping("admin/country")
    public void addCountry(@RequestBody  Country country) { countryService.addCountry(country);}

    @GetMapping("admin/country")
    public List<Country> getAllCountries() { return countryService.getAllCountries();}
}
