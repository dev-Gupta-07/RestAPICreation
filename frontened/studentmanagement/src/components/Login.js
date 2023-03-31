import React,{useState} from 'react'
import axios from 'axios';
import {
  useToast,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
const Login = () => {
    const[email,setEmail]=useState();
    const toast=useToast();
    const[password,setPassword]=useState();
    const submitHandler=async()=>{
       if (!email || !password)
       {
           toast({
             title: "Please fill all the fields",
             status: "warning",
             duration: 5000,
             isClosable: true,
             position: "bottom",
           });
           return;
         }
         try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      toast({
        title: "Invalid email or password!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    };
  return (
    <div>
      <div>
        <h1>Student Login process..</h1>
      </div>
      <div>
        <VStack spacing="5px" color="black" width="50%">
          <FormControl id="email" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter your e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            width="30%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
          >
            Login
          </Button>
        </VStack>
      </div>
    </div>
  );
}

export default Login
