import React from "react";
import PropTypes from "prop-types";
import styles from "./PicText.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PicText = ({ children, picFirst }) => (
  <div className={cx(styles.PicText, { picFirst })}>
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/melee.jpg`,
        width: 400,
        height: 400,
      }}
      className={styles.background}
    />
    <div className={styles.content}>{children}</div>
  </div>
);

PicText.propTypes = {
  children: PropTypes.node.isRequired,
  picFirst: PropTypes.bool,
};

PicText.defaultProps = {
  picFirst: false,
};

export default PicText;
