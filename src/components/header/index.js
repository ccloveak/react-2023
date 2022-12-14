/* eslint-disable react/prop-types */
import "./header.styl";

import { Button, Card } from "antd";
import {
  MoonOutlined,
  SunOutlined,
  ThemeOutlined,
} from "@/components/extraIcons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ThemeModal from "@/components/themeModal";
import { globalConfig } from "@/globalConfig";
// 从主题换肤store分库引入setDark方法
import { setDark } from "@/store/slices/theme";

const Header = (props) => {
  const { title, info } = props;
  info && info();

  // 获取redux派发钩子
  const dispatch = useDispatch();
  // 获取store中的主题配置
  const theme = useSelector((state) => state.theme);

  // 是否显示主题色选择对话框
  const [showThemeModal, setShowThemeModal] = useState(false);

  return (
    <Card className="M-header">
      <div className="header-wrapper">
        <div className="logo-con">Header:{title}</div>
        <div className="opt-con">
          {theme.dark ? (
            <Button
              icon={<SunOutlined />}
              shape="circle"
              onClick={() => {
                dispatch(setDark(false));
              }}
            ></Button>
          ) : (
            <Button
              icon={<MoonOutlined />}
              shape="circle"
              onClick={() => {
                dispatch(setDark(true));
              }}
            ></Button>
          )}
          {
            // 当globalConfig配置了主题色，并且数量大于0时，才显示主题色换肤按钮
            globalConfig.customColorPrimarys &&
              globalConfig.customColorPrimarys.length > 0 && (
                <Button
                  icon={<ThemeOutlined />}
                  shape="circle"
                  onClick={() => {
                    setShowThemeModal(true);
                  }}
                ></Button>
              )
          }
        </div>
      </div>
      {
        // 显示主题色换肤对话框
        showThemeModal && (
          <ThemeModal
            onClose={() => {
              setShowThemeModal(false);
            }}
          />
        )
      }
    </Card>
  );
};

export default Header;
