export default class Navigation {
  constructor() {
    this.sections = [
      document.querySelector('.list-section'),
      document.querySelector('.add-book-section'),
      document.querySelector('.contact-section'),
    ];

    this.links = [
      document.querySelector('.list-page'),
      document.querySelector('.add-page'),
      document.querySelector('.contact-page'),
    ];
  }

  pageNavigation() {
    this.links.forEach((link, index) => {
      link.addEventListener('click', () => {
        this.links.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
        this.sections.forEach((section, sectionIndex) => {
          section.classList.toggle('hidden', index !== sectionIndex);
        });
      });
    });
  }
}
