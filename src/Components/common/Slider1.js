import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Slider1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 resimSlider"
          src="/assets/img/Aypinautomat/slider1.jpg"
          alt="Aypin Automat Slider"
        />
        <Carousel.Caption className="slider carousel-caption d-none d-md-block">
          <h2 style={{ textTransform: "capitalize" }}>Talaşlı İmalat</h2>
          <a href="/portfolios" className="btn-get-started scrollto">
            <i className="bx bx-chevrons-down"></i>
          </a>
        </Carousel.Caption>
        {/* Mobil modda görünür metin ve düğme */}
        <div className="d-md-none">
          <Link
            to="/portfolios"
            className="btn-get-started scrollto"
            style={{
              textAlign: "center",
              justifyContent: "center",
              border: "2px solid #fff",
              backgroundColor: "#0000ff",
              color: "#fff",
              width: "74px",
              height: "74px",
              borderRadius: "50px",
            }}
          >
            <h2
              style={{
                textTransform: "capitalize",
                textAlign: "center",
                border: "2px solid #fff",
                backgroundColor: "#0000ff",
                color: "#fff",
                padding: "10px",
              }}
            >
              Talaşlı İmalat
              <br />
              <i className="bx bx-chevrons-down"></i>
            </h2>
          </Link>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 resimSlider"
          src="/assets/img/Aypinautomat/slider1.jpg"
          alt="Aypin Automat Slider"
        />
        <Carousel.Caption className="slider carousel-caption d-none d-md-block">
          <h2 style={{ textTransform: "capitalize" }}>Talaşlı İmalat</h2>
          <a href="#portfolio" className="btn-get-started scrollto">
            <i className="bx bx-chevrons-down"></i>
          </a>
        </Carousel.Caption>
        {/* Mobil modda görünür metin ve düğme */}
        <div className="d-md-none">
          <a
            href="#portfolio"
            className="btn-get-started scrollto"
            style={{
              textAlign: "center",
              justifyContent: "center",
              border: "2px solid #fff",
              backgroundColor: "#0000ff",
              color: "#fff",
              width: "74px",
              height: "74px",
              borderRadius: "50px",
            }}
          >
            <h2
              style={{
                textTransform: "capitalize",
                textAlign: "center",
                border: "2px solid #fff",
                backgroundColor: "#0000ff",
                color: "#fff",
                padding: "10px",
              }}
            >
              Talaşlı İmalat
              <br />
              <i className="bx bx-chevrons-down"></i>
            </h2>
          </a>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 resimSlider"
          src="/assets/img/Aypinautomat/slider1.jpg"
          alt="Aypin Automat Slider"
        />
        <Carousel.Caption className="slider carousel-caption d-none d-md-block">
          <h2 style={{ textTransform: "capitalize" }}>Talaşlı İmalat</h2>
          <a href="#portfolio" className="btn-get-started scrollto">
            <i className="bx bx-chevrons-down"></i>
          </a>
        </Carousel.Caption>
        {/* Mobil modda görünür metin ve düğme */}
        <div className="d-md-none">
          <a
            href="#portfolio"
            className="btn-get-started scrollto"
            style={{
              textAlign: "center",
              justifyContent: "center",
              border: "2px solid #fff",
              backgroundColor: "#0000ff",
              color: "#fff",
              width: "74px",
              height: "74px",
              borderRadius: "50px",
            }}
          >
            <h2
              style={{
                textTransform: "capitalize",
                textAlign: "center",
                border: "2px solid #fff",
                backgroundColor: "#0000ff",
                color: "#fff",
                padding: "10px",
              }}
            >
              Talaşlı İmalat
              <br />
              <i className="bx bx-chevrons-down"></i>
            </h2>
          </a>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider1;
