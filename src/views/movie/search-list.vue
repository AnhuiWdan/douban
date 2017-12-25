<template>
  <section class="grid has-search-bar" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" >
    <h2>{{movieList.title}}</h2>
    <div class="card" v-if="movieList.subjects.length > 0">
      <router-link :to="{name: 'movie-detail', params: {id: item.id}}" class="item"
                   v-for="item in movieList.subjects" :key="item.id">
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
    <spinner :show="loading"></spinner>
  </section>
</template>

<script>
import Spinner from '../../components/Spinner'
import InfiniteScroll from 'vue-infinite-scroll'
import { fetchSearchMovies } from '../../store/api'
import { spli } from '../../assets/spli'

export default {
  components: { Spinner },
  directives: { InfiniteScroll },
  data() {
    return {
      loading: true,
      query: '',
      movieList: {
        subjects: []
      },
      busy: false
    }
  },
  computed: {},
  mounted() {
    this.query = this.$route.query.query
  },
  watch: {
    $route: 'loadAgain'
  },
  methods: {
    loadAgain() {
      this.movieList.subjects = []
      this.busy = false
      this.query = this.$route.query.query
      this.loadMore()
    },
    loadMore() {
      let start = this.movieList.subjects.length
      this.busy = true
      fetchSearchMovies(this.query, start).then(data => {
        this.movieList.title = data.title
        this.movieList.total = data.total
        data.subjects.forEach(item => {
          item.images.medium = spli(item.images.medium)
        })
        this.movieList.subjects = this.movieList.subjects.concat(data.subjects)
        if (this.movieList.subjects.length < this.movieList.total) {
          this.busy = false
        }
        this.loading = false
      })
    }
  }
}
</script>
