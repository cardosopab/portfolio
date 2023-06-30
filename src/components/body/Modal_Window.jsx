
import Card from './Card';
export default function ModalWindow(props) {
    return (
        < div class="modal-overlay">
            <button onClick={props.closeModal} class='' ><i class="fa-solid fa-xmark modal-button"></i></button>

            <div class='modal'>
                return (
                <div>
                    <Card
                        class="project-image modal"
                        image={props.image}
                        alt={props.alt}
                    />
                </ div>
                );
            </div>
        </div >
    )
}