// Referências do DOM HTML

const tbodyList = document.getElementById('tbodyList');

const popup = document.querySelector('.popupWrapper');



const api = axios.create({
    baseURL:'http://18.224.8.119:3334/',
});


function consultaGeral(){

    console.log('Consulta de dados ...');
    
    api.get('produtos').then(res=>{
        console.log('Realizando a consulta ...');

        const data = res.data;
        let i, tr;
        tbodyList.innerHTML='';
        for (i=0; i < data.length; i++){
            tr = '<tr>' +
                    '<td>' + data[i].cod + '</td>' +
                    '<td>' + data[i].nome + '</td>' +
                    '<td>' + data[i].descri + '</td>' +
                    '<td>' + data[i].qtda + '</td>' +
                    '<td>' + data[i].fabricante + '</td>' +
                    '<td>' + data[i].datahora + '</td>' +
                    '<td> <a id="btnUpdate" onclick="onEdit(this)"> <img class="imgUpdate" src="../img/updateIcon.png"/> </a></td>' +
                 '</tr>';
            tbodyList.innerHTML += tr;
        }
    })
}

function onEdit(){
    popup.style.display = 'block';
}


popup.addEventListener('click', event =>{
    const classClicada = event.target.classList[0];
    console.log(classClicada);
    if ( classClicada === 'popupClose'||
            classClicada === 'closeLinkPopup' 
            )
            {
                popup.style.display = 'none'            
            }
});

consultaGeral();