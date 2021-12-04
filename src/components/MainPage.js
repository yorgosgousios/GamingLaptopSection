import styles from "./MainPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import u from "../assets/path3107.png";
import l from "../assets/path3109.png";
import { Fragment } from "react";

const MainPage = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={12} className={styles.navbar}>
            <div className={styles.logo}>
              <div className={styles.circle}>
                <img src={u} alt="logo" className={styles.u} />
                <img src={l} alt="logo" className={styles.l} />
              </div>
            </div>
          </Col>
        </Row>
        <Row className={styles.container}>
          <Col md={6} className={styles.par}>
            Δες τις επιδόσεις του Laptop
          </Col>
        </Row>
        <Row className={styles.container}>
          <Col md={6} className={styles.descr}>
            Διάλεξε το παιχνίδι που σε ενδιαφέρει και ανακάλυψε τις επιδόσεις
            του
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default MainPage;
