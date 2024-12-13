import HomeButton from "../components/HomeButton"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Grid2 as Grid } from "@mui/material";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
        <Box sx={{alignItems: 'center',}}>
        <Grid>
            <HomeButton title="Inventory Management" Icon={DirectionsCarIcon} to="/inventorymanagement"/>
            <HomeButton title="Account" Icon={PersonIcon} to="/account"/>
        </Grid>
        </Box>
        <Footer/>
        </div>
    )
}

export default Home


