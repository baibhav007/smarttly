import classes from './ListIcon.module.css';
import rightIcon from '../../../Assets/Service/tick.svg';
import crossIcon from '../../../Assets/Service/cross.svg';


export default function ListIcon({ cross, icon, analyticsName }) {
  return (
    <div className={icon ? classes.iconContainer : classes.container}>
      {icon ? (cross ? <img style={{width: '32px'}} src={crossIcon} alt='cross' /> : <img style={{width: '32px'}} src={rightIcon} alt='tick' />) : <p className={classes.text}>{analyticsName}</p>}
    </div>
  );
}