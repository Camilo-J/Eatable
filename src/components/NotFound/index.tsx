import { ReactNode } from 'react';

interface Props {
  text: string;
  icon: ReactNode;
}

export function NotFound({ text, icon }: Props) {
  return (
    <div className="mt-24 flex flex-col justify-center items-center gap-9">
      {icon}
      <p className="text-lg">{text}</p>
    </div>
  );
}