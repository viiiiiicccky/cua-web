import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import cuaInsQR from "../assets/img/cua-ins-qr.jpg";
import vickyVxQR from "../assets/img/vicky-vx-qr.jpg";

const ContactUs = () => {
    return(
        <section className="others" id="home">
        <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
            <h1 style={{ marginBottom: '3rem' }}>Contact Information</h1>
            <h5>Instagram: tiebreakersbasketball</h5>
            <h5 style={{ marginBottom: '6rem' }}>We Chat: fx1067094779 or xxy030118</h5>
            <h4>Join us now!</h4>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img"/>
            </Col>
            </Row>
        </Container>
        </section>
        
    )
}

export default ContactUs;