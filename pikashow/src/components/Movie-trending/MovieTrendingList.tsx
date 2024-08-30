import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { MovieDataType } from '../../assets/data'
import MovieTrendingCard from '../MovieCard/MovieTrendingCard';

interface MovieTrendingListProps{
    trendingList:MovieDataType[];
}

const MovieTrendingList = ({trendingList}:MovieTrendingListProps) => {
  return (
    <Box sx={{display:"flex", gap:2 , overflowX:'scroll'}}>
        {trendingList.map((movie)=>(
            <Grid item key={movie.id}>
                <Paper elevation={0} sx={{backgroundColor:"transparent"}}>
                    <MovieTrendingCard movie={movie}/>
                </Paper>
            </Grid>
        ))}

    </Box>
  )
}

export default MovieTrendingList