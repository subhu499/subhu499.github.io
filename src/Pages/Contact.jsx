import React from "react";
// import {Box,Stack,Input,Text,Flex,Textarea,Button } from "@chakra-ui/react";
// import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
// import { TfiEmail } from "react-icons/tfi";
import {
  Box,
  Stack,
  Input,
  Text,
  Flex,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { ImLinkedin, ImMail } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";

function Contact() {
  return (
    <Box
      id="Contact"
      className="contacts section"
      pt={["", "", "60px"]}
      my={"30px"}
      bg="#13022C" 
      color={"orange"}
      h={"auto"}
    >
      <Box
        w={"85%"}
        m={"auto"}
        h={"auto"}
        borderRadius={"10px"}
      >
        <Box
          textAlign="center"
          fontWeight="400"
          fontSize={["3xl", "4xl", "5xl"]}
        >
          <Text color={"white"}>Contact Me</Text>
        </Box>

        <Box
          display={["inline", "flex", "flex"]}
          gap={"70px"}
          className="contact"
          id="contact"
          w={["100%"]}
          fontSize={30}
          mt={"10%"}
        >
          <Box w={["70%", "70%", "50%"]} ml={["10%", "15%", "5%"]}>
            <Stack>
              <Text
                color={"orange"}
                fontSize={["20px", "25px", "30px"]}
                textAlign={["center", "center", "left"]}
                mt={["5%", "5%", "-60px"]}
              >
                Get in Touch
              </Text>

              <Box ml={["10px", "100px", "1px"]}>
                <Box mt={"5px"}>
                  <Flex alignItems={"center"}>
                    <Text
                      // ml={["50px", "100px", "1px"]}
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <a
                        href="mailto:subhu499@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Button
                          _hover={{ bg: "orange", color: "blue" }}
                          // p={["15px 15px", "20px 20px", "25px 25px"]}
                          fontSize={["md", "lg", "xl"]}
                          border={"1px solid orange"}
                          color={"orange"}
                          bg={"#040724"}
                          variant="solid"
                          m={"auto"}
                          w={"fit-content"}
                        >
                          <ImMail />
                        </Button>
                      </a>
                    </Text>
                    <Text
                      id="contact-email"
                      fontSize={["8px", "20px", "22px"]}
                      mt={["4px", "", ""]}
                      ml={["8%", "", ""]}
                      color="#00b9e8"
                    >
                      <a
                        href="mailto:subhu499@gmail.com"
                        alt="githublink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        subhu499@gmail.com
                      </a>
                    </Text>
                  </Flex>
                </Box>

                <Box mt={"5px"}>
                  <Flex alignItems={"center"}>
                    <Text fontSize={["20px", "30px", "40px"]}>
                      <a
                        href="https://github.com/subhu499"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Button
                          _hover={{ bg: "orange", color: "blue" }}
                          mt="10px"
                          // p={["15px 15px", "20px 20px", "25px 25px"]}
                          fontSize={["md", "lg", "xl"]}
                          border={"1px solid orange"}
                          color={"orange"}
                          bg={"#040724"}
                          variant="solid"
                          m={"auto"}
                          w={"fit-content"}
                        >
                          <AiOutlineGithub />
                        </Button>
                      </a>
                    </Text>
                    <Text
                      id="contact-github"
                      color={"#00b9e8"}
                      fontSize={["10px", "20px", "22px"]}
                      ml={["8%", "", ""]}
                      mt={["3px", "", ""]}
                    >
                      <a
                        href="https://github.com/subhu499"
                        alt="githublink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Shubham Jha
                      </a>
                    </Text>
                  </Flex>
                </Box>

                <Box mt={"5px"}>
                  <Flex alignItems={"center"}>
                    <Text fontSize={["20px", "30px", "40px"]}>
                      <a
                        href="https://www.linkedin.com/in/shubham-jha-61824512b/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Button
                          _hover={{ bg: "orange", color: "blue" }}
                          mt="10px"
                          // p={["15px 15px", "20px 20px", "25px 25px"]}
                          fontSize={["md", "lg", "xl"]}
                          bg={"#040724"}
                          border={"1px solid orange"}
                          color={"orange"}
                          variant="solid"
                          m={"auto"}
                          w={"fit-content"}
                        >
                          <ImLinkedin />
                        </Button>
                      </a>
                    </Text>
                    <Text
                      id="contact-linkedin"
                      color={"#00b9e8"}
                      fontSize={["10px", "20px", "22px"]}
                      ml={["8%", "", ""]}
                      mt={["1px", "", ""]}
                    >
                      <a
                        href="https://www.linkedin.com/in/shubham-jha-61824512b/"
                        alt="linkedinlink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Shubham Jha
                      </a>
                    </Text>
                  </Flex>
                </Box>

                <Box mt={"5px"}>
                  <Flex alignItems={"center"}>
                    <Text fontSize={["20px", "30px", "40px"]}>
                      <a
                        href="callto:+918504800626"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Button
                          _hover={{ bg: "orange", color: "blue" }}
                          mt="10px"
                          // p={["15px 15px", "20px 20px", "25px 25px"]}
                          fontSize={["md", "lg", "xl"]}
                          border={"1px solid orange"}
                          color={"orange"}
                          bg={"#040724"}
                          variant="solid"
                          m={"auto"}
                          w={"fit-content"}
                        >
                          <IoCall />
                        </Button>
                      </a>
                    </Text>
                    <Text
                      id="contact-phone"
                      color={"#00b9e8"}
                      fontSize={["10px", "20px", "22px"]}
                      ml={["8%", "", ""]}
                      mt={["1px", "", ""]}
                    >
                      + 91 7000084045
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Stack>
          </Box>

          <form action="https://getform.io/f/8a3f9334-4832-4a5a-bcb1-276d8ab15fba" method="POST">
            <Box
              w={["70%", "70%", "90%"]}
              m={"auto"}
              mt={["100px", "100px", "0px"]}
              // ml={["50px", "100px", "-5%"]}
            >
              <Stack>
                <Stack>
                  <Text
                    color={"orange"}
                    fontSize={["20px", "25px", "30px"]}
                    textAlign={["center", "center", "left"]}
                    mt={["-60px", "", ""]}
                  >
                    Message Me
                  </Text>
                  <Flex>
                    <Input
                      mt={"5%"}
                      type="text"
                      name="name"
                      placeholder="Name"
                      _placeholder={{ opacity: 0.8, color: "#00b9e8" }}
                      focusBorderColor="rgb(78,64,111)"
                      size={["sm", "md", "lg"]}
                      color={"#00b9e8"}
                    />
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      mt={"5%"}
                      _placeholder={{ opacity: 0.8, color: "#00b9e8" }}
                      focusBorderColor="rgb(78,64,111)"
                      placeholder="Email"
                      size={["sm", "md", "lg"]}
                      color={"#00b9e8"}
                      ml={"20px"}
                    />
                  </Flex>
                </Stack>

                <Stack mt={"20px"}>
                  <Input
                    type="number"
                    name="number"
                    placeholder="Mobile Number"
                    size={["sm", "md", "lg"]}
                    _placeholder={{ opacity: 0.8, color: "#00b9e8" }}
                    focusBorderColor="rgb(78,64,111)"
                    color={"#00b9e8"}
                    m={"auto"}
                    mt={"5%"}
                  />
                </Stack>

                <Stack mt={"20px"}>
                  <Textarea
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Message"
                    _placeholder={{ opacity: 0.8, color: "#00b9e8" }}
                    focusBorderColor="rgb(78,64,111)"
                    size={["sm", "md", "lg"]}
                    m={"auto"}
                    mt={"5%"}
                    color={"#00b9e8"}
                  />
                </Stack>
                <Stack mb={"20px"}>
                  <Button
                    type="submit"
                    w={["50%", "30%", "50%"]}
                    h={["35px", "40px", "45px"]}
                    m={"auto"}
                    size="lg"
                    border={"1px solid orange"}
                    color={"orange"}
                    bg={"#040724"}
                    fontSize={["15px", "19px", "20px"]}
                    _hover={{ bg: "orange", color: "blue" }}
                    mt={"5%"}
                    mb={"10%"}
                  >
                    Send
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Box>
      </Box>
      <Text fontWeight="bold" fontSize={["xs", "sm", "md"]} color="white" textAlign="center">Designed and developed by Shubham Jha, @2023 All rights reserved</Text>
    </Box>
  
         
    

  );
};

export default Contact;