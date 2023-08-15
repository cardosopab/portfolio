import { createSignal, onMount } from 'solid-js';
function Bio() {
    return (
        <div class="flex-auto flex flex-col sm:flex-row px-4 md:px-6 lg:px-10">
            {/* // <!-- left  --> */}
            <div class="flex-auto flex flex-col sm:w-1/2">
                <h2 class="flex-auto py-2 text-periwinkle text-center text-3xl sm:text-4xl lg:text-5xl">
                    My name is Pablo, <br />I'm a Front-End Developer.
                </h2>
                <h4 class="flex-auto p-2 text-periwinkle text-center sm:text-xl lg:text-2xl">
                    <i class="fa-solid fa-toolbox text-xl sm:text-2xl lg:text-3xl"></i> <a href="https://flutter.dev/" target="_blank" class="text-periwinkle  font-bold underline"
                        title="https://flutter.dev/">
                        Flutter</a>, <a href="https://dart.dev/" target="_blank" class="text-periwinkle  font-bold underline"
                            title="https://dart.dev/">
                        Dart</a>, <a href="https://www.ecma-international.org/" target="_blank" class="text-periwinkle  font-bold underline"
                            title="https://www.ecma-international.org/">
                        JavaScript</a>, <a href="https://www.python.org/" target="_blank" class="text-periwinkle  font-bold underline"
                            title="https://www.python.org/">
                        Python</a>
                </h4>
                <h3 class="flex-auto p-2 text-periwinkle text-center text-xl sm:text-2xl lg:text-3xl">
                    Let's build something great, together!
                </h3>
            </div>
            {/* //   <!-- right --> */}

            <div class="flex-auto flex flex-col sm:w-1/2">
                <img class="mx-auto my-auto w-1/4 sm:w-1/2" src="assets/webp/flutter-ascii.webp" alt="Flutter Ascii Art" />
                <img class="mx-auto my-auto w-1/4 sm:w-1/2" src="assets/webp/react-ascii.webp" alt="React Ascii Art" />
            </div>

        </div>
    )
}

export default Bio;