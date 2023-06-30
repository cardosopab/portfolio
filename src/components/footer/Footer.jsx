import Image from '../footer/Image';
import Intro from '../footer/Intro';
import Links from '../footer/Links';
import Form from '../footer/Form';
export default function Footer() {
    return (
        <section class="md:flex bg-periwinkle p-10 min-h-screen" id="contact">
            <Image />
            <div class="mx-auto md:flex-1">
                <div class="max-w-sm mx-auto">
                    <Intro />
                    <Links />
                    <Form />
                </div>
            </div>
        </section>
    )
}