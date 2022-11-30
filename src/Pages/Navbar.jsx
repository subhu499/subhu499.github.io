import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


function Navbar(){

    const [isscroll, setisscroll] = useState(false);

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


    return <Box zIndex={1} bg={isscroll? "white" : "white"} w="100%" p="10px 0px" boxShadow="md" color= "#1f2667" position="fixed" h="80px">
        <Box w="95%" m="auto" display={["inline", "flex", "flex"]} justifyContent="space-between" textAlign={["center", "", ""]}>
            <Box rounded="50%" ml={["45%", "0%", "0%"]} mt="5px" mb="5px" >
                {/* <Image w={["150px", "150px", "150px"]} src="" alt="logo" /> */}
                <Text fontWeight="500" fontSize={['sm', 'sm', 'lg']}  display="flex" color="red"> Shubham Jha </Text>
            </Box>
            {/* <Text fontWeight="bold" ml={["15px", "2px", "10px"]} fontSize={['xl', '2xl', '3xl']}>Sanghamitra</Text> */}
            <Box display="flex" gap={["auto", "15px", "20px"]} justifyContent={["space-around", "space-between", "space-between"]} ml="10px" alignItems="center">
                <Link display="flex" to="/">
                    <AnchorLink href='#Home'><Text fontWeight="500" fontSize={['sm', 'sm', 'lg']} >Home</Text></AnchorLink>
                </Link>
                <Link display="flex" to="/about">
                    <AnchorLink href='#About'><Text fontWeight="500" fontSize={['sm', 'sm', 'lg']} fontFamily="Work Sans Helvetica Neue Helvetica Helvetica Arial  sans-serif">About</Text></AnchorLink>
                </Link>
                <Link display="flex" to="/skills">
                    <AnchorLink href='#Skills'><Text fontWeight="500" fontSize={['sm', 'sm', 'lg']} fontFamily="Work Sans Helvetica Neue Helvetica Helvetica Arial  sans-serif">Skills</Text></AnchorLink>
                </Link>
                <Link display="flex">
                    <AnchorLink href='#Project'><Text fontWeight="500" _active={{textDecoration:"underlined"}} fontSize={['sm', 'sm', 'lg']} fontFamily="Work Sans Helvetica Neue Helvetica Helvetica Arial  sans-serif">Project</Text></AnchorLink>
                </Link>
                <Link display="flex">
                    <AnchorLink href='#Contact'><Text fontWeight="500" fontSize={['sm', 'sm', 'lg']} fontFamily="Work Sans Helvetica Neue Helvetica Helvetica Arial  sans-serif">Contact</Text></AnchorLink>
                </Link>
                {/* <Text fontWeight="500" fontSize={['sm', 'sm', 'lg']}><a href="https://drive.google.com/file/d/1XO4IqQU4GwDhg_mR0e62Hp3R1IrPhifE/view?usp=share_link"  download>Resume</a></Text> */}
            </Box>
        </Box>
    </Box>
}

export default Navbar;