module.exports = [
    {
        label: 'Inicio',
    submenu:[
        {label:'Abrir', submenu:[{label:'Abrir com...'}]},
        {label:'Fechar', click:()=>{console.log('Cliquei em fechar!')}, accelerator:'shift+a'}
    ]
    }
]