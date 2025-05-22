import React, { useState } from 'react'
import classes from './MobileCardLayout.module.css';
import Button from '../../ui/input/reuse/Button/button';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import MobileCard from './MobileCard';
const MobileCardLayout = ({service}) => {
  const starterPlans = [
    { id: 1, title: "Starter Service 1" },
    { id: 2, title: "Starter Service 2" },
    { id: 3, title: "Starter Service 3" },
    { id: 4, title: "Starter Service 4" },
    { id: 5, title: "Starter Service 5" },
    { id: 6, title: "Starter Service 6" },
  ];
  
  const advancedPlans = [
    { id: 1, title: "Advanced Service 1" },
    { id: 2, title: "Advanced Service 2" },
    { id: 3, title: "Advanced Service 3" },
    { id: 4, title: "Advanced Service 4" },
    { id: 5, title: "Advanced Service 5" },
    { id: 6, title: "Advanced Service 6" },
  ];

  const [selectedPlan,setselectedPlan]=useState("Starter");
  const [currentIndex,setCurrentIndex]=useState(0);

  const serviceList=selectedPlan==="Starter"?starterPlans:advancedPlans;

  const visibleServices=serviceList.slice(currentIndex,currentIndex+1);

  const handlePlanChange=(plan)=>{
    setselectedPlan(plan);
    setCurrentIndex(0);
  }

  const handleNext=()=>{
    if(currentIndex+1<serviceList.length){
      setCurrentIndex((prev)=>prev+1)
    }
  }
  const handlePrev=()=>{
    if(currentIndex>0){
      setCurrentIndex((prev)=>prev-1)
    }
  }

  return (
    <div className={classes.MobileCardLayout}>
        <div className={classes.MobileCardLayoutIntro}>
        <p className={classes.heading}>Choose the right plan for your website</p>
        <div className={classes.planbutton}>
        <Button className={selectedPlan==="Starter"?classes.activeButton:classes.button}
         backgroundColor="Transparent" borderColor="var(--maintext)" color="var(--maintext)" onClick={()=>handlePlanChange("Starter")}>Starter Plan</Button>
        <Button className={selectedPlan==="Advanced"?classes.activeButton:classes.button}
         backgroundColor="Transparent" borderColor="var(--maintext)" color="var(--maintext)" onClick={()=>handlePlanChange("Advanced")}>Advanced Plan</Button>
        </div>
        </div>
        {/* <MobileCard/> */}
        {visibleServices.map((service) => (
          <MobileCard key={service.id} title={service.title} service={service} />
        ))}
        <div className={classes.navigatebutton}>
        <Button backgroundColor="Transparent" borderColor="var(--maintext)" color="var(--maintext)" onClick={handlePrev} disabled={currentIndex===0}><GoArrowLeft /></Button>
        <Button backgroundColor="Transparent" borderColor="var(--maintext)" color="var(--maintext)" onClick={handleNext} disabled={currentIndex+1>serviceList.length}><GoArrowRight /></Button>
        </div> 
        <Link to="#feature" className='link' style={{color:"var(--maintext)",textDecoration:'underline'}} >See full feature list</Link>
    </div>
  )
}

export default MobileCardLayout
