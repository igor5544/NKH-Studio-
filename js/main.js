{
  $('.main-accordion__title').replaceWith(function () {
    let classList = this.getAttribute('class');
    return $('<button class="' + classList + '">').append($(this).contents());
  });

  let accordionElement = document.querySelector('.main-accordion');
  let accordionContentsElements = accordionElement.querySelectorAll('.main-accordion__content');
  let accordionBtnsElements = accordionElement.querySelectorAll('.main-accordion__title');
  let accordionContentsList = Array.prototype.slice.call(accordionContentsElements);
  let accordionBtnsList = Array.prototype.slice.call(accordionBtnsElements);

  activeAccordion();

  function activeAccordion() {
    accordionContentsList.forEach(function (accordionContent) {
      if (accordionContent.classList.contains('main-accordion__content--nojs')) {
        accordionContent.classList.remove('main-accordion__content--nojs');
      }

      accordionBtnsList.forEach(function (accordionBtn) {
        accordionBtn.classList.add('main-accordion__title--js');
      });
    });
  }

  accordionBtnsList.forEach(function (accordionBtn) {
    accordionBtn.addEventListener('click', onAccordionBtnClick);
  });

  function onAccordionBtnClick() {
    let activeАccordionElement = accordionElement.querySelector('.main-accordion__title--active');
    let i = accordionBtnsList.indexOf(this);
    let contentSelector = '.main-accordion__content:eq(' + i + ')';

    if (activeАccordionElement && activeАccordionElement != this) {
      activeАccordionElement.click();
    }

    if (accordionContentsElements[i].classList.contains('main-accordion__content--active')) {
      $(contentSelector).fadeOut();
    } else {
      $(contentSelector).fadeIn();
    }

    accordionContentsElements[i].classList.toggle('main-accordion__content--active');
    this.classList.toggle('main-accordion__title--active');
  }
}
