/* -------------------- Navbar -------------------- */
// Show menu & Y hidden
const navbarMenu = document.getElementById('navbar-menu'),
  navbarToggle = document.getElementById('navbar-toggle'),
  navbarClose = document.getElementById('navbar-close')

  //Show menu
  if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.add('show-menu')
    })
  }

  // Hidden menu
  if (navbarClose) {
    navbarClose.addEventListener('click', () => {
      navbarMenu.classList.remove('show-menu')
    })
  }

  // Remove menu at Mobile
const navbarLink = document.querySelectorAll('.navbar__link')

function linkAction() {
  const navbarMenu = document.getElementById('navbar-menu')
  navbarMenu.classList.remove('show-menu')
}
navbarLink.forEach(n => n.addEventListener('click', linkAction))

/* -------------------- Projects -------------------- */
// project swiper
let swiper = new Swiper(".projects__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* -------------------- Contact Me -------------------- */
// Message Send - formsfree
var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("메시지가 성공적으로 보내졌습니다. 감사합니다.")
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            alert("Error: 양식을 제대로 채워주세요.")
          }
        })
      }
    }).catch(error => {
      alert("Error: 메시지를 보낼 수 없습니다.")
    });
  }
  form.addEventListener("submit", handleSubmit)

// input text reset
function reset() {
  var obj = document.getElementsByClassName('contact__input');

  for (var i = 0; i < obj.length; i++) {
    obj[i].value = "";
  }
}

/* -------------------- Scroll sections - Active link -------------------- */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.navbar__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.navbar__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/* -------------------- Change Header background  -------------------- */
function scrollHeader() {
  const nav = document.getElementById('header')
  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)

/* -------------------- Show Scroll Up  -------------------- */
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scrollUp)

/* -------------------- Light/Dark Theme  -------------------- */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// 사용자가 초기 테마 선택
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// 
// 적용된 테마 감지
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// 사용자 선택 테마 확인
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// 버튼으로 테마 변경
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})