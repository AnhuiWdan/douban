<template>
  <div>
    <section class="grid has-search-bar">
      <div v-if="inTheater.title">
        <h2>
          {{inTheater.title}}
          <router-link tag="span" :to="{name: 'movie-list', query: {type: inTheater.type}}" class="more">更多>></router-link>
        </h2>
        <div class="card">
          <router-link :to="{name: 'movie-detail', params: {id: item.id}}" v-for="item in inTheater.subjects" class="item" :key="item.id">
            <div class="cover">
              <div class="wp">
                <img class="img-show" :src="item.images.medium" :alt="item.images.large">
              </div>
            </div>
            <div class="info">
              <h3>{{item.title}}</h3>
            </div>
          </router-link>
        </div>
      </div>
      <div v-if="comingSoon.title">
        <h2>
          {{comingSoon.title}}
          <router-link tag="span" :to="{name: 'movie-list', query: {type: comingSoon.type}}" class="more">更多>
          </router-link>
        </h2>
        <div class="card">
          <router-link :to="{name: 'movie-detail', params: {id: item.id}}" class="item"
                       v-for="item in comingSoon.subjects" :key="item.id">
            <div class="cover">
              <div class="wp">
                <img class="img-show" :src="item.images.medium"/>
              </div>
            </div>
            <div class="info">
              <h3>{{item.title}}</h3>
            </div>
          </router-link>
        </div>
      </div>
      <spinner :show="loading"></spinner>
    </section>
  </div>
</template>

<script>
import Spinner from '../../components/Spinner.vue'
import { API_TYPE, fetchMoviesByType } from '../../store/api'
import {spli} from '../../assets/spli'

export default {
  components: { Spinner },
  data() {
    return {
      loading: true,
      inTheater: {
        type: ''
      },
      comingSoon: {
        type: ''
      }
    }
  },
  mounted() {
    let start = 0
    let count = 9
    fetchMoviesByType(API_TYPE.movie.in_theaters, start, count).then(data => {
      data.subjects.forEach(item => {
        item.images.medium = spli(item.images.medium)
      })
      this.inTheater = data
      this.inTheater.type = API_TYPE.movie.in_theaters
      this.loading = false
    })
    fetchMoviesByType(API_TYPE.movie.coming_soon, start, count).then(data => {
      data.subjects.forEach(item => {
        item.images.medium = spli(item.images.medium)
      })
      this.comingSoon = data
      this.comingSoon.type = API_TYPE.movie.coming_soon
      this.loading = false
    })
  }
}
</script>
