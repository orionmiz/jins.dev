import Deco from "./header/Deco";

export default function Header() {
  return (
    <>
      <section>
        <Deco />
        <div className="name">
          <span>{'{'}</span> JH. LEE <span>{'}'}</span>
        </div>
        <div className="spec">
          프로그래머, 공학도 <span className="gamer">그리고 GAMER</span>
        </div>
      </section>
      <style jsx>{`
        section {
          background-color: #754545;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 60px 0;
        }
        .name, .spec {
          letter-spacing: -2%;
          font-weight: bold;
        }
        .name {
          font-size: 40px;
          text-align: center;
        }
        .name > span {
          color: #957a7a;
        }
        .spec {
          font-weight: 300;
          font-size: 14px;
        }
        .gamer {
          color: orange;
        }
      `}</style>
    </>
  )
}