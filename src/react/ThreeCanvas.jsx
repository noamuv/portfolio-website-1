import { useEffect } from 'react';
import Three from '../three.js';
import {Canvas} from '@react-three/fiber';

export default function ThreeCanvas() {
    useEffect(() => {
        new Three(document.getElementById('canvas'));
    }, []);

    return(
        <div>
             <canvas id='canvas'></canvas>
        </div>
    )
}




