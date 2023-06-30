import { render } from 'solid-js/web';
import App from '../src/App';
const rootDiv = document.getElementById('root');
if (import.meta.env.DEV && !(rootDiv instanceof HTMLElement)) {
    throw new Error(
        'rootDiv element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}
render(() => (
    <App />
), rootDiv);