import { Box, Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";
import {  useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
// import { FaMoon, FaSun } from "react-icons/fa";
import "../home.css";
// import Resume from "../Images/Shubham_Jha_Resume.pdf";

function Navbar(){

    const [isscroll, setisscroll] = useState(false);
    // const {darkTheme, setdarkTheme}= useContext(ThemeContext);
    const { toggleColorMode, colorMode } = useColorMode();
    // setdarkTheme(colorMode);
    const [display,changeDisplay] = useState('none');

    function isScrolling() {
        if (window.scrollY > 80) {
        setisscroll(true);
        } else {
        setisscroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", isScrolling);
        return () => {
        window.removeEventListener("scroll");
        }
    }, [])


    return <Box zIndex={1} bg={isscroll? "#13022C" : "#13022C"} w="100%" p="10px 0px" boxShadow="md" color= "#ffffff" position="fixed">
        <Box w="95%" m="auto" display={["flex", "flex", "flex"]} alignItems="center" justifyContent="space-between">
            <Box rounded="50%" mt="5px" mb="5px">
                {/* <AnchorLink href='#Home'><Image w={["30px", "30px", "40px"]} src="https://seeklogo.com/images/S/s-letter-logo-3FDB009CF3-seeklogo.com.png" alt="logo" /></AnchorLink> */}
                <div className="logo">
                      <p>
                        <span className="code">&#x0003C;</span>
                        <span className="first">S</span>
                        <span className="last">hubham</span>
                        <span className="first">J</span>
                        <span className="last">ha</span>
                        <span className="code">&#x0002F;&#x0003E;</span>
                      </p>
                    </div>
  



            </Box>
            {/* <Text fontWeight="bold" ml={["15px", "2px", "10px"]} fontSize={['xl', '2xl', '3xl']}>Sanghamitra</Text> */}
            <Box display={["none", "none", "flex"]} gap={["auto", "15px", "20px"]} justifyContent={["space-around", "space-between", "space-between"]} ml="10px" alignItems="center">
                <Link display="flex" to="/">
                    <AnchorLink href='#Home'><Text  fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Home</Text></AnchorLink>
                </Link>
                <Link display="flex" to="/about">
                    <AnchorLink href='#About'><Text  fontWeight="500" fontSize={['sm', 'sm', 'lg']}>About</Text></AnchorLink>
                </Link>
                <Link display="flex" to="/skills">
                    <AnchorLink href='#Skills'><Text  fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Skills</Text></AnchorLink>
                </Link>
                <Link display="flex">
                    <AnchorLink href='#Project'><Text  fontWeight="500" _active={{textDecoration:"underlined"}} fontSize={['sm', 'sm', 'lg']}>Project</Text></AnchorLink>
                </Link>
                <Link display="flex">
                    <AnchorLink href='#Contact'><Text  fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Contact</Text></AnchorLink>
                </Link>
                <Text  fontWeight="500" fontSize={['sm', 'sm', 'lg']}><a href="https://drive.google.com/file/d/1XO4IqQU4GwDhg_mR0e62Hp3R1IrPhifE/view?usp=share_link" rel="noreferrer" target="_blank">Resume</a></Text>
                <IconButton
                    aria-label="toggle theme"
                    rounded="full"
                    size="md"
                    onClick={toggleColorMode}
                    _hover={{color:colorMode==="#13022C"? "#13022c" : "white"}}
                    backgroundColor={colorMode === "#13022C" ? "#d3cedb" : "#13022C"}
                    color={colorMode=== "#13022C"}
                    // icon={colorMode ===  <FaSun/>  <FaMoon/>}
                />
            </Box>
             
             


            <IconButton  aria-label="Open Menu"  bg="none" size="lg" p="0px"   _hover={{bg:"none"}} mr={1} color="white" icon={<HamburgerIcon w="1.7em" h="1.7em" />}  display={["flex","flex","none"]} onClick={()=> changeDisplay('flex')} />
        </Box>
       <Flex>
       <Flex w="100%" h="100%" color="white" bg="#13022C" zIndex={20} pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" display={display} >
       <Flex justify="flex-end"><IconButton mt={2} mr={2} aria-label="Close Menu" size="lg" bg="none" color="white"  icon={<CloseIcon/>} onClick={()=> changeDisplay('none')} /></Flex>
        <Box display="flex" gap="30px" flexDir="column" align="center" fontSize="2xl" color= "white" >
            <AnchorLink href='#Home' onClick={()=> changeDisplay('none')}   > Home</AnchorLink>
            <AnchorLink href='#About' onClick={()=> changeDisplay('none')}  > About</AnchorLink>
            <AnchorLink href='#Skills' onClick={()=> changeDisplay('none')}  > Skills</AnchorLink>
            <AnchorLink href='#Project' onClick={()=> changeDisplay('none')}  > Projects</AnchorLink>
            <AnchorLink href='#Contact' onClick={()=> changeDisplay('none')}  > Contact</AnchorLink>
            <Text ><a href="https://drive.google.com/file/d/1XO4IqQU4GwDhg_mR0e62Hp3R1IrPhifE/view?usp=share_link" rel="noreferrer" target="_blank"> Resume</a></Text>
            {/* <Box textAlign="center">
                <IconButton
                    aria-label="toggle theme"
                    rounded="full"
                    size="md"
                    w={8}
                    h={10}
                    onClick={toggleColorMode}
                    backgroundColor={colorMode === "dark" ? "#d3cedb" : "#13022C"}
                    color={colorMode==="dark"? "#13022C" : "white"}
                    icon={colorMode === "dark" ? <FaSun/> : <FaMoon/>}
                />
            </Box> */}
           </Box>
       </Flex> 
       </Flex>
    </Box>
}

export default Navbar;