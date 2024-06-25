document.addEventListener("DOMContentLoaded", function() {
    // Carregar serviços na página de serviços e na home page
    if (document.getElementById('services-list')) {
        fetch('data/services.json')
            .then(response => response.json())
            .then(data => {
                const servicesSection = document.getElementById('services-list');
                const highlightSection = document.querySelector('.highlight-services');
                data.services.forEach(service => {
                    const serviceDiv = document.createElement('div');
                    serviceDiv.classList.add('service');
                    
                    const serviceTitle = document.createElement('h2');
                    serviceTitle.textContent = service.name;
                    serviceDiv.appendChild(serviceTitle);
                    
                    const serviceDescription = document.createElement('p');
                    serviceDescription.textContent = service.description;
                    serviceDiv.appendChild(serviceDescription);
                    
                    const hireButton = document.createElement('button');
                    hireButton.textContent = 'Contratar';
                    hireButton.addEventListener('click', () => {
                        window.location.href = `compra.html?service=${service.name}`;
                    });
                    serviceDiv.appendChild(hireButton);
                    
                    servicesSection.appendChild(serviceDiv);

                    if (highlightSection) {
                        const highlightDiv = serviceDiv.cloneNode(true);
                        highlightDiv.classList.add('highlight-service');
                        highlightSection.appendChild(highlightDiv);
                    }
                });
            });
    }

    // Manipulação do formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        });
    }

    // Carregar detalhes do serviço na página de compra
    const urlParams = new URLSearchParams(window.location.search);
    const serviceName = urlParams.get('service');
    
    if (serviceName && document.getElementById('service-name')) {
        fetch('data/services.json')
            .then(response => response.json())
            .then(data => {
                const service = data.services.find(s => s.name === serviceName);
                if (service) {
                    document.getElementById('service-name').textContent = service.name;
                    document.getElementById('service-description').textContent = service.description;
                }
            });
    }

    const purchaseForm = document.getElementById('purchase-form');
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Compra realizada com sucesso!');
            window.location.href = 'index.html';
        });
    }
});
function searchServices() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    if (searchInput !== '') {
     
        window.location.href = `servicos.html?search=${encodeURIComponent(searchInput)}`;
    } else {
        
        alert('Do quê você precisa?');
    }
}