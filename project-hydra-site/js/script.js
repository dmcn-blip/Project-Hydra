
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.querySelectorAll('.description-card, .component-card, .author-card, .problem-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});


function setupCodeCopy() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
      
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copiar';
        copyBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 8px 15px;
            background-color: #0066cc;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 600;
            transition: background-color 0.3s ease;
            z-index: 10;
        `;
        
       
        const wrapper = document.createElement('div');
        wrapper.style.cssText = `
            position: relative;
            display: inline-block;
            width: 100%;
        `;
        
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        wrapper.appendChild(copyBtn);
        
       
        copyBtn.addEventListener('click', function() {
            const text = block.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copiado!';
                copyBtn.style.backgroundColor = '#51cf66';
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '#0066cc';
                }, 2000);
            }).catch(err => {
                console.error('Erro ao copiar:', err);
            });
        });
        
        
        copyBtn.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#0052a3';
        });
        
        copyBtn.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#0066cc';
        });
    });
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCodeCopy);
} else {
    setupCodeCopy();
}


let sectionsVisited = new Set();

const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
                sectionsVisited.add(sectionId);
               
                updateActiveNavLink(sectionId);
            }
        }
    });
}, { threshold: 0.3 });


document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});


function updateActiveNavLink(sectionId) {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
            link.style.borderBottom = '2px solid white';
        } else {
            link.style.borderBottom = 'none';
        }
    });
}


const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        font-weight: 700;
    }
`;
document.head.appendChild(style);


function setupDownloadButton() {
    const downloadBtn = document.querySelector('a[download="project-hydra.zip"]');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
          
            const content = `
# Project Hydra - Mão Biônica Robótica

## Conteúdo do Projeto

Este arquivo contém:
- Código completo do Arduino
- Documentação técnica
- Esquemas de conexão
- Guia de montagem
- Imagens e diagramas
## Como Usar

1. Extraia o arquivo ZIP
2. Abra a Arduino IDE
3. Copie o código do arquivo "Codigo"
4. Selecione a placa Arduino Uno
5. Faça upload do código para o Arduino

## Mais Informações

Visite: https://github.com/egs3-coder/Project-Hydra

Desenvolvido como projeto acadêmico para as disciplinas:
- Introdução à Computação
- Sistemas Digitais
            `.trim();
            
        
            const blob = new Blob([content], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'project-hydra-info.txt';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            

            alert('Download iniciado! Para obter os arquivos completos, visite o repositório GitHub do projeto.');
        });
    }
}

setupDownloadButton();


function setupScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #0066cc, #ff6b6b);
        z-index: 999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

setupScrollProgress();

function trackEvent(eventName, eventData) {
    console.log(`Evento: ${eventName}`, eventData);

}


document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        const href = this.getAttribute('href');
        trackEvent('external_link_click', { url: href });
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            trackEvent('section_view', { section: section.id });
        }
    });
});


function setupAccessibility() {

    document.querySelectorAll('button, a[href^="#"]').forEach(element => {
        if (!element.getAttribute('aria-label')) {
            element.setAttribute('aria-label', element.textContent.trim());
        }
    });
    
    document.addEventListener('keydown', function(e) {

        if (e.key === 'Escape') {
            console.log('Tecla Escape pressionada');
        }
    });
}

setupAccessibility();


function setupDarkModeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        console.log('Preferência de modo escuro detectada');
    }
}

setupDarkModeToggle();

console.log('Project Hydra - Site carregado com sucesso!');
console.log('Versão: 1.0');
console.log('Desenvolvido para as disciplinas: Introdução à Computação e Sistemas Digitais');
