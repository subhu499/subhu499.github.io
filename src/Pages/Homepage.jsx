import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import About from "./About";
import Calender from "./Calender";
import Contacts from "./Contact";
import Project from "./Project";
import Skills from "./Skillls";
// import Resume from "../Images/Shubham_Jha_Resume.pdf";
import {  AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";


function Homepage(){
    return <Box bg="#13022C">
            <Box id="Home" w="100.1156%" ml="-1.069px" pt={["100px", "50px", "50px"]} color="#e1cefd" bg="linear-gradient(180deg, rgba(100,23,85,10) 45%, rgba(28,14,50,1) 99%)">
                <Box h={["300px","500px" , "620px"] }w="85%" color= "#ffffff" m="auto" display={["inline", "inline", "flex"]} alignItems="center" justifyContent="space-around">
                <Box mt={["50px", "50px", "0px"]} w={["100%", "100%", "60%"]}>
                        <Box textAlign="left" pl={["20px", "60px", "20px"]}>
                            <Text fontWeight="500" fontFamily="sans-serif" display="flex" alignItems="center" fontSize={["2xl", "3xl", "4xl"]}>Hi <Image boxSize={["30px", "40px", "50px"]}  src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif" alt="img" />, my name is</Text>
                            <Text fontFamily="cursive" fontSize={["4xl", "5xl", "6xl"]}>Shubham Jha</Text>
                            <Box fontFamily="sans-serif" fontSize={["2xl", "3xl", "4xl"]}>
                                <Typewriter
                                    options={{
                                        strings: [
                                        "I'm a Full Stack Web Developer.",
                                        "Love To Code",
                                        "MERN Stack"
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </Box>
                            {/* <a href={Resume} download><button >Download CV</button> </a> */}

                            <a href="https://drive.google.com/file/d/1XO4IqQU4GwDhg_mR0e62Hp3R1IrPhifE/view?usp=share_link" rel="noreferrer" target="_blank">
                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["15px 15px", "20px 20px", "25px 25px"]} fontSize={["md", "lg", "xl"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<DownloadIcon />}>
                            Resume</Button>
                            </a>


                            <Box mt="15px" gap="15px" display="flex" color="#13022c">
                                <a href="https://github.com/subhu499" rel="noreferrer" target="_blank"><Button _hover={{bg:"#4E406F", color:"#ffffff"}} pr="0px"pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<AiOutlineGithub />}></Button></a>
                                <a href="https://www.linkedin.com/in/shubham-jha-61824512b/" rel="noreferrer" target="_blank"><Button _hover={{bg:"#4E406F", color:"#ffffff"}} pr="0px" pl="5px" fontSize={["2xl", "3xl", "4xl"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<AiOutlineLinkedin />}></Button></a>
                            </Box>
                        </Box>
                    {/* <Image position="absolute" top={["-10", "-10", "-20"]} left={["", "", "-8"]} src="https://www.wallpaperuse.com/wallp/56-561836_m.png" alt="img" /> */}
                </Box>
                <Box  bg="#C4A9EC" p="5px" w={["45%", "35%", "25%"]} m="20px auto 40px auto" rounded={["50%", "50%", "50%"]}>
                    <Image boxShadow="xl" w="100%" rounded={["50%", "50%", "50%"]} src="https://user-images.githubusercontent.com/107755482/205420501-79eed55d-a93d-4ca6-8cbc-64620a4e6ca5.png" alt="img" />
                </Box>
                {/* <Image w="400px" h="200px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--2bZIjPGC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d4tvukbt5mra37cvwklk.gif" alt="img" /> */}
        </Box>
        </Box>
        <About />
        <Skills />
        <Calender />
        <Project />
        <Contacts />
    </Box>
}

export default Homepage;