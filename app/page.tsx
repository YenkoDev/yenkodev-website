import React from "react";
import Head from "next/head";

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

      <main>
        <section>
          <Hero />
        </section>

        <div className="relative flex justify-center items-center flex-col overflow-hidden w-full">
          <div className="max-w-7xl w-full"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
