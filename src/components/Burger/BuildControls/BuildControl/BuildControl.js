import classes from "./BuildControl.module.css";

const buildControl = (props) => (
  <div className={classes.buildControl}>
    <div>{props.label}</div>
    <button
      onClick={props.removed}
      className={classes.Less}
      disabled={props.disable}
    >
      Less
    </button>
    <button onClick={props.added} className={classes.More}>
      More
    </button>
  </div>
);

export default buildControl;
