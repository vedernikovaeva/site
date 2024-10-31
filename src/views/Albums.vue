<template>
    <div>
      <h1>Список альбомів</h1>
      <div v-for="album in albums" :key="album.id" class="album">
        <h2>{{ album.title }}</h2>
        <ul>
          <li v-for="song in album.songs" :key="song.id">{{ song.title }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Albums',
    data() {
      return {
        albums: [
          { 
            id: 1, 
            title: 'The Beatles – Abbey Road (1969)', 
            songs: [
              { id: 1, title: '"Come Together"' },
              { id: 2, title: '"Here Comes the Sun"' },
            ] 
          },
          { 
            id: 2, 
            title: 'Michael Jackson – Thriller (1982)', 
            songs: [
              { id: 3, title: '"Thriller"' },
              { id: 4, title: '"Billie Jean"' },
            ] 
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
  }
  .album {
    margin-bottom: 20px;
  }
  </style>
  