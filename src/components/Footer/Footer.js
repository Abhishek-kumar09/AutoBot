/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://fellowship.mlh.io/programs/explorer"
                className={classes.block}
                target="_blank"
              >
                Auto-Bot and Major League Hacking
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/Abhishek-kumar09/AutoBot"
                className={classes.block}
                target="_blank"
              >
                Github
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://github.com/abhishek-kumar09"
            className={aClasses}
            target="_blank"
          >
            Abhishek
          </a>{", "}
          <a
            href="https://github.com/petercrackthecode"
            className={aClasses}
            target="_blank"
          >
            Peter
          </a>{" and "}
          <a
            href="https://github.com/devthepenguin"
            className={aClasses}
            target="_blank"
          >
            Shivam
          </a>{" "}
          for a better world.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
