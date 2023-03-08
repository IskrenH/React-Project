import * as React from 'react';
import logo from './images/logo.svg';
import './App.css';
import './scss/style.scss'
import Uploader from "./Component/Uploader";
import Report from "./Component/Report";
import {useState} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {

    const [reportData, setReportData] = useState([])

    const onUpload = function (data){
        setReportData(data)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{display: 'flex', alignItems:'center', justifyContent: 'center', bgcolor: '#0a1929', height: '100vh' }} >
                <Container sx={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}} maxWidth="md">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Uploader onUpload={onUpload} />
                    <Report summary={reportData} />
                </Container>
            </Box>
        </React.Fragment>
    );
}

export default App;
