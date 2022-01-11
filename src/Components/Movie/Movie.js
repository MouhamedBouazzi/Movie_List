import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import "./Movie.css"



const Movie = ({movie}) => {
    return (
        <div id="card">
             <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="140"
        image={movie.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {movie.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
    )
}

export default Movie
