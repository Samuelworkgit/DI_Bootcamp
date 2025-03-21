const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/leanne?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/ervin?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/clenentine?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/patricia?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/chelsey200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/denis?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/kurits?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/nicola?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image:'https://robohash.org/gkenan?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://robohash.org/reclemetna?200x200'
    }
];





const cardContainer = document.querySelector('#cardContainer');
const searchBox = document.querySelector('#searchBox');

const createRobotCard = ({ name, email, image }) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'card-image-container';
    
    const imageElement = document.createElement('img');
    imageElement.className = 'card-image';
    imageElement.src = image;
    imageElement.alt = `${name} robot`;
    
    const infoContainer = document.createElement('div');
    infoContainer.className = 'card-info';
    
    const nameElement = document.createElement('h2');
    nameElement.className = 'card-name';
    nameElement.textContent = name;
    
    const emailElement = document.createElement('p');
    emailElement.className = 'card-email';
    emailElement.textContent = email;
    
    imageContainer.appendChild(imageElement);
    infoContainer.appendChild(nameElement);
    infoContainer.appendChild(emailElement);
    card.appendChild(imageContainer);
    card.appendChild(infoContainer);
    
    return card;
};





const displayRobots = (robotsArray) => {
    // after googling, fsr it doesnt work wo this
    cardContainer.innerHTML = '';
    
    // if search is 0
    if (robotsArray.length === 0) {
        const noResults = document.createElement('h2');
        noResults.textContent = 'No robots found';
        noResults.style.color = 'white';
        noResults.style.textAlign = 'center';
        noResults.style.gridColumn = '1 / -1';
        noResults.style.padding = '40px';
        cardContainer.appendChild(noResults);
        return;
    }
    
    const robotCards = robotsArray.map(robot => createRobotCard(robot));
    robotCards.forEach(card => cardContainer.appendChild(card));
};





// display thr robs
const filterRobots = (searchTerm) => {
    if (!searchTerm.trim()) {
        return robots;
    }
    
    // 'desensitise' the case
    return robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
};





searchBox.addEventListener('input', (event) => {
    const filteredRobots = filterRobots(event.target.value);
    displayRobots(filteredRobots);
});





document.addEventListener('DOMContentLoaded', () => {
    displayRobots(robots);
});