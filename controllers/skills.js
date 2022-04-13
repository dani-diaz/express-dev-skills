const Skill = require('../models/skill');
const { render } = require('../server');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
req.body.done = !!req.body.done;
Skill.update(req.params.id, req.body);
res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
const skill = Skill.getOne(req.params.id);
res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {

res.redirect('/skills'); 
}

function create(req, res) {
// console.log(req.body);
Skills.create(req.body);
res.redirect('/skills'); 
}

function newSkill(req, res) {
res.render('skills/new');
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}

function show(req, res) {
    const param = parseInt(req.params.id);
    const skill = Skill.getById(param);
    res.render('skills/show', {skill});
}
