export default function ButtonComponent(props) {
  console.log(props.status);
  return (
    <div class="flex place-content-between">
      {props.live != "" && (
        <a
          href={props.live}
          target="_blank"
          class="p-1 sm:p-2 bg-primary border border-secondary  rounded text-secondary font-bold hover:drop-shadow-xl"
          title={props.live}
        >
          Live Demo!
        </a>
      )}
      {props.link != "" && (
        <a
          href={props.link}
          target="_blank"
          class="p-1 sm:p-2 bg-primary border border-secondary  rounded text-secondary font-bold hover:drop-shadow-xl"
          title={props.link}
        >
          {props.text}
        </a>
      )}
      {props.status && (
        <p className="p-2 bg-red-500 rounded text-white text-center">
          {props.status}
        </p>
      )}
      {props.github !== "" && (
        <button
          onClick={() => window.open(props.github, "_blank")}
          class="p-1 sm:p-2 bg-primary border border-secondary  rounded text-secondary font-bold hover:drop-shadow-xl"
          title={props.github}
          style={{ fontSize: 0 }}
        >
          <img src="assets/svg/github.svg" alt="Github Logo" />
        </button>
      )}
    </div>
  );
}
