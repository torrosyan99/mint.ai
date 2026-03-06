import { P } from '@/shared/ui/P/P.tsx';
import { Switcher } from '@/shared/ui/Switcher/Switcher.tsx';

import { Login } from '../Login/Login.tsx';
import { Registration } from '../Registration/Registration.tsx';
import cls from './LogReg.module.css';

interface ContentProps {
    onShow: () => void;
}
export const Content = ({ onShow }: ContentProps) => {
    return (
        <>
            <Switcher
                className={cls.switcher}
                variant={'tertiary'}
                params={[
                    {
                        buttonTitle: 'Вход',
                        Component: <Login />,
                    },
                    {
                        buttonTitle: 'Регистрация',
                        Component: <Registration onShow={onShow} />,
                    },
                ]}
            />
            <P className={cls.text} color={'#646567'} size={'xs'}>
                Продолжая, вы принимаете наше <a>Пользовательское соглашение</a>{' '}
                и <a>Политику Конфиденциальности</a>
            </P>
        </>
    );
};
