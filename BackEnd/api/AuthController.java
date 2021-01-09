package com.example.demo.api;

import com.example.demo.Service.UserService;
import com.example.demo.model.BasicUser;
import org.apache.logging.log4j.message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RequestMapping("/api/v1/")
@RestController("second controller")
public class AuthController {

    private UserService userService;

    @Autowired
    public AuthController(UserService userService1) {
        this.userService = userService1;
    }

    @CrossOrigin
    @PostMapping("login")
    public Map<String, String> checkUsernameAndPassword(@RequestBody Map<String, String> cv) {
        var username = cv.get("username");
        var password = cv.get("password");
        Map<String,String> map = new HashMap<>();
        String message = "";
        String connected = "false";
        for (var pers : this.userService.getAllPersons()) {
            if (pers.getName().equals(username)) {
                if (!pers.getPassword().equals(password)) {
                    message = "Incorrect password";

                } else {
                    connected = "true";
                    var type = pers.toString();
                    map.put("type",type);

                }
            } else message = "Person doesn't exist";
        }
        map.put("connecte",connected);
        return map;
    }

}




