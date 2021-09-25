import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <a href="/disneyplus-clone/detail">
            <img src="https://blog.kakaocdn.net/dn/bSnAxt/btqDGgD3wMx/s9ExsDd33hqHm0TNh27gb0/img.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="https://lh3.googleusercontent.com/proxy/AOq3zKPtJak5tRFxBmvGDMoGF0ifKMHtSBzTIdeR7KyaeYSaRvmagDf37RIc-LbrS-Wq4PV_MrSBoGfecR5M7WZJ4Pm2UffIq6MD2dG1gi-lUl9qYOzcC_UQZ5cKHQYUq8UsjAQ" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5iog/image/-bdZRhFgzNGXXpQpSEu7Rt9KY-E.png" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="https://an2-img.amz.wtchn.net/image/v2/8ed35916954f01e45614b0bb98e2404b.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPakV3T0RBc0luQmhkR2dpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE5UZzNORFV5TVRVM01qTTFPRFUyT0NJc0luRjFZV3hwZEhraU9qZ3dMQ0ozYVdSMGFDSTZNVGt5TUgwLkZZc2FNd0tsZEtnMTFPWEpMMHlBdGhCWnJLY0FHb2pvdlNwOTh2M3luRWs" />
          </a>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  height: 80%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
