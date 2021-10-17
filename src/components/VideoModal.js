import React, { useState, useEffect } from "react";
import styled from "styled-components";
//db
import db from "../firebase";

function VideoModal({ onClick, detailData }) {
  const clip = detailData.videoClip;
  const title = detailData.title
  return (
    <Container className="video-modal" onClick={onClick}>
      <CloseButton>
        <img src="/images/close-icon-black.png" />
      </CloseButton>
      <VideoWrapper>
        <Video>
          <iframe
            src={clip}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            constrols="1"
          ></iframe>
        </Video>
      </VideoWrapper>
    </Container>
  );
}

export default VideoModal;

const Container = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  backdrop-filter: brightness(50%);
  backdrop-filter: blur(5px);
`;

const CloseButton = styled.button`
  cursor: pointer;
  top: 2%;
  right: 10%;
  border-radius: 4px;
  position: absolute;
  justify-content: right;
  background-color: transparent;
  border-color: transparent;

  :hover{
    transform : scale(1.2)
  }
`;
const VideoWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  background: black;
  border: solid 3px gray;
  border-radius: 20px;
  width: 80%;
  height: 80%;
  z-index: 100;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 46px 70px -5px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`;
const Video = styled.div`
  width: 100%;
  height: 100%;

  iframe {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
