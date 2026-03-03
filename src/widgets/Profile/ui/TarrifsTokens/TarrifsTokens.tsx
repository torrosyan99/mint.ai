import { Button } from '@/shared/ui/Button/Button.tsx';
import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import TokenSvg from '@icons/token-2.svg?react';

import { Box } from '../Box/Box.tsx';
import type { ProfileProps } from '../Profile/Profile.tsx';
import { Pro } from './Pro.tsx';
import cls from './TarrifsTokens.module.css';

export const TarrifsTokens = ({ tarrif,expired }: ProfileProps) => {
    return (
        <div>
            <P className={cls.title} font={'medium'} size={'lg'} color={'dark'}>
                Тарифы и токены
            </P>
            <Box className={cls.box}>
                <div className={cls.boxTop}>
                    <Title className={cls.tarrifName} h={'h5'}>
                        {tarrif}
                    </Title>
                    {!expired && tarrif === 'Free' && (
                        <div className={cls.count}>
                            <TokenSvg width={24} height={24} />
                            25
                        </div>
                    )}
                    {!expired && tarrif === 'Pro' && (
                        <div className={cls.period}>Активная до 15.02.2026</div>
                    )}
                  {expired && <div className={cls.expired}>
                    Закончится  15.02.2026
                  </div>}


                    {!expired && tarrif === 'Free' && (
                        <Button
                            className={cls.button}
                            padding={'none'}
                            variant={'green'}
                            fontSize={'xs'}
                            center
                        >
                            Выбрать тариф
                        </Button>
                    )}
                    {!expired && tarrif === 'Pro' && (
                        <Button
                            className={cls.button}
                            padding={'none'}
                            variant={'green'}
                            fontSize={'xs'}
                            center
                        >
                            Подробнее о тарифе
                        </Button>
                    )}
                  {expired && (
                    <Button
                      className={cls.button}
                      padding={'none'}
                      variant={'green'}
                      fontSize={'xs'}
                      center
                    >
                      Восстановить подписку
                    </Button>
                  )}
                </div>

                {tarrif === 'Pro' && (
                    <div className={cls.balance}>
                        <div className={cls.count}>
                            <TokenSvg width={24} height={24} />
                            400
                        </div>
                        <Button
                            className={cls.balanceButton}
                            padding={'none'}
                            fontSize={'xs'}
                            center
                        >
                            Пополнить баланс
                        </Button>
                    </div>
                )}
            </Box>

            {tarrif === 'Free' && <Pro />}
        </div>
    );
};
