import { Box, Icon, Text } from "@chakra-ui/react";
import { DiNodejs } from "react-icons/di";
import { TbBrandJavascript } from 'react-icons/tb';
import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Fill, RiReactjsFill } from "react-icons/ri";
import { SiChakraui, SiExpress, SiMongodb, SiRedux, SiMaterialui, SiCypress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import "./Page.css";


function Skills(){

return <Box id="Skills" w="full" bg="#13022C" color="#ffffff" p="30px 0px">
        <Box w="85%" m="auto">
            <Text textAlign="center" mb="15px" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Technical Skills</Text>
            <Box display="grid" gap="30px" gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={ImHtmlFive2} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]} mt="10px">HTML</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={RiCss3Fill} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>CSS</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={TbBrandJavascript} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>JavaScript</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={RiReactjsFill} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>React</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={SiChakraui} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>Chakra UI</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={SiMaterialui} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>Material UI</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={SiRedux} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>Redux</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={SiMongodb} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>MongoDB</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={DiNodejs} w={["30px", "35px", "60px"]} h="70px" mt="-20px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>Node</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={SiCypress} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>Cypress</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={SiExpress} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>Express</Text>
                    </Box>
                </Box>
                <Box className="skillouter" h={["150px", "160px", "200px"]}>
                    <Box className="skillinner" p={["10px", "10px", "20px"]}>
                        <Icon as={FaGitAlt} w={["30px", "35px", "50px"]} h="50px" color='white' />
                        <Text fontSize={["10px", "15px", "20px"]}>Git</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Skills;