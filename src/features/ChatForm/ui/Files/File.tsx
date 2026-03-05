import { P } from '@/shared/ui/P/P.tsx';

import CloseSvg from '@icons/close.svg?react';
import FileSvg from '@icons/file.svg?react';

import type {  FileType } from '../../types';
import cls from './Files.module.css';
import clsx from "clsx";

export const File = ({ name, status }: FileType) => {
    return (
        <div className={clsx(cls.file, cls[status])}>
            <div className={cls.fileIcon}>
                <FileSvg />
            </div>
            <div>
                <P className={cls.fileName} size={'sm'}>{name}</P>
                <P className={cls.fileSize} size={'xs'}>PDF · 4.78 Mb</P>
            </div>
            <button className={cls.close}>
                <CloseSvg width={14} height={14} />
            </button>
        </div>
    );
};
