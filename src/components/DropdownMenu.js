import { Col, Container, Dropdown, Row } from "react-bootstrap";
import styles from "./DropdownMenu.module.css";
import "../index.css";

const DropdownMenu = () => {
  return (
    <Container>
      <Row className={styles.row}>
        <Col md={6}>
          <Dropdown className={styles.dropdown}>
            <Dropdown.Toggle id="dropdown-basic">
              Playerunknown's Battlegrounds
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default DropdownMenu;
