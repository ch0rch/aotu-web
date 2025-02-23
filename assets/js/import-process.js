// assets/js/import-process.js
export default class ImportProcess {
    constructor(element) {
      this.element = element;
      this.activeIndex = 0;
      this.container = element.querySelector('[data-cards-container]');
      this.dotsContainer = element.querySelector('[data-nav-dots]');
      this.autoPlayInterval = null;
      
      this.steps = [
        {
          icon: 'search',
          title: "Búsqueda y Validación",
          description: "Encontramos los mejores proveedores en China y verificamos su calidad",
          benefit: "Ahorrá tiempo y reducí riesgos",
          color: "bg-blue-500"
        },
        {
          icon: 'dollar-sign',
          title: "Gestión de Pagos",
          description: "Manejamos los pagos internacionales de forma segura",
          benefit: "Operaciones seguras y transparentes",
          color: "bg-green-500"
        },
        {
          icon: 'package',
          title: "Producción y Control",
          description: "Supervisamos la fabricación y controlamos la calidad",
          benefit: "Garantía de calidad asegurada",
          color: "bg-purple-500"
        },
        {
          icon: 'truck',
          title: "Logística Internacional",
          description: "Coordinamos el envío y los trámites aduaneros",
          benefit: "Sin complicaciones en aduana",
          color: "bg-orange-500"
        },
        {
          icon: 'shield-check',
          title: "Entrega Final",
          description: "Gestionamos la entrega hasta tu puerta",
          benefit: "Proceso 100% supervisado",
          color: "bg-red-500"
        }
      ];
    }
  
    createCard(step, index) {
      const div = document.createElement('div');
      div.className = `absolute w-full transition-all duration-500 ease-in-out ${
        index === this.activeIndex ? 'z-10 translate-y-0 opacity-100' : 
        index < this.activeIndex ? '-translate-y-8 opacity-0' : 
        'translate-y-4 opacity-0'
      }`;
      
      div.innerHTML = `
        <div class="bg-white rounded-xl shadow-lg p-6 border-2 ${
          index === this.activeIndex ? 'border-blue-500' : 'border-gray-200'
        }">
          <div class="flex items-start space-x-6">
            <div class="${step.color} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
              <i data-feather="${step.icon}" class="w-8 h-8 text-white"></i>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold mb-2">${step.title}</h3>
              <p class="text-gray-600 mb-4">${step.description}</p>
              <div class="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                ${step.benefit}
              </div>
            </div>
          </div>
        </div>
      `;
      
      return div;
    }
  
    createNavDots() {
      this.steps.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${
          idx === this.activeIndex ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
        }`;
        dot.setAttribute('aria-label', `Ver paso ${idx + 1}`);
        dot.addEventListener('click', () => this.setActiveIndex(idx));
        this.dotsContainer.appendChild(dot);
      });
    }
  
    setActiveIndex(index) {
      this.activeIndex = index;
      this.updateUI();
      this.resetAutoPlay();
    }
  
    updateUI() {
      Array.from(this.container.children).forEach((card, idx) => {
        card.className = `absolute w-full transition-all duration-500 ease-in-out ${
          idx === this.activeIndex ? 'z-10 translate-y-0 opacity-100' : 
          idx < this.activeIndex ? '-translate-y-8 opacity-0' : 
          'translate-y-4 opacity-0'
        }`;
        
        const border = card.querySelector('.border-2');
        if (border) {
          border.className = `bg-white rounded-xl shadow-lg p-6 border-2 ${
            idx === this.activeIndex ? 'border-blue-500' : 'border-gray-200'
          }`;
        }
      });
  
      Array.from(this.dotsContainer.children).forEach((dot, idx) => {
        dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${
          idx === this.activeIndex ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
        }`;
      });
    }
  
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.setActiveIndex((this.activeIndex + 1) % this.steps.length);
      }, 4000);
    }
  
    resetAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
      }
      this.startAutoPlay();
    }
  
    init() {
      this.steps.forEach((step, index) => {
        this.container.appendChild(this.createCard(step, index));
      });
  
      this.createNavDots();
  
      if (window.feather) {
        feather.replace();
      }
  
      this.startAutoPlay();
    }
  }