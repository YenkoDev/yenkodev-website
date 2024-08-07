import React from "react";
import Image from "next/image";

import { footerLinks, socialMedia } from "@/constants";
import { yenkoDevWhiteLogo } from "@/assets";

const FooterList = ({ name, link }: { name: string; link: string }) => {
  return (
    <li className="mb-2">
      <a href={link} className="text-stone-300 hover:text-white-dark">
        {name}
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <section className="bg-black-dark py-16">
      <footer className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col text-white-light">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
          <div className="flex flex-col items-start flex-1/2">
            <Image
              src={yenkoDevWhiteLogo}
              alt="YenkoDev Logo"
              width={150}
              height={150}
              className="mb-4"
            />
            <p className="mb-2 text-left max-w-sm leading-5">
              Comprehensive Software Solutions
            </p>
            <p className="text-white-dark text-sm max-w-sm">
              Cutting-edge software solutions tailored to meet the diverse needs
              of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-16 md:gap-8 gap-8">
            <div className="flex flex-col items-start flex-1">
              <h3 className="text-2xl font-bold mb-4">Links</h3>
              <ul>
                {footerLinks.map((footerLink, index) => (
                  <FooterList
                    key={index}
                    name={footerLink.name}
                    link={footerLink.link}
                  />
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start flex-1">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-white-dark text-sm">info@yenkodev.com</p>
            </div>

            <div className="flex flex-col items-start flex-1">
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialMedia.map((icon, index) => (
                  <a
                    href={icon.href}
                    key={index}
                    className="text-white-light text-3xl hover:text-blue-dark"
                    target="_blank"
                  >
                    {icon.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between border-t border-stone-700 pt-4 max-lg:flex-col lg:items-start items-center max-lg:gap-4 ">
          <div className="flex lg:flex-row flex-col gap-2">
            <p className="text-stone-300">
              <span>&copy;</span> {new Date().getFullYear()} YenkoDev.
            </p>
            <p className="text-stone-300">All rights reserved.</p>
          </div>

          <a href="#" className="text-stone-300">
            Terms and Conditions
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
