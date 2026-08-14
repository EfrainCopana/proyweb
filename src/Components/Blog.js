import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img3.jpg';
import img3 from '../assets/img/img2.jpg';

export const Blog = () => {
  return (
    <section id="blog">
      <Container>
        <h2>BLOG</h2>
        <Row>
          <Col xs={12} md={8}>
            <article id="categoria1" className="article1">
              <h3>Consejos para Elegir Juguetes</h3>
              <p>Los juguetes, más allá de ser un objeto de diversión, son una herramienta en la vida de los niños. Por esa razón, la elección de juguetes debe estar relacionada con la transición entre las etapas de desarrollo de los pequeños, sus preferencias y habilidades.</p>
              <img className="article-image" src={img1}></img>
              <p>Elegir juguetes según la edad de los niños puede ser todo un reto. Este hecho es importante, puesto que los juegos y juguetes son esenciales para su buen desarrollo y para que gocen de una infancia feliz. A través de ellos, los niños conocen las costumbres y la cultura que les rodean, además de aprender a socializar.</p>
              <h4>Claves para elegir juguetes según la edad del niño</h4>
              <p>En primer lugar, debemos reconocer que la elección de los juguetes debe responder a las necesidades de la etapa del desarrollo en la que se hallen los pequeños. Los diseñadores de juguetes conocen este hecho a la perfección, motivo por el cual se encargan de indicar en el empaque la edad recomendada para su uso.</p>
                <br/>
                <p>Los expertos alertan sobre el creciente interés por comprar juguetes de carácter digital a los niños. Poco a poco, estos han sustituido a los juguetes «convencionales». Ciertamente no negamos los beneficios de los primeros, pero lo cierto es que durante la etapa infantil los segundos deben ser tu prioridad.

                Se sabe que una variedad de factores inciden al momento de que un pequeño prefiera un juguete. Los más importantes son la edad, el sexo, la experiencia, el desarrollo motor y la actitud de los padres.</p>
              <a href="https://mejorconsalud.as.com/como-elegir-juguetes-segun-la-edad/" target="_blank">Leer más</a>
            </article>
            <article id="categoria2" className="article2">
              <h3>Juegos Educativos</h3>
              <p>Los juegos educativos son actividades que se desarrollan para que los niños adquieran y refuercen el aprendizaje de cualquier área. Les enseñan una actitud correcta para aprender y las habilidades necesarias para estudiar.
                Aunque los juegos educativos se suelen utilizar en las aulas como un método de aprendizaje que llama la atención de los niños y les saca de la rutina, también pueden utilizarse en casa. De hecho, son una buena manera de que los mayores se impliquen en el aprendizaje de los pequeños de una forma más distendida; además de servir para reforzar y actualizar los conocimientos de los adultos.</p>
              <p>Intelectualmente, los juegos didácticos sirven para ejercitar la inteligencia, desarrollando las capacidades lógicas, enseñando a tener iniciativa y a tomar decisiones, potenciando la imaginación y la creatividad, y despertando el interés por el conocimiento y la investigación científica.</p>
              <p>Emocionalmente, los juegos educativos hacen que los niños sean más sociables, que sepan trabajar en equipo, resolver juntos los problemas y ayudar a los demás a hacerlo. Por ejemplo, los juegos de construcción les enseñan el respeto, la perseverancia y la disciplina, también a ser autocríticos, les dan seguridad en sí mismos y aumentan su autoestima.</p>
              <img className="article-image" src={img2}></img>
              <h4>Tipos de juegos didácticos</h4>
              <p>Existen varios tipos de juegos educativos, a través de ellos se puede aprender historia, idiomas y casi cualquier tema. Sin embargo, cada grupo de juegos está destinado a desarrollar una función concreta, además de la del aprendizaje. Los juegos afectivos y emocionales ayudan a desarrollar la tolerancia y la solidaridad. Los juegos intelectuales favorecen la concentración, la atención, la lógica y la observación. Los juegos conductuales fomentan la perseverancia, la disciplina y el respeto.</p>
              <p>También pueden diferenciarse por edades ya que, según la edad a la que estén dirigidos, los juegos didácticos hacen hincapié en distintas áreas. Por ejemplo, los juegos educativos para bebés les ayudan en su desarrollo físico e intelectual ejercitando la coordinación y el razonamiento, y estimulando el habla, la imaginación y el aprendizaje. No obstante, todos los juegos pueden ser compartidos con los adultos, para alegría de los niños y beneficio de todos los participantes.</p>
              <a href="https://www.noedidacticos.com/blog/que-son-los-juegos-educativos-0de1c230067b" target="_blank">Leer más</a>
            </article>
            <article id="categoria3" className="article3">
              <h3>Beneficios de los Juegos</h3>
              <p>Más que una simple oportunidad para la diversión, el juego es cosa seria en lo que respecta a la salud y el desarrollo de un niño. Desde el "no está... ¡acá está!", las tortitas con las manos y las escondidas hasta la rayuela, las muchas formas de jugar enriquecen el cerebro, el cuerpo y la vida del niño de maneras muy importantes.</p>
              <p>El informe clínico de la American Academy of Pediatrics titulado, "El poder del juego: su función pediátrica para mejorar el desarrollo de los niños pequeños" (en inglés) explica cómo y por qué jugar con ambos padres y otros niños es fundamental para formar mejores cerebros, cuerpos y vínculos sociales que prosperen; todas estas cosas son importantes en el mundo actual. La investigación muestra que jugar puede mejorar las capacidades de los niños para planificar, organizar, llevarse bien con los demás y regular sus emociones. Además, el juego ayuda con el lenguaje, las destrezas matemáticas y sociales e incluso ayuda a los niños a sobrellevar el estrés.</p>
              
              <h4>El juego como eliminador del estrés tóxico</h4>
              <p>Además de fomentar la salud y el desarrollo de un niño, el juego ayuda a fomentar relaciones seguras, estables y provechosas que protegen contra el estrés tóxico y generan la resiliencia socioemocional. La alegría mutua y la interacción cara a cara que ocurren durante el juego pueden ayudar al cuerpo a manejar el estrés, según la AAP. En un estudio, los niños de 3 a 4 años ansiosos debido al ingreso al preescolar tenían el doble de probabilidad de sentirse menos estresados si se les permitía jugar durante 15 minutos, en comparación con los compañeros de clase que escucharon un cuento.</p>
              <h4>Tipos de juego que puede combinar</h4>
              <h5>- Juego con juguetes y objetos</h5>
              <div className="video-container">
                <iframe width="560" height="315" src="https://player.vimeo.com/video/745218171?h=636f679822&color=ffffff&title=0&byline=0&portrait=0" frameborder="0" allowfullscreen></iframe>
                </div>
              <p>Cuando juegan con un objeto, como un juguete, los bebés usan sus destrezas sensoriales y motrices para explorar sus propiedades y hacer "experimentos" como lo haría un pequeño científico. Para aprender si un objeto es sólido, por ejemplo, es probable que lo golpeen contra el piso. Además, los niños en edad preescolar usan los objetos para desarrollar ideas y conceptos abstractos como el simbolismo, usando una banana como un teléfono, por ejemplo, además de compartir y esperar su turno.</p>
              <h5>- Juego físico</h5>
              <div className="video-container">
                <iframe width="560" height="315" src="https://player.vimeo.com/video/161855960?h=217d530a55" frameborder="0" allowfullscreen></iframe>
                </div>
              <p>La diversión física, como el juego libre durante el recreo, ayuda a desarrollar las destrezas motrices, previene la obesidad infantil y fomenta la inteligencia emocional. La sutil emoción que provoca el tobogán en un patio de recreo, por ejemplo, permite al niño adquirir confianza para arriesgarse en un entorno relativamente seguro. Los juegos tales como pato-pato-ganso y la mancha (la lleva/pega pega) también ayudan a los niños a forjar otras habilidades socioemocionales tales como la empatía, ya que los niños aprenden a tener cuidado de no lastimar a los demás golpeándolos demasiado fuerte, por ejemplo.</p>
              <h5>Juego al aire libre</h5>
              <div className="video-container">
                <iframe width="560" height="315" src="https://player.vimeo.com/video/429449601?h=1911fbd637&color=02a94f&portrait=0" frameborder="0" allowfullscreen></iframe>
                </div>
              <p>El juego al aire libre es de particular importancia porque permite a los niños usar todos sus sentidos para forjar habilidades tales como la percepción espacial y el equilibrio. También puede mejorar la capacidad de atención del niño. Los estudios sugieren que los niños pequeños de países donde las escuelas destinan más tiempo para el recreo tienen más éxito académico a medida que crecen; no obstante, se estima que alrededor del 30 % de los niños de preescolar de Estados Unidos no tienen recreos.</p>
              <h5>- Juego simulado</h5>
              <div className="video-container">
                <iframe width="560" height="315" src="https://player.vimeo.com/video/290899974?h=485ff2e324" frameborder="0" allowfullscreen></iframe>
                </div>
              <p>Este tipo de juego permite a los niños pequeños experimentar con distintos roles sociales y aprender a cooperar. Jugar a disfrazarse, a imitar y a juegos imaginarios también fomenta la creatividad y forja habilidades más complejas de negociación, comunicación y lenguaje ("Tú serás la maestra y yo el alumno", podría decir un niño).</p>
              <a href="https://www.healthychildren.org/Spanish/family-life/power-of-play/Paginas/the-power-of-play-how-fun-and-games-help-children-thrive.aspx" target="_blank">Leer más</a>
            </article>
            <article id="categoria4" className="article4">
              <h3>Consejos para Padres</h3>
              <img className="article-image" src={img3}></img>
              <p>Estos son algunos consejos que os pueden ayudar a la hora de acertar en la compra de los juguetes para regalar a vuestros hijos, sobrinos o los peques de vuestros amigos:</p>
              <ul>
                <li><p>Respeta el gusto del niño a la hora de comprar un juguete para él.</p></li>
              </ul>
              <ul>
                <li><p>Fíjate en las características específicas del juguete y en las que desees potenciar en el niño. Por ejemplo, si el niño es tímido, le estimularán los juguetes de participación que les ayuden a relacionarse con los otros y, si por el contrario, es movido, le ayudarán los juegos pausados como los puzles, los juegos de construcción o los cuentos.</p></li>
              </ul>
              <ul>
                <li><p>Fíjate en la edad recomendada. Facilita un uso correcto del juguete al niño, teniendo en cuenta su madurez intelectual, su fuerza física, o su habilidad manual.</p></li>
              </ul>
              <ul>
                <li><p>No olvides valorar el entorno de juego. Si el juguete es de gran tamaño y no tenemos espacio suficiente, corremos el riesgo de que esté siempre guardado y no se use.</p></li>
              </ul>
              <ul>
                <li><p>Piensa en la variedad. Antes de comprar juguetes nuevos, ten en cuenta los juguetes que ya tiene para no incrementar los del mismo tipo.</p></li>
              </ul>
              <ul>
                <li><p>Juguetes que no pasan de moda. Si tiene hermanos o primos cercanos piensa en juguetes que con el paso del tiempo no pasen de moda y puedan ser usados por los más peques a medida que crezcan.</p></li>
              </ul>
              <ul>
                <li><p>Opciones para el aire libre. Siempre son prácticos y divertidos, pero en tiempos de pandemia algo con lo que puedan jugar en el exterior se antoja casi una necesidad (balones, raquetas, cometas, combas, bicicletas… las opciones son interminables).</p></li>
              </ul>
              <ul>
                <li><p>Libros, libros, libros. Ya sean cuentos, historias de ficción, divulgativos, personalizados, cómics o de solapas, un libro nunca falla, entretiene y estimula su imaginación y les permite pasar tiempo solos o con sus padres. Eso sí, siempre adaptados a su edad. </p></li>
              </ul>
              <a href="https://www.webconsultas.com/bebes-y-ninos/juegos-y-ocio-infantil/consejos-a-los-padres-para-elegir-juguetes" target="_blank">Leer más</a>
            </article>
          </Col>
          <Col xs={12} md={4}>
            <div className="sidebar">
              <h3>Categorías</h3>
              <ul>
                <li><a href="#categoria1">Consejos para Elegir Juguetes</a></li>
                <li><a href="#categoria2">Juegos Educativos</a></li>
                <li><a href="#categoria3">Beneficios de los Juego</a></li>
                <li><a href="#categoria4">Consejos para Padres</a></li>
              </ul>
            </div>
          </Col>
        </Row>
        
      </Container>
      <div>
        <footer>
        <p style={{ color: '#fff' }}>&copy; 2023 Maravillas Infantiles. Todos los derechos reservados.</p>
      </footer>
      </div>
    </section>
  )
}
