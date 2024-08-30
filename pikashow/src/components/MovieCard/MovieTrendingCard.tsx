import React, { useContext } from 'react';
import { MovieDataType } from '../../assets/data';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { MovieContext } from '../../context/movie-context';
import moviesIcon from '../../assets/icons/icon-category-movie.svg';
import tvSeriesIcon from '../../assets/icons/icon-category-tv.svg';
import BookmarkIcon from '../icons/bookmark-icon';
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon';

interface MovieTrendingCardProps {
  movie: MovieDataType;
}

const MovieTrendingCard = ({ movie }: MovieTrendingCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark=(id:string)=>{
    dispatch({type:"TOGGLE BOOKMARK",id})
  }
  
  return (
    <Card
      elevation={0}
      style={{ backgroundColor: "transparent", position: "relative" }} 
    >
      <CardContent
        style={{
          padding: 0,
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt={movie.title}
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
    

    
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgcolor="rgba(0,0,0,0.6)"
        borderRadius="8px"
      />
        <Stack mt={6} spacing={0} position="absolute" bottom={0} left={0} right={0} p={4}>
         
          <Grid container alignItems='center' spacing={2}>
          <Grid item>
            <Typography fontSize={10} color="#e0e0e0" aria-label="year of movie">
              {movie.year}
            </Typography>
          </Grid>

          
          <Grid item>
            <Box sx={{ width: "1rem", height: "1rem", backgroundColor: "transparent", borderRadius: "full" }} />
          </Grid>

       
          <Grid item>
            <img
              src={movie.category === "Movies" ? moviesIcon : tvSeriesIcon}
              alt={movie.category}
              width={16}
              height={16}
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
          
           
        </Stack>
        <Box style={{
           position:"absolute",
           top:'0',
           left:'0',
           right:'0',
           display:"flex",
           justifyContent:"flex-end",
           padding:"16px"
        }}
      >
        <Box sx={{
          p:'1rem',
          backgroundColor:'black',
          borderRadius:"100%",
          cursor:'pointer',
          "&:hover":{opacity:0.8}
        }}
        onClick={()=>handleToggleBookmark(movie.id)}
        >
          {movie.isBookmarked?(<BookmarkIcon fill={"#E0E0E0"}/>):(<BookmarkEmptyIcon/>)}
        </Box>
      </Box>
      </CardContent>
    </Card>
  );
};

export default MovieTrendingCard;
