import React,{useState}from 'react'
import axios from "axios"
import {
  useToast,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,

} from "@chakra-ui/react";
const StudentInfo = () => {
   const toast=useToast();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const submitHandler=async()=>{
        if (!name || !email || !phone|| !address) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try{
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
       const { data } = await axios.post(
         "/login",
         {
           name,
           email,
           phone,
           address,
         },
         config
       );
        console.log(data);
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
    }catch(error){
       toast({
         title: "Error Occured!",
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
        <h1>Student Registeration process..</h1>
      </div>
      <div>
        <VStack spacing="5px" color="black" width="50%">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>E-Mail</FormLabel>
            <Input
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="phonenumber" isRequired>
            <FormLabel>PhoneNumber</FormLabel>
            <Input
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter your address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            width="30%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
           
          >
            Sign Up
          </Button>
        </VStack>
      </div>
    </div>
  );
}

export default StudentInfo
