<template>
  <div>
    <h1 style="color: white;">Ma To-Do List</h1>
    
    <!-- Bouton pour ajouter une nouvelle tâche -->
    <button @click="showAddTaskForm">Ajouter une tâche</button>

    <!-- Affichage du nombre total de tâches -->
    <p style="color: white;">Nombre total de tâches : {{ tasks.length }}</p>

    <!-- Affichage du nombre de tâches non débutées, en cours et terminées -->
    <p style="color: white;">Non débutées: {{ countTasks('non débuté') }}</p>
    <p style="color: white;">En cours: {{ countTasks('en cours') }}</p>
    <p style="color: white;">Terminées: {{ countTasks('terminé') }}</p>

    <!-- Tableau des tâches -->
    <table>
      <thead>
        <tr>
          <th style="color: white;">Nom</th>
          <th style="color: white;">Statut</th>
          <th style="color: white;">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td style="color: white;">{{ task.name }}</td>
          <td style="color: white;">{{ task.status }}</td>
          <td>
            <button @click="showTaskDetails(task)">Voir détails</button>
            <button @click="showEditTaskForm(task)">Modifier</button>
            <button @click="changeTaskStatus(task)">Changer statut</button>
            <button @click="confirmDeleteTask(task)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Formulaire pour ajouter une nouvelle tâche -->
    <div v-if="showAddForm">
      <form @submit.prevent="addTask" style="color: white;">
        <label>Nouvelle tâche:</label>
        <input v-model="newTaskName" required>
        <button type="submit">Ajouter</button>
        <button @click="cancelAddTask">Annuler</button>
      </form>
    </div>

    <!-- Affichage des détails de la tâche -->
    <div v-if="selectedTask">
      <h2 style="color: white;">Détails de la tâche</h2>
      <p style="color: white;">Nom: {{ selectedTask.name }}</p>
      <p style="color: white;">Statut: {{ selectedTask.status }}</p>
      <!-- Ajoutez d'autres détails de tâche au besoin -->
    </div>

    <!-- Message de confirmation pour la suppression -->
    <div v-if="showDeleteConfirmation">
      <p style="color: white;">Voulez-vous vraiment supprimer cette tâche?</p>
      <button @click="deleteTask">Oui</button>
      <button @click="cancelDelete">Non</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],  // Vos tâches récupérées depuis l'API
      showAddForm: false,
      newTaskName: "",
      selectedTask: null,
      showDeleteConfirmation: false,
    };
  },
  methods: {
    addTask() {
      // Faites appel à votre API Laravel pour ajouter une tâche
      // Mettez à jour la liste des tâches après l'ajout
    },
    // Autres méthodes pour gérer les actions demandées

    // Méthode pour annuler l'ajout de tâche
    cancelAddTask() {
      this.showAddForm = false;
      this.newTaskName = "";
    },
  },
};
</script>

<style scoped>
.todo-app {
  color: #fff; /* Blanc */
}

table {
  color: #000; /* Noir */
  /* Ajoutez d'autres styles de table si nécessaire */
}

form {
  color: #fff; /* Blanc */
}

/* Ajoutez d'autres styles au besoin */
</style>