package com.example.demo;

import com.example.demo.model.Person;
import com.example.demo.model.RegionManager;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import java.util.ArrayList;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class SpringStartApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringStartApplication.class,args);
    }

}
