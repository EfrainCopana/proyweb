import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useRef , useState} from "react";
import img1 from '../assets/img/imagen1.jpg';
import img2 from '../assets/img/imagen2.jpg';
import img3 from '../assets/img/imagen3.jpg';
import img4 from '../assets/img/imagen4.jpg';
import img5 from '../assets/img/imagen5.jpg';

export const QuienesSomos = () => {

  return (
    <div className="quienes-somos">
      <h2>Quiénes Somos</h2>
      <section >
        <Container>
          <Row>
            <Col>
              <div className="column-content column1">
                <h3>Historia de los juguestes</h3>
                <p>Las evidencias arqueológicas sitúan los primeros juguetes en Mesopotamia, donde hace más de cinco mil años los niños babilonios ya utilizaban para sus juegos las tabas, que no eran más que huesos de animales, y se divertían con canicas, pelotas, yoyós y peonzas.</p>
                <p>En el antiguo Egipto también hay constancia de la existencia de pequeñas miniaturas de casas, armas y muñecas, destinadas tal vez a familiarizar a los más pequeños con sus tareas futuras, y de juegos de tablero.
                Hay testimonios de la época clásica de Grecia que nos indican que las muñecas eran habituales, fabricadas en barro, marfil, hueso o madera, y que contaban con todos sus complementos: diminutas cunas, barreños, cubitos…</p>
                <p>También está documentada la existencia de juguetes en la Roma imperial y en la China de hace más de dos mil años.
                La arqueología nos enseña que muchos de los juegos y los juguetes que hoy conocemos de las civilizaciones antiguas mantienen su vigencia en la actualidad y que los que se utilizaban hace cinco mil años son prácticamente los mismos que los utilizados hasta el siglo XX: muñecas, casitas, pelotas, aros, canicas, yoyós, trompos, armas, vehículos, …</p>
                <p>En la Edad Media se introdujeron nuevos materiales para su fabricación, como el vidrio, y en el Renacimiento se perfeccionaron y se convirtieron, en algunos casos, en artículos de lujo. Es la época, también, de la aparición del ajedrez y del go, los dos grandes juegos de estrategia.</p>
                <p>En los siglos XVI y XVII las creaciones se volvieron más complejas, los muñecos se articularon e incorporaron nuevos materiales, como el cartón. Era la época de los títeres y autómatas y de la aparición de los soldaditos de plomo, fabricados especialmente en Alemania. Las muñecas de este periodo se visten como sus dueñas, siendo reflejo de las costumbres de sus mayores y al mismo tiempo se acompañan con todo tipo de artículos de uso doméstico: vajillas, muebles, vestidos, mascotas, etc. De este siglo son también las primeras casas de muñecas, aunque todavía eran propias de la nobleza. La primera de la que tenemos noticia la encargó en 1558 el duque de Baviera, Albretch V, para su hija.
                En el siglo XVIII Europa vive una auténtica transformación. Se inicia la revolución industrial, y con ella una nueva era que incidirá directamente en el mundo del juguete.</p>

              </div>
            </Col>

            <Col>
              <div className="column-content column2">
                <h3>Nuestra Misión y Visión</h3>
                <h4>Visión</h4>
                <p>En Maravillas Infantiles, aspiramos a ser reconocidos como el referente líder en la creación de experiencias mágicas y educativas para niños de todas las edades. Nos esforzamos por ser un faro de inspiración y diversión, donde cada niño descubra la alegría del aprendizaje a través de juguetes excepcionales. Buscamos construir un mundo donde la imaginación florezca, fomentando así la creatividad y el desarrollo integral de cada niño, dejando una huella positiva en sus vidas y en las comunidades que servimos.</p>
                <h4>Misión</h4>
                <p>En Maravillas Infantiles, nuestra misión es ir más allá de ser simplemente una tienda de juguetes. Nos consideramos un rincón mágico donde la calidad y la diversión convergen para dar vida a los sueños de juego de cada niño. Nos comprometemos a proporcionar a las familias juguetes excepcionales cuidadosamente seleccionados, que no solo entretienen, sino que también inspiran la creatividad y fomentan el aprendizaje. Buscamos construir recuerdos duraderos al ofrecer experiencias de juego significativas que contribuyan al desarrollo positivo de cada niño. A través de nuestro compromiso con la calidad, seguridad y servicio excepcional, aspiramos a ser un socio confiable y querido en el viaje de cada familia.</p>
                <p>Estas declaraciones de visión y misión reflejan un compromiso profundo con el impacto positivo en la vida de los niños y sus familias, así como la aspiración de ser líderes en la industria de juguetes. Puedes personalizar estas declaraciones según los valores y objetivos específicos de tu juguetería. </p>
              </div>
            </Col>
            <Col>
              <div className="column-content column3">
                <h3>Imagenes</h3>
                <div className="image-container">
                  <div className="image-frame">
                    <img src={img1} alt="Imagen 1" />
                  </div>
                  <div className="image-frame">
                    <img src={img2} alt="Imagen 2" />
                  </div>
                  <div className="image-frame">
                    <img src={img3} alt="Imagen 3" />
                  </div>
                  <div className="image-frame">
                    <img src={img4} alt="Imagen 3" />
                  </div>
                  <div className="image-frame">
                    <img src={img5} alt="Imagen 3" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        
      </section>
        <footer>
        <p style={{ color: '#fff' }}>&copy; 2023 Maravillas Infantiles. Todos los derechos reservados.</p>
      </footer>
    </div>
    
  )
}
