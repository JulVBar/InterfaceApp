import { useSelector } from 'react-redux';
import ColorPanel from '../ColorPanel/ColorPanel';
import InterfaceBoard from '../InterfaceBoard/InterfaceBoard';
import ThemeSidebar from '../ThemeSidebar/ThemeSidebar';

import './app.scss';

const App = () => {
    const { colors } = useSelector(state => state);

    return (
        <main className="app" style={{background: `${colors.layout}`}}>
            <div className="content">
                <ColorPanel/>
                <div className="wrapper">
                    <ThemeSidebar/>
                    <InterfaceBoard/>
                </div>
                
            </div>
        </main>
    )
}


export default App;