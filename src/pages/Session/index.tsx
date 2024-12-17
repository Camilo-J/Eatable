import { useActionState, useState } from 'react';
import { Input } from '@/components/Input';
import { HeaderOption } from './components/HeaderOption';
import title from '@/assets/Eatable.svg';
import { useUserStore } from '@/store/user.ts';
import { authAction } from './actions/auth.ts';

interface Props {
  loginOp: boolean;
  signupOp: boolean;
  error?: string;
}

export function SessionPage() {
  const { login, signup } = useUserStore();
  const [options, setOptions] = useState<Props>({ loginOp: true, signupOp: false });
  const selectedOption = options.loginOp ? 'login' : 'signup';
  const [, action, isPending] = useActionState(authAction({ login, signup, option: selectedOption }), { message: '' });

  const handleOptions = (option: string) => {
    if (option === 'login') {
      return setOptions({ loginOp: true, signupOp: false, error: '' });
    }

    setOptions({ loginOp: false, signupOp: true, error: '' });
  };

  return (
    <div className="flex flex-col w-full gap-12 items-center">
      <section className="bg-white rounded-3xl w-96 h-96 mt-5" style={{ boxShadow: '0px 4px 30px rgba(0,0,0,0.06)' }}>
        <div className="flex flex-col items-center justify-center gap-5 text-orange-600 text-center h-80">
          <img src={title} alt="logo-title" />
          <p>Food for Everyone</p>
        </div>
        <div className="flex gap-5 justify-center py-5">
          <HeaderOption name="Log in" active={options.loginOp} handleClicked={() => handleOptions('login')} />
          <HeaderOption name="Sign up" active={options.signupOp} handleClicked={() => handleOptions('signup')} />
        </div>
      </section>
      <form className="flex flex-col items-center gap-12" action={action}>
        <Input id="email" type="email" name="email" label="Email" placeholder="user@email.com" />
        <Input id="password" type="password" name="password" label="Password" placeholder="********"
               error={options?.error} />
        <div className="relative">
          <div
            className={`${isPending ? '' : 'hidden'} absolute bottom-4 left-20
            h-6 w-6 animate-spin rounded-full border-4 border-solid
            border-current border-e-transparent align-[-0.125em]
            text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
            role="status" />

          <button
            className={`w-80 h-14 mt-20 text-white bg-orange-600 rounded-3xl ${isPending ? 'bg-orange-400' : 'hover:bg-orange-500'}`}
            disabled={isPending}
            data-testid="button-session">
            {options.signupOp ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </form>
    </div>
  );
}