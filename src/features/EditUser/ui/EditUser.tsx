import { useRef } from 'react';

import avatar from '@/shared/assets/images/avatar.png';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import cls from './EditUser.module.css';
import {Modal} from "@/shared/ui/Modal/Modal.tsx";
import {Buttons} from "@/shared/ui/Buttons/Buttons.tsx";

interface EditUserProps {
    onClose: () => void;
    isOpen: boolean;
}

export const EditUser = ({onClose, isOpen}:EditUserProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = () => inputRef.current?.click();
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth={420}>
            <Title h={'h5'} color={'var(--color-10)'}>Профиль</Title>
            <form>
                <div className={cls.top}>
                    <input ref={inputRef} hidden />
                    <img className={cls.avatar} src={avatar} alt={'avatar'} />
                    <div>
                        <P color={'var(--color-13)'} size={'sm'}>
                            Поддерживает максимальный размер 800 КБ, JPG, GIF,
                            PNG.
                        </P>
                        <Button
                            className={cls.button}
                            hSize={'sm'}
                            fontSize={'xs'}
                            padding="md"
                            variant={'secondary'}
                            onClick={onClick}
                        >
                            Загрузить сейчас{' '}
                        </Button>
                    </div>
                </div>
                <P className={cls.nickname} color={'var(--color-10)'}>
                    Никнейм
                </P>
                <Input value={'Юрий Стрельцов'} />
                <Buttons marginTop={24}>
                    <Button
                        hSize={'xl'}
                        radius={'lg'}
                        variant={'primary'}
                        padding={'lg'}
                        type={'button'}
                        onClick={onClose}
                    >
                        Отмена
                    </Button>
                    <Button
                        hSize={'xl'}
                        radius={'lg'}
                        variant={'green'}
                        padding={'lg'}
                    >
                        Подтвердить
                    </Button>
                </Buttons>
            </form>
        </Modal>
    );
};
