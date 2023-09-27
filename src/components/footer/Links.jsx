export default function Links() {
    return (
        <>
            <div class='flex justify-evenly items-center mb-6'>
                {/* <!-- Github --> */}
                <a href="https://github.com/cardosopab" title="Github Profile" target="_blank" class="p-1 sm:p-2 bg-primary border border-secondary  rounded text-secondary font-bold hover:drop-shadow-xl">
                    <img src="assets/svg/github.svg" alt="Github Logo" />
                </a>
                {/* <!-- LinkedIn --> */}
                <a href="https://www.linkedin.com/in/pablo-cardoso-48b226240/" title="LinkedIn Profile" target="_blank" class='p-1 sm:p-2 bg-primary border border-secondary  rounded text-secondary font-bold hover:drop-shadow-xl'>
                    <img src="assets/svg/linkedin.svg" alt="LinkedIn Logo" />
                </a>
                {/* freeCodeCamp */}
                <a href="https://www.freecodecamp.org/cardosopab" title="https://www.freecodecamp.org/cardosopab" target="_blank" aria-label="freeCodeCamp Logo"
                    class='p-1 sm:p-2 bg-primary border border-secondary  rounded text-secondary font-bold hover:drop-shadow-xl'
                >
                    <img src="assets/svg/freeCodeCamp.svg" alt="" />
                </a>
                {/* <!-- UpWork --> */}
                {/* <a href="https://www.upwork.com/freelancers/~0132e42b63c5ca2ce7" title="UpWork Profile" target="_blank" class="p-1 sm:p-2 bg-primary border border-secondary  rounded text-secondary font-bold hover:drop-shadow-xl">
                    <img src="assets/svg/upwork.svg" alt="UpWork Logo" />
                </a> */}
            </div>
            <div className="flex justify-evenly mb-6">

                {/* <!-- Resume --> */}
                <a href="Pablo-Cardoso.pdf" target="_blank" title="resume" class="underline text-text">resume</a>
                {/* <!-- Email --> */}
                <a href="mailto:cardosopab@gmail.com" title="mailto:cardosopab@gmail.com"
                    class="underline text-text">cardosopab@gmail.com</a>
            </div>
        </>
    )
}