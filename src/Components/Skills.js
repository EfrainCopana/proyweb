import { Row, Container, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import meter1 from '../assets/img/skill1.jpg';
import meter2 from '../assets/img/skill2.jpg';
import meter3 from '../assets/img/skill3.jpg';
import meter4 from '../assets/img/skill4.jpg';
import meter5 from '../assets/img/skill5.jpg';
import meter6 from '../assets/img/skill6.jpg';
import meter7 from '../assets/img/skill7.jpg';
import meter8 from '../assets/img/skill8.jpg';
import fondo from '../assets/img/color-sharp.png';


export const Skills = ()=>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider"> 
                                <div className="item">
                                    <img src={meter1} alt="image"/>
                                    <h5>Imagen 1</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="image"/>
                                    <h5>Imagen 2</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image"/>
                                    <h5>Imagen 3</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="image"/>
                                    <h5>Imagen 4</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="skill-bx-second">
                <Container>
                <Row>
                    <Col>
                    <h2>Skills Aumentado</h2>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                                <img src={meter5} alt="image" />
                                <h5>Imagen 1</h5>
                        </div>
                        <div className="item">
                                <img src={meter6} alt="image" />
                                <h5>Imagen 2</h5>
                        </div>
                        <div className="item">
                                <img src={meter7} alt="image" />
                                <h5>Imagen 3</h5> 
                        </div>
                        <div className="item">
                                <img src={meter8} alt="image" />
                                <h5>Imagen 4</h5> 
                        </div>
                    </Carousel>
                    </Col>
                </Row>
                </Container>
            </div>
            <img className="background-image-left" src={fondo}/>
            <div>
                <footer>
                    <p style={{ color: '#fff' }}>&copy; 2023 Maravillas Infantiles. Todos los derechos reservados.</p>
                </footer>
            </div>
        </section>
    )
}