import Image from "next/image";
import utilStyles from 'styles/Utils.module.css'

export default function Footer() {
  return (
    <>
      <section>
        <div className="icons">
          <a href='https://blog.jins.dev' className={utilStyles.btn}>
            <Image src='/img/Globe2.svg' width={23} height={23} />  
          </a>
          <a href='https://github.com/orionmiz' className={utilStyles.btn}>
            <Image src='/img/Github.svg' width={23} height={23} />
          </a>
          <a href='https://twitter.com/jin_l33' className={utilStyles.btn}>
            <Image src='/img/Twitter.svg' width={23} height={23} />  
          </a>
        </div>
        <div className="contact">
          Contact: <a href="mailto:hello@jins.dev">hello@jins.dev</a>
        </div>
        <div className="copyright">
          Copyright © 2022.
          JH.Lee.
          All Rights Reserved.
        </div>
      </section>
      <style jsx>{`
        section {
          background-color: #2D2D2D;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 0;
          gap: 8px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
        }
        .icons {
          display: flex;
          gap: 12px;
        }
        .contact {
          font-size: 14px;
        }
        .contact > a {
          color: skyblue;
        }
        .contact > a:hover {
          opacity: 0.8;
        }
        .copyright {
          color: gray;
          font-size: 12px;
        }
      `}</style>
    </>
  )
}