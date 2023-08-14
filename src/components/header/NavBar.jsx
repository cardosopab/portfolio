function NavBar() {
    return (
        <nav
            class="px-4 md:px-6 lg:px-10 py-3 text-sm sm:py-6 md:text-base lg:py-6 lg:text-lg bg-periwinkle flex items-center justify-between">
            <div>
                <img src="assets/svg/pc_logo.svg" class="h-5 sm:h-8" alt="Pablo Cardoso Logo" />
            </div>
            <ul class="flex justify-end items-center">
                <li>
                    <a href="/PabloCardoso.pdf" target="_blank" title="Resume"
                        class="text-purple-haze">Resume</a>
                </li>
                <li>
                    <a href="#projects" class="text-purple-haze p-2 lg:p-10">Projects</a>
                </li>
                <li>
                    <a href="#contact"
                        class="p-1 sm:p-2 bg-light-red hover:bg-transparent hover:border hover:text-light-red border-light-red rounded text-periwinkle font-bold">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;