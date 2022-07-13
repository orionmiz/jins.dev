import { Category, gallery } from "lib/gallery";
import Piece from "./gallery/Piece";
import { useState } from "react";
import utilStyles from "styles/Utils.module.css";
import category from "meta/gallery-category.json";

export default function Gallery() {
  const [tab, setTab] = useState("Web");

  return (
    <>
      <section>
        <div className="container">
          <div className="header">
            <div className="title">Projects</div>
            <div className="tab-box">
              <div className="tabs">
                {["Web", "Game", "Tool"].map((id) => (
                  <div
                    key={id}
                    id={id}
                    className={`${utilStyles.btn} tab ${
                      tab === id ? "active" : ""
                    }`}
                    onClick={(e) => {
                      setTab(e.currentTarget.id);
                    }}
                  >
                    {id}
                  </div>
                ))}
              </div>
              <hr />
            </div>
          </div>
          <div>
            <div className="pieces">
              {category[tab as Category].map((piece, idx) => (
                <Piece key={idx} pieceId={piece} />
              ))}
            </div>
          </div>
          <hr />
        </div>
      </section>
      <style jsx>{`
        section {
          background-color: #625555;
          padding: 60px 0;
        }
        .container {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
        }
        .tab-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .tabs {
          display: flex;
          gap: 20px;
        }
        .tab.active {
          opacity: 1;
        }
        .tab {
          font-size: 16px;
          font-weight: bold;
          opacity: 0.5;
        }
        hr {
          width: 446px;
          max-width: 100vw;
          border: 0;
          border-top: 1px solid #957a7a;
          margin: 0 auto;
        }
        .pieces {
          display: grid;
          grid-template-columns: repeat(auto-fill, 156px);
          justify-content: center;
          gap: 40px;
          max-width: 600px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .pieces {
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}
