import { useSelector } from 'react-redux';
import { createBoxShadow } from '../../utils/drawFunctions';
import { gradient } from '../../constants/styleConstants';
import ColorPanel from '../ColorPanel/ColorPanel';
import InterfaceBoard from '../InterfaceBoard/InterfaceBoard';
import ThemeSidebar from '../ThemeSidebar/ThemeSidebar';
import './app.scss';

const App = () => {
    const { colors }= useSelector(state => state.colors);
    const {layout, main, primary, secondary, text } = colors;

    const { themeStyle } = useSelector(state => state.themeStyle);

    const isNeuromorphic = themeStyle === 'neuromorphic';

    const buttonShadow = createBoxShadow(true, main);
    const buttonShadowLayout = createBoxShadow(true, layout);

    const shadowColor = isNeuromorphic ? createBoxShadow(true, primary) : 'none';
    const shadowOut = isNeuromorphic ? createBoxShadow(true, layout) : 'none';
    const shadowInner = isNeuromorphic ? createBoxShadow(false, layout) : 'none';

    const shadowOutMain = isNeuromorphic ? createBoxShadow(true, main) : 'none';
    const shadowInnerMain = isNeuromorphic ? createBoxShadow(false, main) : 'none';

    const {linear, degrees, degreesVert, from, to} = gradient;
    const gradientColor = `${linear}(${degrees}, ${primary} ${from}, ${secondary} ${to})`;
    const gradientColorVert = `${linear}(${degreesVert}, ${primary} ${from}, ${secondary} ${to})`;

    return (
        <main 
            className="app"
            style={{background: `${layout}`,
                    color: text,
            }}
        >
            <div className="content">
                <ColorPanel
                    isNeuromorphic={isNeuromorphic}
                    shadowOut={shadowOut}
                    shadowInner={shadowInner}
                    shadowInnerMain={shadowInnerMain}
                    shadowColor={shadowColor}
                    gradientColor={gradientColor}
                    buttonShadow={buttonShadow}
                    buttonShadowLayout={buttonShadowLayout}
                />
                <div className="wrapper">
                    <ThemeSidebar
                        gradientColor={gradientColor}
                        shadowOut={shadowOut}
                        shadowInnerMain={shadowInnerMain}
                    />
                    <InterfaceBoard
                        isNeuromorphic={isNeuromorphic}
                        shadowColor={shadowColor}
                        shadowOut={shadowOut}
                        shadowInner={shadowInner}
                        shadowOutMain={shadowOutMain}
                        shadowInnerMain={shadowInnerMain}
                        gradientColor={gradientColor}
                        gradientColorVert={gradientColorVert}
                        themeStyle={themeStyle}
                    />
                </div>
            </div>
        </main>
    )
}

export default App;