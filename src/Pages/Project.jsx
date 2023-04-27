import { Box, Button, Image, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";


function Project(){

    let projectdata= [
        {
            name: "FirstPost Clone",
            img: "https://user-images.githubusercontent.com/107755482/205422666-276fa2ec-4b71-418c-b61e-ca0c6bcfe712.png",
            type: "Group",
            desc: "A clone of the conservative News Portal, where people can read news articles, All over about world  People can subscribe to the channel and create your account ",
            techstack: "HTML, CSS, JavaScript",
            livelink: "https://effulgent-truffle-55a1fb.netlify.app/",
            gitlink: "https://github.com/subhu499/medical-ducks-5598"
        },
        {
            name: "Myntra Clone",
            img: "https://user-images.githubusercontent.com/105987614/208336161-9f2cefda-5dd1-4211-a393-141d41c8dceb.png",
            type: "Group",
            desc: "This is a cloned website of myntra.com. Myntra.com is India's largest e-commerce store for fashion and lifestyle products. This was a collaborative project which was completed in 5 days using techstack React JS | Redux | Chakra-Ui | react router dom",
            techstack: "React, CHakra UI, JavaScript, CSS",
            livelink: "https://myntra-clone-seven.vercel.app/",
            gitlink: "https://github.com/AMARDEEP115/Myntra-Clone"
        },
        {
            name: "Animoto Clone",
            img: "https://user-images.githubusercontent.com/107755482/205422386-fc3e0e2a-107b-432f-83c8-21f712b3d988.png",
            type: "Group",
            desc: "Animoto is a cloud-based video creation service that produces video from photos, video clips, and music into video slideshows,and customized web-based presentations",
            techstack: "HTML, CSS, JavaScript",
            livelink: "https://ephemeral-stroopwafel-bcdb0d.netlify.app/index.html",
            gitlink: "https://github.com/indicate0/nostalgic-blood-2749"
        },
        {
            name: "Sugar Cosmetic Clone",
            img: "https://user-images.githubusercontent.com/107755482/231206715-4823d9d8-d04e-4415-aa92-4a9ddc7394af.PNG",
            type: "Solo",
            desc: "A SUGAR COSMETIC is a famous fastest growing beauty brand and also Its's is a leading E-commerce platform selling various cosmetics products. ",
            techstack: "React , Redux , JavaScript , Chakra UI, MongoDB , NodeJS , Express , Mongo Atlas",
            livelink: "https://sugarcosmetics-subhu499.vercel.app/",
            gitlink: "https://github.com/subhu499/sugar_cosmetic"
        }
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