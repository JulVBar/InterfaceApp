import { useSelector } from 'react-redux';
import { createBoxShadow } from '../../utils/drawFunctions';
import { gradient } from '../../constants/styleConstants';

import MusicPlayer from './components/MusicPlayer';
import CheckBox from './components/CheckBox';
import TimeLine from './components/TimeLine';
import IconBage from './components/IconBage';
import IconButton from './components/IconButton';
import PillarBar from './components/PillarBar';

import './interfaceBoard.scss';

const InterfaceBoard = () => {
    const { colors, themeStyle } = useSelector(state => state);
    const {layout, main, primary, secondary, text, disabled} = colors;

    const isNeuromorphic = themeStyle === 'neuromorphic';
    const shadowOut = isNeuromorphic ? createBoxShadow(true, layout) : 'none';
    const shadowInner = isNeuromorphic ? createBoxShadow(false, layout) : 'none';

    const shadowOutMain = isNeuromorphic ? createBoxShadow(true, main) : 'none';
    const shadowInnerMain = isNeuromorphic ? createBoxShadow(false, main) : 'none';

    const {linear, degrees, degreesVert, from, to} = gradient;
    const gradientColor = `${linear}(${degrees}, ${primary} ${from}, ${secondary} ${to})`;
    const gradientColorVert = `${linear}(${degreesVert}, ${primary} ${from}, ${secondary} ${to})`;

    return (
        <div
            className='interfaceBoard' 
            style={{background: layout,
                    boxShadow: shadowOut}}
        >
            <div className='interfaceBoardColumn'>
                <MusicPlayer
                    colors={colors}
                    isNeuromorphic={isNeuromorphic}
                    gradientColor={gradientColor}
                    shadowOut={shadowOut}
                    shadowOutMain={shadowOutMain}
                    shadowInnerMain={shadowInnerMain}
                />
                <CheckBox 
                    main={main}
                    isNeuromorphic={isNeuromorphic}
                    gradientColor={gradientColor}
                    shadowOutMain={shadowOutMain}
                    shadowInnerMain={shadowInnerMain}
                />
                <TimeLine 
                    colors={colors}
                    gradientColor={gradientColor}
                    shadowOut={shadowOut}
                />
            </div>
            <div className='interfaceBoardColumn'>
                <div className='interfaceBoardColumn--top'>
                    <div>
                        <IconBage 
                            main={main}
                            disabled={disabled}
                            gradientColor={gradientColor}
                            shadowOut={shadowOut}
                        />
                        <IconButton
                            main={main}
                            disabled={disabled}
                            isNeuromorphic={isNeuromorphic}
                            gradientColor={gradientColor}
                            shadowInner={shadowInner}
                        />
                    </div>
                    <div>
                        <PillarBar
                            gradientColorVert={gradientColorVert}
                            shadowInner={shadowInner}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default InterfaceBoard;