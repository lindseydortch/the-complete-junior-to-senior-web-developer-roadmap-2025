const fetchURL = "https://swapi.py4e.com/api/people/";

const swapi = require("./script2");

// With done
// it("calls swapi API to get people", done => {
//   expect.assertions(1);
//   swapi.getPeoplePromise().then(data => {
//     expect(data.count).toEqual(87);
//     done();
//   });
// });

it("calls swapi API to get people", () => {
  expect.assertions(1);
  return swapi.getPeoplePromise().then(data => {
    expect(data.count).toEqual(87);
  });
});

it("calls swapi to get people with a promise", () => {
  expect.assertions(2);
  return swapi.getPeoplePromise().then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it("getPeople returns count and results", () => {
  mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5]
        })
    })
  );

  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("http://swapi.py4e.com/api/people");
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
