import { ReactElement, useState, useEffect } from "react";
import { EventCard } from "./EventCard";

const eventsData = [
  {
    title: "Marketing digital: what's app business",
    date: "Thu, Nov 9 • 7:30 PM GMT-5",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F632665739%2F546226227561%2F1%2Foriginal.png?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C65%2C664%2C332&s=793b5eca4336775440150416a2adb88e",
    link: "https://www.eventbrite.com/e/marketing-digital-whats-app-business-tickets-749796811447?aff=ebdsoporgprofile",
  },
  {
    title: "LideRazgo Femenino",
    date: "Thu, Oct 5 • 6:31 PM GMT-5",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F614100899%2F546226225547%2F1%2Foriginal.20231005-173218?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=14%2C0%2C846%2C423&s=7b8a13363a5e5bc068cae9bbcb126281",
    link: "https://www.eventbrite.com/e/liderazgo-femenino-tickets-732934054487?aff=ebdsoporgprofile",
  },
  {
    title: "Liderazgo para mujeres",
    date: "Thu, Oct 5 • 6:30 PM GMT-5",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F612020419%2F546226225547%2F1%2Foriginal.20231003-154935?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1624%2C812&s=f73b5ccfe2b1c28f6a0ccc3bdc34acf3",
    link: "https://www.eventbrite.com/e/liderazgo-para-mujeres-tickets-731273999217?aff=ebdsoporgprofile",
  },
  {
    title: "Como legalizar tu negocio",
    date: "Thu, Aug 17 • 6:00 PM GMT-5",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F575011779%2F546226225547%2F1%2Foriginal.20230814-165834?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C800%2C1600%2C800&s=cd1eac653ef37801e271094c3fd8863f",
    link: "https://www.eventbrite.com/e/como-legalizar-tu-negocio-tickets-698483602257?aff=ebdsoporgprofile",
  },
  {
    title: "Construye una identidad de marca para tu negocio",
    date: "Thu, Jun 29 • 6:30 PM GMT-5",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F529692429%2F546226225547%2F1%2Foriginal.20230605-212239?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C827%2C1654%2C827&s=c91d41be635c1c7e5836147bfabfcc2e",
    link: "https://www.eventbrite.com/e/construye-una-identidad-de-marca-para-tu-negocio-tickets-651202112047?aff=ebdsoporgprofile",
  },
  {
    title: "Como realizar analisis F.O.D.A.",
    date: "Mon, May 29 • 6:30 PM GMT-5",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F522917589%2F546226225547%2F1%2Foriginal.20230525-211731?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=56%2C855%2C1598%2C799&s=ebb021dea3d6b7b971564a2a997d38be",
    link: "https://www.eventbrite.com/e/como-realizar-analisis-foda-tickets-643323988367?aff=ebdsoporgprofile",
  },
  {
    title: "Qué es el autocuidado?",
    date: "Mon, Apr 3 • 5:00 PM GMT-5",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F471501319%2F546226225547%2F1%2Foriginal.20230317-135646?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C827%2C1654%2C827&s=6a4867d8b88958ab6175b33a2c2ddac8",
    link: "https://www.eventbrite.com/e/que-es-el-autocuidado-tickets-592518768587?aff=ebdsoporgprofile",
  },
  {
    title: "Cómo mejorar tu crédito corporativo y personal?",
    date: "Wed, Feb 22 • 11:00 AM GMT-5",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F446443979%2F546226225547%2F1%2Foriginal.20230214-233425?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C827%2C1654%2C827&s=8746945f276d8fce9b894c6aff2fe761",
    link: "https://www.eventbrite.com/e/como-mejorar-tu-credito-corporativo-y-personal-tickets-548102769137?aff=ebdsoporgprofile",
  },
  {
    title: "Celebrando la amistad con empresarias latinas en acción",
    date: "Sat, Feb 11 • 11:00 AM",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F428820759%2F546226225547%2F1%2Foriginal.20230120-150848?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C123%2C1080%2C540&s=94d53d93fe5f47d4493720e60b7a5b76",
    link: "https://www.eventbrite.com/e/celebrando-la-amistad-con-empresarias-latinas-en-accion-tickets-520508343467?aff=ebdsoporgprofile",
  },
];

export const Events = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="mt-24 mx-24">
      <span>
        <h2 className="text-primary mb-2">Eventos</h2>
        <hr className="border-t-2 border-red-300 mb-10 max-w-[365px]" />
      </span>
      {isVisible ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData && eventsData.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              image={event.image}
              link={event.link}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Cargando eventos...</p>
      )}
    </div>
  );
};
