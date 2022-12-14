import "./home.styl";

import { Button, Modal, theme } from "antd";
import { goto, logout } from "@/api";

import React from "react";

const { useToken } = theme;
const Home = () => {
  const { token } = useToken();

  const [modal, contextHolder] = Modal.useModal();

  // 退出登录
  const exit = () => {
    // 把之前的Modal改为modal
    modal.confirm({
      title: "是否退出登录？",
      onOk() {
        logout();
      },
    });
  };
  return (
    <div className="P-home">
      <h1 style={{ color: token.colorText }}>Home Page</h1>
      <div className="ipt-con">
        <Button
          onClick={() => {
            goto("/login");
          }}
        >
          组件外跳转
        </Button>
      </div>
      <div className="ipt-con">
        <Button type="primary" onClick={exit}>
          返回登录
        </Button>
      </div>
      {
        // 这是最终解决Modal.method跟随换肤的关键，contextHolder在组件DOM中随便找个地方放就行
        contextHolder
      }
    </div>
  );
};

export default Home;
