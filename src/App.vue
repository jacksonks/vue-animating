<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/List">List</router-link> |
      <router-link to="/Drawer">Drawer</router-link> |
      <router-link to="/Cards">Cards</router-link> |
      <router-link to="/Simple">Simple</router-link> |
      <router-link to="/Stagger">Stagger</router-link> |
      <router-link to="/State">State</router-link> |
      <router-link to="/Timeline">Timeline</router-link> |
      <router-link to="/Master">Master</router-link> |
      <router-link to="/About">About</router-link>
    </div>
    <transition name="slide-fade" mode="out-in">
    <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  font-size: 1em;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
}

.btn {
  height: 2.2em;
  margin: 0.5em;
  border-radius: 0.3em;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: white;
}

input {
  display: inline-block;
  box-sizing: border-box;
  width: 30%;
  height: 1.8em;
  padding: 0.5em;
  margin: 0.2em;
  font: 0.8em 'Avenir', Helvetica, sans-serif;
}

.modal {
  width: 250px;
  height: 200px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 2%;
  background-color: #e0e0e0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

p {
  font-size: 0.8em;
}

::placeholder {
  color: #2c3e50;
}

ul {
  list-style-type: none;
}
/*** TRANSITIONS ***/
/*app router*/
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
/*home 'card' modal*/
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-in;
}
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-leave-to {
  opacity: 0;
}
/*app router*/
.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-up-enter-active {
  transition: all 0.5s ease;
}
.slide-up-move {
  transition: transform 0.5s ease-in;
}
</style>
