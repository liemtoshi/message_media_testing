import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import MessageMedia from '../components/MessageMedia';
import Spinner from '../components/UI/Spinner';
import axios from '../axios-orders';
import withErrorHandler from '../hoc/withErrorHandler';
import FullScreen from '../components/UI/FullScreen';

const MessageMediaBuilder = props => {
  /* eslint-disable */
  useEffect(() => {
    props.onInitMessageMedia(props.selectedPage);
  }, [props.selectedPage]);
  /* eslint-disable */

  let messageMedia = props.error ? <p>List images can't be loaded!</p> : <Spinner />;
  if(props.list) {
    messageMedia = (<MessageMedia list={props.list} />);
  }

  const onFullScreenClosed = () => {
    props.onUpdateSelectedImage(null);
  };

  const fullScreen = props.selectedImage && (
    <FullScreen show={props.selectedImage} fullScreenClosed={onFullScreenClosed}>
      <img src={props.selectedImage.images.original.url} alt={props.selectedImage.images.title} />
    </FullScreen>
  );

  return (
    <>
      {fullScreen}
      {messageMedia}
    </>
  );
};

const mapStateToProps = state => {
  const {data} = {...state.messageMedia.data};
  const {error, selectedImage, selectedPage} = {...state.messageMedia};
  return {
    list: data,
    error: error,
    selectedImage: selectedImage,
    selectedPage: selectedPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitMessageMedia: (currentPage) => dispatch(actions.initMessageMedia(currentPage)),
    onUpdateSelectedImage: (selectedImage) => dispatch(actions.updateSelectedImage(selectedImage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(MessageMediaBuilder, axios));