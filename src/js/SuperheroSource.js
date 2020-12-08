
const SuperheroSource = {
    apiCall(param) {
        return fetch(`https://cors-anywhere.herokuapp.com/superheroapi.com/api/1741527979362433/${param}`)
            .then(res => res.text()).then(text => JSON.parse(text))
            .catch(err => console.log(err));
    },
    getSuperheroById(id) { 
        return this.apiCall(id);       
    },
    getSuperheroByName(name){
        let st = "search/" + name;
        return this.apiCall(st); 
    }
}

export default SuperheroSource;
