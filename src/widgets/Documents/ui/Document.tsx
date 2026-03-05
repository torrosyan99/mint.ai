import { Box } from '@/shared/ui/Box/Box.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import DownloadSvg from '@icons/download.svg?react';
import FileSvg from '@icons/file-2.svg?react';
import TrashBinSvg from '@icons/trash-bin-5.svg?react';

import cls from './Documents.module.css';
import { type Document as DocumentType } from './Documents.tsx';

export const Document = ({ title }: DocumentType) => {
    return (
        <Box
            className={cls.document}
            padding={'lg'}
            radius={'sm'}
            bg={'var(--color-23)'}
        >
            <div className={cls.info}>
                <P className={cls.documentTitle} font={'medium'}>
                    {title}{' '}
                </P>
                <P size={'sm'} color={'var(--color-7)'}>
                    .PDF - 13.79 MB
                </P>
            </div>
            <FileSvg className={cls.file} />
            <div className={cls.instruments}>
                <button className={cls.downloadButton}>
                    <DownloadSvg />
                    <P font={'medium'}>Скачать</P>
                </button>
                <button className={cls.deleteButton}>
                    <TrashBinSvg />
                </button>
            </div>
        </Box>
    );
};
