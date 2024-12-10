import HomeButton from "../components/HomeButton"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/Person';
import { Grid2 as Grid } from "@mui/material";

function Home() {
    return (
        <Grid>
            <HomeButton title="Inventory Management" Icon={DirectionsCarIcon} to="/inventorymanagement"/>
            <HomeButton title="Account" Icon={PersonIcon} to="/account"/>
        </Grid>
    )
}

export default Home
