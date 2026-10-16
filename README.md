# First Humans

An illustrated journey into early Homo sapiens and a playful, 30-style modern time-travel lookbook.

## Explore

- Experience: four immersive chapters about early humans, communication, decisions, and learning, with a progress journal and optional Spiritual Perspectives.
- Discover: a shared African beginning and an interactive fossil timeline.
- The humans: imagined adult male and female reconstructions and anatomical evidence.
- Their world: three fossil sites across Africa.
- FUN lab: 30 male/female outfit pairs, including funky styles, with filters, search, and larger previews.

The characters are artistic interpretations, not portraits of identifiable first people. Fossil sources and reconstruction limits are available in the site’s Evidence & imagination panel. Modern clothing is a playful thought experiment.

## The human experience

Open `#experience` for the four-chapter overview. Chapter links are `#experience/origins`, `#experience/communication`, `#experience/decisions`, and `#experience/learning`. Every chapter is accessible at any time.

The experience uses native JavaScript modules and separate scene, activity, progress, and media logic. Progress is saved in browser storage where available and falls back to the current session when storage is blocked. Restart clears only the experience's own progress.

Sound is optional and starts off. Ambient wind and bird-like tones are synthesized, not field recordings. Character actions and communication cues are authored interpretations; the website does not claim to recover the first language. Educational scenarios use illustrative consequences rather than measured survival probabilities.

Spiritual Perspectives presents selected, diverse living traditions in their own terms with attributed sources. It is optional and separate from archaeological evidence. Scene characters do not portray sacred figures.

## Run locally

The website uses static HTML, CSS, and JavaScript with no build step. Serve the website directory through a local HTTP server and open `index.html`.

## Hosting

The GitHub repository serves the website from its root. GitHub Pages publishes the `main` branch root, with `.nojekyll` disabling Jekyll processing.

The working Sites checkout keeps website files inside `dist/`. Its separate hosting manifest preserves the existing Sites deployment.

## Artwork

The lookbook uses five 6×2 image sheets, each with six male looks on the top row and six female looks on the bottom row. Artwork was generated for this project with ImageGen.
