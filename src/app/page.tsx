"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Domů",
          id: "hero",
        },
        {
          name: "O nás",
          id: "about",
        },
        {
          name: "Služby",
          id: "features",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="Digimed"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Digitalizujeme zdravotnictví"
      description="Digitální vizualizace pro medicínské produkty a nemocniční prostředí. Transformujeme složitá zdravotnická data v jasné a srozumitelné vizuální zážitky."
      buttons={[
        {
          text: "Prozkoumat tvorbu",
          href: "#features",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/robotic-human-heart-futuristic-representation_23-2151681182.jpg",
          imageAlt: "Medical data visualization",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-with-patient-s-x-ray-film_53876-14350.jpg",
          imageAlt: "Anatomy visualization",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-provides-cancer-screening-guidance-patient-office_482257-126373.jpg",
          imageAlt: "Microscopic research",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137368.jpg",
          imageAlt: "Medical skeletal modeling",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/patient-who-undergoes-brain-scan-procedure-neurological-center-modern-lab_482257-31652.jpg",
          imageAlt: "Diagnostic UI",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-technology-hologram_23-2151917441.jpg",
          imageAlt: "Robotic surgery tech",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Digimed – Budoucnost vizualizace"
      buttons={[
        {
          text: "Více o nás",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      features={[
        {
          id: "1",
          title: "Kardiovaskulární analytika",
          description: "Detailní modely srdečních funkcí pro operační sály.",
          imageSrc: "http://img.b2bpic.net/free-photo/medical-team-examining-x-ray-scan-results-discuss-patient-care-options_482257-122853.jpg",
        },
        {
          id: "2",
          title: "Ortopedické plánování",
          description: "Přesné 3D scany pro chirurgické zákroky na kostech.",
          imageSrc: "http://img.b2bpic.net/free-photo/images-that-simulate-x-rays-with-neon-colors_23-2151521302.jpg",
        },
        {
          id: "3",
          title: "Neurologické mapování",
          description: "Interaktivní vizualizace nervových drah pro diagnostiku.",
          imageSrc: "http://img.b2bpic.net/free-photo/images-that-simulate-x-rays-with-neon-colors_23-2151521326.jpg",
        },
      ]}
      title="Naše specializace"
      description="Nabízíme komplexní vizuální řešení pro moderní zdravotnictví."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "MUDr. Jan Novák",
          handle: "Chirurgické centrum",
          testimonial: "Digimed pro nás vytvořil revoluční 3D modely pro náš chirurgický tým.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-scientists-lab_23-2148970019.jpg",
        },
        {
          id: "2",
          name: "Ing. Alena Svobodová",
          handle: "Nemocnice Praha",
          testimonial: "Vizualizace od Digimed zrychlily náš diagnostický proces o 30 %.",
          imageSrc: "http://img.b2bpic.net/free-photo/data-center-software-developer-analyzing-program-logs-metrics-close-up_482257-126787.jpg",
        },
        {
          id: "3",
          name: "Tomáš Dvořák",
          handle: "MedTech Solutions",
          testimonial: "Precizní práce, skvělá komunikace a absolutní profesionalita v oboru.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-doctor-white-uniform-standing-hall_1157-33393.jpg",
        },
        {
          id: "4",
          name: "Eva Černá",
          handle: "Hlavní sestra",
          testimonial: "Díky Digimed máme konečně srozumitelné edukační materiály pro pacienty.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-business-executive-standing-with-arms-crossed_1170-780.jpg",
        },
        {
          id: "5",
          name: "Petr Kučera",
          handle: "Klinický specialista",
          testimonial: "Nejlepší vizualizace, se kterými jsem kdy v rámci výzkumu pracoval.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-patient-man-looking-into-camera-waiting-doctors-start-stomatology-surgery-sitting-dental-chair_482257-4877.jpg",
        },
      ]}
      title="Reference od našich klientů"
      description="Spolupracujeme s předními nemocnicemi a výrobci medicínské techniky."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Kontakt"
      title="Pojďme vizualizovat budoucnost"
      description="Napište nám o svém projektu a domluvte si nezávaznou konzultaci."
      imageSrc="http://img.b2bpic.net/free-photo/view-futuristic-high-tech-classroom-students_23-2150906232.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Digimed"
      copyrightText="© 2025 Digimed. Digitalizujeme zdravotnictví."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
