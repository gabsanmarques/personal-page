import { projects } from "../constants";

const Projects = () => (
    <section className="flex flex-col py-10" id="projects">
        <div className="bg-darkGray w-[100vw] py-2 px-5 ">
            <h3 className="font-russo text-[36px] text-lightOrange leading-8">here's what I've been building</h3>
        </div>

        <ul className="flex flex-row py-5 gap-5 flex-wrap justify-center list-none">
            {projects.map((project, index) => (
                <li key={project.id} className="card block relative overflow-hidden rounded-2xl w-[100%] sm:w-[30%] cursor-pointer flex-0 decoration-none">
                    <a href={project.link} target="_blank">
                        <img src={project.banner} alt="" />
                        <div className="card-overlay bg-orange font-josefin text-lightOrange absolute bottom-0 left-0 right-0 rounded-t-3xl">
                            <h3 className="card-title uppercase text-center font-bold bg-orange p-5 sm:pb-5 pb-0 rounded-t-3xl">
                                {project.title}
                            </h3>
                            <p className="card-desc font-light text-[16px] leading-5 p-5">
                                {project.desc}
                            </p>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    </section>
)

export default Projects