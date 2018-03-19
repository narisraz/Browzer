<template>
  <v-container fluid grid-list-lg>
    <v-slide-y-transition mode="out-in">
        <v-list>
            <v-list-tile avatar v-for="event in events" :key="event.id" @click="">
              <v-list-tile-avatar>
                <v-icon>event</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ event.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ event.date }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                {{ event.photos }}
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      events: [
        { title: 'Ze tany de tany. Zay tsy tany nanenina', date: '12/02/2018', photos: 20 },
        { title: 'Antsirabe', date: '11/12/2017', photos: 13 }
      ]
    })
  }
</script>

<style>
</style>
