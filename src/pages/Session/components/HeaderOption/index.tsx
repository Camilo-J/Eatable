interface Props {
  active: boolean;
  name: string;
  handleClicked: () => void;
}


export function HeaderOption({ name, active, handleClicked }: Props) {
  return (
    <div>
      <button className="w-36 transition-all text-lg text-orange-600" onClick={handleClicked}>
        {name}
      </button>
      <div className="mt-3 h-0.5" style={{
        background: 'linear-gradient(to right, #fa4a0c 50%, white 50%)',
        backgroundSize: '200% 100%',
        backgroundPosition: active ? 'left bottom' : 'right bottom',
        transition: 'all 0.5s ease-out'

      }} />
    </div>
  );
}