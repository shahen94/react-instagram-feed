import React, { PropTypes } from 'react';
import styles from './styles.styl';

export const CommentBox = ({
  id
}) => (
  <div className={styles.itemFooter}>
    <span className={styles.likesCount}>
      {id} likes
    </span>
    <input
      type="text"
      placeholder="Add a comment"
      className={styles.commentBox}
    />
  </div>
);

CommentBox.propTypes = {
  id: PropTypes.number.isRequired
};
