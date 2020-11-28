const { shallow } = require("enzyme");
const {
  default: FormTodo,
} = require("../../../components/08-useReducer/FormTodo");

describe("<FormTodo />", () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<FormTodo handleAddTodo={handleAddTodo} />);

  test("should to show succesfully", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("shouldnt to call handleAddTodo", () => {
      const formSubmit=wrapper.find('form').prop('onSubmit');

      formSubmit({preventDefault(){}});

      expect(handleAddTodo).toBeCalledTimes(0);

  });

  test('should to call handleAddTodo', () => {
    
    const value='Aprender Angular';

    wrapper.find('input').simulate('change', { target: { value, name: 'description' } } );

    wrapper.find('form').prop('onSubmit')({ preventDefault(){}});

    //si ha sido llamada
    expect(handleAddTodo).toHaveBeenCalled();

    //Si ha sido llamada con un objeto cualquiera
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));

    //si ha sido llamada con un objeto en especifico
    expect(handleAddTodo).toHaveBeenCalledWith({
        desc: 'Aprender Angular',
        done:false,
        id: expect.any(Number)
    });
    
    //cuando la description ha sido vaciada
    expect(wrapper.find('input').prop('value')).toBe('');

  })
  

});
