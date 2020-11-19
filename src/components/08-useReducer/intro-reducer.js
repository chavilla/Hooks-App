const initialState=[{
    id:1,
    name:'Jesús',
    email:'jacv00@hotmail.com'
}];


const userReducer=(state=initialState, action)=>{
    if (action.type==='ADD') {
        return [...state,action.payload]
    }
}

let value=userReducer(initialState,{ type:'ADD' });


const newTodo={
    id:2,
    name:'Luis',
    email: 'lualchavi@hotmail.com'
}


const action={
    type: 'ADD',
    payload: newTodo
}

value=userReducer(initialState,action);

console.log(value);

console.log(initialState);
