import { WithSubs } from '@/widgets/Profile/ui/TrafficTokens/WithSubs.tsx';

import { P } from '@/shared/ui/P/P.tsx';

import { AboutTarrif } from '../AboutPro/AboutTarrif.tsx';
import type { Tarrif } from '../Profile/Profile.tsx';
import { Free } from './Free.tsx';

interface TarrifTokensProps {
    tarrif: Tarrif;
    expired: boolean;
}

export const TrafficTokens = ({ tarrif, expired }: TarrifTokensProps) => {
    return (
        <div>
            <P color={'var(--color-10)'} font={'medium'} size={'lg-always'}>
                Тарифы и токены
            </P>

            {tarrif === 'Free' ? (
                <Free />
            ) : (
                <WithSubs tarrif={tarrif} expired={expired} />
            )}

            {tarrif === 'Free' && <AboutTarrif />}
        </div>
    );
};
