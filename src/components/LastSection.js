import { Col, Container, Row } from "react-bootstrap";
import pcmark from "../assets/PCMark10-logo.png";
import threedmark from "../assets/3DMark-logo.png";
import styles from "./LastSection.module.css";

const LastSection = () => {
  return (
    <Container>
      <Row className={styles.row}>
        <Col md={5} className={styles.col1}>
          <img src={pcmark} alt="pcmark" />
          <p className={styles.descr}>Το προϊόν αυτό είναι κατάλληλο για:</p>
          <div className={styles.graphs}>
            <p className={styles.wor1}>Basic</p>
            <p className={styles.wor2}>Home</p>
            <p className={styles.wor3}>Produce</p>
            <p className={styles.wor4}>Create</p>
          </div>
        </Col>
        <Col md={5} className={styles.col2}>
          <img src={threedmark} alt="3dmark" />
          <p className={styles.descr}>Το προϊόν αυτό είναι κατάλληλο για:</p>
          <div className={styles.graphs}>
            <p className={styles.wor1}>Casual</p>
            <p className={styles.wor2}>Specialist</p>
            <p className={styles.wor3}>Hardcore</p>
            <p className={styles.wor4}>Elite</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LastSection;
