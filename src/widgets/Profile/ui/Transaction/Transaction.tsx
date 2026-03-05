import { P } from '@/shared/ui/P/P.tsx';
import { Switcher } from '@/shared/ui/Switcher/Switcher.tsx';



import { Box } from '../Box/Box.tsx';
import { Replenishment } from './Replenishment.tsx';
import { Spending } from './Spending.tsx';
import cls from './Transaction.module.css';













export const Transaction = ({empty}: { empty:boolean }) => {
    return (
        <div>
            <P font={'medium'} size={'lg'} color={'dark'}>
                Покупки и списания
            </P>
            <Box className={cls.box}>
                <Switcher
                    className={cls.switcher}
                    variant={'secondary'}
                    params={[
                        {
                            buttonTitle: 'Траты',
                            Component: <Spending />,
                        },
                        {
                            buttonTitle: 'Пополнения',
                            Component: <Replenishment empty={empty} />,
                        },
                    ]}
                />
            </Box>
        </div>
    );
};
