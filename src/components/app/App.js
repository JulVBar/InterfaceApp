import ColorPanel from '../ColorPanel/ColorPanel';
import InterfaceBoard from '../InterfaceBoard/InterfaceBoard';
import ThemeSidebar from '../ThemeSidebar/ThemeSidebar';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import './app.scss';

const App = () => {
    const { themeStyle } = useSelector(state => state);
    let interfaceStyle;

    switch (themeStyle) {
        case "red":
            interfaceStyle = classNames('red');
            break;
        case "blue":
            interfaceStyle = classNames('blue');
            break;
        case "green":
            interfaceStyle = classNames('green');
            break;
        default:
            interfaceStyle = classNames('white');
    }

    return (
        <main className="app">
            <div className="content">
                <ThemeSidebar/>
                <div className="wrapper">
                    <ColorPanel interfaceStyle={interfaceStyle}/>
                    <InterfaceBoard interfaceStyle={interfaceStyle}/>
                </div>
                
            </div>
        </main>
    )
}


export default App;