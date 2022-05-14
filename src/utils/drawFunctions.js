export function lightenDarkenColor(color, percent) {
    let num = parseInt(color.slice(1),16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

export function createBoxShadow(outside, color) {
    let pos = outside ? '' : 'inset',
        x = outside ? '-4px' : '-3px',
        y = outside ? '-2px' : '-3px',
        x1 = outside ? '4px' : '2px',
        y1 = outside ? '3px' : '2px',
        blur = outside ? '16px' : '7px';

    return `${pos} ${x} ${y} ${blur} ${lightenDarkenColor(color, 25)}, ${pos} ${x1} ${y1} ${blur} ${lightenDarkenColor(color, -25)}`
}