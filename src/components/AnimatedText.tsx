import { Typography } from '@material-ui/core';
import React from 'react';
import { animated, interpolate, useTrail } from 'react-spring';

const items = ['Lorem', 'ipsum', 'dolor', 'sit'];
const config = { mass: 5, tension: 2000, friction: 200 };

const AnimatedText: React.FunctionComponent = () => {
  const toggle = true;
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 100 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="trails-main">
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: interpolate(
                [x],
                (x) => `translate3d(0,${x}px,0)`
              ) as string,
            }}
          >
            <animated.div style={{ height }}>
              <Typography variant="h1">{items[index]}</Typography>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
