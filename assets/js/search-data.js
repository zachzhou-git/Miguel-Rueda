// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "HOME",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Miguel-Rueda/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Miguel-Rueda/cv/";
          },
        },{id: "nav-research",
          title: "RESEARCH",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Miguel-Rueda/research/";
          },
        },{id: "nav-teaching",
          title: "TEACHING",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Miguel-Rueda/teaching/";
          },
        },{id: "nav-dataverse",
          title: "DATAVERSE",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Miguel-Rueda/dataverse/";
          },
        },{id: "nav-community",
          title: "COMMUNITY",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Miguel-Rueda/community/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Miguel-Rueda/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Miguel-Rueda/books/the_godfather/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/Miguel-Rueda/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/Miguel-Rueda/teachings/introduction-to-machine-learning/";
            },},{
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
