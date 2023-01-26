import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function EditMeme(props) {
  // State for the top text of the meme
  const [topText, setTopText] = useState(props.topText);
  // State for the bottom text of the meme
  const [bottomText, setBottomText] = useState(props.bottomText);

  // State for controlling the visibility of the modal
  const [show, setShow] = useState(false);

  // Function to hide the modal
  const handleClose = () => setShow(false);
  // Function to show the modal
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="button edit-btn" onClick={handleShow}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>

      <Modal
        // Show or hide the modal based on the state
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Meme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            // Form for editing the top and bottom text of the meme
            className="modal-form"
            id="editModal"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(
                "hello from edit meme",
                props.id,
                topText,
                bottomText
              );
              // Call the updateMeme function from the parent component to update the meme
              props.updateMeme(props.id, topText, bottomText);
            }}
          >
            <input
              type="text"
              placeholder="Top text"
              name="topText"
              value={topText}
              onChange={(e) => {
                setTopText(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Bottom text"
              name="bottomText"
              value={bottomText}
              onChange={(e) => {
                setBottomText(e.target.value);
              }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="save-btn" form="editModal">
              Save
          </button>
          <button className="exit-btn" onClick={handleClose}>
              Exit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditMeme;
