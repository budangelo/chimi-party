import Carousel from 'react-bootstrap/Carousel'
import { FaWhatsapp } from 'react-icons/fa'
import './HomePage.css'

function HomePage() {
  const whatsappNumber = '393393770837'
  const whatsappMessage = 'Ciao, vorrei ricevere un preventivo.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const services = [
    {
      title: 'Battesimi',
      description:
        'Allestimenti di palloncini su misura per celebrare il battesimo con stile e semplicità. Colori armoniosi e dettagli curati per un ricordo indimenticabile.',
      image: '/battesimi.jpg',
      alt: 'Allestimento di palloncini per battesimo',
    },
    {
      title: 'Compleanni',
      description:
        'Creiamo allestimenti di palloncini pensati per dare vita a compleanni pieni di energia, colore e personalità, adatti a grandi e piccoli.',
      image: '/compleanni.jpg',
      alt: 'Allestimento di palloncini per compleanno',
    },
    {
      title: 'Lavori per Aziende',
      description:
        'Realizziamo allestimenti di palloncini pensati per eventi aziendali, inaugurazioni e promozioni. Design curati per valorizzare il tuo brand.',
      image: '/aziende.jpg',
      alt: 'Allestimento di palloncini per eventi aziendali',
    },
    {
      title: 'Matrimoni',
      description:
        'Creiamo allestimenti di palloncini su misura per matrimoni da sogno. Dettagli curati, armonia e stile per un’atmosfera indimenticabile.',
      image: '/matrimoni.jpg',
      alt: 'Allestimento di palloncini per matrimonio',
    },
  ]

  return (
    <main>
      <section id="home" className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Allestimenti di Palloncini a Torino</h1>

          <div className="hero-carousel-wrapper">
            <Carousel interval={3500} indicators={false}>
              <Carousel.Item>
                <img
                  className="hero-carousel-image"
                  src="/hero-1.jpg"
                  alt="Allestimento palloncini per laurea"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="hero-carousel-image"
                  src="/hero-2.jpg"
                  alt="Decorazione con palloncini per evento"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="hero-carousel-image"
                  src="/hero-3.jpg"
                  alt="Scenografia con palloncini personalizzata"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hero-whatsapp-button"
          >
            <FaWhatsapp />
            <span>Richiedi un preventivo</span>
          </a>
        </div>
      </section>

      <section id="servizi" className="services-section">
        <div className="services-container">
          <h2 className="services-title">I Nostri Allestimenti</h2>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="service-card-image"
                  />
                </div>

                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="su-di-noi" className="about-section">
        <div className="about-container">
          <article className="about-card">
            <div className="about-image-wrapper">
              <img
                src="/about-us.jpg"
                alt="Chiara e Michela mentre preparano un allestimento di palloncini"
                className="about-image"
              />
            </div>

            <div className="about-content">
              <h2 className="about-title">Chi Siamo</h2>
              <p className="about-text">
                Siamo Chiara e Michela, e il nostro obiettivo è rendere ogni evento unico
                attraverso design di palloncini personalizzati. Con creatività, stile e
                grande attenzione ai dettagli, trasformiamo ogni idea in un allestimento
                speciale capace di rendere ogni occasione indimenticabile.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="contatti" className="contact-anchor-section"></section>
    </main>
  )
}

export default HomePage