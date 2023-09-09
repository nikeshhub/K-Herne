import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col, Input } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  PlayCircleOutlined,
  DesktopOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout className="layout">
      <Header style={{ padding: -1 }}>
        <Row justify="space-between">
          <Col xs={20} sm={20} md={4}>
            <NavLink to="/">
              <div
                className="logo"
                style={{
                  color: "white",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                  maxWidth: "200px",
                }}
              >
                <img src="./logo.png" width={140} alt="Logo" />
              </div>
            </NavLink>
          </Col>
          <Col xs={0} sm={0} md={16}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={{ flexGrow: 1 }}
              >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<PlayCircleOutlined />}>
                  <NavLink to="/movies">Movies</NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<DesktopOutlined />}>
                  <NavLink to="/tv-series">TV Series</NavLink>
                </Menu.Item>
              </Menu>
              {/* Search input */}
              <Search
                placeholder="Search..."
                style={{ marginLeft: "20px", width: "300px" }}
                enterButton={<SearchOutlined />}
              />
              <Button style={{ color: "white" }} type="link">
                <UserOutlined />
              </Button>
            </div>
          </Col>

          <Col xs={4} sm={4} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<PlayCircleOutlined />}>
              <NavLink to="/movies"> Movies </NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <NavLink to="/tv-series">TV Series </NavLink>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
