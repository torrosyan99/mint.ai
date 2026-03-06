import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/shared/ui/Button/Button.tsx';

import { Tarrif } from '../Tarrif/Tarrif.tsx';
import cls from './Tarrifs.module.css';

const buttonOptions = {
    hSize: 'xl',
    fontSize: 'md',
    radius: 'sm',
    center: true,
    wFull: true,
} as const;
export const Month = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1.15}
                spaceBetween={16}
                breakpoints={{
                    768: {
                        slidesPerView: 2.2,
                    },
                    1100: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide className={cls.slide}>
                    <Tarrif
                        title={'Free'}
                        price={
                            <>
                                0 <span> ₽/ед</span>
                            </>
                        }
                        text={'Идеально для старта'}
                        button={
                            <Button
                                className={cls.button}
                                {...buttonOptions}
                                disabled
                            >
                                Текущая подписка
                            </Button>
                        }
                        tokens={{
                            count: 400,
                            text: 'токенов каждую неделю',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide className={cls.slide}>
                    <Tarrif
                        title={'Pro'}
                        price={
                            <>
                                199 <span> ₽/неделя</span>
                            </>
                        }
                        text={'Оптимальный выбор'}
                        button={
                            <Button
                                className={cls.darkButton}
                                {...buttonOptions}
                            >
                                Купить сейчас
                            </Button>
                        }
                        tokens={{
                            count: 800,
                            text: 'токенов каждый месяц',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide className={cls.slide}>
                    <Tarrif
                        title={'Ultima'}
                        price={
                            <>
                                990 <span> ₽/месяц</span>
                            </>
                        }
                        text={'Максимум пользы'}
                        button={
                            <Button variant={'green'} {...buttonOptions}>
                                Купить сейчас
                            </Button>
                        }
                        tokens={{
                            count: 5000,
                            text: 'токенов каждый месяц',
                        }}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
