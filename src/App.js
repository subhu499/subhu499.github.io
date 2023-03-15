import { Box, Text } from '@chakra-ui/react';
import './App.css';
// import './home.css';
import OffcanvasExample from './Pages/Navbar';
import "./Pages/Page.css";
import Allroutes from "./Components/Allroutes"

function App() {
    return (
      <div className='App'>
        <div className="container">
          <OffcanvasExample />
          <Allroutes />
          <Box p="10px 0px" w="100%" bg="#13022C">
            <Text fontWeight="bold" fontSize={["xs", "sm", "md"]} color="white" textAlign="center">Designed and developed by Shubham Jha, @2022 All rights reserved</Text>
          </Box>
        </div>
      </div>
    );
}

export default App;
