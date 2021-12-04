import { Container, Row, Col } from "react-bootstrap";
import styles from "./FpsScore.module.css";
import polygonWhite from "../assets/PolygonWhite.png";

const FpsScore = () => {
  return (
    <Container>
      <div className={styles.border}></div>
      <div className={styles.titleScore}>FPS Score</div>
      <Row className={styles.row}>
        <Col md={2} xs={6} className={styles.col1}>
          <img
            src={polygonWhite}
            alt="polygonwhite"
            className={styles.fpslogo}
          />
          <h3 className={styles.numberFirst}>60+</h3>
          <h4 className={styles.fpsRed}>FPS</h4>
        </Col>
        <Col md={2} xs={6} className={styles.col2}>
          <img
            src={polygonWhite}
            alt="polygonwhite"
            className={styles.fpslogo}
          />
          <h3 className={styles.numberSecond}>100+</h3>
          <h4 className={styles.fpsRed}>FPS</h4>
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col md={2} xs={6} className={styles.col}>
          ZERO HACKING
        </Col>
        <Col md={2} xs={6} className={styles.col}>
          RECOMMENDED
        </Col>
      </Row>
      <div className={styles.borderSecond}></div>
    </Container>
  );
};

export default FpsScore;
