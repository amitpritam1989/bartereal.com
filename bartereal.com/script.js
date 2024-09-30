document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('tradeModal');
    const closeButton = document.querySelector('.close-button');
    const tradeButtons = document.querySelectorAll('.trade-button');
    const tradeForm = document.getElementById('tradeForm');
    const itemInput = document.getElementById('item');

    tradeButtons.forEach(button => {
        button.addEventListener('click', function() {
            itemInput.value = button.getAttribute('data-item');
            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    tradeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Trade offer submitted for ' + itemInput.value + ' with offer: ' + tradeForm.offer.value);
        modal.style.display = 'none';
    });

    


    }


    
});
