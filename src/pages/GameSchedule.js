import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"

const GameSchedule = () => {
    return(
        <section className="skill" id="skill">
        <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
            <h2 style={{ marginTop: '10rem', marginBottom: '4rem' }}>2022 Fall Intramural Open Division</h2>
            <h5 style={{ marginBottom: '4rem' }}>CUA Titan</h5>
            <h5 style={{ marginBottom: '4rem' }}>CUA Breakers</h5>
            <h2 style={{marginBottom: '4rem' }}>TCBL Markham</h2>
            <h3>Coming soon...</h3>
            </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}

export default GameSchedule;