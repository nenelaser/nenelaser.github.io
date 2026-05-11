
function flipCard(card) {
  card.classList.toggle('flipped');
}

function toggleInfo(id) {
  var content = document.getElementById(id);
  if (!content) {
    return;
  }

  var block = content.closest('.info-block');
  var button = block ? block.querySelector('.info-toggle') : null;
  var isOpen = block ? block.classList.contains('is-open') : content.style.display === 'block';
  var nextState = !isOpen;

  content.style.display = nextState ? 'block' : 'none';

  if (block) {
    block.classList.toggle('is-open', nextState);
  }

  if (button) {
    button.setAttribute('aria-expanded', nextState ? 'true' : 'false');
  }
}
