export default function Thanks() {
    return (
        <div class="modal-overlay">
            <div class="modal bg-purple-haze flex flex-col p-4">
                <section class="flex-auto">

                </section>
                {/* <!-- hero --> */}
                <section class="flex-auto h-auto">
                    <h1
                        class="font-bold text-4xl sm:text-5xl lg:text-6xl text-center text-periwinkle"
                    >
                        Thank YOU!
                    </h1>
                </section>
                {/* <!-- section2 --> */}
                <section class="flex-auto sm:flex ">
                    {/* <!-- left --> */}
                    <div class="flex-auto">
                        <div
                            class="wrapper justify-center flex text-xl sm:text-2xl md:text-3xl lg:text-4xl overflow-hidden sm:overflow-visible"
                        >
                            <ul class="dynamic-thankyou text-periwinkle">
                                <li><span>I'll get back to you,</span></li>
                            </ul>
                            <ul class="dynamic-ASAP">
                                <li><span class="pl-2">ASAP!</span></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- right --> */}
                    <div class="flex-auto mt-20 sm:mt-0">
                        <img
                            class="mx-auto animate-spin-slow w-1/3 sm:w-1/2"
                            src="assets/pc_300_purp.png"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}