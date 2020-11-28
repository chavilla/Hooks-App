import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe('useForm testing', () => {

    let initialState={
        name:'Jesús',
        email:'jacv00@hotmail.com'
    }

    test('should return a default frm', () => {
      
        const {result }=renderHook(()=> useForm(initialState));

        const [value, handleChange, reset]=result.current;

        expect(value).toEqual(initialState);

    });


    test('should to change the frame value (name)', () => {

        const {result }=renderHook(()=> useForm(initialState));

        const [,handleChange,]=result.current;

        //Las funciones en los hooks usan act
        act(()=>{
            handleChange({
               target:{
                   name:'name',
                   value:'José'
               }
            });
        });

        const [value]=result.current;

        expect(value).toEqual({ ...initialState, name:'José' });

    });

    test('should to reset the form', () => {
      
        const {result }=renderHook(()=> useForm(initialState));

        const [,,reset]=result.current;

        act(()=>{
            reset();
        });

        const [value]=result.current;

        expect(value).toEqual(initialState);

    });
    
    
    
})