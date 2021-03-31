import classes from './BuildControl.module.css';



const buildControl = (props) =>(
    <div className={classes.buildControl}>
        <div>{props.label}</div>
        <button className={classes.Less} >Less</button>
        <button onClick={props.added} className={classes.More} >More</button>
    </div>
)

export default buildControl;