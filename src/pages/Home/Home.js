import { Stack } from '@mui/material';
import FoodCetegory from '../../components/FoodCetegory/FoodCetegory';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {


    return (
        <Stack spacing={10}>
            <HeroSection/>
            <FoodCetegory></FoodCetegory>
        </Stack>
    );
};

export default Home;