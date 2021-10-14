import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Badge,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { FaThList, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useHistory } from "react-router";
import { tableData } from "../utils";

const Sales = () => {
  const history = useHistory();
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
            <Col xs={10} lg={18} className="ps-0 fs-4 pt-1 title_col">
              <FaThList />
              <p
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  marginTop: "2px",
                }}
              >
                Manage Exports Sales
              </p>
            </Col>
            <Col>
              <Button
                variant="success"
                onClick={() => history.push("/sales/export/main")}
              >
                Create
              </Button>{" "}
            </Col>
          </Row>

          <Table bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Bill No</th>
                <th>Customer</th>
                <th>Net Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td className="text-center">{data.id}</td>
                  <td>{data.date}</td>
                  <td>{data.billNo}</td>
                  <td>{data.customer}</td>
                  <td>{data.amount}</td>
                  <td>
                    {data.status === "Paid" ? (
                      <h6 className="text-center">
                        <Badge style={{ backgroundColor: "#198754" }}>
                          {data.status}
                        </Badge>
                      </h6>
                    ) : (
                      <h6 className="text-center">
                        <Badge style={{ backgroundColor: "#dc3545" }}>
                          {data.status}
                        </Badge>
                      </h6>
                    )}
                  </td>
                  <td className="d-flex justify-content-around">
                    <div className="d-flex justify-content-center align-items-center">
                      <FaEdit style={{ cursor: "pointer" }} />
                    </div>
                    <Dropdown as={ButtonGroup}>
                      <Button variant="success" size="sm">
                        Print
                      </Button>

                      <Dropdown.Toggle
                        split
                        variant="success"
                        id="dropdown-split-basic"
                        size="sm"
                      />

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Original
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Duplicate
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Triplicate
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">
                          Send Email
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="d-flex justify-content-center align-items-center">
                      <FaTrashAlt style={{ cursor: "pointer" }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* <tr>
                <td className="text-center">2</td>
                <td>2021/03/31</td>
                <td>7/CN/KBR/20-21</td>
                <td>PATEL RIES</td>
                <td>53224.00</td>
                <td>
                  <h6 className="text-center">
                    <Badge bg="success" style={{ backgroundColor: "#198754" }}>
                      Paid
                    </Badge>
                  </h6>
                </td>
                <td className="d-flex justify-content-around">
                  <div className="d-flex justify-content-center align-items-center">
                    <FaEdit style={{ cursor: "pointer" }} />
                  </div>
                  <Dropdown as={ButtonGroup}>
                    <Button variant="success" size="sm">
                      Print
                    </Button>

                    <Dropdown.Toggle
                      split
                      variant="success"
                      id="dropdown-split-basic"
                      size="sm"
                    />

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Original</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Duplicate</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Triplicate
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Send Email
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="d-flex justify-content-center align-items-center">
                    <FaTrashAlt style={{ cursor: "pointer" }} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>2021/03/31</td>
                <td>1223/TX/KBR/20-21</td>
                <td>CHETAN PATEL</td>
                <td>18266.00</td>
                <td>
                  <h6 className="text-center">
                    <Badge bg="success" style={{ backgroundColor: "#198754" }}>
                      Paid
                    </Badge>
                  </h6>
                </td>
                <td className="d-flex justify-content-around">
                  <div className="d-flex justify-content-center align-items-center">
                    <FaEdit style={{ cursor: "pointer" }} />
                  </div>
                  <Dropdown as={ButtonGroup}>
                    <Button variant="success" size="sm">
                      Print
                    </Button>

                    <Dropdown.Toggle
                      split
                      variant="success"
                      id="dropdown-split-basic"
                      size="sm"
                    />

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Original</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Duplicate</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Triplicate
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Send Email
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="d-flex justify-content-center align-items-center">
                    <FaTrashAlt style={{ cursor: "pointer" }} />
                  </div>
                </td>
              </tr>
            </tbody>
          </Table> */}
        </Container>
      </div>
    </>
  );
};

export default Sales;
