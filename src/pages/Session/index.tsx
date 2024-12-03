import { useState } from 'react';
import { Input } from '../../components/Input';
import { HeaderOption } from '../../components/HeaderOption';
import title from '../../assets/Eatable.svg';

interface Props {
  loginOp: boolean;
  signupOp: boolean;
}

export function SessionPage() {
  const [options, setOptions] = useState<Props>({ loginOp: true, signupOp: false });

  const handleOptions = (option: string) => {
    if (option === 'login') {
      setOptions({ loginOp: true, signupOp: false });
      return;
    }

    setOptions({ loginOp: false, signupOp: true });
  };

  return (
    <div className="flex flex-col w-full gap-12 items-center">
      <section className="bg-white rounded-3xl w-96 h-96 mt-5" style={{ boxShadow: '0px 4px 30px rgba(0,0,0,0.06)' }}>
        <div className="flex flex-col items-center justify-center gap-5 text-orange-600 text-center h-80">
          <img src={title} alt="logo-title" />
          <p>Food for Everyone</p>
        </div>
        <div className="flex gap-5 justify-center p-2">
          <HeaderOption name="Log in" active={options.loginOp} handleClicked={() => handleOptions('login')} />
          <HeaderOption name="Sign up" active={options.signupOp} handleClicked={() => handleOptions('signup')} />
        </div>
      </section>
      <section className="flex flex-col items-center gap-12">
        <Input id="email" type="email" name="email" label="Email" placeholder="user@email.com" />
        <Input id="password" type="password" name="password" label="Password" placeholder="********" />
        <div>
          <button className="w-80 h-14 mt-20 text-white bg-orange-600 rounded-3xl">
            {options.signupOp ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </section>
    </div>
  );
}