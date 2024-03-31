// Function to make a GET request to fetch projects data from the server
const getProjects = () => {
    $.get('/api/projects', (response) => {
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    });
}

// Function to dynamically add cards to the HTML page
const addCards = (data) => {
    const cardContainer = $('#card-container');

    data.forEach((project) => {
        const cardHtml = `
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                        <img src="${project.image}">
                        <span class="card-title">${project.title}</span>
                    </div>
                    <div class="card-content">
                        <p>${project.description}</p>
                    </div>
                    <div class="card-action">
                        <a href="#">${project.link}</a>
                    </div>
                </div>
            </div>
        `;
        cardContainer.append(cardHtml);
    });
}

// Document ready function to ensure DOM is fully loaded before executing JavaScript
$(document).ready(function(){
    // Initialize Materialize components if any
    $('.materialboxed').materialbox();

    // Call the getProjects function to fetch and display data
    getProjects();

    // Initialize any other Materialize components or event listeners
    $('.modal').modal();
});
