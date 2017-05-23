<template>
  <div class="page1">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
     <ul>
      <li v-for="(item,index) in items">
       {{index}} -{{ item.message }}
      </li>
  </ul>
<a href="#/page1/child1">child1</a>
<router-link to="/page1/child1">link-child1</router-link>
<router-view></router-view>
  </div>
 
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: 'page1',
      items: [
      {message: 'Foo' },
      {message: 'Bar' }
    ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
