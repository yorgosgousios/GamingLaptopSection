import { Col, Container, Dropdown, Row } from "react-bootstrap";
import styles from "./DropdownMenu.module.css";
import "../index.css";
import { useState } from "react";

const DropdownMenu = (props) => {
  const [currentGame, setCurrentGame] = useState("");

  const gameHandler = () => {};
  return (
    <Container>
      <Row className={styles.row}>
        <Col md={6}>
          <Dropdown className={styles.dropdown}>
            <Dropdown.Toggle id="dropdown-basic">Select a Game</Dropdown.Toggle>

            <Dropdown.Menu>
              {/* <Dropdown.Item href="#/action-1">
                {Object.keys(props.games)[0]}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                {Object.keys(props.games)[1]}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                {Object.keys(props.games)[2]}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                {Object.keys(props.games)[3]}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5">
                {Object.keys(props.games)[4]}
              </Dropdown.Item> */}

              {Object.keys(props.games).map((game) => (
                <Dropdown.Item href="#/action" key={game.length}>
                  {game}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default DropdownMenu;
