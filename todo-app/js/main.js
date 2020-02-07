let app = new Vue({
    el: "#vueApp",
    data: {
     todos: [
         /* test data*/
        {
          id: 1,
          title: 'Go workout',
          completed: false
        },
        {
          id: 2,
          title: 'Do laundry',
          completed: false
        },
        {
          id: 3,
          title: 'Cook food',
          completed: false
        },
        {
          id: 4,
          title: 'Clean up room',
          completed: false
        },
        {
          id: 5,
          title: 'Finish work',
          completed: false
        }
      ],
    },
    
    methods: {
        
        addTodo(e) {
            
            /* Tests if function is being called/input is recieved*/
            alert("The new task is " + e)
            e.preventDefault();
        
        
            const newTodoObj = {
            /*uuid creates unique id*/
                id: uuid.v4(),
                title: this.title,
                completed: false
            }
            
            this.$emit('add-todo', newTodoObj);
            this.title = '';
      
        }, 
        
    },
    
    mounted() {
    },
    
});
