import React from 'react';
import PropTypes from 'prop-types';
import styles from './GridPicText.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const renderGridPic = (imgFileNames) => (
  <div className={styles.gridWrapper}>
    {imgFileNames.map((imgFileName) => (
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/${imgFileName}`,
          width: 100,
          height: 100,
        }}
        className={styles.background}
      />
    ))}
  </div>
);

const GridPicText = ({ children, textFirst, imgFileNames }) => (
  <div className={cx(styles.GridPicText, { textFirst })}>
    {renderGridPic(imgFileNames)}
    <div className={styles.content}>{children}</div>
  </div>
);

GridPicText.propTypes = {
  children: PropTypes.node.isRequired,
  textFirst: PropTypes.bool,
  imgFileName: PropTypes.string,
  imgFileName2: PropTypes.string,
};

GridPicText.defaultProps = {
  textFirst: false,
  imgFileName: 'melee.jpg',
  imgFileName2: null,
};

export default GridPicText;
