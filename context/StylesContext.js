import React, { useContext, createContext } from "react";
import clientsStyles from "../styles/Clients.module.scss";
import contactStyles from "../styles/Contact.module.scss";
import footerStyles from "../styles/Footer.module.scss";
import formStyles from "../styles/Form.module.scss";
import circleStyles from "../styles/GradientCircle.module.scss";
import homeStyles from "../styles/Home.module.scss";
import navbarStyles from "../styles/Navbar.module.scss";
import layoutStyles from "../styles/PageLayout.module.scss";
import wrapperStyles from "../styles/PageWrapper.module.scss";
import profileStyles from "../styles/Profile.module.scss";
import showcaseStyles from "../styles/Showcase.module.scss";
const criticalStyles = {
  clientsStyles,
  contactStyles,
  footerStyles,
  formStyles,
  circleStyles,
  homeStyles,
  navbarStyles,
  layoutStyles,
  wrapperStyles,
  profileStyles,
  showcaseStyles,
};

const Context = createContext(criticalStyles);

const StylesContext = ({ children }) => {
  return <Context.Provider value={criticalStyles}>{children}</Context.Provider>;
};

const useStyles = () => useContext(Context);

export default useStyles;
export { StylesContext, useStyles, Context };
