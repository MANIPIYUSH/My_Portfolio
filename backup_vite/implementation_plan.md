# Portfolio Implementation Plan

## Technology Stack
- **Core**: React 18 (via Vite)
- **Styling**: Vanilla CSS (CSS Variables, Flex/Grid, Glassmorphism)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Design System
- **Theme**: Premium Dark Mode ("SaaS" aesthetic)
- **Colors**:
  - Background: `#050505` (Deep Black)
  - Surface: `#0f0f0f` (Card Web)
  - Primary: `#6366f1` (Indigo 500) -> `#8b5cf6` (Violet 500) Gradients
  - Text: `#f3f4f6` (Gray 100) / `#9ca3af` (Gray 400)
- **Typography**: `Inter` (Google Fonts) - Clean, scalable, professional.

## File Structure
```
/src
  /assets        # Images/Icons
  /components    # Reusable UI components
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Services.jsx
    Contact.jsx
    Footer.jsx
    ui/          # Small UI bits (Buttons, Cards)
      Button.jsx
      Card.jsx
  App.jsx        # Main layout
  index.css      # Global styles & variables
  main.jsx       # Entry
```

## Step-by-Step Implementation
1.  **Setup**: Initialize Vite React app.
2.  **Dependencies**: Install `framer-motion`, `lucide-react`, `prop-types` (good practice).
3.  **Styles**: Define CSS variables for colors, spacing, and typography in `index.css`.
4.  **Base Components**: Build the `Button` and `Card` components with hover effects.
5.  **Sections**: Implement each section based on the generated copy.
    - *Hero*: Large text, gradient animation.
    - *Experience*: Timeline line style.
    - *Projects*: Grid of cards with "glass" effect.
6.  **Polishing**: Add simple entry animations using Framer Motion.
