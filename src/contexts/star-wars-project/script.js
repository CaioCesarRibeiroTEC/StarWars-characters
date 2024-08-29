let apiUrl = 'https://swapi.dev/api/people/'

window.onload = async() => {
    try {
       await loadCharacters(apiUrl)
    } catch (error) {
        console.log('Erro ao carregar cards');
        alert(error)
    }

    const nextButton = document.getElementById('next-button')
    const backButton = document.getElementById('back-button')

    nextButton.addEventListener('click', loadNextPage)
    backButton.addEventListener('click', loadBackPage)


};

async function  loadCharacters(url) {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = '';

    try {
        const response = await fetch(url)
        const responseJson = await response.json()

        responseJson.results.forEach((character) => {
            const card = document.createElement("div")
            card.style.backgroundImage = `url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D/g,"")}.jpg')`;
            card.className = "cards"

            const characterNameContainer = document.createElement("div")
            characterNameContainer.className = "character-name-container"
            
            const characterName = document.createElement("span")
            characterName.className = "character-name"
            characterName.innerText = `${character.name}`


            mainContent.appendChild(card)
            card.appendChild(characterNameContainer);
            characterNameContainer.appendChild(characterName);

            card.onclick = () => {
                const modal = document.getElementById('modal')
                modal.style.visibility = "visible" 

                const modalContent = document.getElementById('modal-content')
                modalContent.innerHTML = ''

                const characterImage = document.createElement('div')
                characterImage.style.backgroundImage = `url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D/g,"")}.jpg')`;
                characterImage.className = 'character-image'


                const characterName = document.createElement('span')
                characterName.className = 'character-details'
                characterName.innerText = `Nome: ${character.name}`

                const characterHeight = document.createElement('span')
                characterHeight.className = 'character-details'
                characterHeight.innerText = `Altura: ${convertHeight(character.height)}`

                const characterMass = document.createElement('span')
                characterMass.className = 'character-details'
                characterMass.innerText = `Peso: ${covertMass(character.mass)}`

                const characterEyeColor = document.createElement('span')
                characterEyeColor.className = 'character-details'
                characterEyeColor.innerText = `Cor dos olhos: ${color(character.eye_color)}`

                const characterBirthYear = document.createElement('span')
                characterBirthYear.className = 'character-details'
                characterBirthYear.innerText = `Nascimento: ${covertBrithYear(character.birth_year)}`


                modalContent.appendChild(characterImage)
                modalContent.appendChild(characterName)
                modalContent.appendChild(characterHeight)
                modalContent.appendChild(characterMass)
                modalContent.appendChild(characterEyeColor)
                modalContent.appendChild(characterBirthYear)


            }
        });

        const nextButton = document.getElementById('next-button')
        const backButton = document.getElementById('back-button')

        nextButton.disabled = !responseJson.next;
        backButton.disabled = !responseJson.previous;

        backButton.style.visibility = responseJson.previous? "visible" : "hidden"

        apiUrl = url

    } catch (error) {
        console.log('Erro ao carregar personagens');
        alert(error)
    }
}

async function loadNextPage() {
    if (!apiUrl) return;
    try {
        const response = await fetch(apiUrl)
        const responseJson = await response.json()

        await loadCharacters(responseJson.next)
    } catch (error) {
        console.log(error, 'Erro ao carregar a proxima pagina');
        alert('Erro ao carregar a proxima pagina')
    }
}

async function loadBackPage() {
    if (!apiUrl) return;
    try {
        const response = await fetch(apiUrl)
        const responseJson = await response.json()

        await loadCharacters(responseJson.previous)
    } catch (error) {
        console.log(error, 'Erro ao carregar a pagina anterior');
        alert('Erro ao carregar a pagina anterior')
    }
}

function color(eyeColor) {
    const cores = {
        blue: "azul",
        brown: "castanho",
        green: "verde",
        yellow: "amarelo",
        black: "preto",
        pink: "rosa",
        red: "vermelha",
        orange: "laranja",
        hazel: "avelã",
        unknown: "desconhecida"
    };

    return cores [eyeColor.toLowerCase()] || eyeColor;
}

function convertHeight(height) {
    if (height === "unknown") {
        return "desconhecida"
    } 

    return (height / 100).toFixed(2);
}

function covertMass(mass) {
    if (mass === "unkonown") {
        return "desconhecido"
    }
    return(`${mass} kg`)
} 

function covertBrithYear(birthYear) {
    if (birthYear === "unkonown") {
        return "desconhecido"
    }
    return birthYear
}





