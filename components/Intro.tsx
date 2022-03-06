import { useState } from "react";
import ViewMore from "./intro/ViewMore";
import Collapse from "./utils/Collapse";

export default function Intro() {

  const [folded, setFolded] = useState(true);

  const toggleFolded = () => {
    setFolded(!folded);
  }

  return (
    <>
      <section>
        <div className="container">
          <div>
            <div className="title">🤔 WHO AM I?</div>
            <div>웹 앱, 게임, 유틸리티, 서버와 같이 분야에 경계를 두지 않고 무엇이든지 만드는 <span className="highlight">프로그래머</span>입니다.</div>
            <Collapse opened={!folded}>
              <div className="more">
                - 웹 개발 (Front-end, Back-end) <br />
                - 게임 개발 (Server)
              </div>
              <br />
            </Collapse>
            <div>또한, 소프트웨어 보안에 관심이 많은 <span className="highlight">보안 전문가</span> 지망생이기도 합니다.</div>
            <Collapse opened={!folded}>
              <div className="more">
                - 네트워크 패킷 분석 <br />
                - 리버스 엔지니어링
              </div>
            </Collapse>
          </div>
          <div>
            <div className="title">📖 EDUCATION</div>
            <div>서울과학기술대학교 전기정보공학과 학부과정 (2018.03 ~ 휴학)</div>
            <Collapse opened={!folded}>
              <div className="more">
                - 2학기까지의 GPA: 3.98 / 4.5 (ICE: 4.5 / 4.5)
              </div>
            </Collapse>
          </div>
          <div>
            <div className="title">💻 EXPERIENCE</div>
            <div>여의도 웨스턴힐 분양팀</div>
            <Collapse opened={!folded}>
              <div className="more">
                - 분양 홍보용 랜딩페이지 제작 (2021.02)
              </div>
              <br />
            </Collapse>
            <div>부평구청 축제위원회</div>
            <Collapse opened={!folded}>
              <div className="more">
                <div>-「부평풍물대축제」행사 식권 발권기 Web App 개발 (2021.10)</div>
              </div>
            </Collapse>
          </div>
          <div>
            <div className="title">🙋‍♂️ JOINED</div>
            <ul>
              <li>
                <span>NEXON NDC 2019</span>
                <Collapse opened={!folded}>
                  <ul className="more">
                    <li>{'<하스스톤>'} 강화학습 환경 개발기 - 0티어 덱을 만들기 위해 떠나는 모험</li>
                    <li>개발이 쉬워진다? - 생산성을 올려주는 개발자 도구들</li>
                    <li>좋은 로그란 무엇인가? - 좋은 로그를 위해 고려해야 할 것들</li>
                    <li>어떻게 매칭 시켜드릴까요? - 매칭 시스템 만들기</li>
                  </ul>
                  <br />
                </Collapse>
              </li>
              <li>
                <span>NAVER DEVIEW 2020</span>
                <Collapse opened={!folded}>
                  <ul className="more">
                    <li>어서와, SSR은 처음이지? (네이버 블로그 Node.js 기반의 Server-Side Rendering 적용기)</li>
                    <li>리액트 개발이 이렇게 쉬웠나? (feat. Next.js)</li>
                    <li>성능개선 뛰어들기 (고전적 SSR 성능개선)</li>
                  </ul>
                </Collapse>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ViewMore folded={folded} onClick={toggleFolded} />
        </div>
      </section>
      <style jsx>{`
        section {
          background-color: #756363;
          padding: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        div {
          font-size: 16px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .highlight {
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        ul {
          padding-inline-start: 10px;
          list-style-position: inside;
        }
        li::marker {
          margin-right: 0;
        }
        li > span {
          margin-left: -6px;
          font-weight: 400;
        }
        li:not(:last-child) {
          margin-bottom: 5px;
        }
        .more {
          padding-top: 5px;
        }
      `}</style>
    </>
  )
}