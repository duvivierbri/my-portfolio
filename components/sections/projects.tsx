import ProjectSquare from '../projectSquare'

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col font-mono justify-center items-center w-screen bg-black pt-10 pb-10"
    >
      <p className="text-pink font-bold text-[40px] my-5 uppercase">Projects</p>
      <div className="grid grid-cols-2 gap-4">
        <ProjectSquare
          imageSrc="/images/podcastCover.png"
          slug="podcast-website"
        />
        <ProjectSquare imageSrc="/images/gaiaCover.png" slug="gaia-tool" />
        <ProjectSquare imageSrc="/images/pkCover.png" slug="penelopes-key" />
      </div>
    </div>
  )
}
