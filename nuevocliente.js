// inputs
let nombrecliente=document.getElementById('nombrecliente')
let apellidoscliente=document.getElementById('apellidoscliente')
let nitcliente=document.getElementById('nitcliente')
let direccioncliente=document.getElementById('direccioncliente')
let ciudadcliente=document.getElementById('ciudadcliente')
let telefonocliente=document.getElementById('telefonocliente')
let cupodisponiblecliente=document.getElementById('cupodisponiblecliente')
let estadocliente=document.getElementById('estadocliente')
let diasdegraciacliente=document.getElementById('diasdegraciacliente')
let cupototalcliente=document.getElementById('cupototalcliente')
let contactocliente=document.getElementById('contactocliente')

//btn
let guardarcambios=document.getElementById('guardarcambios')



if(clientes==null){
    var clientes=[]
}

guardarcambios.addEventListener('click',(e)=>{
    e.preventDefault()
    let nombre=nombrecliente.value
    let apellidos=apellidoscliente.value
    let nit=nitcliente.value
    let direccion=direccioncliente.value
    let ciudad=ciudadcliente.value
    let telefono=telefonocliente.value
    let estado=estadocliente.value
    let cupodisponible=cupodisponiblecliente.value
    let contacto=contactocliente.value
    let cupototal=cupototalcliente.value
    let diasdegracia=diasdegraciacliente.value


    if(nombre!='' && apellidos!='' && nit!='' && direccion!='' && telefono!='' &&cupodisponible!='' && estado!=''){
        
        clientes.push({nombre:nombre,apellidos:apellidos,nit:nit,direccion:direccion,telefono:telefono,cupodisponible:cupodisponible,estado:estado})
        localStorage.setItem('lista', JSON.stringify(clientes))
        nombrecliente.value=''
        apellidoscliente.value=''
        nitcliente.value=''
        direccioncliente.value=''
        telefonocliente.value=''
        estadocliente.value=''
        cupodisponiblecliente.value=''
        ciudadcliente.value=''
        contactocliente.value=''
        cupototalcliente.value=''
        diasdegraciacliente.value=''

    }else{
        alert('campos vacios')
    }

    
})


