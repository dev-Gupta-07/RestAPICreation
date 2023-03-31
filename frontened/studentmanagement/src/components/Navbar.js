import React from 'react'
import {Box,Text} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   
      <div>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="white"
          w="100%"
          p="5px 10px 5px 10px"
          borderWidth="5px"
        >
          <Text>WELCOME HERE</Text>
       
             <Link to="/">Home</Link>
              <Link to="/sign">SignUp</Link>
           
              <Link to="/login">Login</Link>
              
       </Box>
         
       
      </div>
  
  );
}

export default Navbar
