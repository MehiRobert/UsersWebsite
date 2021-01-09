package com.example.demo.CountryRepo;

import com.example.demo.model.Country;

import java.util.List;


public interface CountryDao {

    int insertCountry(Country country);

    List<Country> getAllCountries();

    Country getCountryByName(String name);
}
