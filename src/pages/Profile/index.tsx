import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { useUserStore } from '@/store/user.ts';
import { useNavigate } from 'react-router';
import { useTransition } from 'react';

export function Profile() {
  const { user } = useUserStore();
  const logout = useUserStore(state => state.logout);
  const navigate = useNavigate();
  const [isPending, startTransaction] = useTransition();
  if (!user) return null;

  const { name, email, phone, address } = user;
  const handleLogout = () => {
    startTransaction(async () => {
      await logout();
      navigate('/');
    });
  };

  return (
    <div className="py-8 px-5 flex flex-col gap-4 relative">
      <Header text="Profile" />
      <div className="h-full flex flex-col justify-between px-10 mt-4 gap-4">
        <div className="flex bg-gray-100 rounded-lg mt-4 justify-between">
          <p>Address details</p>
          <button className="text-orange-600 cursor-pointer" onClick={() => navigate('/profile/edit')}>Change</button>
        </div>

        <div className="bg-white w-80 h-48 p-4 rounded-3xl flex flex-col gap-1 text-sm">
          <p className="font-semibold text-base">{name || 'User'}</p>
          <p className="mt-3 text-gray-500">{email || '----------'}</p>
          <div className="h-[1px] bg-gray-500" />
          <p className="mt-3 text-gray-500">{phone || '----------'}</p>
          <div className="h-[1px] bg-gray-500" />
          <p className="mt-3 text-gray-500">{address || '----------'}</p>
          <div className="h-[1px] bg-gray-500" />
        </div>

        <div className="relative">
          <div
            className={`${isPending ? '' : 'hidden'} absolute bottom-5 left-10
            h-6 w-6 animate-spin rounded-full border-4 border-solid
            border-current border-e-transparent align-[-0.125em]
            text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
            role="status" />
          <button className={`w-80 h-16 px-12 py-3 rounded-3xl text-white font-semibold
         bg-orange-600 mt-8 ${isPending ? 'bg-orange-400' : 'hover:bg-orange-500'}`}
                  data-testid="logout-button" onClick={handleLogout}>
            {isPending ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      </div>

      <div className="absolute w-[408px] -bottom-[384px]">
        <Navbar />
      </div>
    </div>
  );
}