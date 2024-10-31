import { createStore } from "vuex";

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groups: JSON.parse(localStorage.getItem('groups')) || [],
    songs: JSON.parse(localStorage.getItem('songs')) || [],
    albums: JSON.parse(localStorage.getItem('albums')) || []
  },
  mutations: {
    addGroup(state, group) {
      state.groups.push(group);
      localStorage.setItem('groups', JSON.stringify(state.groups)); 
    },
    addSong(state, song) {
      state.songs.push(song);
      localStorage.setItem('songs', JSON.stringify(state.songs));  
    },
    addAlbum(state, album) {
      state.albums.push(album);
      localStorage.setItem('albums', JSON.stringify(state.albums));  
    },
    addGroup(state, group) {
      state.groups.push(group);
    },
    addSong(state, song) {
      state.songs.push(song);
    },
    addAlbum(state, album) {
      state.albums.push(album);
    },
    removeGroup(state, groupId) {
      state.groups = state.groups.filter(g => g.id !== groupId);
      localStorage.setItem('groups', JSON.stringify(state.groups));  
    },
    removeSong(state, songId) {
      state.songs = state.songs.filter(s => s.id !== songId);
      localStorage.setItem('songs', JSON.stringify(state.songs));  
    },
    removeAlbum(state, albumId) {
      state.albums = state.albums.filter(a => a.id !== albumId);
      localStorage.setItem('albums', JSON.stringify(state.albums));  
    }
  },
  actions: {
    addGroup({ commit }, group) {
      commit('addGroup', group);
    },
    removeGroup({ commit }, groupId) {
      commit('removeGroup', groupId);
    },
    addSong({ commit }, song) {
      commit('addSong', song);
    },
    removeSong({ commit }, songId) {
      commit('removeSong', songId);
    },
    addAlbum({ commit }, album) {
      commit('addAlbum', album);
    },
    removeAlbum({ commit }, albumId) {
      commit('removeAlbum', albumId);
    }
  },
  getters: {
    allGroups: state => state.groups,
    allSongs: state => state.songs,
    allAlbums: state => state.albums
  }
});
