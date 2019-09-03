import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as _ from 'lodash';
import './styles.css';

const Card = props => {
  const {images, source_post_url, user, viewing, comment, like} = props.details;
  
  const details = (
    <div className="details">
      { _.size(source_post_url) > 0 && (
          <a href={source_post_url} target="blank">
            <FontAwesomeIcon icon="link" />  
          </a>
        )
      }
      <ul className={_.size(source_post_url) > 0 ? '' : 'full-width'}>
        <li>
          <FontAwesomeIcon icon="eye" />
          {viewing ? viewing : 0}
        </li>
        <li>
          <FontAwesomeIcon icon="comment" />
          {comment ? comment : 0}
        </li>
        <li>
          <FontAwesomeIcon icon="heart" />
          {like ? like : 0}
        </li>
      </ul>
    </div>
  );

  const userLink = user && (
    <a href={user.profile_url} className="user-link" target="blank">
      <div className="user-avatar">
        <img src={user.avatar_url} alt={user.display_name} />
      </div>
      {user.display_name}
    </a>
  );

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="img" onClick={() => props.onUpdateSelectedImage(props.details)}>
          <img src={images.downsized.url} alt={images.title} />
        </div>
        {details}
      </div>
      {userLink}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateSelectedImage: (selectedImage) => dispatch(actions.updateSelectedImage(selectedImage)),
  };
};

export default connect(null, mapDispatchToProps)(Card);