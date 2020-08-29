import React from 'react'
import { animated, interpolate, useTrail } from 'react-spring'

interface Props {
  mass?: number
  tension?: number
  friction?: number
  delay?: number
  toggled: boolean
}

const AnimatedText: React.FC<React.PropsWithChildren<Props>> = (
  props: React.PropsWithChildren<Props>
) => {
  const children = React.Children.toArray(props.children)
  const trail = useTrail(children.length, {
    config: {
      mass: props.mass ? props.mass : 5,
      tension: props.tension ? props.tension : 2000,
      friction: props.friction ? props.friction : 500,
    },
    delay: props.delay ? props.delay : 0,
    opacity: props.toggled ? 1 : 0,
    x: props.toggled ? 20 : 0,
    maxHeight: props.toggled ? '100%' : '0%',
    from: { opacity: 0, x: 20, maxHeight: '0%' },
  })

  return (
    <div className="trails-main">
      <div>
        {trail.map(({ x, maxHeight, ...rest }, index) => (
          <animated.div
            key={index}
            className="trails-text"
            style={{
              ...rest,
              transform: interpolate([x], (x) => `translate3d(0,${x}px,0)`) as string,
            }}
          >
            <animated.div style={{ maxHeight }}>{children[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedText
