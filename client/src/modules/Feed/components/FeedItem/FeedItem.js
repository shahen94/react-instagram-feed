import React, { PropTypes } from 'react';
import { CommentBox } from '../CommentBox';
import styles from './styles.styl';


export const FeedItem = ({
  openFeedItemModal,
  thumbnailUrl,
  title,
  url,
  id,
}) => (
  <div
    className={styles.container}
    onClick={() => openFeedItemModal(id)}
  >
    <div className={styles.itemHeader}>
      <img
        src={thumbnailUrl}
        className={styles.thumbnail}
      />
      <span>{title}</span>
    </div>
    <div
      style={{
        WebkitTransition: 'all',
        msTransition: 'all',
        backgroundImage: `url(${url})`
      }}
      className={styles.img}
    />
    <CommentBox id={id} />
  </div>
);

FeedItem.propTypes = {
  openFeedItemModal: PropTypes.func.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
