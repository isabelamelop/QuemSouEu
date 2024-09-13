// Informações que serão exibidas
const personalInfo = {
    name: 'Isabela de Melo Pereira',
    introduction: 'Olá, meu nome é Isabela de Melo Pereira, sou estudante de Ciência da Computação no 3º período e faço estágio com atendimento ao cliente. Estou sempre buscando aprender mais sobre inteligência artificial, ciência de dados e tecnologias emergentes.',
    experiences: [
        'Estudante de Ciência da Computação no 3º período',
        'Atendimento ao Cliente na Wave Lojas Virtuais',        
    ],
    skills: [
        'Excel e Power BI',
        'VSCode, Eclipse, Linux, Oracle',
        'Conhecimentos básicos de ciência de dados através de cursos gratuitos',
        'PL/SQL, POO em Java, C#, Python e R para análise de dados'
    ]
};

// Adicionar a introdução
const introElement = document.getElementById('introduction');
if (introElement) {
    introElement.innerText = personalInfo.introduction;
}

// Adicionar as experiências
const experienceList = document.getElementById('experience-list');
if (experienceList) {
    personalInfo.experiences.forEach(exp => {
        const li = document.createElement('li');
        li.innerText = exp;
        experienceList.appendChild(li);
    });
}

// Adicionar as habilidades
const skillsList = document.getElementById('skills-list');
if (skillsList) {
    personalInfo.skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill;
        skillsList.appendChild(li);
    });
}
// Dados para a visualização
const data = {
    labels: [
        'Otimização de Processos',
        'Desenvolvimento de Soluções Inovadoras',
        'Fortalecimento da Presença Online',
        'Colaboração em Projetos de Tecnologia'
    ],
    datasets: [{
        label: 'Impacto Potencial',
        data: [90, 80, 70, 85], // Valores fictícios
        backgroundColor: 'rgba(176, 98, 98, 0.2)', // Bordô claro
        borderColor: 'rgba(176, 98, 98, 1)', // Bordô escuro
        borderWidth: 1
    }]
};

// Configuração do gráfico
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}% de Impacto Potencial`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#f4f4f4'
                }
            },
            y: {
                grid: {
                    color: '#f4f4f4'
                },
                ticks: {
                    color: '#333'
                }
            }
        }
    }
};

// Criar o gráfico
window.onload = function() {
    const ctx = document.getElementById('impact-canvas').getContext('2d');
    new Chart(ctx, config);
};


