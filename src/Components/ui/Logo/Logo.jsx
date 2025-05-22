import React from 'react'
import classes from './Logo.module.css';
import first from './first.png';
import second from './second.png';
import third from './third.png';
import fourth from './fourth.png';
import fifth from './fifth.png';
import sixth from './sixth.png';
import seventh from './seventh.png';
const Logo = () => {
  return (
    <div className={classes.logo}>
      <div><img src={first} alt="img" /></div>
      <div><img src={second} alt="img" /></div>
      <div><img src={third} alt="img" /></div>
      <div><img src={fourth} alt="img" /></div>
      <div><img src={fifth} alt="img" /></div>
      <div><img src={sixth} alt="img" /></div>
      <div><img src={seventh} alt="img" /></div>
    </div>
  )
}

export default Logo
