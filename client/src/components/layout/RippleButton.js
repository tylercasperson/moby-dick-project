import React, { useRef } from 'react';

const RippleButton = () => {
  const rippleBtn = useRef();

  const ripple = (e) => {
    let x = e.clientX - rippleBtn.current.offsetLeft - (e.screenX - e.pageX) / 2;
    let y = e.clientY - rippleBtn.current.offsetTop - (e.screenY - e.pageY) * 2.7;

    rippleBtn.current.style.setProperty('--x', x + 'px');
    rippleBtn.current.style.setProperty('--y', y + 'px');
  };

  return (
    <div className='btnBody'>
      <button className='btn' ref={rippleBtn} onMouseEnter={(e) => ripple(e)}>
        <span>Button</span>
      </button>
    </div>
  );
};

export default RippleButton;
