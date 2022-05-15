import { useSelector } from 'react-redux';
import MusicPlayer from './components/MusicPlayer';
import CheckBox from './components/CheckBox';
import TimeLine from './components/TimeLine';
import IconBage from './components/IconBage';
import IconButton from './components/IconButton';
import PillarBar from './components/PillarBar';
import Pagination from './components/Pagination';
import DropDown from './components/DropDown';
import './interfaceBoard.scss';

const InterfaceBoard = ({
    isNeuromorphic,
    shadowColor,
    shadowOut,
    shadowInner,
    shadowOutMain,
    shadowInnerMain,
    gradientColor,
    gradientColorVert,
    themeStyle,
}) => {

    const { colors } = useSelector(state => state);
    const {layout, main, text, disabled} = colors;

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
                <Pagination
                    main={main}
                    disabled={disabled}
                    text={text}
                    themeStyle={themeStyle}
                    gradientColor={gradientColor}
                    shadowOut={shadowOut}
                    shadowInnerMain={shadowInnerMain}
                />
                <DropDown
                    main={main}
                    text={text}
                    gradientColor={gradientColor}
                    shadowColor={shadowColor}
                    shadowInnerMain={shadowInnerMain}
                />
            </div>
        </div>
    )
}

export default InterfaceBoard;