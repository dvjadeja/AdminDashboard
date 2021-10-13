import React from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaCartPlus, FaCartArrowDown } from "react-icons/fa";
import { MdOutlineArrowCircleDown, MdArrowCircleUp } from "react-icons/md";
import { useHistory } from "react-router";
import "./Task.css";

const Task = () => {
  const history = useHistory();
  return (
    <>
      <Row>
        <OverlayTrigger
          delay={{ hide: 200, show: 300 }}
          overlay={(props) => (
            <Tooltip {...props}>Create Sales Invoice</Tooltip>
          )}
          placement="bottom"
        >
          <Col
            className="col1"
            style={{
              padding: "20px",
              background: "#00c0ef",
              margin: 10,
              borderRadius: 10,
              position: "relative",
              height: "min-content",
            }}
            onClick={() => history.push("/sales/export")}
          >
            <Row style={{ color: "white" }}>
              <Col xs={6}>
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                  }}
                >
                  100
                </span>

                <p className="mt-4">Sales Invoice</p>
              </Col>
              <Col style={{ margin: "auto auto auto auto" }}>
                <FaCartPlus style={{ fontSize: "100px" }} />
              </Col>
            </Row>
          </Col>
        </OverlayTrigger>

        <OverlayTrigger
          delay={{ hide: 200, show: 300 }}
          overlay={(props) => (
            <Tooltip {...props}>Create Purchase Invoice</Tooltip>
          )}
          placement="bottom"
        >
          <Col
            className="col1"
            style={{
              padding: "20px",
              background: "#00a65a",
              margin: 10,
              borderRadius: 10,
              position: "relative",
              height: "min-content",
            }}
          >
            <Row style={{ color: "white" }}>
              <Col xs={6}>
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                  }}
                >
                  0
                </span>

                <p className="mt-4" style={{ fontSize: 15 }}>
                  Purchase Invoice
                </p>
              </Col>
              <Col style={{ margin: "auto auto auto auto" }}>
                <FaCartArrowDown style={{ fontSize: "100px" }} />
              </Col>
            </Row>
          </Col>
        </OverlayTrigger>

        <OverlayTrigger
          delay={{ hide: 200, show: 300 }}
          overlay={(props) => <Tooltip {...props}>Create Reciept</Tooltip>}
          placement="bottom"
        >
          <Col
            className="col1"
            style={{
              padding: "20px",
              background: "#f39c12",
              margin: 10,
              borderRadius: 10,
              position: "relative",
              height: "min-content",
            }}
          >
            <Row style={{ color: "white" }}>
              <Col xs={6}>
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                  }}
                >
                  0
                </span>

                <p className="mt-4">Total Recipents</p>
              </Col>
              <Col style={{ margin: "auto auto auto auto" }}>
                <MdOutlineArrowCircleDown style={{ fontSize: "100px" }} />
              </Col>
            </Row>
          </Col>
        </OverlayTrigger>

        <OverlayTrigger
          delay={{ hide: 200, show: 300 }}
          overlay={(props) => <Tooltip {...props}>Create Voucher</Tooltip>}
          placement="bottom"
        >
          <Col
            className="col1"
            style={{
              padding: "20px",
              background: "#dd4b39",
              margin: 10,
              marginRight: 5,
              borderRadius: 10,
              position: "relative",
              height: "min-content",
            }}
          >
            <Row style={{ color: "white" }}>
              <Col xs={6}>
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                  }}
                >
                  0
                </span>

                <p className="mt-4">Total Voucher</p>
              </Col>
              <Col style={{ margin: "auto auto auto autp" }}>
                <MdArrowCircleUp style={{ fontSize: "100px" }} />
              </Col>
            </Row>
          </Col>
        </OverlayTrigger>
      </Row>
    </>
  );
};

export default Task;
