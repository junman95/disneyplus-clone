import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://image.api.playstation.com/vulcan/img/rnd/202011/0204/HTicpseR1SkvZTPq91UJB98Z.png" />
      </Background>
      <ImageTitle>
        <img src="https://logos-download.com/wp-content/uploads/2016/09/SpongeBob_SquarePants_logo_wordmark.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>스폰지밥 네모바지 시즌 7+</SubTitle>
      <Description>
        바닷속 파인애플 집에 사는 노랗고 네모난 스폰지밥. 특기는 햄버거
        뒤집기요, 취미는 해파리 사냥이라지. 맛있는 음식을 뚝딱 만들어내고,
        친구들과 짜릿한 모험도 즐기는 하루하루. 듣기만 해도 신나? 그럼 우리 같이
        떠나! 
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 20vh;
  width: 20vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 10vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgba(249, 249, 249, 0.7);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: rgb(228, 228, 228);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(10, 10, 10, 0.5);
  color: white;

  &:hover {
    background: rgb(40, 40, 40);
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(10, 10, 10, 0.5);
  cursor: pointer;

  span {
    font-size: 36px;
    color: white;
  }

  &:hover {
    background: rgb(40, 40, 40);
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  margin-top: 30px;
  font-size: 15px;
`;

const Description = styled.div`
  margin-top: 30px;
  font-size: 17px;
  line-height: 1.4;
`;
