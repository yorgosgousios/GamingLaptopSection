import { Container, Row, Col } from "react-bootstrap";
import polygon from "../assets/Polygon 2.png";
import styles from "./GameFps.module.css";
import "../index.css";

const GameFps = () => {
  return (
    <Container className={styles.container}>
      <Row className={styles.row}>
        <Col md={2} xs={6} className={styles.col1}>
          <img src={polygon} alt="polygon" />
          <h3 className={styles.number}>210+</h3>
          <p className={styles.fps}>FPS</p>
        </Col>
        <Col md={2} xs={6} className={styles.col2}>
          <img src={polygon} alt="polygon" />
          <h3 className={styles.numberTwo}>210+</h3>
          <p className={styles.fpsTwo}>FPS</p>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col md={2} className={styles.column1}>
          <p className={styles.mode}>NORMAL 1080p</p>
        </Col>
        <Col md={2} className={styles.column2}>
          <p className={styles.mode}>ULTRA 1440p</p>
        </Col>
      </Row>
    </Container>
  );
};

export default GameFps;
