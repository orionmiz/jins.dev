import Gallery from "components/Gallery";
import ViewMore from "components/intro/ViewMore";
import { getAllPieceIds, getPieceData, PieceData } from "lib/gallery";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import Period from "components/gallery/Period";
import Links from "components/gallery/Links";
import NavBar from "components/NavBar";
import Collapse from "components/utils/Collapse";
import MetaIcon from "components/gallery/MetaIcon";
import Footer from "components/Footer";
import Head from "next/head";

export default function GalleryPage({ pieceData }: {
  pieceData: PieceData;
}) {

  const [folded, setFolded] = useState(true);

  const metas = [
    ['design', 'Designed With'],
    ['languages', 'Written In'],
    ['deps', 'Made Of']
  ].filter(([key]) => pieceData[key as keyof PieceData]);

  return (
    <>
      <Head>
        <title>{pieceData.title} - JINS.DEV</title>
      </Head>
      <NavBar />
      <section>
        <div className="container">
          <div className='thumbnail'>
            <Image src={`/img/gallery/${pieceData.thumbnail}`} width={500} height={500} objectFit='cover' alt={pieceData.title} />
          </div>
          <div className="content">
            <h1>{pieceData.title}</h1>
            <Period period={pieceData.period} />
            <p>{pieceData.desc}</p>
            <Links data={pieceData.links} />
          </div>
        </div>
        <Collapse opened={!folded}>
          <div className="meta">
            <div className="more content">
              {metas.map(([key, label]) => (
                <div key={key} className='dev'>
                  <div className="desc">{label}</div>
                  <div className="deps">
                    {pieceData[key as ('design' | 'languages' | 'deps')]?.map((dep) => (
                      <div key={dep} className='dep'>
                        <MetaIcon variant={dep} size={20} />
                        {dep}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="dev content">
              <div className="desc">Features</div>
              <div className="deps">
                <ul>
                  {pieceData.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Collapse>
        <ViewMore folded={folded} onClick={() => setFolded(!folded)} />
      </section>
      <Gallery />
      <Footer />
      <style jsx>{`
        section {
          background-color: #756363;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          padding: 30px;
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 30px;
        }
        .thumbnail {
          width: 400px;
          height: 400px;
          border: 1px solid #957a7a;
          border-radius: 16px;
          overflow: hidden;
        }
        .content {
          width: 400px;
        }
        .meta {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 27px;
        }
        .more {
          display: flex;
          flex-direction: column;
          gap: 27px;
        }
        .more > * {
          flex-grow: 1;
        }
        .dev {
          border: 1px solid #957a7a;
          border-radius: 8px;
          padding: 16px;
        }   
        .desc {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 6px;
        }
        .deps {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .dep {
          display: flex;
          align-items: center;
          gap: 4px;
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
        @media (max-width: 400px) {
          .thumbnail, .content {
            width: auto;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPieceIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pieceData = await getPieceData(params?.id as string);

  return {
    props: {
      pieceData,
    }
  }
}