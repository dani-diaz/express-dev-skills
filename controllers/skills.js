const Skill = require('../models/skill');

module.exports = {
    index,
    show
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
