import React, { useContext } from 'react';
import { MovieDataType } from '../../assets/data';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'; 
import { MovieContext } from '../../context/movie-context';
import moviesIcon from '../../assets/icons/icon-category-movie.svg'
import tvSeriesIcon from '../../assets/icons/icon-nav-tv-series.svg'
import BookmarkIcon from '../icons/bookmark-icon';
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon';

interface MovieCardProps {
  movie: MovieDataType;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark=(id:string)=>{
    dispatch({type:"TOGGLE BOOKMARK",id})
  }
  
  return (
    <Card variant='outlined'
      elevation={0}
      sx={{ bgColor: "transparent" ,color:'#e0e0e0', my:3,border:'8px'}} 
    >
      <CardContent
        sx={{
          p: 0,
          position:'relative',
          bgcolor:'black'
        }}
      >
        <Grid container spacing={1} bgcolor='black'>
        <Grid item>
            <img src={movie.thumbnail.regular.large} alt='' style={{width:'400px',height:'180px',borderRadius:'8px' }}/>
        </Grid>

        <Grid item xs={8}>
        <Grid container spacing={1} alignContent='center'>
        <Grid item>
            <Typography fontSize={10} color="#e0e0e0" aria-label="year of movie">
              {movie.year}
            </Typography>
          </Grid>

          <Grid item>
            <Box sx={{ width: "4px", height: "4px", backgroundColor: "#BDBDBD", borderRadius: "50%" }} />
          </Grid>

          <Grid item>
            <img
              src={movie.category === "Movies" ? moviesIcon : tvSeriesIcon}
              alt={movie.category}
              width='16px'
              height='16px'
            />
          </Grid>

          <Grid item>
            <Box sx={{ width: "1rem", height: "1rem", backgroundColor: "transparent", borderRadius: "full" }} />
          </Grid>

          <Grid item>
            <Typography fontSize={10} color="#e0e0e0" aria-label="movie category">
              {movie.category}
            </Typography>
          </Grid>

          <Grid item>
            <Typography fontSize={10}  color="#e0e0e0" aria-label="movie rating">
              {movie.rating}
            </Typography>
            </Grid>
            </Grid>
            <Typography color="#e0e0e0" padding={1} aria-label="movie title">
              {movie.title}
            </Typography>

        </Grid>
        </Grid>
        

      </CardContent>
    </Card>
  );
};

export default MovieCard;
