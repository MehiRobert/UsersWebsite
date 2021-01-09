package com.example.demo.Service;

import com.example.demo.CountryRepo.CountryDao;
import com.example.demo.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private final CountryDao country;

    @Autowired
    public CountryService(@Qualifier("country repo") CountryDao countryDao){
        this.country = countryDao;
    }

    public void addCountry(Country country){
        this.country.insertCountry(country);
    }

    public List<Country> getAllCountries(){
        return this.country.getAllCountries();
    }

    public Country getCountryByName(String name){
        return country.getCountryByName(name);
    }


}
