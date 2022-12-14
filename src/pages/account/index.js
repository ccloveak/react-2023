import "./account.styl";

import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="P-account">
      <h1>Account Page</h1>
      <div className="ipt-con">
        <Button
          type="primary"
          onClick={() => {
            navigate("/login");
          }}
        >
          返回登录
        </Button>
      </div>
    </div>
  );
};

export default Account;
