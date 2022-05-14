import { useCallback, useState } from 'react';
import './checkBox.scss';

const CheckBox = ({main, isNeuromorphic, gradientColor, shadowOutMain, shadowInnerMain }) => {

    const [checkedLeft, setCheckedLeft] = useState(false);
    const [checkedRight, setCheckedRight] = useState(true);

    const onChekedLeft = useCallback(() => {
        setCheckedLeft(!checkedLeft);
    }, [checkedLeft]);

    const onChekedRight = useCallback(() => {
        setCheckedRight(!checkedRight);
    }, [checkedRight]);

    const positionLeft = checkedLeft ? '0.3rem' : '2.7rem';
    const positionRight = checkedRight ? '0.3rem' : '2.7rem';

    const backgroundLeft = checkedLeft && !isNeuromorphic ? gradientColor : main;
    const backgroundRight = checkedRight && !isNeuromorphic ? gradientColor : main;

    const pointerBgLeft = !checkedLeft ? gradientColor : main;
    const pointerBgRight = !checkedRight ? gradientColor : main;

    return (
        <div className='checkBoxBar'>
            <div 
                className='checkboxWrapper'
                onClick={onChekedLeft}
                style={{background: backgroundLeft, boxShadow: shadowInnerMain}}
            >
                <div
                    className='checkboxPointer'
                    style={{left: positionLeft,
                        background: pointerBgLeft, 
                        boxShadow: shadowOutMain}}
                />
            </div>
            <span>Light</span>
            <div
                className='checkboxWrapper'
                onClick={onChekedRight}
                style={{background: backgroundRight, boxShadow: shadowInnerMain}}
            >
                <div
                    className='checkboxPointer'
                    style={{left: positionRight,
                        background: pointerBgRight,
                        boxShadow: shadowOutMain}}
                />
            </div>
            <span>Dark</span>
        </div>
    )
}

export default CheckBox;