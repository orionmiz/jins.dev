import { getIconFileName } from "lib/gallery";
import Image from "next/image";
import styles from 'styles/Utils.module.css'

export default function MetaIcon({ variant, size }: {
  variant: string,
  size: number
}) {
  return (
    <>
      <Image src={`/img/icon/${getIconFileName(variant)}.svg`} width={size} height={size} className={styles.adjustTheme} alt={variant} />
    </>
  )
}