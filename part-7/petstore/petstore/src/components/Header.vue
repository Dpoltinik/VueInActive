<template>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>
          <router-link :to="{ name: 'iMain'}">{{ sitename }}</router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <div v-if="!mySession">
          <button type="button" class="btn btn-default btn-lg" v-on:click="signIn">Sign In</button>
        </div>
        <div v-else>
          <button type="button" class="btn btn-default btn-lg" v-on:click="signOut">
            <img class="photo" :src="mySession.photoURL"/>Sign Out
          </button>
        </div>
        <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name:'Form'}">
          <span class="glyphicon glyphicon-shopping-cart">{{ cartItemCount }}</span> Checkout
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase'
export default({
    name: 'my-header',
    data() {
        return {
            sitename: 'Vue.js Pet Depot'
        }
    },
    props:['cartItemCount'],
    beforeCreate(){
        firebase.auth().onAuthStateChanged((user) => {
          this.$store.commit('SET_SESSION', user || false)
        })
    },
    methods: {
        showCheckout() {
            this.$router.push({name: 'Form'})
        },
        signIn() {
          let provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log('signed in!');
          }).catch(function(error){
            console.log('error ' + error)
          })
        },
        signOut() {
          firebase.auth().signOut().then(function() {
          console.log("signed out!")
          })
          .catch(function(error) {
          console.log("error in sign out!")
      });
        }
    },
    computed: {
      mySession() {
        return this.$store.getters.session;
      }
    }
})
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
.router-link-exact-active {
    color: black;
}

.photo {
  width: 25px;
  height: 25px;
}
</style>
