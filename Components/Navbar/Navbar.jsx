import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome5'
const Navbar = () => {
  return (
    <>
      <FontAwesome
        name = 'cog'
        color='#ffffff80'
        style={{
            position:'absolute',
            top:80,
            fontSize:25,
            right:20,
            // zIndex:100,
        }}
      />
    </>
  )
}

export default Navbar
