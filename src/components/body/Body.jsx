
import fetchData from '../../models/fetch';
import Project from './Project';
const data = await fetchData('projects.json');
function Body() {
    return (
        <div id="projects">
            <Project data={data} />
        </div>
    )
}

export default Body;