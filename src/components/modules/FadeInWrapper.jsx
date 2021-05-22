import React, {useState, useEffect} from 'react';

const FadeInWrapper = (props) => {
  const [scrollTop, setScrollTop] = useState();
  const [percentage, setPercentage] = useState();

  let handleScroll = () => {
    let distance = document.getElementById(`${props.id}`).getBoundingClientRect().top,
        percentz = (distance / document.documentElement.clientHeight) * 100;
    setScrollTop(distance);
    setPercentage(percentz);
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])
  return (
    <div className="fadeInWrap" id={props.id}>
      <div className={`${props.class} ${percentage <= 90 ? 'fadeIn' : 'fadeOut'}`}>
        {props.children}
      </div>
    </div>
  )
}
export default FadeInWrapper;
