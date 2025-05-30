
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cannoli from "../assets/IMG/bakeryPhoto/cannoli.png";
import almondCookie from "../assets/IMG/almondCookie.png";
import tiramisu from "../assets/IMG/tiramisu.png";
import laPlacaHero from "../assets/IMG/laPlacaHero.jpg";
import puffPastries from "../assets/IMG/puffPastries.png";
import PropTypes from "prop-types";


const Section = ({ image, title, description, reverse, link }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current; // capture the current value
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    
    if (currentSection) {
      observer.observe(currentSection);
    }
    
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  

  return (
    <div
      ref={sectionRef}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center md:justify-start max-w-6xl mx-auto px-4 p-5 pb-10 ${
        isVisible ? "opacity-100 transition-opacity duration-[2000ms]" : "opacity-0"
      }`}
    >
      <div className={`text-center md:text-left ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <h2 className="text-4xl sm:text-7xl text-gold font-bold mb-4">{title}</h2>
        <p className="text-lg font-bold text-amber-800">{description}</p>
      </div>
      <div className={`mb-8 md:mb-0 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
      {link ? (
          <Link to={link}>
            <img src={image} alt={title} className="object-cover max-w-full h-auto mx-auto md:mx-0 rounded-xl cursor-pointer" />
          </Link>
        ) : (
          <img src={image} alt={title} className="object-cover max-w-full h-auto mx-auto md:mx-0 rounded-xl" />
        )}
      </div>
    </div>
  );
};

Section.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  link: PropTypes.string,
};

Section.defaultProps = {
  reverse: false,
  link: null,
};

export default function Home() {
  return (
    <div className="bg-beige">
      <Section
        image={cannoli}
        title="La Placa Family Bakery"
        description="Immerse yourself in the warm hospitality and relaxed ambiance, where every visit feels like a cherished escape to Italy without ever leaving the enchanting embrace of the Santa Cruz Mountains"
      />
      <Section
        image={almondCookie}
        title="Almond Cookies"
        description="Indulge in the irresistible delight of our signature almond cookies, hand-crafted to tantalize your taste buds. But here's the best part - they're not just delicious; they're also gluten-free!"
        reverse={true}
        link="/almondCookies"
      />
      <Section
        image={puffPastries}
        title="Puff Pastry"
        description="Embark on a culinary journey with our heavenly puff pastries, each bite a symphony of flaky layers and buttery goodness. Delight in the delicate crunch as you sink your teeth into these golden parcels of perfection. Whether you're craving a savory sensation or a sweet delight, our puff pastries cater to every palate."
        link="/puffPastry"
      />
      <Section
        image={tiramisu}
        title="Dolci"
        description="From the iconic cannoli bursting with creamy ricotta to the flaky layers of sfogliatelle filled with citrus-scented delights, each pastry is a tribute to Italy's rich culinary heritage. Indulge in the velvety smoothness of tiramisu, or savor the simplicity of a perfectly baked biscotti dipped in rich espresso. With every bite, experience the passion and tradition woven into each pastry, inviting you to savor the sweet symphony of flavors that only authentic Italian pastries can offer. Buon appetito!"
        reverse={true}
        link="/cake"
      />
      <Section
        image={laPlacaHero}
        title="Pizza"
        description="Indulge your guilty pleasure with our thin-crust pizzas, where every slice is a testament to craftsmanship and flavor. Our thin, crispy crust serves as the perfect canvas for a melody of flavors, marrying the freshness of premium ingredients with the artistry of traditional pizza-making."
        link="/pizza"
      />
    </div>
  );
}
