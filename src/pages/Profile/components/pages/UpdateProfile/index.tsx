import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { useUserStore } from '@/store/user.ts';
import { CustomInput } from '@/pages/Profile/components/CustomInput';
import { FormEvent, useRef } from 'react';

export function UpdateProfile() {
  const { user } = useUserStore();
  const updateUser = useUserStore(state => state.updateUser);
  const formRef = useRef<HTMLFormElement>(null);
  if (!user) return null;

  const { name, email, phone, address } = user;
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current as HTMLFormElement);
    const userData = Object.fromEntries(formData.entries());

    await updateUser(userData);
  };

  return (
    <div className="py-8 px-5 flex flex-col gap-4 relative">
      <Header text="My Profile" />

      <div className="h-full flex flex-col justify-between px-10 mt-4 gap-4">
        <div className="bg-gray-100 rounded-lg mt-4">
          <p>Update Personal details</p>
        </div>

        <form ref={formRef} className="bg-white w-80 p-4 rounded-3xl flex flex-col gap-4 text-sm">
          <CustomInput id="name" name="name" defaultValue={name || ''} type="text" placeholder="Jhon" label="Name" />
          <CustomInput id="email" name="email" defaultValue={email || ''} type="email" placeholder="example@mail.com"
                       label="Email" />
          <CustomInput id="phone" name="phone" defaultValue={phone || ''} type="number" placeholder="123456987"
                       label="Phone" />
          <CustomInput id="address" name="address" defaultValue={address || ''} type="text" placeholder="av radiants"
                       label="Address" />
        </form>

        <button className="w-80 h-16 px-12 py-3 rounded-3xl text-white font-semibold
        bg-orange-600 mt-8 hover:bg-orange-500" onClick={handleSubmit} data-testid="update-button">
          Update Profile
        </button>
      </div>

      <div className="absolute w-[408px] -bottom-[316px]">
        <Navbar />
      </div>
    </div>
  );
}