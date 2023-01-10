import { Container } from '@mui/material';
import { Box } from '@mui/system';
// import React from 'react';
import TabButton from '../Custom/TabButtons';
import React, { useState } from 'react';

const FoodCetegory = () => {
    const [value, setValue] = useState(0);
    return (
        <Box>
            <Container>
                <Box>
                    <TabButton value={value} setValue={setValue}></TabButton>
                </Box>
            </Container>
        </Box>
    );
};

export default FoodCetegory;