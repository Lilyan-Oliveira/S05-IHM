const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '2025-05-12',
        time: '10:00',
        location: 'Saguão Prédio 5',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '2025-01-12',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '2025-05-18',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '2025-05-04',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

const vagas = [
    {
        id: 5,
        title: 'Estágio em Desenvolvimento Web',
        modality: 'Estágio',
        description: 'Empresa procura estudante para estágio em front-end (HTML, CSS, JS). Conhecimento em React é diferencial.',
        contact: 'contato@empresa.com',
        area: 'Engenharia de Software',
        contractType: 'Home office',
        categoria: 'estagio',
        image: 'https://plus.unsplash.com/premium_photo-1685086785077-ff65bf749544?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 6,
        title: 'Vaga de Analista de Dados Jr.',
        modality: 'Efetivo',
        description: 'Procura-se profissional para análise de dados, experiência em Python e SQL desejada. Trabalho com big data e machine learning.',
        contact: 'rh@dados.com',
        area: 'Engenharia de computação, engenharia de software',
        contractType: 'Presencial',
        categoria: 'emprego',
        image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 7,
        title: 'Estágio em Marketing Digital',
        modality: 'Estágio',
        description: 'Estágio para criação de conteúdo e gestão de redes sociais, domínio de inglês é diferencial. Atuação com métricas e analytics.',
        contact: 'marketing@empresa.com',
        area: 'Engenharia de Produção',
        contractType: 'Hibrido',
        categoria: 'estagio',
        image: 'https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 8,
        title: 'Vaga para Desenvolvedor Back-end',
        modality: 'Efetivo',
        description: 'Buscamos dev para trabalhar com Node.js e banco de dados SQL em projetos ágeis. Experiência com AWS é plus.',
        contact: 'devs@empresa.com',
        area: 'Engenharia de Software',
        contractType: 'PJ Home office',
        categoria: 'emprego',
        image: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 9,
        title: 'Projeto de Pesquisa em IA',
        modality: 'Pesquisa',
        description: 'Bolsa para pesquisa em inteligência artificial aplicada à saúde. Requisito: conhecimento em Python e machine learning.',
        contact: 'pesquisa@inatel.br',
        area: 'Engenharia de Software',
        contractType: 'Presencial',
        categoria: 'pesquisa',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 10,
        title: 'Freelancer Design UX/UI',
        modality: 'Freelancer',
        description: 'Projeto freelance para design de interface mobile. Conhecimento em Figma e design system.',
        contact: 'design@startup.com',
        area: 'Engenharia de Software',
        contractType: 'Home office',
        categoria: 'freelancer',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

// Funções principais
document.addEventListener('DOMContentLoaded', () => {
    // === CARREGAMENTO INICIAL ===
    inicializarMenuLateral();
    inicializarTema();
    inicializarSaudacao();
    inicializarAvisosSlider();
    inicializarCarrosselEventos();
    inicializarCarrosselVagas();
    inicializarModalFiltro();
});

// === MENU LATERAL ===
function inicializarMenuLateral() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const menuItems = document.querySelectorAll('#side-menu li');
    const mensagens = [
        "Sem ação por enquanto!",
        "Sem ação por enquanto!",
        "Sem ação por enquanto!",
        "Sem ação por enquanto!",
        "Sem ação por enquanto!"
    ];

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sideMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            sideMenu.classList.remove('active');
        }
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
            alert(msg);
            sideMenu.classList.remove('active');
        });
    });
}

// === TEMA CLARO/ESCURO ===
function inicializarTema() {
    const themeToggle = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`theme-${currentTheme}`);

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('theme-dark');
        document.body.classList.remove(isDark ? 'theme-dark' : 'theme-light');
        document.body.classList.add(isDark ? 'theme-light' : 'theme-dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
}

// === SAUDAÇÃO ===
function inicializarSaudacao() {
    const mensagensSection = document.querySelector('.mensagens h1');
    const nomeUsuario = "Lilyan";
    const hora = new Date().getHours();
    let saudacao;

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }

    mensagensSection.textContent = `${saudacao}, ${nomeUsuario}!`;
}



// === AVISOS SLIDER ===
function inicializarAvisosSlider() {
    const avisos = document.querySelectorAll('.slider-aviso .aviso');
    let index = 0;

    function mostrarAviso(i) {
        avisos.forEach((aviso, idx) => {
            aviso.classList.toggle('active', idx === i);
        });
    }

    mostrarAviso(index);
    setInterval(() => {
        index = (index + 1) % avisos.length;
        mostrarAviso(index);
    }, 4000);
}


// === CARROSSEL DE EVENTOS ===
function inicializarCarrosselEventos() {
    let currentIndex = 0;
    const carousel = document.querySelector('#events-carousel');
    const totalSlides = eventos.length;

    function criarCardEvento(item) {
        const card = document.createElement('div');
        card.classList.add('evento-card');
        card.setAttribute('data-id', item.id);

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p><strong>Data:</strong> ${item.date}</p>
            <p><strong>Hora:</strong> ${item.time}</p>
            <p><strong>Local:</strong> ${item.location}</p>
        `;

        return card;
    }

    function exibirEventos() {
        carousel.innerHTML = '';
        eventos.forEach(event => {
            const card = criarCardEvento(event);
            carousel.appendChild(card);
        });
    }

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function avancarSlide() {
        showSlide(currentIndex + 1);
    }

    let intervalId = setInterval(avancarSlide, 5000);

    function pausarCarrossel() {
        clearInterval(intervalId);
    }

    function reiniciarCarrossel() {
        intervalId = setInterval(avancarSlide, 5000);
    }

    document.querySelector('.prev[data-carousel="events"]').addEventListener('click', () => {
        showSlide(currentIndex - 1);
        reiniciarCarrossel();
    });

    document.querySelector('.next[data-carousel="events"]').addEventListener('click', () => {
        showSlide(currentIndex + 1);
        reiniciarCarrossel();
    });

    carousel.addEventListener('mouseover', pausarCarrossel);
    carousel.addEventListener('mouseout', reiniciarCarrossel);

    exibirEventos();
    showSlide(currentIndex);
}

// === CARROSSEL DE VAGAS ===
function inicializarCarrosselVagas() {
    let currentIndexVagas = 0;
    const carousel = document.querySelector('.carousel-vagas');
    let isHovered = false;
    let intervalId;

    function criarCardVaga(item) {
        const card = document.createElement('div');
        card.classList.add('vaga-card');

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p><strong>Descrição:</strong> ${item.description}</p>
            <p><strong>Modalidade:</strong> ${item.modality}</p>
            <p><strong>Área relacionada:</strong> ${item.area}</p>
            <p><strong>Tipo de contrato:</strong> ${item.contractType}</p>
            <p><strong>Contato:</strong> <a href="mailto:${item.contact}">${item.contact}</a></p>
        `;

        return card;
    }

    function exibirVaga(index, direcao = 'next') {
        const oldCard = carousel.querySelector('.vaga-card.active-slide');
        const newCard = criarCardVaga(vagas[index]);

        newCard.classList.add('active-slide');
        newCard.style.zIndex = 2;

        if (direcao === 'next') {
            newCard.classList.add('slide-in-right');
        } else {
            newCard.classList.add('slide-in-left');
        }

        carousel.appendChild(newCard);

        if (oldCard) {
            oldCard.classList.remove('active-slide');
            oldCard.style.zIndex = 1;

            if (direcao === 'next') {
                oldCard.classList.add('slide-out-left');
            } else {
                oldCard.classList.add('slide-out-right');
            }

            setTimeout(() => {
                oldCard.remove();
                newCard.classList.remove('slide-in-right', 'slide-in-left');
            }, 500);
        } else {
            newCard.classList.remove('slide-in-right', 'slide-in-left');
        }

        currentIndexVagas = index;
    }

    function showNext() {
        let nextIndex = (currentIndexVagas + 1) % vagas.length;
        exibirVaga(nextIndex, 'next');
    }

    function showPrev() {
        let prevIndex = (currentIndexVagas - 1 + vagas.length) % vagas.length;
        exibirVaga(prevIndex, 'prev');
    }

    function startAutoplay() {
        stopAutoplay();
        intervalId = setInterval(() => {
            if (!isHovered) showNext();
        }, 5000);
    }

    function stopAutoplay() {
        clearInterval(intervalId);
    }

    document.querySelector('.prev-vagas').addEventListener('click', () => {
        showPrev();
        startAutoplay();
    });

    document.querySelector('.next-vagas').addEventListener('click', () => {
        showNext();
        startAutoplay();
    });

    const carouselContainer = document.getElementById('jobs-carousel-container');
    carouselContainer.addEventListener('mouseenter', () => isHovered = true);
    carouselContainer.addEventListener('mouseleave', () => isHovered = false);

    startAutoplay();
    exibirVaga(0);
}

// === MODAL DE FILTRO DE VAGAS ===
function inicializarModalFiltro() {
    const modal = document.getElementById('modal-filtrar');
    const btnFiltrar = document.getElementById('filtrar-vagas');
    const spanFechar = document.querySelector('.close');
    const btnAplicar = document.getElementById('aplicar-filtros');
    const btnLimpar = document.getElementById('limpar-filtros');

    // Abrir modal
    btnFiltrar.addEventListener('click', () => {
        modal.style.display = 'block';
        aplicarFiltros(); // Mostra todas as vagas inicialmente
    });

    // Fechar modal
    spanFechar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar modal clicando fora
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Aplicar filtros
    btnAplicar.addEventListener('click', aplicarFiltros);

    // Limpar filtros
    btnLimpar.addEventListener('click', limparFiltros);

    function aplicarFiltros() {
        const categoria = document.getElementById('filtro-categoria').value;
        const area = document.getElementById('filtro-area').value;
        const modalidade = document.getElementById('filtro-modalidade').value;
        const contrato = document.getElementById('filtro-contrato').value;
        const palavraChave = document.getElementById('filtro-palavra-chave').value.toLowerCase();

        const vagasFiltradas = vagas.filter(vaga => {
            // Filtro por categoria
            if (categoria !== 'todas' && vaga.categoria !== categoria) {
                return false;
            }

            // Filtro por área
            if (area !== 'todas' && vaga.area !== area) {
                return false;
            }

            // Filtro por modalidade
            if (modalidade !== 'todas' && vaga.modality !== modalidade) {
                return false;
            }

            // Filtro por tipo de contrato
            if (contrato !== 'todos' && vaga.contractType !== contrato) {
                return false;
            }

            // Filtro por palavra-chave
            if (palavraChave) {
                const textoBusca = `${vaga.title} ${vaga.description} ${vaga.area} ${vaga.modality}`.toLowerCase();
                if (!textoBusca.includes(palavraChave)) {
                    return false;
                }
            }

            return true;
        });

        exibirVagasFiltradas(vagasFiltradas);
    }

    function limparFiltros() {
        document.getElementById('filtro-categoria').value = 'todas';
        document.getElementById('filtro-area').value = 'todas';
        document.getElementById('filtro-modalidade').value = 'todas';
        document.getElementById('filtro-contrato').value = 'todos';
        document.getElementById('filtro-palavra-chave').value = '';
        
        aplicarFiltros(); // Mostra todas as vagas
    }

    function exibirVagasFiltradas(vagasFiltradas) {
        const listaVagas = document.getElementById('lista-vagas-filtradas');
        const contador = document.getElementById('contador-vagas');
        
        contador.textContent = vagasFiltradas.length;

        if (vagasFiltradas.length === 0) {
            listaVagas.innerHTML = `
                <div class="vaga-item" style="text-align: center; padding: 40px;">
                    <i class="fas fa-search" style="font-size: 3em; color: #ccc; margin-bottom: 15px;"></i>
                    <p>Nenhuma vaga encontrada com os filtros selecionados.</p>
                    <p>Tente ajustar os critérios de busca.</p>
                </div>
            `;
            return;
        }

        listaVagas.innerHTML = vagasFiltradas.map(vaga => `
            <div class="vaga-item">
                <h4>${vaga.title}</h4>
                <p>${vaga.description}</p>
                <div class="vaga-info">
                    <span class="vaga-tag">${vaga.modality}</span>
                    <span class="vaga-tag">${vaga.area}</span>
                    <span class="vaga-tag">${vaga.contractType}</span>
                </div>
                <div class="vaga-contato">
                    <strong>Contato:</strong> 
                    <a href="mailto:${vaga.contact}">${vaga.contact}</a>
                </div>
            </div>
        `).join('');
    }
}