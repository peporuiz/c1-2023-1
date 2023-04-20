import usersActions from '../../repository/usersRepository'

exports.getUsersFromDataset = (ctx) => {
    ctx.body = usersActions.getUsersFromDataset
}

exports.getUsersName = (ctx) => {
    const result = usersActions.getUsersName(ctx.params.name)
    if (result == -1){
        ctx.status = 404
        ctx.body = {message: 'El nombre no existe'}
    }else {
        ctx.status = 200
        ctx.body = result
    }
    return ctx
}

exports.searchUser = (ctx) => { //Función que devuleve la busqueda filtrando con los respectivos errores
    if (ctx.request.body.name === undefined || ctx.request.body.name.length < 1) {
            ctx.status = 400
            ctx.body = {message: 'Peticion mal realizada'}
            return ctx
    }
    let result = usersActions.searchUser(ctx.request.body.age, ctx.request.body.name,
        ctx.request.body.gender, ctx.request.body.company, ctx.request.body.isActive)
    if(result == -1){
        ctx.status = 500
    }
    ctx.status = 200
    ctx.body = { message: 'Estos son los user', result}
}