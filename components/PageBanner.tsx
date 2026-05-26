interface Props {
  label: string;
  title: string;
  desc?: string;
}

export default function PageBanner({ label, title, desc }: Props) {
  return (
    <section className="relative pt-32 pb-16 bg-[#07070e] overflow-hidden">
      <div className="absolute inset-0 hero-grid-bg opacity-50" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#5b6ef5] opacity-10 blur-[100px] -top-20 -right-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.2em] text-[#5b6ef5] uppercase mb-2">{label}</p>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">{title}</h1>
        {desc && <p className="text-[#b0b0cc] text-base max-w-xl">{desc}</p>}
      </div>
    </section>
  );
}
