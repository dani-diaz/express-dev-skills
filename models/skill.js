const skills = [
    {id: 12345, name: 'Communication', done:true},
    {id: 12346, name: 'Poblem Solving', done:true},
    {id: 12347, name: 'Managment', done:true},
    {id: 12348, name: 'Planning', done:true}
]

module.exports = {
    getAll,
    getById
};

function getAll() {
    return skills;
}

function getById(id) {
    return skills.find(function(skill) {
        return skill.id === id 
    })
}  