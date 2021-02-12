import Promos from '../Components/Promos';
import Sobre from '../Components/Sobre';

import {lazy, Suspense} from 'react';

import loading from '../loading.gif';

import './css/index.css';

const Carrosel = lazy(() => import('../Components/Carrosel'));


export default function Index() {
    return (
        <section>
        <Suspense fallback={<div style={{textAlign:'center', backgroundColor:'#fff'}}><img src={loading} width="230px" alt="carregando..." /></div>}>
          
        <Carrosel />

        </Suspense>
            
            <Promos />
            <Sobre />
        </section>
    );
}