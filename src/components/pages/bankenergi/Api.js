export const fetchApi = (query) => fetch(`https://enviromentlevel.herokuapp.com/api/data/${query}`).then(data => data.json())


