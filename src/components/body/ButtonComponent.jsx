export default function ButtonComponent(props) {
    return (
        <div class='flex place-content-between'>
            {(props.live != '') &&
                <a href={props.live} target="_blank"
                    class="p-2 bg-light-red rounded text-periwinkle font-bold border-light-red hover:bg-periwinkle hover:text-light-red hover:border"
                    title={props.live}>Live Demo!</a>
            }
            {(props.link != '') &&
                <a href={props.link} target="_blank"
                    class="p-2 bg-light-red rounded text-periwinkle font-bold border-light-red hover:bg-periwinkle hover:text-light-red hover:border"
                    title={props.link}>{props.text}</a>
            }
            {(props.github !== '') && (
                <button
                    onClick={() => window.open(props.github, "_blank")}
                    class="p-2 bg-periwinkle rounded border-periwinkle hover:bg-light-red hover:border"
                    title={props.github}
                    style={{ fontSize: 0 }}
                >
                    <img src="assets/svg/github.svg" alt="Github Logo" />
                </button>
            )}
        </div>
    )
}