// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre",
    title: "Sobre",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-portfólio",
          title: "Portfólio",
          description: "Este portófilo contém os meus principais projetos voltados à área de Ciência de Dados e Aprendizado de Máquina, categorizados por área de estudo.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-wip-compressor-de-imagens-com-perda-voltado-para-imagens-de-rostos-humanos-via-isolamento-de-traços-faciais-usando-transformadas-dct",
          title: '(WIP) Compressor de Imagens com perda voltado para imagens de rostos humanos via...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_ICV_1/";
            },},{id: "projects-wip-histogramas-de-gradientes-orientados-hog-uma-implementação-prática-do-algoritmo-aplicada-ao-dataset-fashion-mnist",
          title: '(WIP) Histogramas de Gradientes Orientados (HOG): uma implementação prática do algoritmo aplicada ao...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_ICV_2/";
            },},{id: "projects-wip-quot-i-39-m-not-a-robot-quot-aplicação-de-uma-arquitetura-autoral-de-redes-convolucionais-cnn-para-a-automatização-do-reconhecimento-de-captcha",
          title: '(WIP) &amp;quot;I&amp;#39;m not a robot&amp;quot;: Aplicação de uma arquitetura autoral de Redes Convolucionais...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_ICV_3/";
            },},{id: "projects-análise-do-desempenho-de-diferentes-configurações-de-redes-neurais-mlp-no-problema-de-classificação-de-imagens-de-dígitos-mnist",
          title: 'Análise do desempenho de diferentes configurações de redes neurais MLP no problema de...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_ML_1/";
            },},{id: "projects-how-to-win-uma-análise-exploratória-de-dados-de-partidas-vitoriosas-da-la-liga-usando-o-fp-growth",
          title: 'How to Win: Uma análise exploratória de dados de partidas vitoriosas da La...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_AD_1/";
            },},{id: "projects-análise-exploratória-multimetodológica-de-dados-do-airbnb-da-cidade-do-rio-de-janeiro",
          title: 'Análise Exploratória Multimetodológica de Dados do Airbnb da cidade do Rio de Janeiro...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_MDA_1/";
            },},{id: "projects-seminário-quot-pala-vɾɐ̃w̃-quot-uma-análise-interlinguística-de-padrões-fonéticos-e-expressivos-de-palavras-de-baixo-calão-via-diferentes-visualizações-de-dados-de-fonemas",
          title: '[Seminário] &amp;quot;pala’vɾɐ̃w̃&amp;quot;: uma análise interlinguística de padrões fonéticos e expressivos de palavras de...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_VD_1/";
            },},{id: "projects-problema-da-regressão-simbólica-uma-abordagem-baseada-em-programação-genética",
          title: 'Problema da regressão simbólica: uma abordagem baseada em Programação Genética',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_CN_1/";
            },},{id: "projects-quot-macaco-quot-uma-abordagem-heurística-ao-problema-do-clique-máximo-utilizando-otimização-por-colônia-de-formigas-aco",
          title: '&amp;quot;MaCACO&amp;quot;: Uma abordagem heurística ao problema do clique máximo utilizando Otimização por Colônia...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_CN_2/";
            },},{id: "projects-problema-do-roteamento-de-veículos-com-janelas-de-tempo-uma-abordagem-híbrida-de-melhoria-de-metaheurísticas-já-existentes-baseada-em-buscas-locais",
          title: 'Problema do roteamento de veículos com janelas de tempo: Uma abordagem híbrida de...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/19_HM_1/";
            },},{id: "projects-tcc-1-avaliação-de-quatro-métodos-de-feature-importance-para-a-explicabilidade-de-features-estruturais-de-peptídeos-geradas-usando-o-método-acsm",
          title: '[TCC 1] Avaliação de quatro métodos de feature-importance para a explicabilidade de features...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_POC_1/";
            },},{id: "projects-análise-comparativa-de-seis-métodos-clássicos-de-busca-em-espaço-de-estados-para-a-solução-do-problema-8-puzzle",
          title: 'Análise comparativa de seis métodos clássicos de Busca em Espaço de Estados para...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20_IIA_1/";
            },},{id: "projects-problema-do-caixeiro-viajante-uma-abordagem-de-otimização-baseada-em-simulated-annealing",
          title: 'Problema do Caixeiro Viajante: Uma abordagem de otimização baseada em Simulated Annealing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/21_IFEC_1/";
            },},{id: "projects-implementação-do-algoritmo-adaboost-e-avaliação-de-desempenho-de-diferentes-configurações-na-previsão-do-jogo-da-velha",
          title: 'Implementação do algoritmo AdaBoost e avaliação de desempenho de diferentes configurações na previsão...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/22_ML_2/";
            },},{id: "projects-implementação-dos-algoritmos-k-nearest-neighbors-e-k-means-avaliação-de-sua-aplicação-ao-dataset-iris",
          title: 'Implementação dos algoritmos k-Nearest-Neighbors e k-Means Avaliação de sua aplicação ao dataset Iris...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/24_IIA_2/";
            },},{id: "projects-quot-accept-all-cookies-quot-dilemas-éticos-no-desenvolvimento-de-interfaces-de-usuário",
          title: '&amp;quot;Accept All Cookies&amp;quot;: Dilemas éticos no desenvolvimento de interfaces de usuário',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/25_EC_1/";
            },},{id: "projects-quot-imagem-feita-por-ia-é-arte-quot-dilemas-sociais-do-uso-de-tecnologias-de-ponta-no-contexto-artístico",
          title: '&amp;quot;Imagem feita por IA é arte?&amp;quot;: Dilemas sociais do uso de tecnologias de...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/26_CS_1/";
            },},{id: "projects-implementação-e-análise-comparativa-de-três-diferentes-algoritmos-e-heurísticas-para-o-problema-do-caixeiro-viajante-métrico",
          title: 'Implementação e Análise Comparativa de Três Diferentes Algoritmos e Heurísticas para o Problema...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/27_AlgII_1/";
            },},{id: "projects-tcc-2-quot-acsm-explanation-quot-uma-ténica-de-visualização-molecular-voltada-à-explicabilidade-de-classificadores-baseados-em-assinaturas-estruturais-acsm",
          title: '[TCC 2] &amp;quot;aCSM-Explanation&amp;quot;: Uma ténica de visualização molecular voltada à explicabilidade de classificadores...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_POC_2/";
            },},{id: "projects-revisão-da-literatura-levantamento-de-métodos-de-seleção-de-features-baseados-em-teoria-da-informação",
          title: '[Revisão da Literatura] Levantamento de métodos de Seleção de Features baseados em Teoria...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_IT_1/";
            },},{id: "projects-proposta-de-otimização-do-método-csm-de-extração-de-features-de-proteínas-via-três-métricas-de-distância",
          title: 'Proposta de otimização do método CSM de Extração de Features de Proteínas via...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_Bio_1/";
            },},{id: "projects-seminário-regressão-com-aplicação-de-engenharia-de-features-em-dados-heterogêneos-para-a-tarefa-de-previsão-de-tarifas-de-taxi",
          title: '[Seminário] Regressão com aplicação de Engenharia de Features em dados heterogêneos para a...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_ML_3/";
            },},{id: "projects-comparação-de-modelos-estado-da-arte-para-extração-de-melodia-de-músicas-em-midi",
          title: 'Comparação de modelos estado da arte para extração de melodia de músicas em...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_RIM_1/";
            },},{id: "projects-parts-of-speech-tagging-classificação-de-classes-gramaticais-em-sentenças-da-língua-portuguesa-utilizando-fine-tuning-do-bertimbau",
          title: 'Parts-of-Speech Tagging: Classificação de classes gramaticais em sentenças da língua-portuguesa utilizando fine-tuning do...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_NLP_1/";
            },},{id: "projects-detecção-de-cláusulas-potencialmente-injustas-em-contratos-de-termos-de-uso-utilizando-fine-tuning-no-legal-bert",
          title: 'Detecção de cláusulas potencialmente injustas em contratos de Termos de Uso utilizando fine-tuning...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_NLP_2/";
            },},{id: "projects-quot-deliforest-quot-um-detector-de-spams-via-aprendizado-supervisionado-que-supera-abordagens-precedentes",
          title: '&amp;quot;DeLIForest&amp;quot;: Um detector de SPAMs via aprendizado supervisionado que supera abordagens precedentes',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_Cyber_1/";
            },},{id: "projects-seminário-quot-beyond-individual-input-for-deep-anomaly-detection-on-tabular-data-quot-desvendando-o-atual-modelo-estado-da-arte-em-detecção-de-anomalias-em-dados-tabulares",
          title: '[Seminário] &amp;quot;Beyond Individual Input for Deep Anomaly Detection on Tabular Data&amp;quot;: Desvendando o...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_Cyber_2/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%64%72%65%64%75%74%72%61%73%6F%66%74%77%61%72%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/andredutradcc", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/andredutrasoftware", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
