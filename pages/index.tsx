import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { format } from 'date-fns'
import Fab from '@mui/material/Fab';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ClassIcon from '@mui/icons-material/Class';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import ThoughtImage from '../public/images/thought-catalog.jpg';

function Home() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Head>
        <title>Repeated Card System</title>
      </Head>

      <Card variant='outlined'>
        <CardHeader
          avatar={<ClassIcon />}
          title="Hello, Tracy"
          subheader={format(new Date(), "'Today is a' eeee, yyyy MM/dd")}
        />

        <Image src={ThoughtImage} alt="Thought Catalog" />

        <CardContent sx={{ m: 1, bgcolor: '#efefef' }}>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            Today we will review:
          </Typography>
          <Typography variant="h5" component="div" color="success.dark">
            1
            <Typography sx={{ fontSize: 14, pl: 0.3 }} color="text.primary" component="span">
              words
            </Typography>
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ textAlign: 'center', paddingTop: 5 }}>
        <Fab variant="extended" color="primary" aria-label="start now">
          <FlightTakeoffIcon sx={{ mr: 1 }} />
          Start Now
        </Fab>
      </Box>
    </Box>
  )
}

export default Home
