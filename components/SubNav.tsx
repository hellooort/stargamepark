import Link from "next/link";

interface Tab { label: string; href: string; }

export default function SubNav({ tabs, current }: { tabs: Tab[]; current: string }) {
  return (
    <div className="bg-[#0d0d1a] border-b border-[#1e1e38] sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-6 flex gap-0 overflow-x-auto">
        {tabs.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className={`shrink-0 px-5 py-4 text-sm font-semibold border-b-2 transition-colors ${
              current === t.href
                ? "border-[#5b6ef5] text-[#5b6ef5]"
                : "border-transparent text-[#b0b0cc] hover:text-white"
            }`}
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
