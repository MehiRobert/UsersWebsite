package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BasicUser extends Person{

        private final String specificCountry;

        public BasicUser(@JsonProperty("name") String name,
                           @JsonProperty("mail") String mail,
                           @JsonProperty("password") String password,
                           @JsonProperty("country") String specificCountry) {
            super(name,mail,password);
            this.specificCountry = specificCountry;
        }

        public String getSpecificCountry() {
            return specificCountry;
        }

        @Override
        public String toString() {
            return "BasicUser";
        }
    }


