import { createSignal } from "solid-js";
import Summary from "./Summary";
import ButtonComponent from "./ButtonComponent";
import Modal from "./Modal_Window";

export default function Project(props) {
  const [showModal, setShowModal] = createSignal(false);
  const [modalImage, setModalImage] = createSignal();

  function openModal(imageSrc) {
    setShowModal(true);
    setModalImage(imageSrc);
  }

  const closeModal = () => setShowModal(false);

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 bg-secondary">
      {props.data.map((project) => {
        return (
          <article id="project-article" class="p-4 flex flex-col">
            <h2 class="text-text text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
              <a
                href={project.title}
                target="_blank"
                class="text-primary font-bold underline"
                title={project.title}
              >
                {project.name}
              </a>
            </h2>
            <img
              src={project.images[0]}
              class="w-80 sm:w-60 md:w-80 lg:w-96 mx-auto my-10 cursor-pointer"
              alt={project.name}
              loading="lazy"
              onClick={() => openModal(project.images[1])}
            />
            <div class="flex flex-col w-80 sm:w-60 md:w-80 lg:w-96 mx-auto">
              <ButtonComponent
                live={project.live}
                link={project.link}
                status={project.status}
                github={project.github}
                text={project.text}
              />
              <Summary
                name={project.name}
                bulletpoints={project.bulletpoints}
                stack={project.stack}
              />
            </div>
          </article>
        );
      })}
      {/* Modal section placeholder */}
      {showModal() && <Modal image={modalImage()} closeModal={closeModal} />}
    </div>
  );
}
