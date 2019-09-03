import React from 'react';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import Card from './Card';
import * as actions from '../../store/actions/messageMediaBuilder';
import './styles.css';

const MessageMedia = props => {
  const listImages = props.list && _.map(props.list, (item, index) => {
    return (
      <Card key={item.id} details={item} />
    );
  });

  const onLoadMoreHandler = e => {
    e.preventDefault();
    props.onResetData();
    props.onUpdateSelectedPage();
  };

  return (
    <>
      <div className="list-images">
        {listImages}
      </div>
      <div className="load-more">
        <button onClick={onLoadMoreHandler}>Load more</button>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onResetData: () => dispatch(actions.resetData()),
    onUpdateSelectedPage: () => dispatch(actions.updateSelectedPage()),
  };
};

export default connect(null, mapDispatchToProps)(MessageMedia);