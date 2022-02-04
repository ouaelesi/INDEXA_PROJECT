import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="Footer grid md:grid-cols-3 grid-cols-1 lg:px-24 md:px-12 py-10 md:gap-32 gap-5 px-5">
        <div>
          <div className="">
            <img
              src="/imgs/logo-indexa.png"
              alt="logo-indexa"
              layout="fill"
              width="50%"
              className="mx-auto md:ml-0"
            ></img>
          </div>
          <div className="my-3 font-normal text-center md:text-left">
            INDEXA EST LE REPRÉSENTANT OFFICIEL EN ALGERIE DES GRANDES MARQUES
            INTERNATIONALES : PHONAK | OTOMETRICS | ADVANCED BIONICS | PATH
            MEDICAL
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl mb-3 text-center md:text-left">
            CONTACT
          </div>
          <div className="my-1 font-normal flex gap-2 w-fit mx-auto  md:w-full  text-center md:text-left ">
            <img src="/imgs/telephone.svg" width="20px" alt="phone icon"></img>{" "}
            023 80 44 97-98
          </div>
          <div className="my-1 font-normal flex gap-2 w-fit mx-auto  md:w-full text-center md:text-left">
            <img src="/imgs/mail.svg" width="20px" alt="mail icon"></img>
            Contact@indexa-braille.com
          </div>
          <div className="my-1 font-normal flex gap-2 w-fit mx-auto md:w-full text-center md:text-left">
            <img
              src="/imgs/position.svg"
              width="25px"
              alt="position icon"
            ></img>
            Centre commercial Mohammadia Mall, 16058 Alger
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl mb-3 w-fit mx-auto md:w-full text-center md:text-left">
            INFORMATION
          </div>
          <div className="my-1 font-normal w-fit mx-auto md:w-full text-center md:text-left">
            <Link href='/products'><a>Nos Produits</a></Link>
          </div>
          <div className="my-1 font-normal w-fit mx-auto md:w-full text-center md:text-left">
          <Link href='/contact'><a>Contact</a></Link>
          </div>
          <div className="my-1 font-normal w-fit mx-auto md:w-full text-center md:text-left">
          <Link href='/about'><a>A Propos</a></Link>
          </div>
          <div className="mt-3 flex w-fit mx-auto md:w-full text-center md:text-left">
            <img
              src="/imgs/facebook_Logo.svg"
              alt="facebook Logo"
              className="mr-2"
              width="35px"
            ></img>
            <img
              src="/imgs/twitter_Logo.svg"
              alt="twitter Logo"
              className="mr-2"
              width="35px"
            ></img>
            <img
              src="/imgs/instagram_Logo.svg"
              alt="instagram Logo"
              className="mr-2"
              width="35px"
            ></img>
            <img
              src="/imgs/linkedin_Logo.svg"
              alt="linkedin Logo"
              className="mr-2"
              width="35px"
            ></img>
          </div>
        </div>
      </div>
      <div className="copyrights text-center p-2 text-white">
        2022 © CREATED BY EDRAAK
      </div>
    </div>
  );
};

export default Footer;
