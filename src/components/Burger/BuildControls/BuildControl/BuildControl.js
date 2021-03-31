import classes from './buildControl.module.css';

const buildControl = (props) =>(
    <div className={classes.buildControl}>
        <div>{props.label}</div>
        <button className={classes.Less} >Less</button>
        <button className={classes.More} >More</button>
    </div>
)

export default buildControl;