import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { useHistory } from "react-router";

const cardData = [
  {
    title: "Tax Invoice",
    bg: "#f39c12",
    to: "/sales/export/create",
  },
  { title: "Bill of Supply", bg: "#00c0ef", to: "/sales/export/create" },
  { title: "Reimbursment Note", bg: "#3c8dbc", to: "/" },
  { title: "Transportation", bg: "#605ca8", to: "/sales/export/create" },
  { title: "Credit Note", bg: "#3c8dbc", to: "/sales/export/create" },
];

const DemoSalesInvoiceType = () => {
  const [inactive, setInactive] = useState(false);
  const history = useHistory();
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
            <Col xs={10} lg={12} className="ps-0 fs-4 pt-1 title_col">
              <p
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  marginTop: "2px",
                }}
              >
                Sales
              </p>
            </Col>
          </Row>
          <div
            className="mb-4"
            style={{
              width: "99%",
              height: "2px",
              borderRadius: "1px",
              backgroundColor: "rgb(135 134 134)",
            }}
          ></div>
          <Row xs={1} md={2} lg={4} className="g-3">
            {cardData.map((data, idx) => (
              <Col key={idx}>
                <Card
                  text="white"
                  className="d-flex flex-column justify-content-center align-items-center p-1 sales-card-hover"
                  style={{ background: `${data.bg}` }}
                >
                  <FaRupeeSign className="fs-2 mt-4" />
                  <Card.Body>
                    <Card.Title style={{ fontSize: 15 }}>
                      {data.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DemoSalesInvoiceType;
