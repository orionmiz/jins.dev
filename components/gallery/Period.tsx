import Image from "next/image";

type PeriodSize = 'sm' | 'md';

type SizeOption = {
  icon: number,
  font: number
}

const sizeOptions: Record<PeriodSize, SizeOption> = {
  'sm': {
    icon: 18,
    font: 12
  },
  'md': {
    icon: 24,
    font: 16
  },
}

export default function Period({ period, size = 'md' }: {
  period: string
  size?: PeriodSize
}) {

  const sizeOption = sizeOptions[size];

  return (
    <>
      <div className="period">
        <Image src='/img/CalendarCheck.svg' width={sizeOption.icon} height={sizeOption.icon} />
        <span>{period}</span>
      </div>
      <style jsx>{`
        .period {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #B8B8B8;
        }
        .period > span {
          font-size: ${sizeOption.font}px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}