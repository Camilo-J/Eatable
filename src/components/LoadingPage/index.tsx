import title from '../../assets/Eatable.svg';

export function LoadingPage() {
  return (
    <div
      className="h-full w-full flex items-center justify-center bg-[url('assets/bgLoading.webp')] rounded-2xl bg-no-repeat bg-center bg-cover">
      <div
        className="bg-white rounded-full w-80 flex flex-col items-center justify-center gap-5 text-orange-600 text-center h-80">
        <img src={title} alt="logo-title" />
        <p className="text-lg">Food for Everyone</p>
        <div className="bottom-4 left-20
            h-8 w-8 animate-spin rounded-full border-4 border-solid
            border-current border-e-transparent align-[-0.125em]
            text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-orange-600"
             role="status" />
      </div>
    </div>
  );
}