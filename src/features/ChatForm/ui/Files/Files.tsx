import type {  AllFile } from '../../types';
import cls from './Files.module.css';
import { ImageFile } from './ImageFile.tsx';
import {File} from "./File.tsx";

interface FilesProps {
    files: AllFile[];
}

export const Files = ({ files }: FilesProps) => {
    return (
        <div className={cls.files}>
            {files.map((file, index) => {
                if (file.type === 'image')
                    return <ImageFile key={index} {...file} />;
                else if(file.type === 'file')
                    return <File key={index} {...file} />
            })}
        </div>
    );
};
