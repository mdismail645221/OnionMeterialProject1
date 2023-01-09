import { Box, Container, Typography } from '@mui/material';

import React from 'react';

const HeroSection = () => {
    return (
        <Box sx={{
            height: '70vh',
            width: '100%',
            background: '#eeee'
        }}>
            <Container sx={{
                height: '100%'
            }}>

                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'grid',
                    placeItems: 'center'
                }}>
                    {/* ====> middle content box ===> */}
                    <Box sx={{
                        width: '50%',
                        // height: '100%',
                        background: 'red'
                    }}>
                        <Typography variant='h4' textAlign='center'>
                            Best food waiting for belly.
                        </Typography>

                        {/* search bar */}
                        <input type='search' placeholder='search bar' />

                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;