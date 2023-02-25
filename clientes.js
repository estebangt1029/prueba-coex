


document.addEventListener("keyup", e=>{
    if (e.target.matches(".search")){
        if (e.key ==="Escape")e.target.value = ""
          document.querySelectorAll(".cliente").forEach(cliente=>{
              cliente.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?cliente.classList.remove("filtro")
                :cliente.classList.add("filtro")
        })
    }
})













lista=JSON.parse(localStorage.getItem('lista'))

for(let i=0; i<lista.length; i++){
    tbody.innerHTML+=`
    <tr class="cliente">
        <td>${lista[i].nombre}</td>
        <td>${lista[i].apellidos}</td>
        <td>${lista[i].nit}</td>
        <td>${lista[i].direccion}</td>
        <td>${lista[i].telefono}</td>
        <td>${lista[i].cupodisponible}</td>
        <td>${lista[i].estado}</td>
        <td>
            <i class="bi bi-person-lines-fill"></i>
            <i class="bi bi-trash3-fill"></i>
        </td>
    </tr>
    `
}