<template>
  <v-container fluid grid-list-lg>
    <v-slide-y-transition mode="out-in">
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-title class="card-title">
                        <div d-inline-block>
                             <img class="profile" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="" />
                        </div>
                        <div d-inline-block class="header">
                            <div class="subheading user">
                                John Doe
                            </div>
                            <div class="caption">
                                11/02/2018 
                                <v-btn flat to="" small class="caption">
                                    <v-icon small>place</v-icon>Antsirabe
                                </v-btn>
                            </div>
                        </div>
                    </v-card-title>
                    <v-card-media
                    class="white--text main-img"
                    height="200px"
                    src="http://www.madagascar-hotels-online.com/images/ville/1255460593_image.jpeg"
                    >
                    </v-card-media>
                    <v-card-actions>
                        <v-btn icon>
                            <v-icon color="red">check</v-icon>
                            <span class="badge green accent-2 caption">8</span>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon color="pink lighten-2">favorite_border</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>chat_bubble_outline</v-icon>
                            <span class="badge green accent-2 caption">3</span>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon color="green">share</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
</script>

<style>
  .badge {
      position: absolute;
      top: -3px;
      left: 20px;
      background-color: red;
      min-width: 17px;
      border-radius: 50%;
  }
  .card-title {
      padding: unset;
  }
  .profile {
      width: 45px;
  }
  .header {
      margin-left: 5px;
  }
  .user {
      position: relative;
      bottom: -10px;
  }
  .detail-item {
      margin-bottom: 10px;
  }
</style>
