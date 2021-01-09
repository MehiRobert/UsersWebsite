package com.example.demo.CountryRepo;

import com.example.demo.model.Country;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Repository("country repo")
public class CountryDataAccess implements CountryDao{

    List<Country> countryList = new ArrayList<>();
    public CountryDataAccess(){
        countryList.add(new Country(UUID.randomUUID(),"Romania","ro"));
        countryList.add(new Country(UUID.randomUUID(),"Franta","fr"));
    }

    @Override
    public int insertCountry(Country country) {
        var id = UUID.randomUUID();
        countryList.add(new Country(id,country.getName(),country.getFlag()));
        return 1;
    }

    @Override
    public List<Country> getAllCountries() {
        return countryList;
    }

    @Override
    public Country getCountryByName(String name) {
        for(Country country : countryList)
        {
            if(country.getName().equals(name))
                return country;
        }
        return null;
    }
}
