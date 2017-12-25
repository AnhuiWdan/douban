import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/movie/movies'
import movieList from '../views/movie/movie-list'
import detail from '../views/movie/movie-detail'
import search from '../views/movie/search-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      name: 'index'
    },
    {
      path: '/movie/subject/:id',
      component: detail,
      name: 'movie-detail'
    },
    {
      path: '/movie/search',
      component: search,
      name: 'movie-search'
    },
    {
      path: '/movie/list',
      component: movieList,
      name: 'movie-list'
    }
  ]
})
