interface Props {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  defaultValue: string;
  label?: string;
}

export function CustomInput({ id, name, label, type, placeholder, defaultValue }: Props) {
  return (
    <div className="flex flex-col gap-1.5 text-gray-500">
      <label htmlFor={id || name}>{label}</label>
      <input name={name}
             className="border-b-2 border-gray-300 focus-visible:outline-0 focus-visible:border-b-orange-600 text-gray-700"
             type={type} id={id || name} defaultValue={defaultValue || ''}
             placeholder={placeholder} />
    </div>
  );
}