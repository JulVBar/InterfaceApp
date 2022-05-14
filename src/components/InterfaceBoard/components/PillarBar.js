import { PILLAR_BARS } from '../../../constants/interfaceBoardConstants';
import './pillarBar.scss';

const PillarBar = ({gradientColorVert, shadowInner}) => {
    return (
        <ul className="pillarBar__list">
            {PILLAR_BARS.map(({height, name}, index) => (
                        <li key={index}>
                            <div className="pillarBar__wrap" style={{boxShadow: shadowInner}}>
                                <div 
                                    className="pillarBar__column" 
                                    style={{background: gradientColorVert, height: height}}
                                />
                            </div>
                            <span className="pillarBar__text">{name}</span>
                        </li>
                    ))}
        </ul>
    )
}

export default PillarBar;