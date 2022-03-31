import React from "react";
import Card from "./services/Card";
import DeployCard from "./services/DeployCard";
import flutterLogo from '../images/flutter.svg'
import nextLogo from '../images/next-js.svg'
import strapiLogo from '../images/strapi.svg'
import appleLogo from '../images/apple.svg'
import googleLogo from '../images/google.svg'
import netlifyLogo from "../images/netlify-icon.svg";
import microsoftLogo from "../images/microsoft-icon.svg";
import linuxLogo from '../images/linux-icon.svg'



const Services = () => {
  const mobileDevServiceText = new Map();
  const webDevServiceText = new Map();
  const backendServiceText = new Map();
  const hostingServiceText = new Map();
  const hostingAppText = new Map();

  mobileDevServiceText["title"] = "Mobile App Entwicklung";
  mobileDevServiceText["logo"] = flutterLogo;
  mobileDevServiceText["more"] = "https://flutter.dev/";
  mobileDevServiceText["description"] =
    "Alle Apps werden in Flutter entwickelt und geschrieben. Flutter ist ein von Google veröffentlichtes Framework welches den neusten Technikstandarts entspricht mit einer riesigen Community im Hintergrund.";
  mobileDevServiceText["popular"] =
    "Populäre Firmen die Flutter benutzen: Google, BMW, eBay, Toyota, etc...";
  webDevServiceText["title"] = "Moderne WebApp Entwicklung";
  webDevServiceText["logo"] = nextLogo;
  webDevServiceText["more"] = "https://nextjs.org/";
  webDevServiceText["description"] =
    "Alle Apps werden mit Next.js entwickelt und geschrieben. Next.js ist ein Framework für serverseitig gerenderte React Anwendungen. React ist dabei selbst ein Framework, welches von Facebook entwickelt und veröffentlicht wurde";
  webDevServiceText["popular"] = "Populäre Firmen die Next.js benutzen: Netflix, Uber, TikTok, Twitch, etc...";
  backendServiceText["title"] = "Online Backend Verwaltung";
  backendServiceText["logo"] = strapiLogo;
  backendServiceText["more"] = "https://strapi.io/";
  backendServiceText["description"] =
    "Mit Hilfe eines Headless Content Managment Systems, kann man Inhalte sehr leicht anpassen und verwalten. Die Daten werden dann durch eine API an die Applikation geschickt und verwertet";
  backendServiceText["popular"] = "";


  hostingServiceText['title'] = 'Hosting Service';
  hostingServiceText["more"] = "";
  hostingServiceText["logo"] = [linuxLogo, microsoftLogo, netlifyLogo];
  hostingServiceText["description"] = "Hochladen der Webseite auf einem Webserver, damit die Seite jederzeit im Internet erreichbar ist.";
  hostingServiceText["popular"] = "";

  hostingAppText['title'] = 'App Deployment';
  hostingAppText['logo'] = [appleLogo, googleLogo];
  hostingAppText["more"] = "";
  hostingAppText["description"] = "Hochladen und Einrichtung der App Seite im Google Play und/oder Apple App Store";
  hostingAppText["popular"] = "";


  return (
    <div id="services" className="flex flex-col items-center mt-32">
      <div className="py-24 text-4xl underline underline-offset-2">
        Was ich anbiete:
      </div>
      <div className="flex flex-col">
        <div className="pb-4 text-2xl text-center">Softwarelösungen:</div>
        <div className="flex flex-col transition-all duration-400 xl:gap-20 lg:flex-row lg:gap-8">
          <Card data={mobileDevServiceText} />
          <Card data={webDevServiceText} />
          <Card data={backendServiceText} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="pt-24 pb-4 text-2xl text-center">
          Hosting der Anwendung/en:
        </div>
        <div className="flex flex-col transition-all duration-400 xl:gap-20 lg:flex-row lg:gap-8">
          <DeployCard data={hostingServiceText} />
          <DeployCard data={hostingAppText} />
        </div>
      </div>
    </div>
  );
};

export default Services;
