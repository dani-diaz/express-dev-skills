const skills = [
    {id: 12345, skills: 'Communication', done:true},
    {id: 12346, skills: 'Poblem Solving', done:true},
    {id: 12347, skills: 'Managment', done:true},
    {id: 12348, skills: 'Planning', done:true}
]

module.exports = {
    getAll
};

function getAll() {
    return skills;
}