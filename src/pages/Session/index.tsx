import { FormEvent, useState } from 'react';
import { Input } from '../../components/Input';
import { HeaderOption } from './components/HeaderOption';
import title from '../../assets/Eatable.svg';
import { useUserStore } from '../../store/user.ts';


interface Props {
  loginOp: boolean;
  signupOp: boolean;
}

export function SessionPage() {
  const [options, setOptions] = useState<Props>({ loginOp: true, signupOp: false });
  const { login, signup } = useUserStore();

  const handleOptions = (option: string) => {
    if (option === 'login') {
      setOptions({ loginOp: true, signupOp: false });
      return;
    }

    setOptions({ loginOp: false, signupOp: true });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    const credentials = new FormData(event?.target as unknown as HTMLFormElement);

    if (options.loginOp) {
      return await login({
        email: credentials.get('email') as string,
        password: credentials.get('password') as string
      });
    }

    // signup
    await signup({ email: credentials.get('email') as string, password: credentials.get('password') as string });
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
      <form className="flex flex-col items-center gap-12" onSubmit={handleSubmit}>
        <Input id="email" type="email" name="email" label="Email" placeholder="user@email.com" />
        <Input id="password" type="password" name="password" label="Password" placeholder="********" />
        <div>
          <button className="w-80 h-14 mt-20 text-white bg-orange-600 rounded-3xl">
            {options.signupOp ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </form>
    </div>
  );
}