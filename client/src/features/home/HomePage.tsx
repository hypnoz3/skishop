import { Typography } from "@mui/material";
import snowboarder from '../../app/layout/snowboarding_home.jpg'

export default function HomePage() {
    return (
        <div >
        <Typography variant='h2'style={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
        }}>
           Welcome to SkiShop!
        </Typography>
        <img id="snowboard" src={snowboarder} style={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
            }} alt="snowboard"></img>
        </div>
    )
}