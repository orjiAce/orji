import React  from 'react'
import { useTrail, a } from '@react-spring/web'
 const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
     const items = React.Children.toArray(children)
     const trail = useTrail(items.length, {
         config: { mass: 5, tension: 2000, friction: 200 },
         opacity: open ? 1 : 0,
         y: open ? 0 : 20,
         height: open ? 80 : 0,
         from: { opacity: 0, y: 20, height: 0 },
     })
    return (
<>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
     </>
    )
}

export default Trail
