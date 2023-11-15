import "aos/dist/aos.css"
import mypicture from "./assets/me.png"
import SwipperComponent from "./components/SwipperComponent"
import programmingAmico from "./assets/Programming-amico.svg"
import codingAmico from "./assets/code-development-amico.svg"
import phoneAmico from "./assets/confirmed-attendance.svg"
import githubIcon from "./assets/github-mark-white.svg"
import instagramIcon from "./assets/iconmonstr-instagram-11.svg"
import linkedinIcon from "./assets/iconmonstr-linkedin-3.svg"
import darkModeAmico from "./assets/Dark-mode-amico.svg"
import sourceCodeAmico from "./assets/Source code-amico.svg"
import Skills from "./components/Skills"
import fristWave from "./assets/LightGrayWave.svg"
import secondWave from "./assets/DarkGrayWave.svg"
import thirdWave from "./assets/Blackwave.svg"
import AOS from "aos"

export default function Index() {
  AOS.init()
  return (
    <>
      <div
        id="main"
        className="relative h-screen bg-[url('assets/mbkpg.jpg')] bg-cover bg-fixed bg-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-70"
      >
        <div className="ms:justify-between container relative z-20 mx-auto flex h-full flex-col items-center justify-center sm:flex-row sm:justify-between">
          <hgroup className="title order-2 p-10 text-3xl text-white sm:order-1 sm:text-6xl">
            <h1 className="">Hello World!</h1>
            <hgroup className="flex">
              <h2>I'm</h2>
              <span className="text-wine">&nbsp;Lucas Macharete</span>
            </hgroup>
            <p className="quicksand text-xl sm:text-3xl">
              Web dev | Technology enthusiastic
            </p>
          </hgroup>
          <div className="order-1 w-72 overflow-hidden rounded-full sm:order-2">
            <img src={mypicture} alt="Lucas.png" className="" />
          </div>
        </div>
      </div>
      <div className="bg-white py-4">
        <hgroup className="mt-10 text-center">
          <h1 className="title text-3xl">About me</h1>
          <h2 className="quicksand text-xl font-bold text-wine">
            Web Developer
          </h2>
        </hgroup>
        <h1 className="title container mx-auto p-4 text-3xl">
          Recent projects
        </h1>
        <SwipperComponent />
      </div>
      <div className="relative">
        <h1 className="title container mx-auto p-4 text-3xl">World View</h1>
        <div className="absolute left-1/2 hidden h-screen w-px translate-x-1/2 bg-black lg:block" />
        <Skills />
        <div className="grid lg:grid-cols-2">
          <div className="flex">
            <img
              src={programmingAmico}
              alt="programming"
              className="order-2 w-40 lg:w-96"
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-anchor-placement="top-center"
              data-aos-offset="10"
            />
            <div className="flex lg:order-2">
              <p className="quicksand p-4">
                Beyond HTML, CSS, and JavaScript, I enjoy delving into web
                frameworks to explore the solutions they bring to the table and
                the problems these technologies address. I'm curious about how
                they tackle these challenges, the methods they employ, and
                determining the optimal tool for the job.
              </p>
            </div>
          </div>
          <div className="flex lg:mt-32">
            <div className="flex">
              <p className="quicksand p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias sapiente rem dignissimos aliquam quis molestiae natus,
                atque, nisi minus deserunt sequi numquam cumque quos ex autem,
                aspernatur expedita hic sit!
              </p>
            </div>
            <img
              src={codingAmico}
              alt="programming"
              className="w-40 lg:w-96"
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-anchor-placement="top-center"
              data-aos-offset="10"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="flex">
            <img
              src={sourceCodeAmico}
              alt="programming"
              className="order-2 w-40 lg:w-96"
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-anchor-placement="top-center"
              data-aos-offset="10"
            />
            <div className="flex lg:order-2">
              <p className="quicksand p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias sapiente rem dignissimos aliquam quis molestiae natus,
                atque, nisi minus deserunt sequi numquam cumque quos ex autem,
                aspernatur expedita hic sit!
              </p>
            </div>
          </div>
          <div className="flex lg:mt-32">
            <div className="flex">
              <p className="quicksand p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias sapiente rem dignissimos aliquam quis molestiae natus,
                atque, nisi minus deserunt sequi numquam cumque quos ex autem,
                aspernatur expedita hic sit!
              </p>
            </div>
            <img
              src={darkModeAmico}
              alt="programming"
              className="w-40 lg:w-96"
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-anchor-placement="center-center"
            />
          </div>
        </div>
        <div className="relative h-80" id="waves">
          <img
            src={fristWave}
            alt=""
            id="wave1"
            className="wave absolute bottom-0"
          />
          <img
            src={secondWave}
            alt=""
            id="wave2"
            className="wave absolute bottom-0"
          />
          <img
            src={thirdWave}
            alt=""
            id="wave3"
            className="wave absolute bottom-0"
          />
        </div>
      </div>
      <div className="relative h-screen bg-[url('assets/btmbkpg.jpg')] bg-cover bg-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-70">
        <div className="container relative z-20 mx-auto flex h-full flex-wrap items-center gap-4 px-4 xl:p-16">
          <h1 className="title py-4 text-5xl text-white">Get in touch</h1>
          <div className="container mb-24 sm:mb-48 grid rounded-2xl border bg-gray-500 bg-opacity-30 text-white backdrop-blur-lg md:grid-cols-2">
            <div className="px-4 py-2 ">
              <h1 className="title py-4 text-xl">
                Reach me out in my social media
              </h1>
              <p className="quicksand">
                Feel free to get in touch through social media.
              </p>
              <div className="grid grid-cols-2">
                <div className="grid grid-rows-3 items-center">
                  <span className="flex items-center gap-2">
                    <img className="w-10" src={githubIcon} alt="" />
                    Check my most recent projects in my github
                  </span>
                  <span className="flex items-center gap-2">
                    <img className="w-10" src={instagramIcon} alt="" />
                    More of me in my instagram
                  </span>
                  <span className="flex items-center gap-2">
                    <img className="w-10" src={linkedinIcon} alt="" />
                    Some of my career at my linkedin
                  </span>
                </div>
                <img src={phoneAmico} alt="" className="w-96" />
              </div>
            </div>
            <div className="px-4 backdrop-blur-lg">
              <h1 className="title py-4 text-xl ">Or send me a message!</h1>
              <form className="quicksand grid grid-rows-3">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="rounded-lg border bg-transparent px-2 py-px"
                />
                <label htmlFor="email">Your E-mail</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="rounded-lg border bg-transparent px-2 py-px"
                />
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="resize-none rounded-lg border bg-transparent px-2 py-px"
                />
                <input
                  type="submit"
                  value="Send"
                  className="my-2 justify-self-end text-clip rounded-md bg-white px-4 py-2 font-bold text-black mix-blend-multiply"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
