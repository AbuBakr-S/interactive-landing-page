/*
1. Write a function to loop through all the sections and retrieve the data-nav attribute. 
2. Create li elements and add the data-nav value as text content.
3. Append these li elements to the navbar_list ID.
*/

//  Ensure the DOM has fully loaded and parsed

// Remember this doesn't wait for CSS!
window.addEventListener('DOMContentLoaded', () => {

    //  Add all section sames to navigation, including future added sections with set data-nav attribute
    const buildNav = () => {

        const sections = document.querySelectorAll('section[data-nav]');
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


    const sections = document.querySelectorAll('section');    // Note: Cannot have a single observer on a nodelist

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
            console.log(entry.target);
            entry.target.classList.toggle('active');
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });


});