const { renderHook } = require("@testing-library/react-hooks")
const { todoReducer } = require("../../../components/08-useReducer/todoReducer")
const { state } = require("../../fixtures/toDoList")


describe('TodoReducers testing', () => {
  test('should to retun default state', () => {

    const toDoList=todoReducer(state,'');

    expect(toDoList.length).toBe(2);
    expect(toDoList).toEqual(state);
  
  });

  test('should to add a toDo', () => {

    const action={
        type:'add',
        payload:{
            id:3,
            name:'Aprender Laravel',
            done:false
        }
    }
    
    const toDoList=todoReducer(state,action);

    expect(toDoList.length).toBe(3);
    expect(toDoList.includes(action.payload)).toBe(true);
    expect(toDoList).toEqual([...state,action.payload]);

  });


  test('should to delete a ToDo', () => {
    
    const toDoList=todoReducer(state,{ type:'delete', payload:2 });

    expect(toDoList.length).toBe(1);


  });

  test('should to do the toggle', () => {
    
    const toDoList=todoReducer(state,{ type:'toggle', payload:2 });

    console.log(toDoList);

  })
  
  
  
  
})
