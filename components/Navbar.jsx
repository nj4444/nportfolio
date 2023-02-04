import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import SocialTray from "./SocialTray";
import Head from "next/head";
import LOGO from "../assets/logo.svg";

const variants = {
  open: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    transition: {
      // duration: 0.1,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const childVariants = {
  open: {
    y: 0,
    opacity: 1,
    rotateZ: "0deg",
    transition: { stiffness: 1000 },
  },
  closed: {
    y: 50,
    opacity: 0,
    rotateZ: "5deg",
    transition: { stiffness: 200, duration: 0.1 },
  },
};

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [page, setPage] = useState("home");
  const router = useRouter();
  const defaultNav = {
    home: "inActive",
    about: "inActive",
    contact: "inActive",
    work: "inActive",
  };
  const [isActive, setActive] = useState(defaultNav);
  useEffect(() => {
    let Path = router.asPath.slice(1);
    Path = Path === "" ? "home" : Path;
    setActive({ ...defaultNav, [Path]: "Active" });
    setPage(Path);
  }, [router]);

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      exitBeforeEnter
      className={
        isOpen
          ? "fixed container pointer-events-none left-1/2 transfrom -translate-x-1/2 md:px-2 px-4 mx-auto text-light  z-20 top-7 transition duration-1000 ease-in-out antialiased w-full py-4 bg-dark"
          : "fixed container pointer-events-none left-1/2 transfrom -translate-x-1/2 md:px-2 px-4 mx-auto text-light  z-20 top-7 transition duration-1000 ease-in-out antialiased w-full py-4"
      }
    >
      <Head>
        <title>{page.toUpperCase() + " | Naresh Portfolio"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="title" content="Naresh - Portfolio" />
        <meta
          name="description"
          content="Naresh Jhawar, Frontend Dev and Designer based in India. Explore more about me and my works here !"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nareshjhawar.me/" />
        <meta property="og:title" content="Naresh - Portfolio" />
        <meta property="og:site_name" content="Naresh" />
        <meta
          property="og:description"
          content="Naresh Jhawar, Frontend Dev and Designer based in India. Explore more about me and my works here !"
        />
        <meta property="og:image" content="/thumbnail.png" />
<meta name="keywords" content="PortFolio, about me, about Naresh,Naresh,  Naresh.me, Naresh Jhawar, Naresh Jhawar chathoth" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.Naresh.me/" />
        <meta name="twitter:site" content="@Naresh_me" />
		<meta name="twitter:creator" content="@Naresh_me" />
        <meta property="twitter:title" content="Naresh - Portfolio" />
        <meta
          property="twitter:description"
          content="Naresh Jhawar, Frontend Dev and Designer based in India. Explore more about me and my works here !"
        />
        <meta property="twitter:image" content="https://www.Naresh.me/thumbnail.png" />
      </Head>
      <div className="flex justify-between items-center">
        <ul className="md:flex pointer-events-auto	 hidden items-center space-x-20 text-xs antialiased font-medium tracking-widest">
        <li>
            <Link href="/">
              <a
                className={`h-12 flex flex-col justify-center ${isActive.home}`}
              >
                <LOGO width={50} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.home}`}
              >
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.work}`}
              >
                WORK
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.about}`}
              >
                ABOUT
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.contact}`}
              >
                CONTACT
              </a>
            </Link>
          </li>
	  <li>
              <a
	      	href="https://Naresh.me/resume.pdf"
		target="_blank"
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.contact}`}
              >
                RESUME
              </a>
          </li>
        </ul>
        <button
          className="text-light pointer-events-auto	 md:hidden w-10 h-10 relative focus:outline-none"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <div className="block w-10 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2 ">
            <span
              className={`block rounded-full absolute h-0.5 w-9 bg-current transform transition duration-1000 ease-in-out ${
                isOpen ? "-rotate-45" : "-translate-y-2.5"
              }`}
            ></span>
            <span
              className={`block rounded-full absolute  h-0.5 w-9 bg-current   transform transition duration-1000 ease-in-out ${
                isOpen ? "-translate-x-10 opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block rounded-full absolute  h-0.5 w-9 bg-current transform  transition duration-1000 ease-in-out ${
                isOpen ? "rotate-45" : "translate-y-2.5"
              }`}
            ></span>
          </div>
        </button>
        <Link href="/">
          <a className="pointer-events-auto">
            <motion.svg
              layoutId="loader"
              id="brand"
              width="149"
              height="28"
              viewBox="0 0 149 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
          d="M0,2.65c0-.23,.06-.51,.19-.82,.13-.31,.3-.6,.51-.88,.21-.27,.46-.5,.76-.68,.3-.18,.6-.27,.92-.27h15.56c.31,0,.62,.09,.92,.27,.3,.18,.55,.41,.76,.68,.21,.27,.38,.57,.51,.88,.13,.31,.19,.58,.19,.82V27.5H12.13V7.25c0-.21-.05-.42-.16-.64-.1-.22-.26-.33-.47-.33H6.08V3.32h-1.48V7.53h3.59V27.5H0V2.65ZM33.23,27.5h-8.19L32.72,0h3.78l-1.6,7.53h3.24l-4.91,19.97Zm5.42-9.98l-.7-2.42,1.91-8.81h-3.16l1.29-6.28h3.74l7.68,27.5h-8.19l-.86-3.12h-4.8l1.64-6.86h1.44ZM58.73,7.53h3.59V27.5h-8.19V0h4.6V7.53Zm6.9,9.56h-1.79v-6.98h1.79c.21,0,.36-.11,.47-.33,.1-.22,.16-.44,.16-.64v-1.87c0-.21-.05-.42-.16-.64-.1-.22-.26-.33-.47-.33h-5.42V0h11.86c.31,0,.62,.09,.92,.27,.3,.18,.55,.41,.76,.68,.21,.27,.38,.57,.51,.88,.13,.31,.19,.58,.19,.82V11.43c0,.1-.1,.26-.29,.47s-.41,.42-.64,.62-.47,.41-.7,.6-.39,.33-.47,.41l-.04,.04,.08,.08c.1,.08,.27,.2,.49,.37s.45,.36,.68,.57,.44,.41,.62,.6c.18,.19,.27,.33,.27,.41v11.9h-8.19v-9.44c0-.21-.05-.42-.16-.64s-.26-.33-.47-.33ZM84.08,0V7.53h3.59v2.57h8.85v6.98h-8.85v10.41h-8.19V0h4.6Zm12.83,0V6.28h-11.35V0h11.35Zm-7.72,27.5v-6.98h7.72v6.98h-7.72ZM106.55,7.53h3.59v2.57h7.88c.31,0,.62,.09,.92,.27,.3,.18,.55,.41,.76,.68,.21,.27,.38,.57,.51,.88,.13,.31,.19,.58,.19,.82v12.09c0,.23-.06,.51-.19,.82-.13,.31-.3,.6-.51,.88-.21,.27-.46,.5-.76,.68-.3,.18-.6,.27-.92,.27h-6.36v-6.98h.55c.21,0,.36-.11,.47-.33,.1-.22,.16-.44,.16-.64v-1.48c0-.21-.05-.41-.16-.6s-.25-.32-.43-.37h-7.92c-.31,0-.62-.09-.92-.27-.3-.18-.55-.41-.76-.68-.21-.27-.38-.57-.51-.88-.13-.31-.19-.58-.19-.82V2.65c0-.23,.06-.51,.19-.82,.13-.31,.3-.6,.51-.88,.21-.27,.46-.5,.76-.68,.3-.18,.6-.27,.92-.27h2.22V7.53Zm-4.6,19.97v-6.98h8.19v6.98h-8.19ZM108.03,0h12.36V6.28h-12.36V0Zm25.58,6.28h-8.19V0h8.19V6.28Zm-8.19,21.22V7.53h8.19V27.5h-8.19ZM145.74,0V27.5h-8.19v-10.41h-2.42v-6.98h2.42V0h8.19Z"
          fill="#F7F7F7"
              />
            </motion.svg>
          </a>
        </Link>

        {/* <img src="https://placehold.co/120x42" alt="vx" /> */}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            animate="open"
            initial="closed"
            exit="closed"
            variants={variants}
            className="flex pointer-events-auto	 flex-col md:hidden space-y-8 h-screen items-center justify-center text-xl tracking-widest"
          >
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                title="HOME"
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/"
              >
                HOME
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/about"
              >
                ABOUT
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/work"
              >
                WORK
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/contact"
              >
                CONTACT
              </Link>
            </motion.li>
	    <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <a
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="https://www.Naresh.me/resume.pdf"
		target="_blank"
              >
                RESUME
              </a>
            </motion.li>
            <motion.div
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <SocialTray />
            </motion.div>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
