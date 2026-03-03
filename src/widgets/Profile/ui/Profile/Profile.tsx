import { Container } from '@/shared/ui/Container/Container.tsx';

import { Header } from '../Header/Header.tsx';
import { Promocode } from '../Promocode/Promocode.tsx';
import { TarrifsTokens } from '../TarrifsTokens/TarrifsTokens.tsx';
import { Transaction } from '../Transaction/Transaction.tsx';
import cls from './Profile.module.css';

export interface ProfileProps {
  tarrif: "Free" | "Pro"
  expired?: boolean
}

export const Profile = ({tarrif,expired}:ProfileProps) => {
    return (
        <Container className={cls.profile}>
            <Header />
            <TarrifsTokens  tarrif={tarrif} expired={expired} />
            <Promocode />
            <Transaction />
        </Container>
    );
};
