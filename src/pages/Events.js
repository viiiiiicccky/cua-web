import { Container, Row, Col } from "react-bootstrap";
import { TypeItalic, TypeUnderline } from "react-bootstrap-icons";
import colorSharp from "../assets/img/color-sharp.png"

const Events = () => {
    return(
        <section className="skill" id="skill">
        <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
            <h2 style={{ marginTop: '10rem', marginBottom: '2rem' }}>2022 September Tryout Info</h2>
            <h5 style={{marginBottom: '2rem' }}>
                Sign-up form: 
                <a style={{marginLeft: '1rem' }} href="https://docs.google.com/forms/d/e/1FAIpQLSc23XyH1dBtoM44-xBvV6YGIqh9GO3pdWKZ15bD4J74ctvW2A/viewform?usp=sf_link">2022 CUA Basketball Tryout Sign up</a>
            </h5>
            
            <h3 style={{ textDecoration: 'underline' }}>1st Tryout </h3>
            <h5>Date: </h5>
            <h5>Time: </h5>
            <h5>Location: </h5>
            <h5 style={{marginBottom: '4rem' }}>Notes: Bring your water</h5>
            <h3 style={{ textDecoration: 'underline' }}>2nd Tryout </h3>
            <h5>Date: </h5>
            <h5>Time: </h5>
            <h5>Location: </h5>
            <h5 style={{marginBottom: '4rem' }}>Notes: Bring your water</h5>
            <h3>More coming soon...</h3>
            </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}

export default Events;