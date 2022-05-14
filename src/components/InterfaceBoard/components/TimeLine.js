import './timeLine.scss';

const TimeLine = ({colors, gradientColor, shadowOut}) => {
    const { main, disabled, text } = colors;
    
    const items = [{
        title: 'London',
        textContent: 'Online meeting',
        time: '10:45 AM',
        dotColor: disabled,
        contentColor: main,
        titleColor: text,
        textColor: disabled,
        line: true,
    },
    {
        title: 'Moscow',
        textContent: 'Office meeting',
        time: '09:00 AM',
        dotColor: gradientColor,
        contentColor: gradientColor,
        titleColor: main,
        textColor: main,
        line: true,
    },
    {
        title: 'Oslo',
        textContent: 'Town Hall',
        time: '06:30 PM',
        dotColor: disabled,
        contentColor: main,
        titleColor: text,
        textColor: disabled,
        line: false,
    }]

    return (
        <ul className="timeLine__list">
            {items.map(({title, textContent, time, dotColor, contentColor, titleColor, textColor, line}, index) => (
                        <li key={index}>
                        <div className="timeLine__separator">
                            <span className="timeLine__dot" style={{background: dotColor, boxShadow: shadowOut}}></span>
                            {line && (
                                <span className="timeLine__line" style={{background: disabled}}></span>
                            )}
                        </div>
                        <div className="timeLine__content" style={{background: contentColor, boxShadow: shadowOut}}>
                            <h4 className="timeLine__title" style={{color: titleColor}}>{title}</h4>
                            <p className="timeLine__text" style={{color: textColor}}>{textContent}</p>
                            <span className="timeLine__time" style={{color: textColor}}>{time}</span>
                        </div>
                    </li>
                    ))}
        </ul>
    )
}

export default TimeLine;