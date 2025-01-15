const fetchURL = "https://swapi.py4e.com/api/people/";

const getPeoplePromise = () => {
  return fetch(fetchURL)
    .then(res => res.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      };
    });
};

const getPeopleAsync = async () => {
  const getRequest = await fetch(fetchURL);
  const data = await getRequest.json();

  return {
    count: data.count,
    results: data.results
  };
};

// console.log(getPeoplePromise(fetchURL));
// console.log(getPeopleAsync(fetchURL));

module.exports = {
  getPeoplePromise,
  getPeopleAsync
};
