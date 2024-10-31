<template>
    <div class="group-list">
      <group-item
        v-for="group in groups"
        :key="group.id"
        :group="group"
        @delete="removeGroup"
      />
    </div>
  </template>
  
  <script>
  import GroupItem from './GroupItem.vue';
  
  export default {
    components: { GroupItem },
    computed: {
      groups() {
        return this.$store.getters.getGroups;
      }
    },
    methods: {
      removeGroup(id) {
        this.$store.commit('removeGroup', id);
      }
    }
  }
  </script>
  