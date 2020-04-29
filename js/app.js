/*
1. Write a function to loop through all of the sections and retrieve the data-nav attribute. 
2. Create li elements, with anchors and add the data-nav value as text content.
3. Append these li elements to the navbar_list ID.
*/

//  Ensure the DOM has fully loaded and parsed
window.addEventListener('DOMContentLoaded', () => {

    // Store each <section> in a nodeList
    const sections = document.querySelectorAll('section');    // Note: Cannot have a single observer on a nodelist
    const navbarList = document.getElementById('navbar_list');
    const nav = document.getElementById('nav');

    //  Add all section names to navigation, including future added sections with set data-nav attribute
    const buildNav = () => {

        const myDocFrag = document.createDocumentFragment(); 
        for (const section of sections) {
            const sectionName = section.dataset.nav;
            // The data-anchor is set to the section id for the scrollToLinkSection function to work
            const navItem = `<li><a data-anchor=${section.id}>${sectionName}</a></li>`;          
            navbarList.insertAdjacentHTML('beforeend', navItem);
        }

        navbarList.appendChild(myDocFrag);
    }

    buildNav();


    // Show nav on mousemove
    document.addEventListener('mousemove', () => {
        nav.style.display = 'block';
    });


    // Locate the section position by referencing the section id value added to data-anchor
    const scrollToLinkSection = (event) => {

        // Ensure the node type is correctly set to A (Anchor) in event delegation to prevent calling scrollIntoView on the UL (unordered list).
        if(event.target.nodeName === 'A'){
            const anchor = event.target.dataset.anchor;
            document.getElementById(anchor).scrollIntoView({ behavior: 'smooth'});
        }
    }
      
    // Add a single event listener to the <ul>
    navbarList.addEventListener('click', scrollToLinkSection);


    // Add active state to the section that's scrolled into viewe
    const isViewable = () => {
        for (section of sections){
            const link = document.querySelector(`a[data-anchor="${section.id}"]`);
            const viewableEl = section.getBoundingClientRect();
    
            if(viewableEl.top<= 335 && viewableEl.bottom >= 180){
                section.classList.add('active');
                link.classList.add('highlight');
            } else {
                section.classList.remove('active');
                link.classList.remove('highlight');
            }
        }
    }

    document.addEventListener('scroll', isViewable);


    console.log(nav.getBoundingClientRect())

});