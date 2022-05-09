import { useSelector } from 'react-redux';
import ColorPanel from '../ColorPanel/ColorPanel';
import InterfaceBoard from '../InterfaceBoard/InterfaceBoard';
import ThemeSidebar from '../ThemeSidebar/ThemeSidebar';

import './app.scss';

const App = () => {
    const { layout, text } = useSelector(state => state.colors);

    return (
        <main 
            className="app"
            style={{background: `${layout}`,
                    color: text,
            }}
        >
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