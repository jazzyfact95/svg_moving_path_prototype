import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const MapContainer = styled.div`
  border: 5px solid red;
  width: 100%;
  height: 100%;
  transition: 1s;
  /* @keyframes fill-ani {
    from {
      stroke-dashoffset: 344;
    }
    to {
      stroke-dashoffset: 10;
    }
  } */
  #fill-svg {
    stroke: yellow;
    stroke-width: 15;
    stroke-dasharray: 1455;
    /* stroke-dashoffset: ${(props) =>
      getDashoffset(props.percent.percent) ?? 0}; */
    stroke-dashoffset: ${(props) => 1455 - props.percent.percent * 7.35 ?? 0};
    /* stroke-dashoffset: 172; */
    fill: black;
    /* animation: fill-ani 5s infinite; */
  }
  .cover-svg {
    stroke: #fff;
    stroke-width: 1;
    stroke-dasharray: 1455;
    fill: #fff;
    opacity: 1;
  }
  .out-svg-2 {
    stroke: blue;
    stroke-width: 2;
    stroke-dasharray: 1455;
    fill: blue;
    opacity: 1;
  }
  #view-box-svg {
    width: 100%;
    height: 100%;
    border: yellow 1px solid;
  }
`;

// * 만약 굴곡으로 인하여 정상적인 퍼센테이지 적용이 되지 않을 경우
//  아래와 같이 조율하여 사용하면 된다.
const getDashoffset = (percent) => {
  let result = 0;
  if (percent <= 10) {
    result = 344 - percent * 7.14;
  } else if (percent <= 20) {
    result = 344 - percent * 5.64;
  } else if (percent <= 30) {
    result = 344 - percent * 4.7;
  } else if (percent <= 40) {
    result = 344 - percent * 4.4;
  } else if (percent <= 50) {
    result = 344 - percent * 4.5;
  } else if (percent <= 60) {
    result = 344 - percent * 4.4;
  } else if (percent <= 70) {
    result = 344 - percent * 3.7;
  } else if (percent <= 80) {
    result = 344 - percent * 3.6;
  } else if (percent <= 90) {
    result = 344 - percent * 3.44;
  } else {
    result = 344 - percent * 3.44;
  }
  return result;
};

const Line1 = (percent) => {
  useEffect(() => {
    // svg path의 총 길이를 알아내기
    // console.log(
    //   "fill-svg 총 길이",
    //   document.getElementById("fill-svg").getTotalLength()
    // );
    console.log("percent", percent);
  }, [percent]);

  return (
    <MapContainer percent={percent}>
      {/* 큰 SVG 태그, viewBox 지정 */}
      {/* 설계 : 같은 SVG PATH 4개를 겹쳐 사용한다. */}
      {/* 1) 퍼센트에 따라 움직이는 path */}
      {/* 2) 움직이는 path의 영역 지정 mask */}
      {/* 3) 퍼센트에 따라 움직이는 path의 바탕이 될 깔아놓는 SVG path */}
      {/* 4) 바탕이 될 깔아놓는 SVG path의 테두리를 위해 조금 더 키워서 깔아주는 SVG */}
      <svg id="view-box-svg" viewBox="436 1210 1000 1000">
        {/* 참조하겠다. */}
        <defs>
          <mask id="outlook">
            {/* 내부 percentage 에 따라 변화하는 path를 덮어주는 외부 영역 지정 path */}
            <path
              className="cover-svg"
              d="M182.4,595.3l-3.3-2.3c2.8-4,10.1-15.2,11.2-18.7c1.3-4.1,5.3-16.7-1.6-35.4l0-0.1l-4-12.7
		c-8.8-27.9-15.5-49.4-15.8-50.9c0-0.1-0.1-0.3-0.2-0.6c-6.2-17-1.1-33.5,14.9-47.6l0.2-0.1c16.3-11.6,30.4-12,37.1-12.2
		c0.5,0,1,0,1.4,0l2.2-0.1c10.2-0.4,41.1-1.5,56.5-3.5l1.9-0.2c29.3-3.7,59.6-7.5,62.7-7.6l0.4,0c17-0.6,31.7,1.5,42.3,6
		c15.2,6.5,36.1,15.3,47.9,18.8c11.6,3.4,47.5,12.9,73.4,15.4c2.2,0.2,4.4,0.4,6.7,0.6c22.9,2.1,46.6,4.3,72.4,11.8
		c28.9,8.4,64.6,21.4,65,21.5c0.2,0.1,0.5,0.2,1,0.4c19.7,7.4,35.1,11.3,43.6,10.8c13.6-0.8,16.1-1.4,16.2-1.5l1.3,3.8
		c-1.1,0.4-6.2,1-17.2,1.7c-9.1,0.5-24.8-3.3-45.2-11.1c-0.4-0.2-0.8-0.3-0.9-0.4c-0.4-0.1-36-13.1-64.7-21.5
		c-25.4-7.4-48.9-9.6-71.6-11.7c-2.2-0.2-4.5-0.4-6.7-0.6c-26.2-2.5-62.4-12-74.2-15.5c-12-3.6-33-12.5-48.3-19
		c-10.2-4.3-24.2-6.3-40.6-5.7l-0.5,0c-3.3,0.1-46.2,5.5-62.3,7.6l-1.9,0.2c-15.5,2-46.6,3.1-56.8,3.5l-2.1,0.1c-0.4,0-0.9,0-1.4,0
		c-6.4,0.2-19.6,0.6-34.8,11.4c-10.2,9.1-20.8,23.9-13.7,43.2c0.2,0.6,0.3,0.9,0.4,1.2c0.4,1.7,9.6,31,15.7,50.4l4,12.6
		c7.4,19.9,3.1,33.5,1.7,38C192.7,580.2,183.5,593.8,182.4,595.3z"
            />
          </mask>
        </defs>
        {/* transform 초기 위치 지정, scale 배율지정 */}
        {/* 바깥 테두리를 위한 path  파란색*/}
        <g transform="translate(-1000,100) scale(3.125,3.125)">
          <path
            className="out-svg-2"
            d="M182.4,595.3l-3.3-2.3c2.8-4,10.1-15.2,11.2-18.7c1.3-4.1,5.3-16.7-1.6-35.4l0-0.1l-4-12.7
            c-8.8-27.9-15.5-49.4-15.8-50.9c0-0.1-0.1-0.3-0.2-0.6c-6.2-17-1.1-33.5,14.9-47.6l0.2-0.1c16.3-11.6,30.4-12,37.1-12.2
            c0.5,0,1,0,1.4,0l2.2-0.1c10.2-0.4,41.1-1.5,56.5-3.5l1.9-0.2c29.3-3.7,59.6-7.5,62.7-7.6l0.4,0c17-0.6,31.7,1.5,42.3,6
            c15.2,6.5,36.1,15.3,47.9,18.8c11.6,3.4,47.5,12.9,73.4,15.4c2.2,0.2,4.4,0.4,6.7,0.6c22.9,2.1,46.6,4.3,72.4,11.8
            c28.9,8.4,64.6,21.4,65,21.5c0.2,0.1,0.5,0.2,1,0.4c19.7,7.4,35.1,11.3,43.6,10.8c13.6-0.8,16.1-1.4,16.2-1.5l1.3,3.8
            c-1.1,0.4-6.2,1-17.2,1.7c-9.1,0.5-24.8-3.3-45.2-11.1c-0.4-0.2-0.8-0.3-0.9-0.4c-0.4-0.1-36-13.1-64.7-21.5
            c-25.4-7.4-48.9-9.6-71.6-11.7c-2.2-0.2-4.5-0.4-6.7-0.6c-26.2-2.5-62.4-12-74.2-15.5c-12-3.6-33-12.5-48.3-19
            c-10.2-4.3-24.2-6.3-40.6-5.7l-0.5,0c-3.3,0.1-46.2,5.5-62.3,7.6l-1.9,0.2c-15.5,2-46.6,3.1-56.8,3.5l-2.1,0.1c-0.4,0-0.9,0-1.4,0
            c-6.4,0.2-19.6,0.6-34.8,11.4c-10.2,9.1-20.8,23.9-13.7,43.2c0.2,0.6,0.3,0.9,0.4,1.2c0.4,1.7,9.6,31,15.7,50.4l4,12.6
            c7.4,19.9,3.1,33.5,1.7,38C192.7,580.2,183.5,593.8,182.4,595.3z"
          />
        </g>
        <g
          transform="translate(-1000,100) scale(3.125,3.125)"
          mask="url(#outlook)"
        >
          <path
            className="out-svg"
            d="M182.4,595.3l-3.3-2.3c2.8-4,10.1-15.2,11.2-18.7c1.3-4.1,5.3-16.7-1.6-35.4l0-0.1l-4-12.7
		c-8.8-27.9-15.5-49.4-15.8-50.9c0-0.1-0.1-0.3-0.2-0.6c-6.2-17-1.1-33.5,14.9-47.6l0.2-0.1c16.3-11.6,30.4-12,37.1-12.2
		c0.5,0,1,0,1.4,0l2.2-0.1c10.2-0.4,41.1-1.5,56.5-3.5l1.9-0.2c29.3-3.7,59.6-7.5,62.7-7.6l0.4,0c17-0.6,31.7,1.5,42.3,6
		c15.2,6.5,36.1,15.3,47.9,18.8c11.6,3.4,47.5,12.9,73.4,15.4c2.2,0.2,4.4,0.4,6.7,0.6c22.9,2.1,46.6,4.3,72.4,11.8
		c28.9,8.4,64.6,21.4,65,21.5c0.2,0.1,0.5,0.2,1,0.4c19.7,7.4,35.1,11.3,43.6,10.8c13.6-0.8,16.1-1.4,16.2-1.5l1.3,3.8
		c-1.1,0.4-6.2,1-17.2,1.7c-9.1,0.5-24.8-3.3-45.2-11.1c-0.4-0.2-0.8-0.3-0.9-0.4c-0.4-0.1-36-13.1-64.7-21.5
		c-25.4-7.4-48.9-9.6-71.6-11.7c-2.2-0.2-4.5-0.4-6.7-0.6c-26.2-2.5-62.4-12-74.2-15.5c-12-3.6-33-12.5-48.3-19
		c-10.2-4.3-24.2-6.3-40.6-5.7l-0.5,0c-3.3,0.1-46.2,5.5-62.3,7.6l-1.9,0.2c-15.5,2-46.6,3.1-56.8,3.5l-2.1,0.1c-0.4,0-0.9,0-1.4,0
		c-6.4,0.2-19.6,0.6-34.8,11.4c-10.2,9.1-20.8,23.9-13.7,43.2c0.2,0.6,0.3,0.9,0.4,1.2c0.4,1.7,9.6,31,15.7,50.4l4,12.6
		c7.4,19.9,3.1,33.5,1.7,38C192.7,580.2,183.5,593.8,182.4,595.3z"
          />
          {/* 퍼센트에 따라 움직이는 path 노란색 */}
          <path
            id="fill-svg"
            d="M182.4,595.3l-3.3-2.3c2.8-4,10.1-15.2,11.2-18.7c1.3-4.1,5.3-16.7-1.6-35.4l0-0.1l-4-12.7
            c-8.8-27.9-15.5-49.4-15.8-50.9c0-0.1-0.1-0.3-0.2-0.6c-6.2-17-1.1-33.5,14.9-47.6l0.2-0.1c16.3-11.6,30.4-12,37.1-12.2
            c0.5,0,1,0,1.4,0l2.2-0.1c10.2-0.4,41.1-1.5,56.5-3.5l1.9-0.2c29.3-3.7,59.6-7.5,62.7-7.6l0.4,0c17-0.6,31.7,1.5,42.3,6
            c15.2,6.5,36.1,15.3,47.9,18.8c11.6,3.4,47.5,12.9,73.4,15.4c2.2,0.2,4.4,0.4,6.7,0.6c22.9,2.1,46.6,4.3,72.4,11.8
            c28.9,8.4,64.6,21.4,65,21.5c0.2,0.1,0.5,0.2,1,0.4c19.7,7.4,35.1,11.3,43.6,10.8c13.6-0.8,16.1-1.4,16.2-1.5l1.3,3.8
            c-1.1,0.4-6.2,1-17.2,1.7c-9.1,0.5-24.8-3.3-45.2-11.1c-0.4-0.2-0.8-0.3-0.9-0.4c-0.4-0.1-36-13.1-64.7-21.5
            c-25.4-7.4-48.9-9.6-71.6-11.7c-2.2-0.2-4.5-0.4-6.7-0.6c-26.2-2.5-62.4-12-74.2-15.5c-12-3.6-33-12.5-48.3-19
            c-10.2-4.3-24.2-6.3-40.6-5.7l-0.5,0c-3.3,0.1-46.2,5.5-62.3,7.6l-1.9,0.2c-15.5,2-46.6,3.1-56.8,3.5l-2.1,0.1c-0.4,0-0.9,0-1.4,0
            c-6.4,0.2-19.6,0.6-34.8,11.4c-10.2,9.1-20.8,23.9-13.7,43.2c0.2,0.6,0.3,0.9,0.4,1.2c0.4,1.7,9.6,31,15.7,50.4l4,12.6
            c7.4,19.9,3.1,33.5,1.7,38C192.7,580.2,183.5,593.8,182.4,595.3z"
          />
        </g>

        <g>
          <circle class="st0" cx="0" cy="0" r="5.3" fill="#fefefe" />
          <circle cx="50" cy="50" r="1000" fill="#fefefe" />
          <circle cx="1410" cy="200" r="50" fill="#fefefe" />
        </g>
      </svg>
    </MapContainer>
  );
};

export default Line1;