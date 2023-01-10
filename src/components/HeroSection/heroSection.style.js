import { styled, Box } from '@mui/material';

export const SearchBox = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '600px',
    // background: '#ffffff',
    // textAlign: 'center',
    position: 'relative',
    margin: '0 auto',
    "& input": {
        width: '100%',
        background: '#fff',
        border: 'none',
        outline: 'none',
        padding: '0.5rem 2rem',
        borderRadius: '50px',
        fontSize: '1.5rem',
        boxShadow: '10px 5px 7px'
    },
    "& button": {
        position: 'absolute',
        content: '""',
        top: '0',
        right: '0',
        background: '#f91944',
        border: 'none',
        outline: 'none',
        padding: '0.5rem 2rem',
        borderRadius: '50px',
        fontSize: '1.5rem',
        // boxShadow: '10px 5px 7px',
        color: '#fff'
    }
}))