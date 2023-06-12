const buttomSearch = document.querySelector('.js_submit');
const inputSearch = document.querySelector('.js_inputSearch');
function renderFavSearch(eachFav){
    let valueImg = eachFav.imageUrl;
    const valueId= eachFav._id;
    const valueName = eachFav.name;
    const disneyImg = 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
    if (!valueImg){
        valueImg = disneyImg;
    }
    const newContentP = document.createTextNode(valueName);
    const paragraph = document.createElement('p');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('list__element--img');
    img.src = valueImg;
    li.classList.add('fav__element');
    paragraph.classList.add('list__element--name');
    paragraph.appendChild(newContentP);
    li.id = valueId;
    li.appendChild(img);
    li.appendChild(paragraph);
    li.classList.add('element');
    list.appendChild(li);
}
function handleSearchButtom(event){
    event.preventDefault();
    const search = inputSearch.value;
    const filterList = charactersList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    for (let i =0; i<filterList.length; i++){
        const searchId = filterList[i]._id;
        const indexSearch = charactersFav.findIndex((item) => item._id === searchId);
        if (indexSearch === -1){
            list.innerHTML='';
            renderCharactersList(filterList[i]);
        } else{
            list.innerHTML='';
            renderFavSearch(filterList[i]);
        }
    }
}
buttomSearch.addEventListener('click', handleSearchButtom);