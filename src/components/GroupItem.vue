<template>
    <div class="group-item">
      <h3>{{ group.name }}</h3>
      <button @click="deleteGroup">Видалити</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['group'],
    methods: {
      deleteGroup() {
        this.$emit('delete', this.group.id);
      }
    }
  }
  </script>
  