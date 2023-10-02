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
        <div className="container relative z-20 mx-auto flex h-full flex-wrap items-center justify-center gap-4 xl:p-16">
          <h1 className="title container py-4 text-5xl text-white">
            My main stack
          </h1>
          {technologies.map(({ src }) => (
            <div className="rounded-2xl border bg-gray-500 bg-opacity-30 backdrop-blur-lg sm:px-2 sm:py-8 xl:px-8 xl:py-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="215"
                height="188"
                viewBox="0 0 215 188"
                fill="none"
                className="w-20 sm:w-32"
              >
                <path
                  d="M175.611 60.9236C173.344 60.1683 171.076 59.455 168.809 58.7836C169.187 57.231 169.522 55.6784 169.858 54.1258C175.023 29.1164 171.622 9.01659 160.158 2.38659C149.114 -3.94968 131.1 2.63836 112.875 18.5C111.069 20.0526 109.306 21.6891 107.626 23.3256C106.492 22.2346 105.316 21.1436 104.141 20.0946C85.0342 3.14191 65.8857 -3.99164 54.4219 2.68032C43.4199 9.05855 40.1445 27.9834 44.7637 51.65C45.2256 53.9999 45.7295 56.3078 46.3174 58.6577C43.6299 59.413 40.9844 60.2522 38.5068 61.1334C16.083 68.8964 0 81.1493 0 93.8219C0 106.914 17.1328 120.048 40.4385 128.021C42.3281 128.65 44.2178 129.28 46.1494 129.825C45.5195 132.343 44.9736 134.819 44.4697 137.378C40.0605 160.667 43.5039 179.131 54.5059 185.467C65.8438 192.013 84.9082 185.299 103.469 169.06C104.938 167.759 106.408 166.416 107.878 164.99C109.726 166.794 111.657 168.514 113.589 170.193C131.562 185.635 149.324 191.887 160.284 185.551C171.622 179.005 175.317 159.157 170.53 134.987C170.152 133.14 169.732 131.252 169.271 129.322C170.614 128.944 171.916 128.524 173.218 128.105C197.447 120.09 215 107.124 215 93.8219C215 81.1074 198.455 68.7705 175.611 60.9236ZM118.796 25.2979C134.417 11.7022 148.988 6.37298 155.623 10.1915C162.72 14.2618 165.449 30.711 160.998 52.3214C160.704 53.7481 160.41 55.1329 160.032 56.5176C150.71 54.4195 141.262 52.9089 131.771 52.0697C126.312 44.2647 120.35 36.7955 113.883 29.7878C115.521 28.2352 117.116 26.7665 118.796 25.2979ZM70.2109 115.6C72.3525 119.251 74.5361 122.902 76.8457 126.468C70.2949 125.755 63.7861 124.706 57.3613 123.321C59.209 117.279 61.5186 111.026 64.2061 104.648C66.1377 108.341 68.1113 111.991 70.2109 115.6ZM57.4873 65.1198C63.5342 63.7771 69.959 62.686 76.6357 61.8468C74.4102 65.3297 72.2266 68.8964 70.1689 72.5052C68.1113 76.0719 66.0957 79.7226 64.2061 83.4153C61.5605 77.163 59.335 71.0365 57.4873 65.1198ZM68.9932 94.0317C71.7646 88.2409 74.7881 82.5761 77.9795 76.9951C81.1709 71.4142 84.6143 66.0011 88.2256 60.6719C94.5244 60.2103 100.949 59.9585 107.5 59.9585C114.051 59.9585 120.518 60.2103 126.774 60.6719C130.344 65.9591 133.745 71.3722 136.979 76.9112C140.212 82.4502 143.235 88.115 146.091 93.8638C143.277 99.6546 140.254 105.361 137.021 110.984C133.829 116.565 130.428 121.978 126.858 127.35C120.602 127.811 114.093 128.021 107.5 128.021C100.907 128.021 94.5244 127.811 88.3516 127.433C84.6982 122.104 81.2549 116.649 78.0215 111.068C74.7881 105.487 71.8066 99.8225 68.9932 94.0317ZM144.831 115.516C146.973 111.824 148.988 108.089 150.962 104.312C153.649 110.397 156.001 116.565 158.059 122.902C151.55 124.37 144.957 125.503 138.322 126.259C140.59 122.734 142.731 119.125 144.831 115.516ZM150.878 83.4153C148.904 79.7226 146.889 76.03 144.789 72.4212C142.731 68.8545 140.59 65.3297 138.364 61.8468C145.125 62.686 151.592 63.819 157.639 65.2038C155.707 71.4141 153.439 77.4567 150.878 83.4153ZM107.584 36.208C111.993 40.9917 116.15 46.0271 120.014 51.2304C111.699 50.8528 103.343 50.8528 95.0283 51.2304C99.1436 45.8173 103.385 40.7819 107.584 36.208ZM58.873 10.4853C65.9277 6.37298 81.5908 12.2477 98.0938 26.8505C99.1436 27.7736 100.193 28.7807 101.285 29.7878C94.7764 36.7955 88.7715 44.2647 83.2705 52.0697C73.7803 52.9089 64.374 54.3776 55.0518 56.4337C54.5059 54.2936 54.0439 52.1116 53.582 49.9296C49.6348 29.62 52.2383 14.3038 58.873 10.4853ZM48.585 121.097C46.8213 120.594 45.0996 120.048 43.3779 119.461C34.4336 116.649 24.2715 112.201 16.9229 106.369C12.6816 103.431 9.82617 98.8993 9.02832 93.8219C9.02832 86.1428 22.2979 76.3237 41.4463 69.6517C43.8398 68.8125 46.2754 68.0572 48.7109 67.3438C51.5664 76.4496 55.0098 85.3875 58.999 94.0317C54.9678 102.802 51.4824 111.866 48.585 121.097ZM97.5479 162.22C90.6191 168.556 82.5986 173.592 73.8643 177.033C69.2031 179.257 63.8281 179.466 59.041 177.578C52.3643 173.718 49.5928 158.905 53.3721 138.973C53.834 136.623 54.3379 134.273 54.9258 131.965C64.332 133.98 73.8223 135.364 83.4385 136.078C88.9814 143.925 95.0703 151.436 101.579 158.485C100.235 159.786 98.8916 161.045 97.5479 162.22ZM107.836 152.023C103.553 147.407 99.2695 142.288 95.1123 136.791C99.1436 136.959 103.301 137.043 107.5 137.043C111.825 137.043 116.066 136.959 120.266 136.749C116.402 142.078 112.245 147.156 107.836 152.023ZM162.72 164.612C162.342 169.731 159.822 174.515 155.791 177.746C149.114 181.606 134.879 176.571 119.51 163.395C117.746 161.884 115.982 160.248 114.177 158.569C120.602 151.478 126.522 143.967 131.897 136.078C141.514 135.28 151.088 133.812 160.536 131.672C160.956 133.392 161.334 135.113 161.67 136.791C163.728 145.855 164.063 155.296 162.72 164.612ZM170.362 119.503C169.187 119.88 168.011 120.258 166.793 120.594C163.854 111.446 160.242 102.508 156.085 93.8219C160.116 85.2616 163.518 76.4496 166.373 67.4278C168.557 68.0572 170.656 68.7286 172.672 69.4C192.24 76.1139 205.972 86.1009 205.972 93.738C205.972 101.963 191.316 112.579 170.362 119.503ZM107.5 113.208C118.124 113.208 126.732 104.606 126.732 93.9897C126.732 83.3733 118.124 74.7711 107.5 74.7711C96.876 74.7711 88.2676 83.3733 88.2676 93.9897C88.2676 104.606 96.876 113.208 107.5 113.208Z"
                  fill="white"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
