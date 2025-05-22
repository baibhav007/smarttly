import classes from './tab.module.css'
export default function Tab({children, ...props}){
    return(
        <button {...props} className={classes.tab}>
            {children}
        </button>
    )
}