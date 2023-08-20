import NavBar from '../header/NavBar';
import Hello from '../header/Hello';
import Bio from '../header/Bio';
function Header() {
    return (
        <header class="min-h-screen flex flex-col bg-secondary">
            <NavBar />
            <Hello />
            <Bio />
        </header>
    )
}

export default Header;