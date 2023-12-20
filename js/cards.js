const cardsContainer = document.querySelector('.cards');
const defaultPhoto = "https://memchik.ru//images/memes/5f809306b1c7e368e553bc2c.jpg";


async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function renderCards() {
    const posts = await getPosts();
    cardsContainer.innerHTML = '';

    posts.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${defaultPhoto}" alt="Placeholder Image"> 
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;
        cardsContainer.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', renderCards);
