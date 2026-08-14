import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImg from "../assets/img/Dinosaurio.png";
import { ArrowRightCircle, Ticket } from "react-bootstrap-icons";

export const Banner = () =>{
    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["niños", "niñas"];
    const [text, setText] = useState("");
    const tiempo = 2000;
    const [delta, setDelta]=useState(300 - Math.random() * 100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)};
    },[text])

    const tick =()=>{
        let i = loopnum % toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0,text.length-1) : fulltext.substring(0,fulltext.length+1);

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updateText === fulltext){
            setisDeleting(true);
            setDelta(tiempo);
        }else{
            if(isDeleting && updateText === ''){
                setisDeleting(false);
                setloopnum(loopnum+1);
                setDelta(500);
            }
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">¡Bienvenido a Maravillas Infantiles!</span>
                        <h1>{"Unimos diversión e imaginación para crear momentos inolvidables para "}<span className="wrap">{text}</span></h1>
                        <p>En Maravillas Infantiles, somos el lugar donde los sueños se hacen realidad. Más 
                            que una tienda, somos un rincón mágico donde la calidad y la diversión se encuentran. Nuestra 
                            misión es ofrecer juguetes excepcionales que inspiren la creatividad, fomenten el aprendizaje y 
                            construyan recuerdos duraderos para las familias.</p>
                        <button>Mas Informacion<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}