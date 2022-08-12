
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import intramural2021 from "../assets/img/2021-intramural.jpg"
import intramural2019 from "../assets/img/2019-intramural.jpg"
import team201819 from "../assets/img/2018-2019-team.jpg"
import intramural2017 from "../assets/img/2017-intramural.jpg"
import intramural201x from "../assets/img/201x-intramural.jpg"

const Gallery = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
      
    return(
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{ marginTop: '5rem' }}>Gallery</h2>
                        <p>Team History placeholder placeholder placeholder placeholder<br></br>Titan/Breakers</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={intramural2021} alt="Image" />
                                <h5>2021 Fall Intramural Open Div Champ</h5>
                            </div>
                            <div className="item">
                                <img src={intramural2019} alt="Image" />
                                <h5>2019 Fall Intramural Open Div Champ</h5>
                            </div>
                            <div className="item">
                                <img src={team201819} alt="Image" />
                                <h5>CUA Basketball Team 2018-2019 Titan+Breakers</h5>
                            </div>
                            <div className="item">
                                <img src={intramural2017} alt="Image" />
                                <h5>Back o back theme, The one true CHAMP #Moremore</h5>
                            </div>
                            <div className="item">
                                <img src={intramural201x} alt="Image" />
                                <h5> sry man idk which year this was </h5>
                            </div>
                        </Carousel>
                        <h4 style={{ marginTop: '-6rem' }}>未来荣耀，由你延续</h4>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    )
}

export default Gallery;