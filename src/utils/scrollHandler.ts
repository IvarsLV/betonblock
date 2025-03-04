export function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.getElementById('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const extraPadding = 32;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
  
      window.scrollTo({
        top: sectionPosition - headerHeight - extraPadding,
        behavior: 'smooth'
      });
  
      window.history.pushState({}, '', `/${sectionId}`);
      updateTitle(sectionId);
    }
  }
  
  function updateTitle(sectionId: string) {
    const titles: Record<string, string> = {
      home: 'Главная - IPX',
      services: 'Услуги - IPX',
      about: 'О нас - IPX',
      contact: 'Контакты - IPX'
    };
    document.title = titles[sectionId] || 'IPX';
  }