import { Container } from '@/shared/ui/Container/Container.tsx';

import { Header } from '../Header/Header.tsx';
import { Promocode } from '../Promocode/Promocode.tsx';
import { TrafficTokens } from '../TrafficTokens/TrafficTokens.tsx';
import { Transaction } from '../Transaction/Transaction.tsx';
import cls from './Profile.module.css';

export type Tarrif = 'Free' | 'Pro' | 'Ultima'

export interface ProfileProps {
    tarrif: Tarrif;
    expired?: boolean;
}

export const Profile = ({tarrif, expired = false}: ProfileProps) => {
    return (
        <Container className={cls.profile}>
            <Header />
            <TrafficTokens  tarrif={tarrif}  expired={expired} />
            <Promocode />
            <Transaction />
        </Container>
    );
};
