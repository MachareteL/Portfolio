import mypicture from './assets/me.png'
import SwipperComponent from './components/SwipperComponent'

export default function Index() {
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
            <p className="subtitle text-xl sm:text-3xl">
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
          <h2 className="subtitle text-xl font-bold text-wine">
            Web Developer
          </h2>
        </hgroup>
        <main className="container mx-auto">
          <h1 className="title p-4 text-3xl">Recent projects</h1>
        </main>
        <SwipperComponent />
      </div>
      <div className="relative h-screen">
        <div className="absolute left-1/2 h-screen w-px translate-x-1/2 bg-black" />
        <div className="grid grid-cols-2 gap-2">
          <div className="place-self-end">
            <h1 className="title text-3xl">Front-end</h1>
            <h2 className="subtitle text-xl font-extrabold text-wine">
              skills
            </h2>
          </div>
          <div className="">
            <h1 className="title text-3xl">back-end</h1>
            <h2 className="subtitle text-xl font-extrabold text-wine">
              skills
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
