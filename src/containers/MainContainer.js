import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SvgContainer from '../cmpts/SvgContainer';

const MainSector = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
  p {
    color: white;
  }
`;

const MapSector = styled.div`
  display: inline-block;
  width: 1384px;
  height: 360px;
  margin-top: 100px;
  margin-left: 5px;
  background-image: url('/map.png');
`;

const MainContainer = () => {
  const [Values, setValues] = useState({
    planLength: 100,
    currentLength: 0,
  });

  const [percent, setPercent] = useState(0);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...Values,
      [name]: parseInt(value),
    });
  };

  useEffect(() => {
    const CL = parseInt(Values.currentLength);
    const ML = parseInt(Values.planLength);
    const Result = Math.ceil((CL / ML) * 100);
    setPercent(Result);
  }, [Values]);

  return (
    <MainSector>
      <MapSector>
        <SvgContainer
          currentLength={Values.currentLength}
          planLength={Values.planLength}
        />
      </MapSector>
      <hr />
      <p>
        최대 굴진 거리 :
        <input
          onChange={onChange}
          name="planLength"
          value={Values.planLength >= 0 ? Values.planLength : 0}
        />
        m
      </p>
      <p>
        현재 굴진 거리 :
        <input
          onChange={onChange}
          name="currentLength"
          value={Values.currentLength >= 0 ? Values.currentLength : 0}
        />
        m
      </p>
      <p>굴진 퍼센트 : {`${percent}`} %</p>
    </MainSector>
  );
};

export default MainContainer;
