import classes from "./index.module.css";

export default function Title(props) {
  return (
    <a className={classes.Container} href="/contactus">
      {props.children}
    </a>
  );
}
