<script>
export default {
  name: "app",
  components: {

  },
  title: "Sabores Cercanos",
  data() {
    return {
      toolbarColor: '#fc8024',
      drawer: false,
      items: [
        {label: 'Home', to: '/home'},
        {label: 'Meals'},
        {label: 'Profile', to: '/profile'},
      ]
    }
  },
}
</script>

<template>
  <pv-toolbar class="bg-primary" fixed>
    <template #start>
      <h3>Sabores Cercanos</h3>
    </template>
    <template #end>
      <div class="flex-column">
        <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="p-button-text" @click="navigate">{{item.label}}</pv-button>
        </router-link>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>