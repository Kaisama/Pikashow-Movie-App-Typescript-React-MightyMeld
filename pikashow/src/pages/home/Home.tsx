import React, { SetStateAction, useContext, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import { Box, Paper, InputBase, InputAdornment, Typography } from "@mui/material";
import SearchIcon from '../../assets/icons/icon-search.svg';
import MovieTrendingList from "../../components/Movie-trending/MovieTrendingList";
import MovieList from "../../components/Movie-list/MovieList";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import { log } from "console";
import Movies from "../movies/Movies";
const Home = () => {
  const [search, setSearch] = useState("");
  const[searchList,setSearchList]=useState<MovieDataType[]>([]);
  const {state}=useContext(MovieContext);
  const {movies}=state;
  console.log(state);
  const trendingList=movies.filter((item)=>item.isTrending===true);
  const recommendList=movies.filter((item)=>item.isTrending!==true);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList=movies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))
    setSearchList(newList);
  };

  return (
    <Layouts>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder={"Search for Movies or Tv Series "}
            sx={{ ml: 1, flex: 1, color: "white", border: "none" }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img src={SearchIcon} alt="search icon" width={20} height={20}/>
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4} >
            {search ===""?(
              <Box width='100%'>
                  <Box width='100%'>
                      <Typography variant="h5" component='h1' my={6} fontWeight={400}>
                        Trending
                      </Typography>
                      <MovieTrendingList trendingList={trendingList}/>
                  </Box>
                  <Box width='100%'>
                      <Typography variant="h5" component='h1' my={6} fontWeight={400}>
                        Recommended for you
                      </Typography>
                      <MovieList recommendList={recommendList}/>
                  </Box>
              </Box>
            ):(
              <Box width='100%'>
                <Typography>
                    Found {searchList.length} results for '{search}'{""}

                </Typography>
                <MovieList recommendList={searchList}/>
              </Box>
            )}
      </Box>
    </Layouts>
  );
};

export default Home;
