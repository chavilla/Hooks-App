import { act } from "@testing-library/react";
import React from "react";
const { shallow, mount } = require("enzyme");
import TodoApp from "../../../components/08-useReducer/TodoApp";
import { state } from "../../fixtures/toDoList";

describe("<TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem=jest.fn(()=>{});

  test("should be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should add a toDo", () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("FormTodo").prop("handleAddTodo")(state[0]);
      wrapper.find("FormTodo").prop("handleAddTodo")(state[1]);
    });

    expect(wrapper.find('h1').text()).toBe(`TodosApp ${state.length}`);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);

  });
});
