import { ChangeEvent } from 'react';

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
}


export function Input({ label, type = 'text', placeholder, id, name, error }: InputProps) {

  return (
    <div className="w-80 flex flex-col ">
      {label && <label htmlFor={label} className="text-sm text-gray-500">{label}</label>}
      <input type={type} placeholder={placeholder} id={id || name} name={name}
             className="w-80 h-10 bg-gray-100 border-0 border-b-2 border-gray-300 focus-visible:outline-0 focus-visible:border-b-orange-600" />
      {error && <span className="mt-1 text-orange-400 text-sm">{error}</span>}
    </div>
  );
}