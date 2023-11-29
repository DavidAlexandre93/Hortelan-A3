import { Grid, Container, Typography, Card, CardContent } from '@mui/material';
// components
import Page from '../components/Page';

import Bertazzi from '../assets/Bertazzi.jpg';
import Caue from '../assets/Caue.jpg';
import Eduardo from '../assets/Eduardo.jpg';
import David from '../assets/David.jpg';
import Rian from '../assets/Rian.jpg';
import Victo from '../assets/Victo.jpg';
import Vitor from '../assets/Vitor.jpg';
import Ruan from '../assets/Ruan.jpeg';

// ----------------------------------------------------------------------

export default function Members() {
  const members = [
    { 
        name: 'Bruno Bertazzi de Campos', 
        description: 'Engenharia da computação Operador de máquinas na Cacau show', 
        src: Bertazzi 
    },
    { 
        name: 'David Alexandre Fernandes', 
        description: 'Ciência da computação, Desenvolvedor fullstack em cloud e platform, DevOps/SRE no Mercado Livre', 
        src: David 
    },
    { 
        name: 'Eduardo Cascaes Secco', 
        description: 'Ciência da computação Trabalho na iBridge como suporte tecnico', 
        src: Eduardo 
    },
    { 
        name: 'Ruan Vinicius Amaral de Oliveira', 
        description: 'Ciência da computação Trabalho na Compass.Uol como Desenvolvedor Front-End', 
        src: Ruan 
    },
    { 
        name: 'Rian Moraes de Souza', 
        description: 'Engenharia da Computação, Se especializando em C# .NET e demais projetos', 
        src: Rian 
    },
    { 
        name: 'Victo Santos dos Reis', 
        description: 'Ciências da computação Estagiário em web front end na rede Almeida Junior', 
        src: Victo 
    },
    {
      name: 'Cauê Pacheco Marques',
      description:
        'Engenharia da computação Trabalho na empresa Dimep como analista de suporte técnico pleno, voltado para área de gestão e suporte',
      src: Caue,
    },
    { 
        name: 'Vitor Gabriel da Silva Jose', 
        description: 'Engenharia da computação Trabalho no Bradesco como desenvolvedor back-end', 
        src: Vitor 
    },
  ];

  const styles = {
    imgStyle: { borderRadius: '5px 5px 0 0', width: 300, height: 250 },
    containerNameStyle: {
      background: 'rgba(145, 158, 171, 0.12)',
      width: 300,
      display: 'flex',
      flexDirection: 'column', // Make the content stack vertically
      alignItems: 'center',
      borderRadius: '0 0 5px 5px',
      boxShadow: 0,
    },
  };

  return (
    <Page title="Members">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Our Team
        </Typography>
        <Grid container spacing={3} rowGap={'50px'}>
          {members.map((member, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Card sx={styles.containerNameStyle}>
                <img style={styles.imgStyle} src={member.src} alt={member.name} />
                <CardContent>
                  <Typography variant="h6" component="h6" fontWeight="bold" mb={1}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2">{member.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
