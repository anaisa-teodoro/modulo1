const { Router } = require("express")
const alunosRoutes = require("./alunos.route")
const loginRoutes = require("./login.route")
const cursoRoutes = require("./curso.route")
const routes = new Router()

routes.use('/alunos', alunosRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/login', loginRoutes)

module.exports = routes