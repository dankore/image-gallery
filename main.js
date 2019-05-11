    const panels = document.querySelectorAll(".panel")

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    function toggleOpen() {
      this.classList.toggle('open');
    }
    
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
    function toggleActive(e) {
      if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
      }
    }
  