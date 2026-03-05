import cls from './Login.module.css'
import {InputItem} from "@/features/LogReg/ui/LogReg/InputItem.tsx";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui/Button/Button.tsx";
import {useState} from "react";

export const Form = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  return (
    <form className={cls.form}>
      <InputItem
        title={'E-mail'}
        placeholder={'Укажите вашу почту'}
        value={data.email}
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />
      <InputItem
        placeholder={'Укажите ваш пароль'}
        title={'Пароль'}
        type={'password'}
        value={data.password}
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
        right={
          <Link className={cls.link} to={'#'}>
            Забыли пароль?
          </Link>
        }
      />
      <Button
        variant={'green'}
        hSize={'xl'}
        center
        radius={'sm'}
        disabled={
          data.password.length === 0 || data.email.length === 0
        }
      >
        Войти
      </Button>
    </form>
  );
};
