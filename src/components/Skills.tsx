export default function Skills() {
  const frontendTech = ["React js", "Vue js", "Tailwind", "Next js"]
  const backendTech = ["Javascript", "Java", "C#", "Python"]
  return (
    <div className="mb-10 hidden grid-cols-2 gap-8 md:grid">
      <div className="title place-self-end">
        <h1 className="text-3xl">Front-end</h1>
        <h2 className="text-xl font-medium text-wine">skills</h2>
        <div className="grid grid-cols-2 gap-2">
          {frontendTech.map((tech) => (
            <h1 className="rounded-full bg-gray-800 px-2 text-center text-white">
              {tech}
            </h1>
          ))}
        </div>
      </div>
      <div className="title place-self-start">
        <h1 className="text-3xl">Back-end</h1>
        <h2 className="text-xl font-medium text-wine">skills</h2>
        <div className="grid grid-cols-2 gap-2">
          {backendTech.map((tech) => (
            <h1 className="rounded-full bg-gray-800 px-2 text-center text-white">
              {tech}
            </h1>
          ))}
        </div>
      </div>
    </div>
  )
}
