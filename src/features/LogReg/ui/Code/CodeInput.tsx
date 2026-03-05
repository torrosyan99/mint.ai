import cls from '@/features/LogReg/ui/Code/Code.module.css';

import { Input } from '@/shared/ui/Input/Input.tsx';

interface CodeInputProps {
    value: string;
    setValue: (value: string) => void;
}

export const CodeInput = ({ value, setValue }: CodeInputProps) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value.replace(/\D/g, '').slice(0, 6);

        if (v.length > 3) {
            v = v.slice(0, 3) + ' ' + v.slice(3);
        }

        setValue(v);
    };
    return (
        <Input
            value={value}
            className={cls.input}
            onChange={onChange}
            placeholder={'Укажите код из почты'}
        />
    );
};
