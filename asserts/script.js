



const app = new Vue({

  el : "#app",

  data : {

    listOfItemsToDo:[],

    textToPush:""
  
  },

  methods: {
    addNewItemFuncion(){
      const newItem = 
        {
          title: this.textToPush,
          done: false
        }
        if(this.textToPush.length > 0){
          this.listOfItemsToDo.push(newItem)
        }
    },


    removeItemFunction(index){
      
      this.listOfItemsToDo.splice(index , 1)
    }

  }
  
})
