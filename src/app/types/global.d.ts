declare module '*.svg?react' {
    import { FunctionComponent, SVGProps } from 'react';

    const ReactComponent: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string }
    >;

    export default ReactComponent;
}

declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
