const skills = [
    {id: 12345, skill: 'Communication', done:true},
    {id: 12346, skill: 'Poblem Solving', done:true},
    {id: 12347, skill: 'Managment', done:true},
    {id: 12348, skill: 'Planning', done:true}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, skill) {
    id = parseInt(id);
    const updatedSkill = skills.find((skill) => skill.id === id);
    Object.assign(updatedSkill, skill);
}
  
function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
}
  
function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(function(skill) {
        return skill.id === id 
    })
}  