 document.getElementById('searchBar').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    
    cards.forEach(function(card) {
      let text = card.innerText.toLowerCase();
      if (text.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
