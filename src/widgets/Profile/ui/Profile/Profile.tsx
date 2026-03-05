import { Container } from '@/shared/ui/Container/Container.tsx';

import { Header } from '../Header/Header.tsx';
import { Promocode } from '../Promocode/Promocode.tsx';
import { Transaction } from '../Transaction/Transaction.tsx';
import cls from './Profile.module.css';

export interface ProfileProps {
  tarrif: "Free" | "Pro" | "Ultima"
  expired?: boolean
}

export const Profile = ({}:ProfileProps) => {
    return (
        <Container className={cls.profile}>
            <Header />
            <Promocode />
            <Transaction />
        </Container>
    );
};
