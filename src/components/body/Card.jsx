export default function Card(props) {
    return (
        <img
            class={props.class}
            alt={props.alt}
            src={props.image}
            onClick={() => {
                props.setSelectedList(props.images);
                props.openModal(props.index);
            }}
        />
    )
}