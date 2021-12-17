import { Box, Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import notfoundpng from "../layout/page-not-found.png"

export default function NotFound() {
    return (
        <Container component={Paper} sx={{height: 800}}>
            <Typography gutterBottom variant='h3'>Oops - we could not find what you are looking for</Typography>
            <Box
        component="img"
        style={{width: "80%"}}
        alt="not found"
        src={notfoundpng}
      />
    
            <Divider />
            <Button fullWidth component={Link} to='/catalog'>Go back to the store</Button>
        </Container>
    )
}