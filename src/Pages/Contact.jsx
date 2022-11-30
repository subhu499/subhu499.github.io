import { Box, Icon, Text } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin, AiOutlineLink } from "react-icons/ai";
import "./Page.css";


// function Contacts(){
//     return <Box bg="linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" color="white" p="60px 0px">
//         <Box  w="82%" m="auto" textAlign="center" p="60px auto" display={["inline", "inline", "flex"]} justifyContent="space-between">
//             <Image rounded="50%" w={["80%", "80%",  "42%"]} m="auto" src="https://camo.githubusercontent.com/6f5e3ead776bc722fbfc3da2c8b1454a7a5f27a07b34c0ced075f90a6c25a3be/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313630302f302a4b32574c4d5445784c79696461374f522e676966" alt="img" />
//             <Box>
//                 <Text fontSize={["3xl", "4xl", "5xl"]}>Contact Me</Text>
//                 <Box p="15px">
//                     <Box display="flex" alignItems="center">
//                         <Icon as={AiOutlineMail} w={["20px", "40px", "50px"]} h="50px" color='white' />
//                         <Text fontSize={["md", "lg", "xl"]}>sanghamitramymail@gmail.com</Text>
//                     </Box>
//                     <Box display="flex" alignItems="center">
//                         <Icon as={AiOutlineGithub} w={["20px", "40px", "50px"]} h="50px" color='white' />
//                         <Text fontSize={["md", "lg", "xl"]}>https://github.com/sanghamitra0591</Text>
//                     </Box>
//                     <Box display="flex" alignItems="center">
//                         <Icon as={AiOutlineLinkedin} w={["20px", "40px", "50px"]} h="50px" color='white' />
//                         <Text fontSize={["md", "lg", "xl"]}>https://www.linkedin.com/in/sanghamitra-satpathy/</Text>
//                     </Box>
//                     <Box display="flex" alignItems="center">
//                         <Icon as={AiOutlineLink} w={["20px", "40px", "50px"]} h="50px" color='white' />
//                         <Text fontSize={["sm", "lg", "xl"]}>https://sanghamitra0591.github.io/</Text>
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     </Box>
// }

function Contacts(){
    return <Box id="Contact" bg="linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" color="white" p="60px 0px" pt="75px">
        <Box w={["85%", "85%", "85%"]} m="auto" textAlign="center" p="60px auto" display={["inline", "inline", "flex"]} justifyContent="space-between">
            <Box>
                <Box p={["15px", "38px", "15px"]}>
                    <Text fontWeight="400" fontSize={["3xl", "4xl", "5xl"]} textAlign={["center", "left", "left"]}>Contact Me</Text>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineMail} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text fontSize={["sm", "md", "xl"]}>subhu499@gmail.com</Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineGithub} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "xl"]}><a href="https://github.com/subhu499" rel="noreferrer" target="_blank">https://github.com/subhu499</a></Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "7px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineLinkedin} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "lg"]}><a href="https://www.linkedin.com/in/shubham-jha-61824512b/" rel="noreferrer" target="_blank">https://www.linkedin.com/in/shubham-jha-61824512b/</a></Text>
                    </Box>
                    <Box display={["inline", "flex", "flex"]} gap={["", "10px", "15px"]} alignItems="center">
                        <Icon as={AiOutlineLink} w={["40px", "30px", "40px"]} h="50px" color='white' />
                        <Text textDecoration="underline" fontSize={["sm", "md", "xl"]}><a href="https://subhu499.github.io/" rel="noreferrer" target="_blank">https://subhu499.github.io/</a></Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Contacts;