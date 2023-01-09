import {createTheme} from '@mui/material'

export const theme = createTheme({
    palette:{
        primary:{
            main: '#f91944',
            mainBg: '#ff9caf',
            greyText: '#727272'
        }
    },
    components:{
        MuiContainer:{
            defaultProps:{
                maxWidth: 'lg'
            }
        },
        MuiButton: {
            styleOverrides:{
                root:{
                    fontsize: '1em',
                    padding: '0.5rem 2rem',
                    borderRadius: '40px',
                    textTransform: 'uppercase',
                    color: '#000000'
                }
            },
            defaultProps:{
                variant: 'contained'
            }
        },
        // MuiTypography:{
        //     styleOverrides:{
        //         root:{
        //             color: '#000000'
        //         }
        //     }
        // }
    },

   

})