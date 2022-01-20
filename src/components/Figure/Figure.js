import React from "react";
import PropTypes from "prop-types";
import styles from "./Figure.module.css";

const Figure = ({ imgFileName, figCaption, width, height }) => (
  <figure>
    <img
      src={`${process.env.PUBLIC_URL}/${imgFileName}`}
      alt=""
      className={styles.background}
      style={{
        width,
        height,
      }}
    />
    {figCaption && <figcaption>{figCaption}</figcaption>}
  </figure>
);

Figure.propTypes = {
  imgFileName: PropTypes.string.isRequired,
  figCaption: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Figure.defaultProps = {
  figCaption: "",
  width: 400,
  height: 400,
};

export default Figure;
