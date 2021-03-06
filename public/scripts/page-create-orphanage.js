// create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68]
})

let marker;

//create and add marker
map.on('click', (event) => {

    const mapContainer = document.querySelector('.map-container');

    if(mapContainer.classList.contains('erro')){
        mapContainer.classList.remove('erro')

        const spanError = document.querySelector('.msg-erro');
        spanError.classList.remove('on')
        spanError.classList.add('off')

    }

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)


    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

//  adicionar o campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-image
    const fieldContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    //verificar se o campo está vazio
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo
    input.value=""

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldContainer = document.querySelectorAll('.new-upload')

    if(fieldContainer.length <= 1 ){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()

}

// select yes ou no

function toggleSelect(event){

    //retirar a classe .active
    document.querySelectorAll('.button-select button')
    .forEach( (button) => button.classList.remove('active'))

    //colocar a class .active
    const button = event.currentTarget
    button.classList.add('active')

    //pegar o botão clicado

    //verifica se sim ou não


    //atualizar o meu input hidden com o valor selecinado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}

function validate(event){
    const lat = document.querySelector('[name=lat]').value;
    const lng = document.querySelector('[name=lng]').value;

    //validar se lat e lng estâo preenchidos
    const needsLatAndLng = (lat=="" || lng=="")? true: false;

    if(needsLatAndLng){
        
        const map = document.querySelector('.map-container');
        const spanError = document.querySelector('.msg-erro');

        map.classList.add('erro')
        spanError.classList.remove("off")
        spanError.classList.add("on")

        event.preventDefault();
    }
}