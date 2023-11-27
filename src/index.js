import { fetchBreeds, fetchCatByBreed} from './js/cat-api';
import SlimSelect from 'slim-select';
import iziToast from 'izitoast'; 
import 'izitoast/dist/css/iziToast.css'; 

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const animation = document.querySelector('.animation');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

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

function toggleLoader(showLoader) {
    loader.style.display = showLoader ? 'block' : 'none';
}

function toggleError(showError) {
    error.style.display = showError ? 'block' : 'none';
}

async function getBreeds() {
    try {
        toggleLoader(true);
        toggleError(false);
        await fetchBreeds().then(breeds => {
        const data = breeds.map( breed => ({ text: breed.name, value: breed.id }));
            breedSelect.setData([option, ...data]);
        });
        
        toggleLoader(false);
        
        animation.addEventListener('animationiteration', () => {
            const currentSrc = animation.getAttribute('src');
            if (currentSrc === './img/cat_white.png') {
                animation.setAttribute('src', '../src/img/cat_black.png');
            } else {
                animation.setAttribute('src', '../src/img/cat_white.png');
            }
        });

        select.addEventListener('change', fetchCatInfo);

    } catch (err) {
        toggleError(true);
        toggleLoader(false);
        iziToast.error({
            title: 'Error',
            message: 'Oops! Something went wrong! Try reloading the page!',
            position: 'center',
    });
    }
}

async function fetchCatInfo() {
    try {
        toggleLoader(true);
        toggleError(false);
        const selectedBreedId = select.value;
        const catData = await fetchCatByBreed(selectedBreedId);
        toggleLoader(false);
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
        toggleError(true);
        toggleLoader(false);
        catInfo.style.display = 'none';
        iziToast.error({
            title: 'Error',
            message: 'Oops! Something went wrong! Try reloading the page!',
            position: 'center'
        });
    }
}

getBreeds();

