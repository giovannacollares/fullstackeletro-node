import { Carousel } from 'react-bootstrap';
import CarouselPic1 from './imagens/carousel1.png';
import CarouselPic2 from './imagens/carousel2.png';
import CarouselPic3 from './imagens/carousel3.png';
import CarouselPic4 from './imagens/carousel4.png';

export default function Carrosel() {
        return (
       <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={CarouselPic1}
            alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={CarouselPic2}
            alt="Third slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={CarouselPic3}
            alt="Third slide"
            />
            
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={CarouselPic4}
            alt="Third slide"
            />
            
        </Carousel.Item>
        </Carousel>
);}