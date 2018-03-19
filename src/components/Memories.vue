<template>
  <v-container fluid grid-list-lg>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex v-for="memory in memories" :key="memory.title" xs12 md6>
          <v-card>
            <v-card-media
              :src="memory.src"
              height="200px"
              class="main-img"
            >
              <div class="city">
                <h1 class="headline white--text">{{ memory.title }}</h1>
              </div>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      memories: [
        { title: 'Mantasoa', src: 'http://www.madagascar-hotels-online.com/images/ville/1255460593_image.jpeg', flex: 12 },
        { title: 'Antsirabe', src: 'https://media-cdn.tripadvisor.com/media/photo-s/09/d9/7b/0a/lac-tritriva.jpg', flex: 12 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 12 }
      ]
    })
  }
</script>

<style>
  .city {
    border: 2px solid white;
    border-radius: 5px;
    margin: auto;
    padding: 5px;
  }
  .main-img {
    opacity: 0.5;
    filter: alpha(opacity=50);
    -webkit-filter: alpha(opacity=50);
  }
</style>
