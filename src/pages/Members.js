// @mui
import { Grid, Container, Typography, Card } from '@mui/material';
// components
import Page from '../components/Page';

import Bertazzi from '../assets/Bertazzi.jpg'
import Caue from '../assets/Caue.jpg'
import Eduardo from '../assets/Eduardo.jpg'
import David from '../assets/David.jpg'
import Rian from '../assets/Rian.jpg'
import Victo from '../assets/Victo.jpg'
import Vitor from '../assets/Vitor.jpg'
import Ruan from '../assets/Ruan.jpeg'

// ----------------------------------------------------------------------

export default function Members() {

    const members = [
        { name: 'Bruno Bertazzi de Campos', src: Bertazzi },
        { name: 'David Alexandre Fernandes', src: David },
        { name: 'Eduardo Cascaes Secco', src: Eduardo },
        { name: 'Ruan Vinicius Amaral de Oliveira', src: Ruan },
        { name: 'Rian Moraes de Souza', src: Rian },
        { name: 'Victo Santos dos Reis', src: Victo },
        { name: 'Cauê Pacheco Marques', src: Caue },
        { name: 'Vitor Gabriel da Silva Jose', src: Vitor }
    ]

    const styles = {
        imgStyle: { borderRadius: '5px 5px 0 0', width: 250, height: 250 },
        containerNameStyle: {
            background: "rgba(145, 158, 171, 0.12)",
            width: 250,
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            borderRadius: '0 0 5px 5px',
            boxShadow: 0,
        },
    }

    return (
        <Page title="Members">
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Our Team
                </Typography>
                <Grid container
                    spacing={3}
                    rowGap={'50px'}
                >
                    {members.map(member => (
                        <Grid item xs={12} sm={6} md={3}>
                            <img style={styles.imgStyle} src={member.src} alt="team member image" />
                            <Card
                                sx={styles.containerNameStyle}
                            >
                                <Typography variant="p" >
                                    {member.name}
                                </Typography>
                            </Card>

                        </Grid>)
                    )}
                </Grid>
            </Container>
        </Page >
    );
}
