import React from "react"
import { Box } from "rebass"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./Navbar"

const StickyHeader = ({ isVisible }) => {
  return (
    <Box style={{ zIndex: 99 }}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box
              bg="daintree"
              py={3}
              style={{
                position: `fixed`,
                top: 0,
                left: 0,
                right: 0,
                zIndex: 99,
              }}
            >
              <Navbar />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default StickyHeader
