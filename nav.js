window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus')
        {
            icon.className= 'uil uil-minus';
        }
        else
        {
            icon.className= 'uil uil-plus';
        }
    })
})

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

const courses = document.querySelector('.courses_container');
const course = document.querySelectorAll('.course');
const courseSearch = document.querySelector('#course-search');

const searchCourse = () => {
    const val = courseSearch.value.toLowerCase();
    course.forEach(user => {
        let title = user.querySelector('h4').textContent.toLowerCase();
        if (!title.includes(val)) {
            user.style.display = 'none';
        }
        else
        {
            user.style.display = 'block';
        }
    })
}

courseSearch.addEventListener('keyup', searchCourse);