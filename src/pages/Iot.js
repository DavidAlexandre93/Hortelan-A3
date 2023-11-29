import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';

import Page from '../components/Page';
import { styled } from '@mui/material/styles';
import NavLogo from 'src/assets/nav-logo.svg'
import IotImg from 'src/assets/iot_img.png'

import FirstMultilingue from 'src/assets/multilingual_1.jpg'
import SecondMultilingue from 'src/assets/multilingual_2.jpg'

// ----------------------------------------------------------------------


const ContainerColor = {
    Primary: 'background: #202020',
    Secondary: 'background: #FFFFFF'
}

const StyledButton = styled(Button)(() => ({
    borderColor: '#229A16',
    maxWidth: "200px",
    alignSelf: 'center',

    a: {
        color: '#229A16',
        textDecoration: 'none',
    },

    '&:hover': {
        backgroundColor: '#229A16',
        borderColor: '#229A16',

        a: {
            color: '#FFFFFF',
        },
    },
}));

// ----------------------------------------------------------------------

export default function Iot() {
    return (

        <Page title="Iot" >
            <Container maxWidth='100% !important' sx={ContainerColor.Primary} >
                <Stack
                    mb={5}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    paddingLeft='8%'
                    paddingRight='8%'
                    paddingTop='32px'
                    paddingBottom='32px'
                >
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        marginBottom='80px'
                    >
                        <img src={NavLogo} alt="Hortelan Nav Logo" style={{ maxWidth: '50px' }} />
                        <Typography
                            variant="span"
                            color='#229A16'
                            fontWeight='bold'
                        >
                            Hortelan
                        </Typography>
                    </Grid>
                    <Typography
                        variant="h2"
                        color='#FFFFFF'
                        textAlign='center'
                        fontSize='60px'
                        fontWeight='400'
                        marginBottom='80px'
                    >
                        Iot and <span style={{ color: '#229A16' }}>Multilingual</span> Websites
                    </Typography>
                    <Typography
                        variant="p"
                        color='white'
                        textAlign='center'
                        marginBottom='30px'
                    >
                        The Internet of Things (IoT), or Internet of Things in Portuguese, refers to the interconnection of physical devices via the internet, allowing them to collect and share data. These devices can include a variety of everyday objects, such as household appliances, vehicles, environmental sensors, health devices, among others. The central idea of ​​IoT is to allow these devices to communicate and cooperate with each other to perform specific tasks, collect data and offer smarter and more efficient services.
                    </Typography>
                    <Grid
                        container
                        marginTop='32px'
                        justifyContent='center'
                    >
                        <iframe
                            width="1271"
                            height="715"
                            style={{ borderRadius: '2%' }}
                            src="https://www.youtube.com/embed/qNHydTYkfcg"
                            title="IoT (Internet das Coisas) // Dicionário do Programador"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        >
                        </iframe>
                    </Grid>
                </Stack>
            </Container>
            <Container maxWidth='100% !important' sx={ContainerColor.Secondary}>
                <Stack
                    mb={5}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    paddingLeft='8%'
                    paddingRight='8%'
                    paddingTop='32px'
                    paddingBottom='32px'
                    gap='70px'
                >
                    <Grid
                        container
                        direction='column'
                    >
                        <Typography variant="h3" gutterBottom>
                            How it works
                        </Typography>
                        <Typography variant="span" gutterBottom>
                            A typical IoT system works by collecting and exchanging data in real time. An IoT system has three components:
                        </Typography>
                        <Grid
                            container
                            gap='40px'
                            marginTop='30px'
                        >
                            <Grid
                                item
                                container
                                gap='10px'
                            >
                                <Typography variant="h5">
                                    Smart Devices
                                </Typography>
                                <Typography variant="p">
                                    This is a device, such as a television, security camera, or exercise equipment that has been given computing capabilities. It collects data from your environment, user inputs, or usage patterns and communicates data over the Internet to and from your IoT application.
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                gap='10px'
                            >
                                <Typography variant="h5">
                                  IoT Application:
                                </Typography>
                                <Typography variant="p">
                                  An IoT application is a set of services and software that integrates data received from multiple IoT devices. It uses machine learning or artificial intelligence (AI) technology to analyze this data and make informed decisions. These decisions are communicated back to the IoT device and that device responds intelligently to the inputs.
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                gap='10px'
                            >
                                <Typography variant="h5">
                                   A graphical user interface
                                </Typography>
                                <Typography variant="p">
                                   The IoT device or fleet of devices can be managed through a graphical user interface. Common examples include a mobile application or website that can be used to register and control smart devices.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <img src={IotImg} alt='iotImg'/>

                    <Box>
                        <Typography variant="h3" marginBottom='30px'>
                             Where can it be used?
                        </Typography>
                        <Grid container spacing={3} >
                            <Grid
                                xs
                                item
                                container
                                gap='20px'
                            >
                                <Typography item variant="h4">
                                    Smart Homes
                                </Typography>
                                <Typography item variant="span">
                                    The Internet of Things (IoT) transforms homes into connected environments, allowing remote control of devices such as thermostats, lighting and locks. This provides home automation for greater efficiency and convenience. Connected security systems like cameras and sensors improve home protection, and voice-controlled virtual assistants simplify interaction.
                                </Typography>
                            </Grid>
                            <Grid
                                xs
                                item
                                container
                                gap='20px'
                            >
                                <Typography item variant="h4">
                                    Health
                                </Typography>
                                <Typography item variant="span">
                                    In healthcare, IoT devices monitor medical conditions in real time, allowing remote monitoring of patients. Wearables collect data on physical activity and health, while devices facilitate medication management. Telemedicine offers remote consultations, providing greater accessibility to healthcare.
                                </Typography>
                            </Grid>
                            <Grid
                                xs
                                item
                                container
                                gap='20px'
                            >
                                <Typography item variant="h4">
                                   Security
                                </Typography>
                                <Typography item variant="span">
                                   IoT enhances urban security with cameras, sensors and tracking devices. Sensors detect dangers such as gas leaks, contributing to the prevention of accidents. In traffic management, sensors optimize traffic light synchronization. The application of IoT in different contexts improves safety, accident prevention and operational efficiency.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
            <Container maxWidth='100% !important' sx={ContainerColor.Primary}>
                <Stack
                    mb={5}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    paddingLeft='8%'
                    paddingRight='8%'
                    paddingTop='32px'
                    paddingBottom='32px'
                    gap='120px'
                >
                    <Grid container >
                        <Grid item >
                            <Typography
                                item
                                variant="h3"
                                color='white'
                                marginTop='30px'
                                marginBottom='40px'
                            >
                             Multilingual Websites: Making Content Globally Accessible
                            </Typography>
                        </Grid>
                        <Typography variant="p" color='white'>
                             As the internet shortens distances and connects people around the world, the need for multilingual websites becomes increasingly evident. These online platforms are designed to offer content in more than one language, recognizing the linguistic and cultural diversity of their global audience. Below, we explore in detail the essential elements and considerations involved in creating and maintaining multilingual websites.
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        spacing={3}
                        gap='40px'
                    >
                        <Grid item xs={4}>
                            <img src={SecondMultilingue} alt='Secondmultilingue' />
                        </Grid>
                        <Grid
                            item
                            xs
                            container
                            gap='60px'
                            direction='column'
                            ustifyContent='center' >
                            <Grid container gap='10px'>
                                <Typography
                                    item
                                    variant="h5"
                                    color='white'
                                >
                                    Multilingual Content
                                </Typography>
                                <Typography
                                    item
                                    variant="p"
                                    color='white'
                                >
                                    One of the fundamental principles of a multilingual website is the presentation of the same content in different languages. This encompasses not just text but also visual elements such as images and videos, ensuring a consistent experience for users of diverse linguistic backgrounds.
                                </Typography>
                            </Grid>
                            <Grid container gap='10px'>
                                <Typography
                                    item
                                    variant="h5"
                                    color='white'
                                >
                                    Navigation and Usability
                                </Typography>
                                <Typography
                                    item
                                    variant="p"
                                    color='white'
                                >
                                    Accessibility to content in different languages ​​is essential. Multilingual websites often include language selectors visible on the home page or in strategic locations to allow visitors to choose their language preference intuitively.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={3}
                        gap='40px'
                    >
                        <Grid
                            item
                            xs
                            container
                            gap='60px'
                            direction='column'
                            justifyContent='center'
                        >
                            <Grid container gap='10px'>
                                <Typography
                                    item
                                    variant="h5"
                                    color='white'
                                >
                                    Automatic and Manual Translation
                                </Typography>
                                <Typography
                                    item
                                    variant="p"
                                    color='white'
                                >
                                    While machine translation tools can offer an initial approach to making content available in multiple languages, many websites opt for manual translation. This ensures a more accurate translation and takes into account cultural nuances that automation may overlook.
                                </Typography>
                            </Grid>
                            <Grid container gap='10px'>
                                <Typography
                                    item
                                    variant="h5"
                                    color='white'
                                >
                                    Geographic Targeting
                                </Typography>
                                <Typography
                                    item
                                    variant="p"
                                    color='white'
                                >
                                    Some websites implement geo-redirection to automatically direct visitors to the language version of the website corresponding to where the IP originates. This enhances the user experience by providing more personalized input.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={FirstMultilingue} alt='firstMultilingue'/>
                        </Grid>
                    </Grid>

                    <Grid container gap='20px'>
                        <Typography variant='h3' color='white' >
                           Conclusion
                        </Typography>
                        <Typography variant='p' color='white'>
                           Creating multilingual websites is an effort to make content accessible on a global scale, overcoming language barriers and providing more inclusive and personalized online experiences. By carefully addressing all these aspects, website creators can build platforms that transcend borders and effectively connect people from different parts of the world.
                        </Typography>
                        <StyledButton variant='outlined'>
                            <RouterLink to='/dashboard/app'>
                              Return to home page
                            </RouterLink>
                        </StyledButton>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <img src={NavLogo} alt="Hortelan Nav Logo" style={{ maxWidth: '50px' }} />
                        <Typography
                            variant="span"
                            color='#229A16'
                            fontWeight='bold'
                        >
                            Hortelan
                        </Typography>
                    </Grid>
                </Stack>
            </Container>
        </Page >

    );
}
