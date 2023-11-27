import { fetchBreeds, fetchCatByBreed} from './js/cat-api';
import SlimSelect from 'slim-select';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const animation = document.querySelector('.animation');

const breedSelect = new SlimSelect({
    select: select,
    settings: {
        placeholderText: 'Choose a breed',
    },
});

const option = {
    text: '',
    value: '',
    placeholder: true,
}

async function getBreeds() {
    try {
        await fetchBreeds().then(breeds => {
        const data = breeds.map( breed => ({ text: breed.name, value: breed.id }));
            breedSelect.setData([option, ...data]);
        });
        
        animation.addEventListener('animationiteration', () => {
            const currentSrc = animation.getAttribute('src');
            if (currentSrc === './img/cat_white.png') {
                animation.setAttribute('src', './img/cat_black.png');
            } else {
                animation.setAttribute('src', './img/cat_white.png');
            }
        });

        select.addEventListener('change', fetchCatInfo);
    } catch (error) {
        console.log(error);
    }
}

async function fetchCatInfo() {
    try {
        const selectedBreedId = select.value;
        const catData = await fetchCatByBreed(selectedBreedId);
        const cat = catData[0];

        catInfo.innerHTML = `
        <div class="cat-container">
            <img class="cat-img" src="${cat.url}" alt="сat">
        <div class="cat-text">
            <p class="cat-name" img">${cat.breeds[0].name}</p>
            <p class="cat-description">${cat.breeds[0].description}</p>
            <p class="cat-temperament"><p>Temperament:</p> ${cat.breeds[0].temperament}</p>
        </div> </div>`;
        catInfo.style.display = 'block';
        
        
    } catch (err) {
        catInfo.style.display = 'none';
        console.log(err)
    }
}

getBreeds();

