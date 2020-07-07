const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea creada', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea creada', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}