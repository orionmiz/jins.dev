import { LinkType } from "lib/gallery";
import Image from "next/image"
import utilStyles from 'styles/Utils.module.css'

export default function Links({ data }: {
  data: Partial<Record<LinkType, string>>
}) {
  return (
    <>
      <div className="links">
        <Image src='/img/Link45deg.svg' width={24} height={24} alt="links" />
        <span>Links</span>
      </div>
      <div className="list">
        {Object.keys(data).map((key) => (
          <a key={key} href={data[key as LinkType]} className={utilStyles.btn}>
            <Image src={`/img/icon/${key}.svg`} width={24} height={24} alt={key} />
          </a>
        ))}
      </div>
      <style jsx>{`
        .links {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-bottom: 6px;
        }
        .links > span {
          font-size: 16px;
          font-weight: bold;
        }
        .list {
          display: flex;
          gap: 8px;
        }
      `}</style>
    </>
  );
}