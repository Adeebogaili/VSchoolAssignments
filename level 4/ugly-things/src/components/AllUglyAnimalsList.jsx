import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { ThemeContext } from './ThemeContext'
import axios from 'axios';


function AllUglyAnimalsList({ id, title, imgUrl, description, deleteUglyAnimals, editUglyAnimals }) {

  const {color} = useContext(ThemeContext)

  const [isEditing, setIsEditing] = useState(false)

  const [like, setLike] = useState(0)

  const [animalData, setAnimalData] = useState({
    title: title,
    imgUrl: imgUrl,
    description: description,
  });

  const handleLike = () => {
    setLike(prevLike => prevLike + 1)
      }

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setIsEditing(!isEditing)
  };
  const handleShow = () => setShow(true);

  function handleEdit() {
    setIsEditing(!isEditing)
    handleShow()
  }

  function handleSave() {
    editUglyAnimals(id, animalData)
    setIsEditing(!isEditing)
    handleClose()
  }

  return (
    <section className='animal-details'>
      <div className='animal-info'>
        <Dropdown className='dropdown'>
          <Dropdown.Toggle 
            className={color === "Light" 
            ? "text-dark bg-transparent border-0 shadow-none" 
            : "text-light bg-transparent border-0 shadow-none" } 
            variant="success" 
            id="dropdown-basic">
          </Dropdown.Toggle>

          <Dropdown.Menu 
            className={color === "Light"
            ? "bg-light" : "bg-dark"}>
            <Dropdown.Item 
              className={color === "Light"
              ? "text-dark" : "text-light"} 
              href="#/action-1" 
              onClick={handleEdit}>Edit</Dropdown.Item>
            <Dropdown.Item 
              className={color === "Light"
              ? "text-dark" : "text-light"} 
              href="#/action-2" 
              onClick={() => { deleteUglyAnimals(id) }} >Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <img className='animal-img' src={imgUrl} alt={title}></img>
        <h3 className='animal-title'>{title}</h3>
        <p className='animal-description'>{description}</p>
      </div>
      <div className='social'>
        <div className='likes-count'>
        <i className="fa-regular fa-thumbs-up"></i>
        <p>{like}</p>
        </div>
        <div className='interaction'>
          <div className='like' onClick={handleLike}>
            <i className="fa-regular fa-thumbs-up"></i>
            <p>Like</p>
          </div>
          <div className='comment'>
          <i className="fa-regular fa-comment"></i>
          <p>Comment</p>
          </div>
        </div>
      </div>
      {isEditing ? (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header
            className={color === "Light"
            ? "bg-light text-dark" : "bg-dark text-light"}
            closeButton>
              <Modal.Title>Edit Ugly Animal</Modal.Title>
            </Modal.Header>
            <Modal.Body
              className={color === "Light"
              ? "bg-light" : "bg-dark"}
            >
              <div className='edit-form'>
                <input
                  className={color === "Light"
                  ? "bg-light text-dark" : "bg-dark text-light"}
                  value={animalData.title}
                  onChange={e => setAnimalData({ ...animalData, title: e.target.value })}
                  placeholder="Title" />
                <input
                  className={color === "Light"
                  ? "bg-light text-dark" : "bg-dark text-light"}
                  value={animalData.imgUrl}
                  onChange={e => setAnimalData({ ...animalData, imgUrl: e.target.value })}
                  placeholder="Image URL" />
                <textarea
                  className={color === "Light"
                  ? "bg-light text-dark" : "bg-dark text-light"}
                  value={animalData.description}
                  rows="6"
                  onChange={e => setAnimalData({ ...animalData, description: e.target.value })}
                  placeholder="Description" />
              </div>
            </Modal.Body>
            <Modal.Footer
              className={color === "Light"
              ? "bg-light text-dark" : "bg-dark text-light"}
            >
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>Save</Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : null}
    </section>
  )
}

export default AllUglyAnimalsList