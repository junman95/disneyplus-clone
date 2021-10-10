import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
//firebase
import db from "../firebase";

function Detail(props) {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  console.log(useParams());
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
          console.log(doc.data());
        } else {
          console.log("no such document in firebase");
        }
      })
      .catch((error) => {
        console.log("Error getting document: ", error);
      });
  }, [id]);
  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>
      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img alt="playbutton" src="images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img alt="trailericon" src="images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img alt="groupwatchbutton" src="images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>{detailData.title}</SubTitle>
      <Description>{detailData.description}</Description>
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
