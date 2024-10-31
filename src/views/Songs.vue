<template>
    <div>
      <h1>Список пісень</h1>
      <label for="song-select">Виберіть пісню:</label>
      <select id="song-select" v-model="selectedSong" @change="fetchAlbumsBySong">
        <option v-for="song in songs" :key="song.id" :value="song">{{ song.title }}</option>
      </select>
  
      <div v-if="selectedSong">
        <h2>Ви обрали: {{ selectedSong.title }}</h2>
        <p>Перейдіть до сторінки альбомів, щоб переглянути альбоми, що містять цю пісню.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Songs',
    data() {
      return {
        songs: [
          { id: 1, title: 'Song 1' },
          { id: 2, title: 'Song 2' },
          { id: 3, title: 'Song 3' },
        ],
        selectedSong: null,
      };
    },
    methods: {
      fetchAlbumsBySong() {
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
  }
  </style>
  