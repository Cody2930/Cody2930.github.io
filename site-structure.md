# Macha Makings Website Structure

This document outlines the file and directory structure for the Macha Makings website.

## Root Directory

- `index.html`: The homepage of the website.
- `bio.html`: The artist's biography page.
- `cv.html`: The artist's CV/Resume page.
- `contact.html`: The contact page.
- `404.html`: The 404 error page.
- `collections/`: Directory containing all gallery collections.
- `css/`: Directory for all CSS stylesheets.
- `scripts/`: Directory for all JavaScript files.
- `images/`: Directory for general site images (e.g., logos, banners).
- `icons/`: Directory for favicons and site icons.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `robots.txt`: Provides instructions to web crawlers.
- `prompt-for-jules.md`: The initial prompt used to generate this website.
- `site-structure.md`: This file.

## CSS (`css/`)

- `styles.css`: Global stylesheet for the entire website.
- `index.css`: Styles specific to the homepage.
- `bio.css`: Styles specific to the bio page.
- `cv.css`: Styles specific to the CV/Resume page.
- `contact.css`: Styles specific to the contact page.
- `collections.css`: Styles specific to the main gallery page.
- `sample-collection.css`: Styles specific to a collection page.
- `sample-work.css`: Styles specific to an individual artwork page.
- `404.css`: Styles specific to the 404 page.

## JavaScript (`scripts/`)

- `main.js`: Global JavaScript for interactive elements like the mobile navigation.

## Gallery (`collections/`)

- `index.html`: The main gallery page, displaying all collections.
- `<collection-name>/`: A directory for each specific collection.
  - `index.html`: The landing page for the collection, displaying all works within it.
  - `<work-name>/`: A directory for each individual artwork.
    - `index.html`: The page for the individual artwork.
    - `images/`: Directory for images of the artwork.
    - `models/`: Directory for 3D models of the artwork (if any).
