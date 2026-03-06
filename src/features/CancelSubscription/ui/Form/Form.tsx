import { useState } from 'react';

import { variantsConfig } from '@/features/CancelSubscription/config/variantsConfig.ts';
import { VariantItem } from '@/features/CancelSubscription/ui/Form/VariantItem.tsx';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { Buttons } from '@/shared/ui/Buttons/Buttons.tsx';
import { P } from '@/shared/ui/P/P.tsx';

import cls from './Form.module.css';

interface FormProps {
    onClose: () => void;
}

export const Form = ({ onClose }: FormProps) => {
    const [activeVariant, setActiveVariant] = useState(variantsConfig[1]);
    return (
        <div className={cls.form}>
            <P size={'lg'}>
                Поделись, пожалуйста, почему решил(а) отказаться от подписки,
                прежде чем уйти. Мы ценим честную обратную связь и опираемся на
                неё в развитии продукта.
            </P>
            <div className={cls.variants}>
                {variantsConfig.map((v) => (
                    <VariantItem
                        key={v}
                        setActiveVariant={setActiveVariant}
                        active={activeVariant === v}
                        value={v}
                    />
                ))}
            </div>
            <div className={cls.wrapper}>
                <P font={'medium'}>Что нам улучшить?</P>
                <textarea
                    className={cls.textarea}
                    placeholder={
                        'Напиши, чего не хватило или что было неудобно'
                    }
                ></textarea>
            </div>
            <Buttons className={cls.buttons}>
                <Button
                    onClick={onClose}
                    padding={'lg'}
                    hSize={'xl'}
                    radius={'lg'}
                    variant={'primary'}
                >
                    Отменить подписку
                </Button>
                <Button
                    padding={'md'}
                    hSize={'xl'}
                    radius={'lg'}
                    variant={'green'}
                >
                    Сохранить подписку
                </Button>
            </Buttons>
        </div>
    );
};
