import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return(
    <>
      <nav>
        <Link href={'/'}>
          <a>
            <Image src='/img/MainIcon.png' width={62} height={54} />
          </a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          background-color: #2D2D2D;
          padding: 10px 20px;
          z-index: 1;
          display: flex;
          align-items: center;
        }
        a {
          margin: auto;
        }
      `}</style>
    </>
  )
}