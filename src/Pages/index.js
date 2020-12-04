import Carrosel from '../Components/Carrosel';
import Promos from '../Components/Promos';
import Sobre from '../Components/Sobre';

import './css/index.css';

export default function Index() {
    return (
        <section>
            <Carrosel />
            <Promos />
            <Sobre />
        </section>
    );
}