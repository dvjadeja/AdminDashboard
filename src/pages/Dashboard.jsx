import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaHome } from "react-icons/fa";
import ApexCharts from "react-apexcharts";
import { Currentlysale } from "../components/chartsData/apex-charts-data";

import Task from "../components/Task/Task";

const Dashboard = () => {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <Sidebar
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
        style={{ left: 0 }}
      />
      <div
        className={`content-container ${inactive ? "inactive" : ""}`}
        style={{ padding: 0 }}
      >
        <div className="d-flex justify-content-center align-items-center top-nav company_title">
          <p>Sadguru Solutions</p>
        </div>
        <Container fluid style={{ margin: "20px 0" }} className="main-content">
          <Row className="mb-2 title_row">
            <Col xs={10} lg={11} className="ps-0 fs-4 pt-1 title_col">
              <FaHome />
              <p
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  marginTop: "2px",
                }}
              >
                Dashboard
              </p>
            </Col>
          </Row>
          <Task />
          <Row>
            <Col xl="12">
              <Card.Body className="p-0 pb-2">
                <div className="current-sale-container">
                  <ApexCharts
                    id="chart-currently"
                    options={Currentlysale.options}
                    series={Currentlysale.series}
                    type="area"
                    height={300}
                    width={"99%"}
                  />
                </div>
              </Card.Body>
            </Col>
          </Row>
          <div
            style={{
              width: "99%",
              height: "2px",
              borderRadius: "1px",
              backgroundColor: "rgb(135 134 134)",
            }}
          ></div>
          <footer className="footer">
            <Container fluid={true}>
              <Row>
                <Col md="12" className="footer-copyright text-center">
                  <p className="mb-0">
                    Copyright 2021 © <b>Sadguru Solutions.</b>
                  </p>
                </Col>
              </Row>
            </Container>
          </footer>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
