import { Carousel, Image } from "react-bootstrap";

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <video
          className="w-100"
          autoPlay
          muted
          style={{
            maxHeight: "100vh",
            objectFit: "cover",
          }}
        >
          <source
            src="https://www.pexels.com/download/video/4328786/"
            type="video/mp4"
          ></source>
        </video>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://wallpaperbat.com/img/142465-travel-1440p-resolution-hd-4k-wallpaper-image.jpg"
          alt="slider-2"
          className="w-100"
          style={{
            maxHeight: "100vh",
            objectFit: "cover",
          }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://wallpapersok.com/images/hd/follow-the-forgotten-path-ftxogalgt7vq2d9t.jpg"
          alt="slider3"
          className="w-100"
          style={{
            maxHeight: "100vh",
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
