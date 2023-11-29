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
                        A Internet of Things (IoT), ou Internet das Coisas em português, refere-se à interconexão de dispositivos físicos através da internet, permitindo que eles coletem e compartilhem dados. Esses dispositivos podem incluir uma variedade de objetos do cotidiano, como eletrodomésticos, veículos, sensores ambientais, dispositivos de saúde, entre outros. A ideia central do IoT é permitir que esses dispositivos se comuniquem e cooperem entre si para realizar tarefas específicas, coletar dados e oferecer serviços mais inteligentes e eficientes.
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
                            Como funciona
                        </Typography>
                        <Typography variant="span" gutterBottom>
                            Um típico sistema de IoT funciona por meio da coleta e troca de dados em tempo real. Um sistema IoT tem três componentes:
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
                                    Dispositivos inteligentes
                                </Typography>
                                <Typography variant="p">
                                    Este é um dispositivo, como uma televisão, uma câmera de segurança ou um equipamento de exercício que recebeu recursos de computação. Ele coleta dados de seu ambiente, entradas do usuário ou padrões de uso e comunica dados pela Internet de e para sua aplicação de IoT.
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                gap='10px'
                            >
                                <Typography variant="h5">
                                    Aplicação de IoT:
                                </Typography>
                                <Typography variant="p">
                                    Uma aplicação de IoT é um conjunto de serviços e software que integra dados recebidos de vários dispositivos de IoT. Ela utiliza tecnologia de machine learning ou inteligência artificial (IA) para analisar esses dados e tomar decisões informadas. Essas decisões são comunicadas de volta ao dispositivo de IoT e esse dispositivo responde de forma inteligente às entradas.
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                gap='10px'
                            >
                                <Typography variant="h5">
                                    Uma interface gráfica do usuário
                                </Typography>
                                <Typography variant="p">
                                    O dispositivo de IoT ou a frota de dispositivos podem ser gerenciados por meio de uma interface gráfica do usuário. Exemplos comuns incluem uma aplicação móvel ou site que pode ser usado para registrar e controlar dispositivos inteligentes.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <img src={IotImg} />

                    <Box>
                        <Typography variant="h3" marginBottom='30px'>
                            Onde pode ser utilizada ?
                        </Typography>
                        <Grid container spacing={3} >
                            <Grid
                                xs
                                item
                                container
                                gap='20px'
                            >
                                <Typography item variant="h4">
                                    Casas Inteligentes
                                </Typography>
                                <Typography item variant="span">
                                    A Internet das Coisas (IoT) transforma casas em ambientes conectados, permitindo o controle remoto de dispositivos como termostatos, iluminação e fechaduras. Isso proporciona automação residencial para maior eficiência e comodidade. Sistemas de segurança conectados, como câmeras e sensores, melhoram a proteção residencial, e assistentes virtuais controlados por voz simplificam a interação.
                                </Typography>
                            </Grid>
                            <Grid
                                xs
                                item
                                container
                                gap='20px'
                            >
                                <Typography item variant="h4">
                                    Saúde
                                </Typography>
                                <Typography item variant="span">
                                    Na área da saúde, dispositivos IoT monitoram condições médicas em tempo real, permitindo o acompanhamento remoto de pacientes. Wearables coletam dados sobre atividade física e saúde, enquanto dispositivos facilitam a gestão de medicamentos. A telemedicina oferece consultas remotas, proporcionando maior acessibilidade aos cuidados de saúde.
                                </Typography>
                            </Grid>
                            <Grid
                                xs
                                item
                                container
                                gap='20px'
                            >
                                <Typography item variant="h4">
                                    Segurança
                                </Typography>
                                <Typography item variant="span">
                                    A IoT aprimora a segurança urbana com câmeras, sensores e dispositivos de rastreamento. Sensores detectam perigos como vazamentos de gás, contribuindo para a prevenção de acidentes. Em gestão de tráfego, sensores otimizam a sincronização de semáforos. A aplicação da IoT em diferentes contextos melhora a segurança, prevenção de acidentes e eficiência operacional.
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
                                Sites Multilíngues: Tornando o Conteúdo Globalmente Acessível
                            </Typography>
                        </Grid>
                        <Typography variant="p" color='white'>
                            À medida que a internet encurta distâncias e conecta pessoas em todo o mundo, a necessidade de sites multilíngues se torna cada vez mais evidente. Essas plataformas online são projetadas para oferecer conteúdo em mais de um idioma, reconhecendo a diversidade linguística e cultural de sua audiência global. A seguir, exploramos em detalhes os elementos essenciais e considerações envolvidos na criação e manutenção de sites multilíngues.
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        spacing={3}
                        gap='40px'
                    >
                        <Grid item xs={4}>
                            <img src={SecondMultilingue} />
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
                                    Conteúdo Multilíngue
                                </Typography>
                                <Typography
                                    item
                                    variant="p"
                                    color='white'
                                >
                                    Um dos princípios fundamentais de um site multilíngue é a apresentação do mesmo conteúdo em diferentes idiomas. Isso abrange não apenas o texto, mas também elementos visuais, como imagens e vídeos, garantindo uma experiência consistente para usuários de diversas origens linguísticas.
                                </Typography>
                            </Grid>
                            <Grid container gap='10px'>
                                <Typography
                                    item
                                    variant="h5"
                                    color='white'
                                >
                                    Navegação e Usabilidade
                                </Typography>
                                <Typography
                                    item
                                    variant="p"
                                    color='white'
                                >
                                    A acessibilidade ao conteúdo em diferentes idiomas é essencial. Sites multilíngues frequentemente incluem seletor de idiomas visíveis na página inicial ou em locais estratégicos para permitir que os visitantes escolham sua preferência linguística de maneira intuitiva.
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
                                    Tradução Automática e Manual
                                </Typography>
                                <Typography
                                    item
                                    variant="p"
                                    color='white'
                                >
                                    Embora ferramentas de tradução automática possam oferecer uma abordagem inicial para disponibilizar conteúdo em vários idiomas, muitos sites optam pela tradução manual. Isso garante uma tradução mais precisa e leva em consideração nuances culturais que a automação pode negligenciar.
                                </Typography>
                            </Grid>
                            <Grid container gap='10px'>
                                <Typography
                                    item
                                    variant="h5"
                                    color='white'
                                >
                                    Direcionamento Geográfico
                                </Typography>
                                <Typography
                                    item
                                    variant="p"
                                    color='white'
                                >
                                    Alguns sites implementam o redirecionamento geográfico para direcionar automaticamente os visitantes para a versão do site no idioma correspondente ao local de origem do IP. Isso aprimora a experiência do usuário, proporcionando uma entrada mais personalizada.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={FirstMultilingue} />
                        </Grid>
                    </Grid>

                    <Grid container gap='20px'>
                        <Typography variant='h3' color='white' >
                            Conclusão
                        </Typography>
                        <Typography variant='p' color='white'>
                            a criação de sites multilíngues é um esforço para tornar o conteúdo acessível em escala global, superando barreiras linguísticas e proporcionando experiências online mais inclusivas e personalizadas. Ao abordar cuidadosamente todos esses aspectos, os criadores de sites podem construir plataformas que transcendem fronteiras e conectam efetivamente pessoas de diferentes partes do mundo.
                        </Typography>
                        <StyledButton variant='outlined'>
                            <RouterLink to='/dashboard/app'>
                                Go to Dashboard
                            </RouterLink>
                        </StyledButton>
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
