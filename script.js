// 3. Inizializzo un'istanza di createApp di Vue, che monto selezionando l'#app (fra apici)
const {createApp} = Vue;

// 4. Vado a definire i dati all'interno del mio data() che mi restituisce un oggetto

createApp({
  data(){
    return {
      greetings: 'Hello World!'
    }
  }
}).mount('#app');