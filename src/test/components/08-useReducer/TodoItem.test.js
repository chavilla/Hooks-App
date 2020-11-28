const { shallow } = require("enzyme");
const {
  default: TodoItem,
} = require("../../../components/08-useReducer/TodoItem");
const { state } = require("../../fixtures/toDoList");

describe("TodoItem testing", () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoItem
      todo={state}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      i={0}
    />
  );

  // the testings
  test("should ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("verify that the funtions delete have been called", () => {

    const btn=wrapper.find('.btn-danger');

    btn.simulate('click');

    expect(handleDelete).toHaveBeenCalledWith(state.id);
  });

  test("verify that the funtions toggle have been called", () => {
    
    wrapper.find('p').simulate('click');

    expect(handleToggle).toHaveBeenCalledWith(state.id);
  });

  test('should to show the information', () => {
    
    expect(wrapper.find('p').text()).toBe(`1-${state.desc}`);

  });

  test('should to have the classname complete if the todo.done true', () => {
    expect(wrapper.find('p').hasClass('complete')).toBe(true)
  })
  
  

});
