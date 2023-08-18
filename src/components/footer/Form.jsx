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
                        <label for="name" class="text-text block mb-6 font-bold">Name
                            <input id="name" class="w-full border bg-background p-4" name="entry.2005620554" />
                        </label>
                    </div>
                    <div>
                        <label for="email" class="text-text block my-6 font-bold">Email
                            <input id="email" class="w-full border bg-background p-4" name="entry.1045781291" />
                        </label>
                    </div>
                    <div>
                        <label for="message" class="text-text block my-6 font-bold">Message
                            <textarea id="message" class="w-full border bg-background p-4" name="entry.839337160"></textarea>
                        </label>
                    </div>
                    <div class="py-4">
                        <button
                            class="p-1 sm:p-2 bg-primary border border-secondary  rounded text-secondary font-bold hover:drop-shadow-xl"
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
