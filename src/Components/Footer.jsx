import React from "react";
import { Layout, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer className="footer">
      <div className="container">
        <Row gutter={24}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <h4>About Kherne</h4>
            <p>
              Kherne is your ultimate destination for cinematic exploration.
              With a vast database of movies at your fingertips, Kherne empowers
              you to discover, search, and dive into the world of cinema like
              never before. Whether you're looking for your next favorite film
              or exploring top-rated classics, Kherne is your trusted guide to
              the world of movies. Join us on a journey of cinematic discovery
              and let Kherne be your go-to source for all things film.
            </p>
            <br />
            <h4>About creator</h4>
            <p>This platform is developed and designed by Nikesh Sapkota</p>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <h4>Quick Links</h4>
            <ul className="footer-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <h4>Connect with the developer</h4>
            <div className="social-icons">
              <a href="#">
                <GithubOutlined />
              </a>
              <a href="#">
                <LinkedinOutlined />
              </a>
              <a href="#">
                <InstagramOutlined />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
}

export default AppFooter;
