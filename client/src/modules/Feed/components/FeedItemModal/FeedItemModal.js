import React, { PropTypes } from 'react';
import styles from './styles.styl';

const renderLoading = () => (
  <div>
    Loading...
  </div>
);

const renderError = (e) => (
  <div>
    {e.message || e}
  </div>
);

export const FeedItemModal = ({
  post,
  visible,
  loading,
  error,
  closeModal
}) => {
  if (error) {
    return renderError(error);
  }
  if (loading) {
    return renderLoading();
  }

  return (
    <div
      onClick={closeModal}
      className={styles.container}
      style={{
        display: visible ? 'flex' : 'none'
      }}
    >
      {loading ?
        renderLoading() : (
          error ?
            renderError(error) : (
              <div className={styles.main}>
                <img
                  src={post.url}
                  className={styles.img}
                  onClick={(e) => e.stopPropagation()}
                />
                <span>{post.title}</span>
              </div>
            )
        )}
    </div>
  );
}


FeedItemModal.propTypes = {
  post: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
  closeModal: PropTypes.func.isRequired,
};
