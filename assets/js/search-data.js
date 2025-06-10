// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre",
    title: "sobre",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projetos",
          title: "projetos",
          description: "Este portófilo contém os meus principais projetos voltados à área de Ciência de Dados e Aprendizado de Máquina, categorizados por área de estudo.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
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
          section: "News",},{id: "projects-icv-1-wip",
          title: 'ICV 1 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_ICV_1/";
            },},{id: "projects-histogramas-de-gradientes-orientados-hog-uma-implementação-prática-do-algoritmo-aplicada-ao-dataset-fashion-mnist",
          title: 'Histogramas de Gradientes Orientados (HOG): uma implementação prática do algoritmo aplicada ao dataset...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_ICV_2/";
            },},{id: "projects-icv-3-wip",
          title: 'ICV 3 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_ICV_3/";
            },},{id: "projects-ml-1-wip",
          title: 'ML 1 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_ML_1/";
            },},{id: "projects-how-to-win-uma-análise-exploratória-de-dados-de-partidas-vitoriosas-da-la-liga-usando-o-fp-growth",
          title: 'How to Win: Uma análise exploratória de dados de partidas vitoriosas da La...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_AD_1/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_MDA_1/";
            },},{id: "projects-seminário-vd-1-wip",
          title: '[Seminário] VD 1 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_VD_1/";
            },},{id: "projects-cn-1-wip",
          title: 'CN 1 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_CN_1/";
            },},{id: "projects-cn-2-wip",
          title: 'CN 2 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_CN_2/";
            },},{id: "projects-hm-1-wip",
          title: 'HM 1 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/19_HM_1/";
            },},{id: "projects-poc-1-wip",
          title: 'POC 1 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_POC_1/";
            },},{id: "projects-iia-1-wip",
          title: 'IIA 1 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20_IIA_1/";
            },},{id: "projects-ifec-1-wip",
          title: 'IFEC 1 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/21_IFEC_1/";
            },},{id: "projects-ml-2-wip",
          title: 'ML 2 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/22_ML_2/";
            },},{id: "projects-iia-2-wip",
          title: 'IIA 2 (WIP)',
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
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/27_AlgII_1/";
            },},{id: "projects-acsm-explanation-uma-ténica-de-visualização-molecular-voltada-à-explicabilidade-de-classificações-de-instâncias-baseadas-em-assinaturas-estruturais-acsm",
          title: 'aCSM-Explanation: Uma ténica de visualização molecular voltada à explicabilidade de classificações de instâncias...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_POC_2/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_IT_1/";
            },},{id: "projects-bio-1-wip",
          title: 'Bio 1 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_Bio_1/";
            },},{id: "projects-seminário-ml-3-wip",
          title: '[Seminário] ML 3 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_ML_3/";
            },},{id: "projects-comparação-de-modelos-estado-da-arte-para-extração-de-melodia-de-músicas-em-midi",
          title: 'Comparação de modelos estado da arte para extração de melodia de músicas em...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_RIM_1/";
            },},{id: "projects-nlp-1-wip",
          title: 'NLP 1 (WIP)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_NLP_1/";
            },},{id: "projects-detecção-de-cláusulas-potencialmente-injustas-em-contratos-de-termos-de-uso-utilizando-fine-tuning-no-legal-bert",
          title: 'Detecção de cláusulas potencialmente injustas em contratos de Termos de Uso utilizando fine-tuning...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_NLP_2/";
            },},{id: "projects-deliforest-um-detector-de-spams-via-aprendizado-supervisionado-que-supera-abordagens-precedentes",
          title: 'DeLIForest: Um detector de SPAMs via aprendizado supervisionado que supera abordagens precedentes',
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
