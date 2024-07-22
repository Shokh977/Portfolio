'use client'
import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import Image from "next/image";
import './accordion.css';

// data
const dataArray = [
  {
    title: "강원도 강릉시 정동진 해변",
    desc: "한국에서 가장 유명한 일출 명소는 한국인 10명 중 9명이 알고 있는 곳입니다. 1995년의 전설적인 드라마 <모래시계> 촬영지로, 빠르게 명성을 얻었습니다.",
    img: "/assets/places/kangwon.jpg",
  },
 
  {
    title: "Busan, 부산",
    desc: "해운대 해변을 따라 걸어가다 보면 결국 평화로운 동백섬에 도착할 수 있습니다. 이 섬에는 동백해안산책로가 있으며, 이는 숲을 통과해 해변으로 이어지는 쉬운 산책로로, 바다와 섬을 내려다볼 수 있는 개방적인 경치를 제공합니다. 과거에는 이 섬이 본토에서 분리되어 있었지만, 지금은 다리로 연결되어 있습니다.",
    img: "/assets/places/busan.jpg",
  }, 
  {
    title: "Suwon / 수원",
    desc: "서울 광역시 내에 위치하고 있지만, 수원은 그 자체로 매력적인 여행지입니다. 이 도시에서 주요 명소 중 하나는 18세기에 건립된 멋진 화성(華城) 요새입니다. 이 요새 외에도, 다른 관광지로는 팔달음성, 수원 화성 박물관, 삼성 혁신 박물관이 있습니다.",
    img: "/assets/places/suwon.jpg",
  },
  {
    title: "Lotte world, 롯데월드 ",
    desc: "롯데월드에는 실내 롯데월드 어드벤처 테마파크와 야외 매직 아일랜드 테마파크뿐만 아니라 스케이트 링크, 쇼핑몰, 한국민속박물관도 있습니다. 이 복합시설은 모두를 위한 무엇인가를 제공하며, 주말에는 많은 사람들이 몰립니다.",
    img: "/assets/places/lotteworld.jpg",
  },
  {
    title: "Seoul, 서울",
    desc: "대한민국의 번화한 수도인 서울은 전통과 현대가 조화롭게 어우러진 도시입니다. 세계에서 가장 큰 메트로폴리스 중 하나로, 서울은 그 동적인 에너지, 풍부한 역사, 활기찬 문화로 방문객들을 매료시킵니다.",
    img: "/assets/places/seoul.jpg",
  },
];


export const Accordion = ({}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="imageAccordion">
        {dataArray.map((item, index) => {
          const isActive = activeIndex === index ? "active" : "";
          return (
            <div key={index}>
              <div
                className={`imageAccordionItem ${isActive}`}
                onClick={() => handleToggle(index)}>
                <Image src={item.img} alt={item.title} width={400} height={300} className="img"/>
                <div className="content">
                  <span className="materialSymbolsOutlined">
                   <a href={item.link}> <IoLocation color="blueviolet" /></a>
                  </span>
                  <div>
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>{" "}
      {activeIndex !== null && <Description item={dataArray[activeIndex]} />}
    </div>
  );
};

const Description = ({ item }) => {
  return (
    <div className="desc">
      <h2>{item.title}</h2>
      <p>{item.desc.substring(0,200) + "..." }</p>
    </div>
  );
};
