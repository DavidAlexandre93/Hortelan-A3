import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Container, Stack, Typography, } from '@mui/material';

import Page from '../components/Page';
import { styled } from '@mui/material/styles';
import NavLogo from 'src/assets/nav-logo.svg'
import { faker } from '@faker-js/faker';

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
                        <img src={NavLogo} style={{ maxWidth: '50px' }} />
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
                        {faker.lorem.paragraph(20)}
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
                >
                    <Grid
                        container
                        direction='column'
                        marginBottom='121px'
                    >
                        <Typography variant="h3" gutterBottom>
                            {faker.lorem.lines(1)}
                        </Typography>
                        <Typography variant="span" gutterBottom>
                            {faker.lorem.lines(2)}
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} >
                        <Grid item xs>
                            <Typography item variant="span">
                                {faker.lorem.lines(5)}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography item variant="span">
                                {faker.lorem.lines(5)}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography item variant="span">
                                {faker.lorem.lines(5)}
                            </Typography>
                        </Grid>
                    </Grid>
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
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Typography
                                item
                                variant="h3"
                                color='white'
                                marginTop='121px'
                            >
                                {faker.lorem.lines(2)}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={3}
                        gap='40px'
                    >
                        <Grid item xs={4}>
                            <img src={NavLogo} />
                        </Grid>
                        <Grid item xs container gap='60px' direction='column' >
                            <Typography
                                item
                                variant="p"
                                color='white'
                            >
                                {faker.lorem.paragraph(17)}
                            </Typography>
                            <Typography
                                item
                                variant="p"
                                color='white'
                            >
                                {faker.lorem.paragraph(17)}
                            </Typography>
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
                        >
                            <Typography
                                item
                                variant="p"
                                color='white'
                            >
                                {faker.lorem.paragraph(17)}
                            </Typography>
                            <Typography
                                item
                                variant="p"
                                color='white'
                            >
                                {faker.lorem.paragraph(17)}
                            </Typography>
                            <StyledButton variant='outlined'>
                                <RouterLink to='/dashboard/app'>
                                    Go to Dashboard
                                </RouterLink>
                            </StyledButton>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={NavLogo} />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <img src={NavLogo} style={{ maxWidth: '50px' }} />
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
