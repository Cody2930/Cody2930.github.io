Project Brief for Macha Makings

Artist Name: Kevin Macha
Domain Name: machamakings.me
Social Media: Instagram: https://www.instagram.com/macha_makings/
Favicon: Files generated and placed in icons/ folder.
Artist Type: Painter and 2D artist
Website Goal: To inform viewers about the artist and showcase work.
Design Vibe: Comforted and Elegant
Logo/Brand Assets: None pre-existing.
Colors:
    Background: #93E9BE
    Text: #000000
    Primary Accent: #82CFA8
    Secondary Accent: #6AA889
Typography:
    Headings: Inconsolata
    Body Text: Newsreader
Confirmed Pages: Homepage, Bio Page, CV/Resume Page, Contact Page, Gallery Page.
Bio Page Content: "Kevin Macha is an artist-in-training at Texas A&M University Corpus Christi. He was born in Houston, Texas and is currently getting his Bachelors of Arts in Corpus Christi, Texas. He attended Needville High School and graduated in 2022. He is projected to graduate form A&M University in 2026. Kevin's primary medium is working in the digital space such as Photoshop, Illustrator, and Procreate. He also has worked in different mediums such as charcoal, Pastel, Watercolor, Acrylic, and Ink. Kevin is currently expanding his experience in using different mediums such as Plaster, Wire, Wood, and Cement."
Artist Statement (Bio Page): Will be included above the bio text.
CV/Resume Page Content: Button link to CV; Resume section with placeholder text.
3D Models (<model-viewer>): Not required.
Google Analytics: Not using.
SEO Keywords: "Digital Artist," "Pastel drawer," "realism painter"
Meta Description: "Welcome to Macha Makings. This site is to showcase my work and let the viewers know more about me. Come and check out the artworks that I have created and learn more about me."
Social Sharing Image (Open Graph): images/Macha_Proj3_Stabilio.jpg
Navigation:
    Desktop: Links (Home, Bio, CV/Resume, Contact, Gallery) on the right with subtle hover effect.
    Mobile: Hamburger icon collapsing into a dropdown list of stacked links with subtle hover effects; dropdown collapses on re-interaction.
Homepage Layout: Hero image at the top with a subtle scrolling animation revealing an intro section, then a small gallery preview underneath.
Bio Page Layout: Photo on the left, text on the right.
Main Gallery Page Layout: Grid of images with series titles underneath.
    Mobile Main Gallery: Horizontal scroll to move between series, one series on screen at a time with subtle animation.
Series Page Layout: Grid of images within the series, each with artwork name underneath.
    Enhancement: "Back to Gallery" button included.
Individual Work Page Layout: Dedicated page for each artwork.
    Desktop: Main image on left, details on right.
    Mobile: Main image on top, details underneath.
Image Optimization: Lazy loading for images will be implemented.
Contact Page:
    Email for Submissions: kmacha@islander.tamucc.edu
    Form Fields: Name, Email, Subject, Message.
    Submit Button Text: "submit"
    Spam Prevention: Honeypot field and simple captcha.
404 Page: Minimalist page with a "404 Page Not Found" message and a friendly message below it.
Social Media Icons: Will be included in the footer.

BEGIN TECHNICAL DIRECTIVES FOR JULES PROMPT

1. Execution Protocol:

Acknowledge and Plan: First, acknowledge these instructions. Then, create a detailed, step-by-step execution plan for building the entire website based on this prompt.

One-Time Approval: Present this plan to the user for a single, one-time "go/no-go" approval.

Autonomous Execution: Once you receive approval, you MUST execute the entire plan from start to finish without any further questions, check-ins, or requests for code review. Your final action should be committing the completed project. Do not stop partway through the plan to ask for feedback.

2. Prompt Archiving:

As the very first step in your execution plan, you must create the file prompt-for-jules.md in the project root.

You will then save this entire prompt (the complete text you are receiving now, including the Project Brief and all Technical Directives) into that prompt-for-jules.md file. This creates a permanent record of the instructions used for the build.

3. File Structure and Pathing:

Build the project using this exact file structure.

All internal links (href, src) MUST use relative paths (e.g., css/styles.css, not /css/styles.css) to ensure functionality on platforms like GitHub Pages.

project-root/
├─ css/
│ ├─ styles.css
│ └─ (page-specific css files, e.g., contact.css)
├─ scripts/main.js
├─ images/ (for site assets like logos)
├─ icons/
├─ collections/
│ ├─ index.html
│ └─ <collection-name>/
│ ├─ index.html
│ └─ <work-name>/
│ ├─ index.html
│ ├─ models/
│ └─ images/
├─ 404.html
├─ index.html
├─ .gitignore
├─ robots.txt
├─ site-structure.md
└─ prompt-for-jules.md <-- You will create this file.

4. CSS Generation Rules:

ABSOLUTE PROHIBITION: You are forbidden from using inline style attributes or internal <style> tags in any HTML file.

Global Stylesheet: All global styles (for body, fonts, colors, navigation, footer) MUST go into css/styles.css.

Page-Specific Stylesheets: For every HTML page you create (e.g., bio.html), you MUST also create a corresponding CSS file (e.g., css/bio.css) for its unique styles.

Linking Order: Every HTML page must link to css/styles.css FIRST, and then to its own page-specific stylesheet second.

5. Code Commenting Mandate:

You must provide exhaustive, line-by-line pedagogical comments in all generated files. Explain the "why" behind each choice.

Example of Required Detail:

/* This rule targets the main site navigation (<nav> element). */
nav {
/* Turns the nav into a flex container to easily align its children. */
display: flex;
/* Pushes the logo and links to opposite ends of the container. */
justify-content: space-between;
/* Vertically centers the items within the navigation bar. */
align-items: center;
}

6. General Standards:

HTML: Use semantic tags (<header>, <nav>, <main>, <footer>) and a logical heading order. All <img> tags must have meaningful alt attributes.

Meta Tags: In the <head> of every page, include: <title>, meta description, keywords, author, Open Graph tags, Twitter Card tags, and favicon links.

Accessibility & Performance: Ensure high color contrast, keyboard navigability, lazy-loading for images, and deferred JavaScript.

Placeholders: Use descriptive placeholder text and correctly-sized placeholder images (placehold.co) where final content is not yet available.

END TECHNICAL DIRECTIVES FOR JULES PROMPT
