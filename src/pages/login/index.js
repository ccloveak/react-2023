import "./login.styl";

import { Button, Input } from "antd";
import React, { useState } from "react";

import { apiReqs } from "@/api";
import imgLogo from "./logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // 组件中自维护的实时数据
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    apiReqs.signIn({
      data: {
        account,
        password,
      },
      success: (res) => {
        console.log(res);
        navigate("/home");
      },
    });
  };
  return (
    <div className="P-login">
      <img src={imgLogo} alt="" className="logo" />
      <div className="ipt-con">
        <Input
          placeholder="账号"
          value={account}
          onChange={(e) => {
            setAccount(e.target.value);
          }}
        />
      </div>
      <div className="ipt-con">
        <Input.Password
          placeholder="密码"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="ipt-con">
        <Button type="primary" block={true} onClick={login}>
          登录
        </Button>
      </div>
    </div>
  );
};

export default Login;
