import clsx from "clsx";

export const Container = ({ children, ClassName }) => {
  const classes = clsx("container-fluid", "px-", ClassName);
  return <div className={classes}>{children}</div>;
};

export const Row = ({ children, ClassName }) => {
  const classes = clsx("row", ClassName);
  return <div className={classes}>{children}</div>;
};

export const Column = ({ children, ClassName }) => {
  const classes = clsx("col", ClassName);
  return <div className={classes}>{children}</div>;
};
