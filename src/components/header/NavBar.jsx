function NavBar() {
    return (
        <nav
            class="px-4 md:px-6 lg:px-10 py-3 text-sm sm:py-6 md:text-base lg:py-6 lg:text-lg bg-secondary flex items-center justify-between">
            <div>
                <img src="assets/svg/pc_logo.svg" class="h-5 sm:h-8" alt="Pablo Cardoso Logo" />
            </div>
            <ul class="flex justify-end items-center">
                <li>
                    <a href="/Pablo-Cardoso.pdf" target="_blank" title="Resume"
                        class="text-text hover:drop-shadow-xl">Resume</a>
                </li>
                <li>
                    <a href="#projects" class="text-text p-2 lg:p-10 hover:drop-shadow-xl">Projects</a>
                </li>
                <li>
                    <a href="#contact"
                        class="p-1 sm:p-2 bg-primary border border-secondary  rounded text-secondary font-bold hover:drop-shadow-xl">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;