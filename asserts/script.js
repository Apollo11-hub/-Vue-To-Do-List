



const app = new Vue({

  el : "#app",

  data : {

    listOfItemsToDo : [

      {
        title: "prova",
        done: false
      }
      
    ],


  
  },

  methods: {
    addNewItemFuncion(){
      
    
    },

    removeItemFunction(index){
      
      this.listOfItemsToDo.splice(index , 1)
    }

  },

})
