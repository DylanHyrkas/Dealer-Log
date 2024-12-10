import HomeButton from "../components/HomeButton"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Grid2 as Grid } from "@mui/material";

function Home() {
    return (
        <Grid>
            <HomeButton title="Inventory Management" Icon={DirectionsCarIcon} to="/inventorymanagement"/>
        </Grid>
    )
}

export default Home