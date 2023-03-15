import { Box, Icon, Text } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin, AiOutlineLink, AiOutlineMobile } from "react-icons/ai";
import "./Page.css";

function Contacts(){
    return <Box id="Contact" bg="linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" color="white" p="60px 0px" pt="75px">
        <Box w={["85%", "85%", "85%"]} m="auto" textAlign="center" p="60px auto" display={["inline", "inline", "flex"]} justifyContent="space-between">
            <Box>
                <Box p={["15px", "38px", "15px"]}>
                    <Text fontWeight="400" fontSize={["3xl", "4xl", "5xl"]} textAlign={["center", "left", "left"]}>Contact Me</Text>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineMobile} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "xl"]}><a href="" rel="noreferrer" target="_blank">+91 7000084045</a></Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineMail} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text fontSize={["sm", "md", "xl"]}>subhu499@gmail.com</Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineGithub} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "xl"]}><a href="https://github.com/subhu499" rel="noreferrer" target="_blank" Decoration="none">subhu499</a></Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "7px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineLinkedin} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "lg"]}><a href="https://www.linkedin.com/in/shubham-jha-61824512b/" rel="noreferrer" target="_blank">Shubham Jha</a></Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineLink} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "xl"]}><a href="https://subhu499.github.io/" rel="noreferrer" target="_blank">PortFolio</a></Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Contacts;