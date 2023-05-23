import { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./Horario.css";

const Horario = (props) => {
  const schedule_Images = props.ciclo.schedule_Image;
  const images_cant = schedule_Images.length;
  const image_name = schedule_Images[0].url;
  let [imageNumber, setImageNumber] = useState(1);
  var file_name =
    images_cant === 1
      ? image_name
      : image_name.substring(0, image_name.indexOf("_")) + "_" + imageNumber;

  const removeNumberImage = () => {
    if (imageNumber > 1) {
      setImageNumber(imageNumber - 1);
    }
  };

  const addNumberImage = () => {
    if (imageNumber < images_cant) {
      setImageNumber(imageNumber + 1);
    }
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.close}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="xl"
        className="my-schedule-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {images_cant > 1 && (
            <div class="row image-arrows">
              <div class="col-md-6 centered">
                <BsFillArrowLeftCircleFill
                  size={"2.5rem"}
                  style={{ marginRight: "20px", cursor: "pointer" }}
                  onClick={() => {
                    removeNumberImage();
                  }}
                />
                <BsFillArrowRightCircleFill
                  size={"2.5rem"}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    addNumberImage();
                  }}
                />
              </div>
            </div>
          )}
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <img
                src={require(`../Ciclos/Images/Schedule/${file_name}.png`)}
                alt=""
                width={"980px"}
                className="img-responsive"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Horario;
