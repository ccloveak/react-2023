import "./entry.styl";

import { ConfigProvider, theme } from "antd";
import { Outlet, useLocation } from "react-router-dom";

import Header from "@/components/header";
import { PrivateRoute } from "@/router";
import React from "react";
import { useSelector } from "react-redux";

// darkAlgorithm为暗色主题，defaultAlgorithm为亮色（默认）主题
// 注意这里的theme是来自于Ant Design的，而不是store
const { darkAlgorithm, defaultAlgorithm } = theme;

const Entry = () => {
  // 获取store中的主题配置
  const globalTheme = useSelector((state) => state.theme);
  // Ant Design主题变量
  let antdTheme = {
    // 亮色/暗色配置
    algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
  };
  const location = useLocation();

  // 应用自定义主题色
  if (globalTheme.colorPrimary) {
    antdTheme.token = {
      colorPrimary: globalTheme.colorPrimary,
    };
  }
  return (
    <PrivateRoute>
      <ConfigProvider theme={antdTheme}>
        <div className="M-entry">
          <Header title={location.pathname} />
          <div className="main-container">
            <Outlet />
          </div>
        </div>
      </ConfigProvider>
    </PrivateRoute>
  );
};

export default Entry;
