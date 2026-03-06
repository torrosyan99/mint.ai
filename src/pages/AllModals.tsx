import { useState } from 'react';

import { AboutTarrifModal } from '@/widgets/Profile/ui/AboutPro/AboutTarrifModal.tsx';

import { CancelSubscription } from '@/features/CancelSubscription';
import { DeleteAllChats } from '@/features/DeleteAllChats';
import { EditUser } from '@/features/EditUser';
import { LogReg } from '@/features/LogReg';
import { PaymentSuccess } from '@/features/PaymentSuccess';
import { PromocodeForm } from '@/features/PromocodeForm';
import { ReplenishmentBalance } from '@/features/ReplenishmentBalance';
import { SubscriptionTg } from '@/features/SubscriptionTg';

import { Button } from '@/shared/ui/Button/Button.tsx';

export const AllModals = () => {
    const [isSubsOpen, setIsSubsOpen] = useState(false);
    const [isReplenishmentOpen, setIsReplenishmentOpen] = useState(false);
    const [isPromocodeOpen, setIsPromocodeOpen] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [isLogRegOpen, setIsLogRegOpen] = useState(false);
    const [isDeleteAllChatsOpen, setIsDeleteAllChatsOpen] = useState(false);
    const [isEditUserOpen, setIsEditUserOpen] = useState(false);
    const [isSubscriptionTgOpen, setIsSubscriptionTgOpen] = useState(false);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                padding: 24,
            }}
        >
            <div>
                <Button variant={'primary'} onClick={() => setIsSubsOpen(true)}>
                    Отмена подписки
                </Button>
                <CancelSubscription
                    isOpen={isSubsOpen}
                    onClose={() => setIsSubsOpen(false)}
                />
            </div>
            <div>
                <Button
                    variant={'primary'}
                    onClick={() => setIsReplenishmentOpen(true)}
                >
                    Покупка токенов
                </Button>
                <ReplenishmentBalance
                    isOpen={isReplenishmentOpen}
                    onClose={() => setIsReplenishmentOpen(false)}
                />
            </div>

            <div>
                <Button
                    variant={'primary'}
                    onClick={() => setIsPromocodeOpen(true)}
                >
                    Промокод{' '}
                </Button>
                <PromocodeForm
                    isOpen={isPromocodeOpen}
                    onClose={() => setIsPromocodeOpen(false)}
                />
            </div>
            <div>
                <Button
                    variant={'primary'}
                    onClick={() => setIsPaymentOpen(true)}
                >
                    Платеж выполнен{' '}
                </Button>
                <PaymentSuccess
                    isOpen={isPaymentOpen}
                    onClose={() => setIsPaymentOpen(false)}
                />
            </div>
            <div>
                <Button
                    variant={'primary'}
                    onClick={() => setIsLogRegOpen(true)}
                >
                    Вход{' '}
                </Button>
                <LogReg
                    isOpen={isLogRegOpen}
                    onClose={() => setIsLogRegOpen(false)}
                />
            </div>
            <div>
                <Button
                    variant={'primary'}
                    onClick={() => setIsDeleteAllChatsOpen(true)}
                >
                    Удалит все чаты{' '}
                </Button>
                <DeleteAllChats
                    isOpen={isDeleteAllChatsOpen}
                    onClose={() => setIsDeleteAllChatsOpen(false)}
                />
            </div>
            <div>
                <Button
                    variant={'primary'}
                    onClick={() => setIsEditUserOpen(true)}
                >
                    Изменить профиль
                </Button>
                <EditUser
                    isOpen={isEditUserOpen}
                    onClose={() => setIsEditUserOpen(false)}
                />
            </div>
            <div>
                <Button
                    variant={'primary'}
                    onClick={() => setIsSubscriptionTgOpen(true)}
                >
                    Токен за подписку
                </Button>
                <SubscriptionTg
                    isOpen={isSubscriptionTgOpen}
                    onClose={() => setIsSubscriptionTgOpen(false)}
                />
            </div>
            <div>
                <AboutTarrifModal expired={false} />
            </div>
        </div>
    );
};
