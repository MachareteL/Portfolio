import "aos/dist/aos.css"
import mypicture from "./assets/me.png"
import SwipperComponent from "./components/SwipperComponent"
import programmingAmico from "./assets/Programming-amico.svg"
import codingAmico from "./assets/code-development-amico.svg"
import Skills from "./components/Skills"
import fristWave from "./assets/LightGrayWave.svg"
import secondWave from "./assets/DarkGrayWave.svg"
import thirdWave from "./assets/Blackwave.svg"
import AOS from "aos"

export default function Index() {
  AOS.init()
  const technologies = [
    { src: "https://via.placeholder.com/150" },
    { src: "https://via.placeholder.com/150" },
    { src: "https://via.placeholder.com/150" },
    { src: "https://via.placeholder.com/150" },
    { src: "https://via.placeholder.com/150" },
    { src: "https://via.placeholder.com/150" },
    { src: "https://via.placeholder.com/150" },
    { src: "https://via.placeholder.com/150" },
  ]
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
              src={codingAmico}
              alt="programming"
              className="w-40 lg:w-96"
              data-aos="fade-right"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="flex">
            <img
              src={programmingAmico}
              alt="programming"
              className="order-2 w-40 lg:w-96"
              data-aos="fade-right"
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
              src={codingAmico}
              alt="programming"
              className="w-40 lg:w-96"
              data-aos="fade-right"
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
        <div className="container relative z-20 mx-auto flex h-full flex-wrap items-center gap-4 xl:p-16">
          <h1 className="title py-4 text-5xl text-white">
            Get in touch
          </h1>
          <div className="container rounded-2xl border bg-gray-500 bg-opacity-30 backdrop-blur-lg sm:px-2 sm:py-8 xl:px-8 xl:py-24">
            
          </div>
        </div>
      </div>
    </>
  )
}
