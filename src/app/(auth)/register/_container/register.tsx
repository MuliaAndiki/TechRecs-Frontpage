'use client';
import Container from '@/src/components/ui/Container';
import RegisterSection from '@/src/core/section/auth/register-section';
import { FormRegisterType } from '@/src/types/form';
import { useState } from 'react';
import useRegister from '@/src/hooks/mutation/auth/useRegister';
import { useAlert } from '@/src/hooks/use-alert';

const RegisterContainer = () => {
  const register = useRegister();
  const alert = useAlert();
  const [formRegister, setFormRegister] = useState<FormRegisterType>({
    email: '',
    fullName: '',
    password: '',
  });

  const handleRegister = () => {
    if (!formRegister.email || !formRegister.fullName || !formRegister.password) {
      alert.toast({
        title: 'Warning',
        message: 'Pleases Check Colums',
        icon: 'warning',
      });
      return;
    }
    return register.mutate({ payload: formRegister });
  };

  return (
    <Container className="w-full min-h-screen flex flex-col">
      <RegisterSection
        formRegister={formRegister}
        setFormRegister={setFormRegister}
        isPending={register.isPending}
        onRegister={() => handleRegister()}
      />
    </Container>
  );
};

export default RegisterContainer;
