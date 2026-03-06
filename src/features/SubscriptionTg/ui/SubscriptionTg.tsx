import chatgpt from '@/shared/assets/images/chatgpt-2.png';
import chatgptMany from '@/shared/assets/images/chatgpt-4.png';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import TgSvg from '@icons/tg-2.svg?react';
import TokenSvg from '@icons/token-3.svg?react';

import { SubscriptionItem } from './SubscriptionItem.tsx';
import cls from './SubscriptionTg.module.css';
import {Button} from "@/shared/ui/Button/Button.tsx";

interface SubscriptionTgProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SubscriptionTg = ({ isOpen, onClose }: SubscriptionTgProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth={400}>
            <Title h={'h4'}>
                <span className={cls.titleSpan}>
                    Получи <TokenSvg className={cls.svg} /> 50
                </span>
                за подписку
                <span className={cls.titleSpan}>
                    {' '}
                    на наш <TgSvg className={cls.svg} />
                    тг-канал
                </span>
            </Title>
            <div className={cls.wrapper}>
                <P font={'medium'} size={'lg-always'}>
                    Их хватит на:
                </P>
                <div className={cls.list}>
                    <SubscriptionItem
                        icon={<img src={chatgpt} alt={'chatgpt'} />}
                        count={25}
                    >ChatGPT 5.2</SubscriptionItem>
                    <SubscriptionItem
                      icon={<img src={chatgpt} alt={'chatgpt'} />}
                      count={50}
                    >ChatGPT 5.2</SubscriptionItem>
                    <SubscriptionItem
                      icon={<img src={chatgptMany} alt={'chatgpt'} />}
                    >И еще на +10 нейросетей</SubscriptionItem>
                </div>
            </div>

            <Button hSize={'xl'} radius={'sm'} variant={'green'} wFull center>Забрать бонус</Button>
        </Modal>
    );
};
