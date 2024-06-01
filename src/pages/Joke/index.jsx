import { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likeUp, setLikeUp] = useState(likes);
  const [likeDown, setLikeDown] = useState(dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} alt={userName} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={() => setLikeUp(likeUp + 1)}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likeUp}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={() => setLikeDown(likeDown + 1)}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {likeDown}
        </span>
      </div>
    </div>
  );
};
