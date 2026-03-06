import type { CSSProperties, PropsWithChildren } from 'react';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

import './SimpleBar.css';

interface SimpleBarProps {
    className?: string;
    style?: CSSProperties;
}

export const SimpleBar = ({
    children,
    style,
  className
}: PropsWithChildren<SimpleBarProps>) => {
    return (
        <OverlayScrollbarsComponent className={className} defer   options={{

          scrollbars: {
            theme: "os-theme-custom",
            autoHide: 'leave',
          },
          overflow: {
            x: 'hidden',
            y: 'scroll'
          }
        }}    style={style}>
            {children}
        </OverlayScrollbarsComponent>
    );
};
