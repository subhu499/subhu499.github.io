import { Box, Image, Text } from "@chakra-ui/react";


function About(){
    return <Box id="About" bg="linear-gradient(180deg, rgba(100,23,85,10) 45%, rgba(28,14,50,1) 99%)" color="#ffffff" p="30px 0px"  pt="10px" h={["560px", "530px" ,"550px"]}>
        <Box w="87%" m="auto" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
            <Box w={["90%", "90%", "40%"]} m="auto" >
                <Text textAlign="center"  fontWeight="400" mt="20px" fontSize={["3xl", "4xl", "5xl"]}>About Me</Text>
                <Text fontFamily="Geneva" mt={["7px","4px" ,"10px"]} fontSize={["15px", "14px", "20px"]}>
                        A full stack web developer having knowledge in Data Structure, Algorithms, and Programming languages.
                        Knowing JavaScript, HTML, CSS, React, Redux, Mern Stack, MongoDB and Chakra UI, I have made some solo and 
                        collaborative projects and continue
                        to have some experience as well as acquiring more knowledge. 
                        Now I'm looking forward to enhance my skills in a challenging work environment.
                </Text>
            </Box>
            <Image w={["80%", "50%", "40%"]} pt={["50px","30px","60px"]} m="auto" src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif" alt="img" />
        </Box>
    </Box>
}

export default About;