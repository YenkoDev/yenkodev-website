import React from "react";
import Head from "next/head";

import {
  NavBar,
  Services,
  Process,
  Projects,
  Testimonials,
  Team,
  TechUsed,
  Contact,
  Footer,
} from "../components";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>YenkoDev - Comprehensive Software Solutions</title>
        <meta
          name="description"
          content="YenkoDev offers cutting-edge software solutions tailored to meet the diverse needs of our clients. Specializing in mobile, desktop, web app development, AI/ML, cloud services, and more."
        />
        <meta
          name="keywords"
          content="YenkoDev, software development, mobile app, web app, AI, machine learning, cloud services, embedded development, IoT, UI/UX design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="relative z-20">
        <NavBar />
      </header>

      <main>
        <section id="hero">
          <Hero />
        </section>

        <div className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-1 px-5">
          <div className="max-w-7xl w-full dark:bg-black-100 ">
            <section id="services">
              <Services />
            </section>
            <section id="process">
              <Process />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="testimonials">
              <Testimonials />
            </section>
            <section id="team">
              <Team />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
