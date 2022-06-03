import { Box, Typography } from "@mui/material";
import Slider from 'react-slick';


export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
            <Slider {...settings}>
            <div>
                <img src="/images/sportsman_skiing_mountain_top.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 800}}/>
            </div>
            <div>
                <img src="/images/skiing_skier_jump_mountains_snow.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 800}}/>
            </div>
            <div>
                <img src="/images/cabin_snow.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 800}}/>
            </div>

            </Slider>
            <Box display='flex' justifyContent='center' sx={{p: 5}}>
                <Typography variant='h1'>
                Welcome to SkiShop!
                </Typography>
            </Box>
        
        </>
    )
}