import React from "react";
import PropTypes from "prop-types";
import styles from "./PicText.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const renderPic = (path, figCaption = null, width = 400, height = 400) => (
  <div
    style={{
      backgroundImage: path,
      width: 400,
      height: 400,
    }}
    className={styles.background}
  />
);

const renderPic2 = (path, figCaption = null, width = 400, height = 400) => (
  <figure>
    {/* <div
      style={{
        backgroundImage: path,
        width: 400,
        height: 400,
      }}
      className={styles.background}
    /> */}
    <img
      src={path}
      alt=""
      className={styles.background}
      style={{
        // backgroundImage: path,
        width,
        height,
      }}
    />
    {figCaption && <figcaption>{figCaption}</figcaption>}
  </figure>
);

const PicText = ({
  children,
  textFirst,
  imgFileName,
  imgFileName2,
  figCaption,
  width,
  height,
}) => (
  <div className={cx(styles.PicText, { textFirst })}>
    {renderPic(`url(${process.env.PUBLIC_URL}/${imgFileName}`, figCaption)}
    {/* {renderPic(
      `${process.env.PUBLIC_URL}/${imgFileName}`,
      figCaption,
      width,
      height
    )} */}
    {imgFileName2 &&
      renderPic(`url(${process.env.PUBLIC_URL}/${imgFileName2}`, figCaption)}
    {/* renderPic(
        `${process.env.PUBLIC_URL}/${imgFileName2}`,
        figCaption,
        width,
        height
      ) */}
    <div className={styles.content}>{children}</div>
  </div>
);

PicText.propTypes = {
  children: PropTypes.node.isRequired,
  textFirst: PropTypes.bool,
  imgFileName: PropTypes.string,
  imgFileName2: PropTypes.string,
};

PicText.defaultProps = {
  textFirst: false,
  imgFileName: "melee.jpg",
  imgFileName2: null,
};

export default PicText;
