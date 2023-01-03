import React from "react";
import { Player } from "video-react";
import IconCross from "./../Icons/IconCross";
import "./Content.scss";

const Content = ({ course, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ "background-image": `url(${course.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{course.title}</div>
        <div className="content__description">{course.description}</div>
        <di>
          <a href={course.youtubeLink} target="_blank">
            Abrir aqui
          </a>
        </di>
        <div className="content__video">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
