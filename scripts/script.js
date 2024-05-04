const shareButtonElement = document.querySelector('.article-card_share-button');
const shareIconsBox = document.querySelector('.article-card_share'); 


shareButtonElement.addEventListener('click', () => {
  shareIconsBox.classList.toggle('hidden');
});