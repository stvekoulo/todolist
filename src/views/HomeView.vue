<template>
  <div>
    <h1 class="welcome-text">Bienvenue sur l'application ToDo List</h1>
    <router-link to="/inscription">
      <button class="action-button">Inscription</button>
    </router-link>
    <router-link to="/connexion">
      <button class="action-button">Connexion</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.welcome-text {
  font-size: 24px;
  margin-bottom: 20px;
}

.action-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #6d48b1;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #4dc55d;
}
</style>
