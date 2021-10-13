import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FcSalesPerformance } from "react-icons/fc";
import { BsCalendarDate } from "react-icons/bs";

const CreateSales = () => {
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
              <FcSalesPerformance />
              <p
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  marginTop: "2px",
                }}
              >
                Sales Invoice
              </p>
            </Col>
          </Row>
          <Form>
            <Row className="mb-1">
              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    <b>Invoice Type:</b>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Tax Invoice"
                    disabled={true}
                  >
                    <option>Tax Invoice</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Invoice</b>
                  </Form.Label>
                  <Form.Control value="1/TX/DCH/21-22" disabled={true} />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    <b>Customer Name:</b>
                  </Form.Label>
                  <Form.Control as="select" defaultValue="--Select Customer--">
                    <option>---Select Customer---</option>
                    <option>Sadguru Demo</option>
                    <option>ABC CARGO EXPORTS</option>
                    <option>CONNECT IT HUB</option>
                    <option>AKGITKDA RONS</option>
                    <option>PATEL RIES</option>
                    <option>CHETAN PATEL</option>
                    <option>DEMO PATEL</option>
                    <option>MUNDRA CFS TRADING</option>
                    <option>TRADE OF MARKETING</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    <b>Ship To:</b>
                  </Form.Label>
                  <Form.Control as="select" defaultValue="--Select Ship to--">
                    <option>---Select Ship to---</option>
                    <option>Sadguru Demo</option>
                    <option>ABC CARGO EXPORTS</option>
                    <option>CONNECT IT HUB</option>
                    <option>AKGITKDA RONS</option>
                    <option>PATEL RIES</option>
                    <option>CHETAN PATEL</option>
                    <option>DEMO PATEL</option>
                    <option>MUNDRA CFS TRADING</option>
                    <option>TRADE OF MARKETING</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Invoice Date:</b>
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <BsCalendarDate />
                    </InputGroup.Text>
                    <FormControl
                      type="datetime-local"
                      timeFormat="YYYY-MM-DD HH:mm"
                      aria-label="First name"
                      placeholder="Select Invoice Date"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>SB / BE No. & Date :</b>
                  </Form.Label>
                  <Form.Control placeholder="Enter SB / BE No. & Date :" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Ex. Invoice No :</b>
                  </Form.Label>
                  <Form.Control placeholder="Ex. Invoice No " />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>BL No :</b>
                  </Form.Label>
                  <Form.Control placeholder="BL No" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Gross Weight :</b>
                  </Form.Label>
                  <Form.Control placeholder="Gross Weight" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Net Weight :</b>
                  </Form.Label>
                  <Form.Control placeholder="Net Weight" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Shipping Line</b>
                  </Form.Label>
                  <Form.Control placeholder="Enter Shipping Line" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Port of Loading :</b>
                  </Form.Label>
                  <Form.Control placeholder="Enter Port of Loading " />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Port of Discharge :</b>
                  </Form.Label>
                  <Form.Control placeholder="Port of Discharge" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Final Destination :</b>
                  </Form.Label>
                  <Form.Control placeholder="Final Destination" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Commodity :</b>
                  </Form.Label>
                  <Form.Control placeholder="Enter Commodity" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Ex Rate :</b>
                  </Form.Label>
                  <Form.Control placeholder="Ex Rate" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Vessel / VOY :</b>
                  </Form.Label>
                  <Form.Control placeholder="Enter Vessel / VOY " />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Number of Containers :</b>
                  </Form.Label>
                  <Form.Control placeholder="Enter Number of Containers" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>
                    <b>Invoice Type</b>
                  </Form.Label>
                  <Form.Control as="select" defaultValue="--Select GST--">
                    <option>Select GST</option>
                    <option>GST</option>
                    <option>IGST</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <b>Containers Details :</b>
                  </Form.Label>
                  <Form.Control placeholder="Enter Containers Details" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default CreateSales;
