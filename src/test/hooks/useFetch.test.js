const { renderHook } = require("@testing-library/react-hooks");
const { default: useFecth } = require("../../hooks/useFetch");

describe("useFetch Testing", () => {

  test("should return default values", () => {
    const { result } = renderHook(() =>
      useFecth(`https://www.breakingbadapi.com/api/quotes/1`, true)
    );



    const { data, loading,error }=result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("should to return the info", async() => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFecth(`https://www.breakingbadapi.com/api/quotes/1`, true)
    );

    await waitForNextUpdate();

    const { data, loading,error }=result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
  });

  test("should to manahe the error", async() => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFecth(`https://reqres.in/apid/users?page=2`, true)
    );

    await waitForNextUpdate();

    const { data, loading,error }=result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('404');
  });

});