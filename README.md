# Interactive Landing Page Project
## Project Features
In this project, I have created a multi-section landing page which dynamically builds the navigation links using the section data attributes. The `buildNow()` function will loop through each section and create a list item link, which will include the corresponding `section.id` in it's data attribute to create a relationship between the two. This is made visible by smoothly scrolling to each corresponding section via the navigation in response to the `click` event, as well as highlighting the currently viewable section link in the navigation. 

## Which Section is Currently Being Viewed?
I have used the getBoundingClientRect() method to identify which section is visible in the viewport and have added an `active` class to illustrate this to the user. 

I have also added the `highlight` class to illustrate the the viewable section in the navigation. 