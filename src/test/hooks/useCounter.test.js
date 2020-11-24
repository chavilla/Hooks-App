const { renderHook, act } = require("@testing-library/react-hooks")
const { useCounter } = require("../../hooks/useCounter")

describe('useCounter Hook test', () => {
    test('should return default values', () => {
      const { result: { current } }=renderHook(()=> useCounter());
      const { counter, increment, decrement, reset }=current;

      expect(counter).toBe(1);
      expect(typeof increment).toBe('function');
      expect(typeof decrement).toBe('function');
      expect(typeof reset).toBe('function');
    });

    test('should return the 100 in the counter', () => {
        const { result: { current } }=renderHook(()=> useCounter(100));
        const { counter, increment, decrement, reset }=current;
  
        expect(counter).toBe(100);
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should increment the counter', () => {
        const { result }=renderHook(()=> useCounter(100));
        const { increment, decrement ,reset }=result.current;
        
        act(()=>{
            //increment();
            //reset();
            decrement();
        });

        const  { counter }=result.current;
        expect(counter).toBe(99);

    });
    
});