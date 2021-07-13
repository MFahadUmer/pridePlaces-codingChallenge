import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'Column',
    justifyContent: 'space-between',
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '60vw',
    height: '60vh',
    borderRadius: '10px',
    backgroundColor: '#DCDCDC',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Posts = ({
  title, id, body, userId,
}) => {
  const users = useSelector((state) => state.users);
  let username = '';
  let userphrase = '';
  let usersInfo;
  if (users.users.length > 0) {
    usersInfo = users.users.filter((e) => e.id === userId);
    username = usersInfo[0].name;
    userphrase = usersInfo[0].company.catchPhrase;
  }
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="postTitle">
      <button type="submit" className="postButton" onClick={openModal}>
        {id}
        -&nbsp;&nbsp;
        {title}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h3 className="modalTitle">{title}</h3>
          <p className="modalTitleAuthor">
            written by
            {username}
          </p>
          <p className="modalBody">{body}</p>
          <p className="modalTitleAuthor">
            {username}
            &apos;s CatchPhrase
          </p>
          <p className="modalCatchPhrase">{userphrase}</p>
        </div>
        <div className="closeModalButtonDiv">
          <button className="closeModalButton" type="submit" onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  );
};

Posts.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default Posts;
