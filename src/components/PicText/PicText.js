import React from "react";
import PropTypes from "prop-types";
import styles from "./PicText.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const renderPic = (path) => (
  <div
    style={{
      backgroundImage: path,
      width: 400,
      height: 400,
    }}
    className={styles.background}
  />
);

const PicText = ({ children, picFirst, imgFileName, imgFileName2 }) => (
  <div className={cx(styles.PicText, { picFirst })}>
    {renderPic(`url(${process.env.PUBLIC_URL}/${imgFileName}`)}
    {imgFileName2 && renderPic(`url(${process.env.PUBLIC_URL}/${imgFileName2}`)}
    <div className={styles.content}>{children}</div>
  </div>
);

PicText.propTypes = {
  children: PropTypes.node.isRequired,
  picFirst: PropTypes.bool,
  imgFileName: PropTypes.string,
  imgFileName2: PropTypes.string,
};

PicText.defaultProps = {
  picFirst: false,
  imgFileName: "melee.jpg",
  imgFileName2: null,
};

export default PicText;
