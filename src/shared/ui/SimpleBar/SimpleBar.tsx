import type { CSSProperties, PropsWithChildren } from 'react';
import Bar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import './SimpleBar.css';

interface SimpleBarProps {
    className?: string;
    style?: CSSProperties;
}

export const SimpleBar = ({
    children,
    style,
    className,
}: PropsWithChildren<SimpleBarProps>) => {
    return (
        <Bar className={className} autoHide={false} style={style}>
            {children}
        </Bar>
    );
};
