'use client';
import { useState } from 'react';

import Container from '@/src/components/ui/Container';
import LoginSection from '@/src/core/section/auth/login-section';
import { useLogin } from '@/src/hooks/mutation/auth/useLogin';
import { useAlert } from '@/src/hooks/use-alert';
import { FormLoginType } from '@/src/types/form';
const LoginContainer = () => {
  const alert = useAlert();
  const [formLogin, setFormLogin] = useState<FormLoginType>({
    email: '',
    password: '',
  });
  const login = useLogin();

  const handleLogin = () => {
    if (!formLogin.email || !formLogin.password) {
      alert.toast({
        title: 'Warning',
        message: 'Check Colums',
        icon: 'warning',
      });
      return;
    }
    return login.mutate({ payload: formLogin });
  };

  return (
    <Container className="w-full min-h-screen flex flex-col">
      <LoginSection
        formLogin={formLogin}
        setFormLogin={setFormLogin}
        isPending={login.isPending}
        onLogin={() => handleLogin()}
      />
    </Container>
  );
};

export default LoginContainer;
