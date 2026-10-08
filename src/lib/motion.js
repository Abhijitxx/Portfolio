export const ease = [0.22, 1, 0.36, 1]
export const duration = 0.55
export const reveal = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration, ease } } }
export const stagger = { visible: { transition: { staggerChildren: 0.08 } } }
