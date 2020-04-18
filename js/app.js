/*
1. Write a function to loop through all the sections and retrieve the data-nav attribute. 
2. Create li elements and add the data-nav value as text content.
3. Append these li elements to the navbar_list ID.
*/

//  Ensure the DOM has fully loaded and parsed

// Remember this doesn't wait for CSS!
window.addEventListener('DOMContentLoaded', () => {

    // Store each <section> in a nodeList
    const sections = document.querySelectorAll('section');    // Note: Cannot have a single observer on a nodelist


    //  Add all section names to navigation, including future added sections with set data-nav attribute
    const buildNav = () => {

        const navbarList = document.getElementById('navbar_list');

        let counter = 1;    // Counter for Section Number

        for (const section of sections) {
            const sectionName = section.dataset.nav;    // Returns [data-nav] value from Section Element
            const anchor = `section${counter}`;     // Manipulate String to match href
            counter ++;

            navbarList.innerHTML += `<li><a href="#${anchor}">${sectionName}</a></li>`;
        }
    
    }

    buildNav();


    // Objective: Hide nav when not scrolling. 
    // Current state: This only fires once on the first scroll event after 3 seconds and does not adjust (restart timer) for proceeding events.
    document.addEventListener('scroll', function (e){
        setTimeout(function hideNav(){
            const nav = document.getElementById('nav');
            nav.style.display = 'none';
        }, 3000);
    });


    const options = {
    root: null,   // This is the viewport
    threshold: 1,   // 0 value will fire for any part of the target. 1 value will fire if 100% of the target is visible inside the viewport  
    rootMargin: "10% 0px 10% 0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // If target is not intersecting, exit this function
            if (!entry.isIntersecting) {
                entry.target.classList.remove('active');
                return;
            }
            entry.target.classList.toggle('active');
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

});