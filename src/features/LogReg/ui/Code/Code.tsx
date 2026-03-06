import { useState } from 'react';

import { CodeInput } from '@/features/LogReg/ui/Code/CodeInput.tsx';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import ArrowLeftSvg from '@icons/arrow-left.svg?react';

import cls from './Code.module.css';
import { SecondButton } from './SecondButton.tsx';

interface CodeProps {
    onBack: () => void;
}

export const Code = ({ onBack }: CodeProps) => {
    const [value, setValue] = useState('');

    return (
        <>
            <Title className={cls.title} h={'h6'} color={'var(--color-10)'}>
                Подтверждение регистрации
            </Title>
            <P className={cls.text} size={'sm'} color={'var(--color-14)'}>
                Укажите код, отправленный в письме. Если не нашли — проверьте
                папку «Спам»
            </P>
            <CodeInput value={value} setValue={setValue} />
            <div className={cls.buttons}>
                <Button
                    hSize={'xl'}
                    variant={'green'}
                    radius={'sm'}
                    disabled={value.length === 0}
                    center
                >
                    Подтвердить
                </Button>
                <SecondButton />
                <button className={cls.backButton} onClick={onBack}>
                    <ArrowLeftSvg />
                    Назад
                </button>
            </div>
        </>
    );
};
