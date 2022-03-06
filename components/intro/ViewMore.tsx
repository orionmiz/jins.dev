import Image from "next/image";
import utilStyles from 'styles/Utils.module.css'

export default function ViewMore({ folded, onClick }: {
  folded: boolean
  onClick: () => void
}) {

  return(
    <>
      <div className={utilStyles.btn} onClick={onClick}>
        <span>{`${folded ? '자세히' : '간략히'} 보기`}</span>
        <Image src='/img/ChevronDoubleDown.svg' width={26} height={26} className={folded ? utilStyles.rotateBefore : utilStyles.rotate} alt="more" />
      </div>
      <style jsx>{`
        div {
          border: 2px solid white;
          border-radius: 16px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
      `}</style>
    </>
  )
}