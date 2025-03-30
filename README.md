# Terramedic

Terramedic is a SvelteKit-powered platform providing resources, volunteer opportunities, and actionable solutions for climate advocacy and sustainable living.

## Climate Action Website

This website is designed to accompany warming stripes buttons distributed at climate outreach events. The site explains what warming stripes represent and guides visitors toward meaningful climate action through volunteering or donations.

## Public Domain Dedication for the term “terramedic”

Leila Hadj-Chikh came up with the name **“TerraMedics”** as the name for her team at the Make for the Planet competition at the inaugural Earth Optimism Summit in 2017 in Washington, DC.

The term "terramedic" is now intentionally placed in the public domain by the originator of this term. It is free for anyone to use, share, adapt, and apply in any context — without restriction or attribution.

This dedication is made under [Creative Commons Zero (CC0 1.0 Universal)](https://creativecommons.org/publicdomain/zero/1.0/), which waives all rights to the term and affirms that it is not, and should not be, treated as a trademark or proprietary label.

We encourage everyone to use “terramedics” to describe individuals and communities caring for the Earth.

## Project Overview

This website aims to:
1. Educate people about warming stripes and climate change
2. Connect individuals with volunteer opportunities at climate organizations
3. Facilitate donations to effective climate action groups
4. Showcase ways for taking climate action in our daily lives
5. Provide outreach materiels and other resources for climate advocates

## Tech Stack

- **Frontend Framework**: Svelte
- **Styling**: Tailwind CSS
- **Component Development**: Storybook
- **Testing**: Playwright
- **Hosting**: Netlify

## Getting Started

### Prerequisites

- Node.js and Yarn installed
- Git installed

### Installation

```bash
# Clone the repository
git clone https://github.com/lhadjchikh/terramedic.git
cd terramedic

# Install dependencies
yarn install

# Start the development server
yarn dev
```

### Development Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally
- `yarn storybook` - Launch Storybook for component development
- `yarn test` - Run Playwright tests

## Project Structure

- `/src/routes` - Svelte pages
- `/src/lib/components` - Reusable Svelte components
- `/src/lib/data` - Data files for organizations
- `/static` - Static assets
- `/tests` - Playwright tests
- `/.storybook` - Storybook configuration

## Key Features

1. **Warming Stripes Visualization**: A visual representation of climate data
2. **Educational Content**: Information about what warming stripes mean
3. **Volunteer Opportunities**: Curated list of climate organizations needing volunteers
4. **Donation Options**: Featured organizations accepting financial contributions
5. **Responsive Design**: Mobile-friendly layout

## Deployment

This project is set up for easy deployment to Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

## Adding Organizations

To add or update organizations, edit the data files in:
- `src/lib/data/volunteer-orgs.js` - For volunteer opportunities
- `src/lib/data/donation-orgs.js` - For donation options
- `src/lib/data/resource-orgs.js` - For resources available to climate advocates

## License

This project is licensed under the GNU General Public License v3.0 for code and the Creative Commons Attribution 4.0 International License (CC BY 4.0) for non-code content. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Ed Hawkins for creating the warming stripes visualization
- Climate science organizations for their data and research
- All the climate activists working to build a sustainable future

This project was developed as a collaboration between humans and a group of AI tools, including:
- [GitHub Copilot](https://github.com/features/copilot)
- [Claude](https://claude.ai/) by Anthropic
- [ChatGPT](https://chat.openai.com/) by OpenAI
- [Gemini](https://gemini.google.com/) by Google
