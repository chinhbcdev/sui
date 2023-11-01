
'use client'
import React from "react";
import { Button, ConfigProvider, Input } from "antd";

import theme from "../../theme/themeConfig";
import CustomButton from "./components/CustomButton";
import { ConnectButton } from "@suiet/wallet-kit";


const HomePage = () => (
  <ConfigProvider theme={theme}>
    
    <div className="App">
    <ConnectButton/>
    </div>
    
  </ConfigProvider>
);

export default HomePage;
