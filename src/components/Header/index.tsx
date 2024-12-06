import { IconChevronLeft } from '@tabler/icons-react';
import { useNavigate } from 'react-router';

interface Props {
  text?: string;
}

export function Header({ text }: Props) {
  const navigate = useNavigate();

  return (
    <section className="flex items-center">
      <IconChevronLeft cursor="pointer" color="gray" size={23} onClick={() => navigate(-1)} />
      {text && <p className="w-full text-center text-lg font-semibold text-gray-700">{text}</p>}
    </section>
  );
}