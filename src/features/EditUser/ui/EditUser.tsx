import { useRef } from 'react';

import avatar from '@/shared/assets/images/avatar.png';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import cls from './EditUser.module.css';

interface EditUserProps {
    onClose: () => void;
}

export const EditUser = ({onClose}:EditUserProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = () => inputRef.current?.click();
    return (
        <>
            <Title h={'h5'}>Профиль</Title>
            <form>
                <div className={cls.top}>
                    <input ref={inputRef} hidden />
                    <img className={cls.avatar} src={avatar} alt={'avatar'} />
                    <div>
                        <P color={'secondary'} size={'sm'}>
                            Поддерживает максимальный размер 800 КБ, JPG, GIF,
                            PNG.
                        </P>
                        <Button
                            className={cls.button}
                            hSize={'sm'}
                            fontSize={'xs'}
                            padding="none"
                            variant={'secondary'}
                            onClick={onClick}
                        >
                            Загрузить сейчас{' '}
                        </Button>
                    </div>
                </div>
                <P className={cls.nickname} color={'dark'}>
                    Никнейм
                </P>
                <Input value={'Юрий Стрельцов'} />
                <div className={cls.buttons}>
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
                </div>
            </form>
        </>
    );
};
