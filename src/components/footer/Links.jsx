export default function Links() {
    return (
        <>
            {/* <!-- Github --> */}
            <div class="mb-6 w-6">
                <a href="https://github.com/cardosopab" title="Github Profile" target="_blank">
                    <img src="assets/svg/github.svg" alt="Github Logo" />
                </a>
            </div>
            {/* <!-- LinkedIn --> */}
            <div class="mb-6 w-6">
                <a href="https://www.linkedin.com/in/pablo-cardoso-48b226240/" title="LinkedIn Profile" target="_blank">
                    <img src="assets/svg/linkedin.svg" alt="LinkedIn Logo" />
                </a>
            </div>
            {/* freeCodeCamp */}
            <div class="mb-6 w-6">
                <a href="https://www.freecodecamp.org/cardosopab" title="https://www.freecodecamp.org/cardosopab" target="_blank" aria-label="freeCodeCamp Logo">
                    <i class="fa-brands fa-free-code-camp text-light-red text-[24px] max-w-[24px]"></i>
                </a>
            </div>
            {/* <!-- UpWork --> */}
            <div class="mb-6 w-6">
                <a href="https://www.upwork.com/freelancers/~0132e42b63c5ca2ce7" title="UpWork Profile" target="_blank">
                    <img src="assets/svg/upwork.svg" alt="UpWork Logo" />
                </a>
            </div>
            {/* <!-- Resume --> */}
            <div class="mb-6 w-6">
                <a href="PabloCardoso.pdf" target="_blank" title="resume" class="underline text-light-red">resume</a>
            </div>
            {/* <!-- Email --> */}
            <a href="mailto:cardosopab@gmail.com" title="mailto:cardosopab@gmail.com"
                class="underline text-light-red">cardosopab@gmail.com</a>
        </>
    )
}