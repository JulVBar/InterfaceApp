import { useSelector } from 'react-redux';
import { createBoxShadow } from '../../utils/drawFunctions';

import MusicPlayer from './components/MusicPlayer';

import './interfaceBoard.scss';

const InterfaceBoard = () => {
    const { colors, themeStyle } = useSelector(state => state);
    const { layout } = colors;
    const isNeuromorphic = themeStyle === 'neuromorphic';
    const boxShadow = isNeuromorphic ? createBoxShadow(true, layout) : 'none';

    return (
        <div
            className='interfaceBoard' 
            style={{background: layout,
                    boxShadow: boxShadow}}
        >
            <div className='interfaceBoardColumn'>
                <MusicPlayer />
            </div>
            <div className='interfaceBoardColumn'>2</div>
        </div>
    )
}

export default InterfaceBoard;