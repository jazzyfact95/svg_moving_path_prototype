import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SvgMap from '../cmpts/SvgMap';

const MainSector = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  p {
    color: white;
  }
  #hi {
    stroke: yellow;
    stroke-width: 7;
    stroke-dasharray: 342;
    fill: transparent;
    opacity: 1;
  }
`;

const MapSector = styled.div`
  display: inline-block;
  width: 1384px;
  height: 360px;
  margin-top: 100px;
  margin-left: 5px;
  background-color: white;
  background-image: url('/map.png');
`;

const MainContainer = () => {
  const [Values, setValues] = useState({
    maxLength: 100,
    currentLength: 0,
  });

  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...Values,
      [name]: parseInt(value),
    });
  };

  useEffect(() => {
    const CL = parseInt(Values.currentLength1);
    const ML = parseInt(Values.maxLength1);
    const Result = Math.ceil((CL / ML) * 100);
    setPercent1(Result);
  }, [Values]);
  useEffect(() => {
    const CL = parseInt(Values.currentLength2);
    const ML = parseInt(Values.maxLength2);
    const Result = Math.ceil((CL / ML) * 100);
    setPercent2(Result);
  }, [Values]);

  return (
    <MainSector>
      <MapSector>
        <SvgMap percent1={percent1} percent2={percent2} />
      </MapSector>
      <hr />
      <p>
        최대 굴진 거리 :
        <input
          onChange={onChange}
          name="maxLength2"
          value={Values.maxLength2 >= 0 ? Values.maxLength2 : 0}
        />
        m
      </p>
      <p>
        현재 굴진 거리 :
        <input
          onChange={onChange}
          name="currentLength2"
          value={Values.currentLength2 >= 0 ? Values.currentLength2 : 0}
        />
        m
      </p>
      <p>굴진 퍼센트 : {`${percent2}`} %</p>
    </MainSector>
  );
};

export default MainContainer;
