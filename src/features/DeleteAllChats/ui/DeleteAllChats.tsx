import { P } from '@/shared/ui/P/P.tsx';
import { Title } from '@/shared/ui/Title/Title.tsx';

import cls from './DeleteAllChats.module.css';
import {Button} from "@/shared/ui/Button/Button.tsx";

interface DeleteAllChatsProps {
    onClose: () => void;
}

export const DeleteAllChats = ({ onClose }: DeleteAllChatsProps) => {
    return (
        <>
            <Title h={'h5'}>Удалить все чаты?</Title>
            <P className={cls.text}>
                Это действие нельзя отменить. Все ваши чаты будут удалены
                навсегда.
            </P>
          <div className={cls.buttons}>
            <Button
              hSize={'xl'}
              radius={'lg'}
              variant={'primary'}
              padding={'md'}
              type={'button'}
              onClick={onClose}
            >
              Отмена
            </Button>
            <Button
              hSize={'xl'}
              radius={'lg'}
              variant={'dark'}
              padding={'md'}
            >
              Подтвердить
            </Button>
          </div>
        </>
    );
};
