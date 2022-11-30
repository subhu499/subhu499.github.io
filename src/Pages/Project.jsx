import { Box, Button, Image, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";


function Project(){

    let projectdata= [
        {
            name: "Trip Advisor Clone",
            img: "https://www.webintravel.com/wp-content/uploads/2018/11/tripadvisor2.jpg",
            type: "Individual",
            desc: "A travel website, where people can plan their trips, book flight, book hotels, etc User can Signin and view the home page",
            techstack: "React, CHakra UI, JavaScript, CSS",
            livelink: "https://the-awesomee-sanghamitra0591-site.netlify.app/",
            gitlink: "https://github.com/sanghamitra0591/low-head-7683/tree/main/tripadvisor"
        },
        {
            name: "Google digital Garage Clone",
            img: "https://talentx.ai/wp-content/uploads/2022/08/Google-Digital-Garage.png",
            type: "Group",
            desc: "A digital learing platform by Google, where user can signin, login, check for courses, certification, live training, etc. (Fully Functional)",
            techstack: "HTML, CSS, JavaScript",
            livelink: "https://graceful-douhua-6b500e.netlify.app/",
            gitlink: "https://github.com/imrangadwal10/zonked-instrument-5361"
        },
        {
            name: "Meanbuy Clone",
            img: "https://i.ytimg.com/vi/cAw5-Oe0hBM/maxresdefault.jpg",
            type: "Individual",
            desc: "An E-Commerce website having the unique feature which allows the users to sell their products as well. User can Login, Signup, Visit Seller's Page, Whatsapp Page, etc.",
            techstack: "HTML, CSS, JavaScript",
            livelink: "https://resilient-seahorse-6f4d05.netlify.app/",
            gitlink: "https://github.com/sanghamitra0591/murky-rate-2238"
        },
        // {
        //     name: "Slideshow Maker",
        //     img: "",
        //     desc: "",
        //     livelink: "https://vermillion-marzipan-4b3164.netlify.app/",
        //     gitlink: "https://github.com/sanghamitra0591/exploring/tree/main/album-maker"
        // },
        // {
        //     name: "Recipe App",
        //     img: "",
        //     desc: "",
        //     livelink: "https://courageous-valkyrie-f0e4b0.netlify.app/",
        //     gitlink: ""
        // },
        // {
        //     name: "Netflix Clone",
        //     img: "",
        //     desc: "",
        //     livelink: "",
        //     gitlink: "https://github.com/sanghamitra0591/exploring/tree/main/netflixcopy"
        // }
    ]

    return <Box id="Project" w="full" bg="#13022C" color="#ffffff" p="30px 0px" textAlign="center">
        <Box w="85%" m="auto">
            <Text mb="25px" textAlign="center" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Projects</Text>
            <Box display="grid" gap="50px" gridTemplateColumns= "repeat(1, 1fr)">
                {projectdata && projectdata.map((project)=> {
                    return <Box className="projectouter">
                                <Box display={["inline", "inline", "flex"]} justifyContent="space-between">
                                    <Image w={["100%", "97%", "60%"]} m="auto" src={project.img} alt="project-thumbnail" />
                                    <Box w={["100%", "97%", "39%"]} m="auto">
                                        <Text fontSize={["2xl", "3xl", "4xl"]}>{project.name}</Text>
                                        <Text fontSize={["xl", "2xl", "3xl"]}>( {project.type} )</Text>
                                        <Text w={["100%", "90%", "70%"]} m="auto" fontSize={["sm", "md", "md"]}>{project.desc}</Text>
                                        <Text w="85%" m="auto" fontSize={["md", "mlgd", "xl"]} fontWeight="bold">Techstacks :-{project.techstack}</Text>
                                        <Box display="flex" w={["100%", "80%", "100%"]} m="auto" justifyContent="space-around">
                                            {/* <Button  _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", ";g"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}><a href={project.livelink} rel="noreferrer" target="_blank">Live</a></Button>
                                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}><a href={project.gitlink} rel="noreferrer" target="_blank">Github</a></Button> */}
                                            <Button as='a' target='_blank' href={project.livelink} _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BiLinkExternal />}>Live</Button>
                                            <Button as='a' target='_blank' href={project.gitlink} _hover={{bg:"#4E406F", color:"#ffffff"}} mt="10px" p={["5px 5px", "10px 10px", "10px 10px"]} fontSize={["md", "lg", "lg"]} bg="#C1B6DB" color="#13022c" border="none" variant='solid' leftIcon={<BsGithub />}>Github</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                })}
            </Box>
        </Box>
    </Box>
}

export default Project;