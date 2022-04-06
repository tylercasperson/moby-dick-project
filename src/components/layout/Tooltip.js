import React, { useState } from 'react';

const Tooltip = (props) => {
  const [active, setActive] = useState(false);
  let timeout;

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  return (
    <div className='tooltipWrapper' onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {active && <div className={`tooltip ${props.direction || 'top'}`}>{props.content}</div>}
    </div>
  );
};

export default Tooltip;
