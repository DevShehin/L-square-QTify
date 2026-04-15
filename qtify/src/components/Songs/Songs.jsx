import { useState, useEffect, useMemo } from 'react';
import { Tabs, Tab } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import { getSongs, getGenres } from '../../api/index';
import styles from './Songs.module.css';

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const loadData = async () => {
      try {
        const songsData = await getSongs();
        const genresData = await getGenres();
        
        // Safely set songs
        if (Array.isArray(songsData)) {
          setSongs(songsData);
        } else if (songsData?.data && Array.isArray(songsData.data)) {
          setSongs(songsData.data);
        } else {
          setSongs([]);
        }
        
        // Safely set genres
        let genresArray = [];
        if (Array.isArray(genresData)) {
          genresArray = genresData;
        } else if (genresData?.data && Array.isArray(genresData.data)) {
          genresArray = genresData.data;
        }
        
        setGenres([{ key: "all", label: "All" }, ...genresArray]);
      } catch (error) {
        console.error("Failed to fetch songs/genres:", error);
        setSongs([]);
        setGenres([{ key: "all", label: "All" }]);
      }
    };
    loadData();
  }, []);

  const filteredSongs = useMemo(() => {
    if (selectedGenre === "all") return songs;
    return songs.filter(song => song.genre?.key === selectedGenre);
  }, [songs, selectedGenre]);

  return (
    <section className={styles.songsSection} data-testid="songs-section">
      <div className={styles.header}>
        <h2 className={styles.title}>Songs</h2>
      </div>
      <Tabs
        value={selectedGenre}
        onChange={(e, newGenre) => setSelectedGenre(newGenre)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          marginBottom: '24px',
          '& .MuiTabs-indicator': {
            backgroundColor: 'var(--color-primary-green)',
            height: '3px',
          },
          '& .MuiTab-root': {
            color: '#888',
            fontFamily: 'Poppins',
            fontSize: '14px',
            textTransform: 'none',
          },
          '& .Mui-selected': {
            color: 'var(--color-primary-green) !important',
            fontWeight: '600',
          },
        }}
      >
        {genres.map(genre => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
          />
        ))}
      </Tabs>

      <Carousel>
        {filteredSongs.map(song => (
          <Card
            key={song.id}
            image={song.image}
            title={song.title}
            likes={song.likes}
            isAlbum={false}
          />
        ))}
      </Carousel>
    </section>
  );
}

export default Songs;