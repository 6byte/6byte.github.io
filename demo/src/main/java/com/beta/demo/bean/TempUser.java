package com.beta.demo.bean;

import lombok.Data;

@Data
public class TempUser {
    Integer id;
    String username;
    String passwd;
    String ip;
    Integer money;
    String mkey;
    String header;
}
