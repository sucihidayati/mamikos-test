<template>

  <div class="hello">
    <Header />
    <div class="container">
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand"></a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search by name"
              aria-label="Search"
              v-model="search"
            />
          </form>
        </div>
      </nav>


      <div class="table">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="user in userList"> -->
              <tr v-for="(user, index) in userList" :key="index">
              <th>{{index+1}}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.age }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </div>


</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default{
  name: 'SearchFilter',
  components:{
    Header,
    Footer
  },
  data: () => ({
    search: "",
    users: [
      {
        name: "Jhon Wick",
        age: 40
      },
      {
        name: "Wick Brother",
        age: 30
      },
      {
        name: "David Beckham",
        age: 25
      },
      {
        name: "Martin Anderson",
        age: 17
      },
      {
        name: "Olive",
        age: 35
      },
    ]
  }),
  computed: {
    userList(){
      if (this.search.trim().length > 0){
        return this.users.filter(user =>
          user.name.match(this.search.trim())
      );
      }
      return this.users;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.d-flex{
  hover : #1baa56;
}
</style>
