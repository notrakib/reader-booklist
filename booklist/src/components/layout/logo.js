import logo from "./style/icons8.png";
import classes from "./style/logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="Logo" />
      <p>Bookrdr</p>
    </div>
  );
};

export default Logo;
