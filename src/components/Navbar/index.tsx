import { NavLink } from 'react-router';
import { IconClockSearch, IconHome, IconUser } from '@tabler/icons-react';

export function Navbar() {
  return (
    <nav data-testid="navbar" className="flex justify-around py-2.5 sticky">
      <NavLink data-testid="link-products" to="/products"
               className={({ isActive }) => isActive ? 'text-orange-600' : 'text-gray-500'}>
        <IconHome size={35} />
      </NavLink>
      <NavLink data-testid="link-profile" to="/profile"
               className={({ isActive }) => isActive ? 'text-orange-600' : 'text-gray-500'}>
        <IconUser size={35} />
      </NavLink>
      <NavLink data-testid="link-history" to="/orders/history"
               className={({ isActive }) => isActive ? 'text-orange-600' : 'text-gray-500'}>
        <IconClockSearch size={35} />
      </NavLink>
    </nav>
  );
}