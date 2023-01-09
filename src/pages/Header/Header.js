import { Box, Button, Container, IconButton } from '@mui/material';
import React from 'react';
import { FlexBox } from '../../components/styled/FlexBox';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Stack } from '@mui/system';

const Header = () => {
    return (
        <section>
            <Container>
                <FlexBox justifyContent='space-between' sx={{
                    padding: '2rem 0'
                }}>
                    <Box>
                        <img src='' alt='logo' />
                    </Box>
                    <Stack direction='row' spacing={3} sx={{
                        alignItems: 'center'
                    }}>
                        <IconButton>
                                <LocalGroceryStoreOutlinedIcon/>
                        </IconButton>
                        <Button variant='text'>Sign in</Button>
                        <Button sx={{
                            color: '#ffffff'
                        }}>Log in</Button>
                    </Stack>
                </FlexBox>
            </Container>
        </section>
    );
};

export default Header;