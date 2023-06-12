let charactersList = [];
const url = `https://api.disneyapi.dev/character?pageSize=50`;
const list = document.querySelector('.list');
function renderCharacters(charactersList){
    if (charactersList.imageUrl === ''){
        charactersList.imageUrl= 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
    }
    const newContentP = document.createTextNode(`${charactersList.name}`);
    const paragraph = document.createElement('p');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('list__element--img');
    img.src = `${charactersList.imageUrl}`;
    li.classList.add('list__element');
    paragraph.classList.add('list__element--name');
    paragraph.appendChild(newContentP);
    li.id = `${charactersList._id}`;
    li.appendChild(img);
    li.appendChild(paragraph);
    li.classList.add('element');
    list.appendChild(li);
}
function renderCharactersList(charactersList){
    for (let i = 0; i < charactersList.length; i++) {
        renderCharacters(charactersList[i]);
    }
    eventClick();
}
fetch (url)
    .then ((response) => response.json())
    .then ((data) => {
        charactersList = data.data;
        console.log(data.data);
        renderCharactersList(charactersList);
});
