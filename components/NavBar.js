import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LangSwitcher from "./partials/LangSwitcher";
import { useTheme } from "next-themes";
import { FaCloudMoon, FaCloudSun, FaSearch } from "react-icons/fa";
import SearchInput from "./partials/SearchInput";
import frContent from "../public/locales/fr/common";
import arContent from "../public/locales/arab/common";

const NavBar = () => {
  const { locale, locales, asPath } = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  /* internationalisation content */
  const content = locale === "fr" ? frContent : arContent;

  useEffect(() => {
    setMounted(true);
  });
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="md:pl-5 pl-3  text-xs text-center w-fit">
          <FaCloudSun
            onClick={() => setTheme("light")}
            className="text-yellow-200 text-2xl md:text-3xl cursor-pointer "
          ></FaCloudSun>
        </div>
      );
    } else {
      return (
        <div className="md:pl-5 pl-3  text-xs text-center w-fit">
          <FaCloudMoon
            onClick={() => setTheme("dark")}
            className="text-purple-900 text-2xl md:text-3xl cursor-pointer "
          ></FaCloudMoon>
        </div>
      );
    }
  };
  const [isConnected, setConnected] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [searchOpen, setSearch] = useState(false);

  const openSearch = () => {
    setSearch(!searchOpen);
  };
  const handleClick = () => {
    setOpen(!isOpen);
  };
  const userOrder = 0;
  return (
    <div className="pt-1 pb-2 sticky top-0 left-0 right-0 bg-white dark:bg-custom-dark-bg z-50 md:relative">
      <div className="flex justify-between pr-2 md:hidden">
        <div className="ml-auto">
          <LangSwitcher></LangSwitcher>
        </div>
      </div>

      <div
        className={`${
          locale === "fr" ? "ml-auto" : "mr-auto flex-row-reverse"
        } md:flex  w-fit mr-2 text-xs md:text-sm  font-normal hidden `}
      >
        <div className="md:px-2 hover:text-custom-green ">
          <a href="tel:023 80 44 97">023 80 44 97-98</a>
        </div>
        |
        <Link className="md:px-2 hover:text-custom-green " href="/SitePlan">
          <a className="hover:text-custom-green px-2">
            {content.upHeader.planSite}
          </a>
        </Link>
        |
        <Link className="md:px-2 hover:text-custom-green " href="">
          <a> {content.upHeader.content}</a> 
        </Link>
        |
        <div className="md:px-2 hover:text-custom-green ">
          {content.upHeader.menu}
        </div>
        |<LangSwitcher></LangSwitcher>
      </div>

      <div
        className={`${
          locale === "fr" ? "flex-row" : "flex-row-reverse"
        }  flex  px-3 lg:px-6  md:py-5 py-3 justify-between clear-right `}
      >
        <div>
          {" "}
          <Link href="/" className="">
            <a>
              <img
                src="/imgs/indexaLogoBlue.png"
                className="w-40 md:mx-12 md:-mt-3 md:w-52 dark:hidden"
              ></img>
              <img
                src="/imgs/indexaLogoWhite.png"
                className="w-40 md:ml-12 md:-mt-3 md:w-52 dark:block hidden"
              ></img>
            </a>
          </Link>
        </div>

        <div
          className={`${
            locale === "fr" ? "flex-row" : "flex-row-reverse"
          } w-fit  grid-cols-1 md:grid-cols-6 hidden md:inline-flex `}
        >
          <div className="lg:px-6 px-4 font-normal lg:text-xl hover:text-custom-green">
            <Link href="/">
              <a>{content.Navbar.acceuil}</a>
            </Link>
          </div>
          <div className="lg:px-6 px-4 font-normal lg:text-xl hover:text-custom-green">
            <Link href="/products">
              <a>{content.Navbar.produits}</a>
            </Link>
          </div>
          <div className="lg:px-6 px-4 w-fit font-normal lg:text-xl hover:text-custom-green">
            {" "}
            <Link href="/about">
              <a>{content.Navbar.propos}</a>
            </Link>
          </div>
          <div className="lg:px-6 px-4 w-fit font-normal lg:text-xl hover:text-custom-green">
            <Link href="/contact">
              <a>{content.Navbar.contact}</a>
            </Link>
          </div>
          {/* Search Input */}
          <div className="px-3 my-auto h-auto -mt-2">
            <SearchInput content={content} />
          </div>
          {/* Theme changer  */}
          <div>{renderThemeChanger()}</div>

          {/* if user is not connected then display profil and shop bag */}
          {isConnected && (
            <>
              <div className="w-fit ml-auto font-normal text-xl pl-6 pr-4">
                <Link href="/profil">
                  <a className="flex gap-1 text-lg">
                    <img
                      src="/imgs/profilPic.png"
                      alt="profilPic"
                      className="rounded-full"
                      width="30px"
                    ></img>
                    profil
                  </a>
                </Link>
              </div>

              <div className="font-semibold text-xl justify-between">
                <Link href="/payment">
                  <a className="  w-fit ml-auto flex gap-2">
                    <img
                      src="/imgs/chariot.svg"
                      alt="chariot icon"
                      width="30px"
                      className="-mt-1"
                    ></img>
                    {userOrder}
                  </a>
                </Link>
              </div>
            </>
          )}

          {/* if user not connected then display login and signUp buttons  */}
          {!isConnected && (
            <>
              <div className="lg:px-3 px-1 font-semibold lg:text-xl hidden">
                <Link href="/logIn">
                  <button className="lg:text-sm text-xs font-bold loginButton py-2 rounded-lg">
                    Connectez-vous
                  </button>
                </Link>
              </div>

              <div className="lg:px-3 px-1 font-semibold lg:text-xl hidden">
                <Link href="/signUp">
                  <button className="lg:text-sm text-xs font-bold signUpButton py-2 rounded-lg">
                    Inscrivez-vous
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>

        {/* reponsive nav content */}
        <div
          className={`${
            locale === "fr" ? "flex-row" : "flex-row-reverse"
          } md:hidden flex gap-2`}
        >
          <FaSearch
            onClick={openSearch}
            className="text-custom-dark-blue mx-2 dark:text-custom-green text-3xl"
          />
          <div className="inline-flex   ">
            <img
              src={isOpen ? "/imgs/greenX.png" : "/imgs/greenBurgre.png"}
              width="28px"
              onClick={handleClick}
              className="dark:block hidden"
            ></img>
          </div>
          <div className="flex md:hidden dark:hidden ">
            <img
              src={isOpen ? "/imgs/X.png" : "/imgs/burger.png"}
              width="28px"
              onClick={handleClick}
            ></img>{" "}
          </div>
        </div>
      </div>
      <div className={`${searchOpen ? "block" : "hidden"} px-3 md:hidden`}>
        <SearchInput content={content} />
      </div>
      <div className={`${isOpen ? "block" : "hidden"} gap-y-2 grid md:hidden`}>
        <div className="px-6 font-normal text-xl w-fit mx-auto">
          {" "}
          <Link href="/">
            <a onClick={handleClick}>{content.Navbar.acceuil}</a>
          </Link>
        </div>
        <div className="px-6 font-normal text-xl w-fit mx-auto">
          {" "}
          <Link href="/products">
            <a onClick={handleClick}>{content.Navbar.produits}</a>
          </Link>
        </div>
        <div className="px-6 w-fit font-normal text-xl  mx-auto">
          {" "}
          <Link href="/about">
            <a onClick={handleClick}>{content.Navbar.propos}</a>
          </Link>
        </div>
        <div className="px-6 w-fit font-normal text-xl  mx-auto">
          <Link href="/contact">
            <a onClick={handleClick}>{content.Navbar.contact}</a>
          </Link>
        </div>
        <div className="px-6 w-fit font-normal text-xl mx-auto">
          {renderThemeChanger()}
        </div>

        {/* if user is not connected then display profil and shop bag */}
        {isConnected && (
          <>
            <div className="ml-auto font-normal text-xl pl-6 pr-4 w-fit mx-auto">
              <Link href="/profil">
                <a className="flex gap-1 text-lg">
                  <img
                    src="/imgs/profilPic.png"
                    alt="profilPic"
                    className="rounded-full"
                    width="30px"
                    onClick={handleClick}
                  ></img>
                  profil
                </a>
              </Link>
            </div>

            <div className="font-semibold text-xl justify-between w-fit mx-auto">
              <Link href="/payment">
                <a className="  w-fit ml-auto flex gap-2" onClick={handleClick}>
                  <img
                    src="/imgs/chariot.svg"
                    alt="chariot icon"
                    width="30px"
                    className="-mt-1"
                  ></img>
                  {userOrder}
                </a>
              </Link>
            </div>
          </>
        )}

        {/* if user not connected then display login and signUp buttons  */}
        {!isConnected && (
          <>
            <div className="px-3 font-semibold text-xl w-fit mx-auto hidden">
              <Link href="/logIn">
                <button
                  className="text-sm font-bold loginButton py-2 rounded-lg"
                  onClick={handleClick}
                >
                  Connectez-vous
                </button>
              </Link>
            </div>

            <div className="px-3 font-semibold text-xl w-fit mx-auto hidden">
              <Link href="/signUp">
                <button
                  className="text-sm font-bold signUpButton py-2 rounded-lg"
                  onClick={handleClick}
                >
                  Inscrivez-vous
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
