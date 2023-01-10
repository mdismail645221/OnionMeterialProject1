import { Box, Container, Stack, Typography } from '@mui/material';

import React from 'react';
import { SearchBox } from './heroSection.style';

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
                    <Stack  spacing={5} sx={{
                        // width: 600,
                        // margin: '0 auto',
                        // textAlign: 'center',
                    }}>
                        <Typography variant='h3' textAlign='center'>
                            Best food waiting for belly.
                        </Typography>

                        {/* search bar */}
                        <SearchBox>
                             <input type='search' placeholder='search bar' />
                             <button>Search</button>
                        </SearchBox>

                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;