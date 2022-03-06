import { gallery } from "lib/gallery";
import Image from "next/image";
import Link from "next/link";
import Period from "./Period";
import utilStyles from 'styles/Utils.module.css';

export default function Piece({ pieceId }: {
  pieceId: string;
}) {

  const pieceData = gallery[pieceId];

  return (
    <>
      <Link href={`/gallery/${pieceId}`}>
        <a className={utilStyles.btn}>
          <div className="piece">
            <div className="thumbnail">
              <Image src={`/img/gallery/${pieceData.thumbnail}`} width={156} height={146} objectFit="cover" alt={pieceData.title} />
            </div>
            <div className="info">
              <div className="piece-title">{pieceData.title}</div>
              <Period period={pieceData.period} size="sm" />
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .piece {
          width: 156px;
          height: 214px;
          border: 1px solid #2b1717;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
        }
        .thumbnail {
          border-radius: 4px 4px 0;
          overflow: hidden;
        }
        .piece-title {
          font-size: 14px;
          font-weight: bold;
        }
        .info {
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
      `}</style>
    </>
  )
}