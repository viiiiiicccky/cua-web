import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Basketball ", "CUA " ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">CUA Basketball Team</span>
            <h1>{`Welcome to `} <span className="txt-rotate" dataPeriod="1000"><span className="wrap">{text}</span></span></h1>
            <p>CUA is a basketball team of well-trained players with a great passion for basketbal. 劈里啪啦不知道写什么谢谢 placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder</p>
            <button onClick={() => console.log('connect')}> Get Started <ArrowRightCircle size={25} /></button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}