const Skill = require('../models/skill');

module.exports = {
    index
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}