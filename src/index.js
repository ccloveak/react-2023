// 全局样式
import "@/common/styles/frame.styl";
// TODO: 正式上线前,直接在src/index.js中注释掉import './mock'
import "./mock";

import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { globalRouters } from "@/router";
import { store } from "@/store";
// 引入Ant Design中文语言包
import zhCN from "antd/locale/zh_CN";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={globalRouters} />
    </ConfigProvider>
  </Provider>
);
