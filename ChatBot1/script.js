document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    const messagesContainer = document.getElementById('messages');
    
    // Remove any previous help messages
    const previousHelpMessage = document.querySelector('.help-message');
    if (previousHelpMessage) {
        previousHelpMessage.remove();
    }

    // Check if there are images to remove
    const previousImages = document.querySelectorAll('.image-message');
    previousImages.forEach(image => image.remove());

    if (messageText) {
       
    }
});

function addMessage(text) {
    const messagesContainer = document.getElementById('messages');
    let helpMessageDisplayed = false;

    // Check for keywords
    if (text.toLowerCase().includes("sedih")) {
        createImageMessage('pictures/1.jpg', 'Here is your comfort image');
    } else if (text.toLowerCase().includes("kangen") || text.toLowerCase().includes("rumah") || text.toLowerCase().includes("pulang")) {
        createImageMessage('pictures/2.jpg', 'Here is your comfort image');
    } else if (text.toLowerCase().includes("lagi apa") || text.toLowerCase().includes("sedang apa") || text.toLowerCase().includes("ngapain")) {
        createImageMessage('pictures/3.jpg', 'Here is your comfort image');
    } else if (text.toLowerCase().includes("sal")) {
        createImageMessage('pictures/4.jpg', 'Here is your comfort image');
    } else { 
        const helpMessage = document.createElement('div');
        helpMessage.classList.add('help-message');
        helpMessage.textContent = "mm.. sepertinya aku belum bisa membantumu untuk ini";
        messagesContainer.appendChild(helpMessage);
        helpMessageDisplayed = true;
    }

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function createImageMessage(imageSrc, description) {
    const messagesContainer = document.getElementById('messages');
    
    const imageElement = document.createElement('div');
    imageElement.classList.add('image-message');
    imageElement.innerHTML = `<img src="${imageSrc}" alt="${description}"><p>${description}</p>`;
    
    // Remove any previous help messages
    const previousHelpMessage = document.querySelector('.help-message');
    if (previousHelpMessage) {
        previousHelpMessage.remove();
    }

    messagesContainer.appendChild(imageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Event listener for color options
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        const selectedColor = this.dataset.color;
        const container = document.querySelector('.container');
        container.className = `container ${selectedColor}`;
        
        const headerImage = document.querySelector('.header img');
        switch(selectedColor) {
            case 'theme-black':
                headerImage.src = 'headers/Header2.png';
                break;
            case 'theme-green':
                headerImage.src = 'headers/Header3.png';
                break;
            case 'theme-blue':
                headerImage.src = 'headers/Header4.png';
                break;
            case 'theme-red':
                headerImage.src = 'headers/Header5.png';
                break;
            case 'theme-yellow':
                headerImage.src = 'headers/Header6.png';
                break;
            default:
                headerImage.src = 'headers/Header1.png';
                break;
        }
    });
});

// Popup functionality
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeButton = document.querySelector('.close-button');

document.querySelectorAll('.popup-button').forEach(button => {
    button.addEventListener('click', function() {
        const popupType = this.dataset.popup;
        switch(popupType) {
            case 'guide':
                popupImage.src = 'guide-image.jpg'; // Add your guide image path
                break;
            case 'history':
                popupImage.src = 'history-image.jpg'; // Add your history image path
                break;
            case 'thanks':
                popupImage.src = 'thanks-image.jpg'; // Add your thanks image path
                break;
        }
        popup.style.display = 'block';
    });
});

closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
