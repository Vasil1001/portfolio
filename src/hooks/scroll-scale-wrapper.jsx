import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const ScrollScaleWrapper = ({ children, className = '' }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  return (
    <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className={`${className}`}>
      {children}
    </motion.div>
  )
}