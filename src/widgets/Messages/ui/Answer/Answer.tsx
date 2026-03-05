import type { PropsWithChildren } from 'react';

import { Tooltip } from '@/shared/ui/Tooltip/Tooltip.tsx';

import CopySvg from '@icons/copy.svg?react';
import DisLikeSvg from '@icons/dislike.svg?react';
import LikeSvg from '@icons/like.svg?react';

import type { Message } from '../Messages/Messages';
import cls from './Answer.module.css';
import { NoSubscription } from './NoSubscription.tsx';

interface AnswerProps {
    status: Message['status'];
}

export const Answer = ({
    children,
    status,
}: PropsWithChildren<AnswerProps>) => {
    if (status === 'no-subscription') return <NoSubscription />;
    return (
        <div className={cls.answer}>
            {children}
            <div className={cls.options}>
                <Tooltip message={'Копировать'} size={'xs'} offsetSize={10}>
                    <button>
                        <CopySvg />
                    </button>
                </Tooltip>
                <Tooltip message={'Нравится'} size={'xs'} offsetSize={10}>
                    <button>
                        <LikeSvg />
                    </button>
                </Tooltip>
                <Tooltip message={'Нравится'} size={'xs'} offsetSize={10}>
                    <button>
                        <DisLikeSvg />
                    </button>
                </Tooltip>
            </div>
        </div>
    );
};
