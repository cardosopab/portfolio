import { createSignal, onCleanup, createEffect } from 'solid-js';
import Thanks from '../footer/Thanks'

export default function ContactForm() {
    const [showModal, setShowModal] = createSignal(false);

    function handleSubmit() {
        setShowModal(true);
    }

    createEffect(() => {
        if (showModal()) {
            const timeoutId = setTimeout(() => {
                setShowModal(false);
            }, 4000);

            onCleanup(() => {
                clearTimeout(timeoutId);
            });
        }
    });

    return (
        <>
            <div class="px-2 mt-6 gap-6 md:gap-32">
                <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLSdPgktKjPfuDmIvXdzD6IM1WfFtIB8VEtY2Xq8yjYkzPcBUpg/formResponse"
                    method="post"
                    target="hidden_iframe"
                    onsubmit={handleSubmit}
                >
                    <div>
                        <label class="text-purple-haze block mb-6 font-bold">Name</label>
                        <input class="w-full border bg-purple-haze p-4" name="entry.2005620554" />
                    </div>
                    <div>
                        <label class="text-purple-haze block my-6 font-bold">Email</label>
                        <input class="w-full border bg-purple-haze p-4" name="entry.1045781291" />
                    </div>
                    <div>
                        <label class="text-purple-haze block my-6 font-bold">Message</label>
                        <textarea class="w-full border bg-purple-haze p-4" name="entry.839337160"></textarea>
                    </div>
                    <div class="py-4">
                        <button
                            class="p-2 bg-light-red hover:bg-transparent hover:border hover:text-light-red border-light-red rounded text-periwinkle font-bold"
                        >
                            Send it!
                        </button>
                    </div>
                </form>
            </div>
            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style="display: none"
            ></iframe>

            {showModal() && (
                <Thanks />
            )}
        </>
    );
}
