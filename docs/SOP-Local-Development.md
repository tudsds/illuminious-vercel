# SOP: Local Development & Deployment for Illuminious Website

## Prerequisites

- WSL (Ubuntu) on Windows with Node.js 22 and pnpm installed
- SSH key configured for GitHub access
- Repository cloned to `/mnt/d/web3/illuminious-web`

---

## Step 0: SSH Key Setup (only if WSL was restarted)

Every time WSL restarts, the SSH key copied to the Linux filesystem is lost.
Run this once per WSL session:

```bash
mkdir -p /home/jamesg27/.ssh

cp /mnt/d/web3/.ssh/id_ed25519 /home/jamesg27/.ssh/id_ed25519
cp /mnt/d/web3/.ssh/id_ed25519.pub /home/jamesg27/.ssh/id_ed25519.pub

chmod 600 /home/jamesg27/.ssh/id_ed25519
chmod 644 /home/jamesg27/.ssh/id_ed25519.pub

echo "Host github.com
  IdentityFile /home/jamesg27/.ssh/id_ed25519
  IdentitiesOnly yes" > /home/jamesg27/.ssh/config
chmod 600 /home/jamesg27/.ssh/config

export GIT_SSH_COMMAND="ssh -i /home/jamesg27/.ssh/id_ed25519"
```

Verify it works:

```bash
ssh -T git@github.com
```

You should see: `Hi tudsds! You've successfully authenticated`

---

## Step 1: Pull the Latest Version from GitHub

```bash
cd /mnt/d/web3/illuminious-web

export GIT_SSH_COMMAND="ssh -i /home/jamesg27/.ssh/id_ed25519"

git checkout main
git pull origin main
```

This ensures your local copy matches the latest version on GitHub.

---

## Step 2: Review the Codebase

### Project Structure

```
illuminious-web/
  client/                  # Frontend (React + Vite)
    src/
      pages/               # All page components
        Home.tsx            # Homepage
        About.tsx           # About page
        Services.tsx        # Services overview
        services/           # Service sub-pages
          NPI.tsx
          PCBA.tsx
          BoxBuild.tsx
          Injection.tsx
          SupplyChain.tsx
        Industries.tsx      # Industries overview
        industries/         # Industry sub-pages
          IoT.tsx
          Consumer.tsx
          Automotive.tsx
          Medical.tsx
        Capabilities.tsx    # Capabilities overview
        capabilities/       # Capability sub-pages
          Quality.tsx
          IoTSpecialization.tsx
        FactoryTour.tsx
        CaseStudies.tsx
        Blog.tsx
        News.tsx
        Contact.tsx
        Startups.tsx
      components/           # Reusable components
        Header.tsx          # Site header & mega menu
        Footer.tsx          # Site footer
        FloatingContact.tsx # Floating contact button
        SEO.tsx             # SEO meta tags
        ServicePageTemplate.tsx
        ui/                 # Shadcn UI components (button, card, etc.)
      index.css             # Global styles & color definitions
      App.tsx               # Router (all routes defined here)
    public/
      images/               # All static images and logos
  server/                   # Backend (Express + tRPC)
    _core/
      index.ts              # Server entry point
    routers.ts              # API routes (admin, posts, contact)
    db.ts                   # Database configuration
  package.json              # Dependencies & scripts
```

### Key Files to Know

| File | What It Controls |
|------|-----------------|
| `client/src/App.tsx` | All page routes (URL -> component mapping) |
| `client/src/index.css` | Brand colors, global CSS, custom utility classes |
| `client/src/components/Header.tsx` | Navigation menu, logo, mega menu dropdowns |
| `client/src/components/Footer.tsx` | Footer content, office addresses, links |
| `client/src/pages/Home.tsx` | Homepage: hero, advantages, China+2 section, phases |
| `package.json` | Dependencies, build scripts |

### Brand Color System (defined in `client/src/index.css`)

| Color Name | Hex | Tailwind Class | Usage |
|-----------|-----|---------------|-------|
| Navy | `#132843` | `text-illuminious-navy` / `bg-illuminious-navy` | Dark backgrounds, headings |
| Blue | `#3966A2` | `text-illuminious-blue` / `bg-illuminious-blue` | Primary accent, buttons |
| Sky | `#6191D3` | `text-illuminious-sky` / `bg-illuminious-sky` | Secondary accent, highlights |
| Light | `#D6DEEE` | `text-illuminious-light` / `bg-illuminious-light` | Light backgrounds, borders |

### Common Text Color Classes

| Class | Appearance | Use On |
|-------|-----------|--------|
| `text-white` | Pure white | Dark backgrounds (navy, blue, gradients) |
| `text-illuminious-navy` | Dark navy | Light/white backgrounds (headings) |
| `text-muted-foreground` | Medium gray | Light backgrounds (body text) |
| `text-illuminious-blue` | Blue | Accents, links |

---

## Step 3: Make Your Changes

### Editing Text Content

Open the relevant `.tsx` file in any code editor (VS Code recommended).

Example: To change text on the Homepage, edit `client/src/pages/Home.tsx`.

Page content is typically in two places:
1. **Data arrays at the top of the file** (e.g., `const locations = [...]`)
2. **JSX markup in the return statement** (the HTML-like code)

### Editing Colors

To change a text color, modify the `className` attribute:

```
Before: <p className="text-muted-foreground">Some text</p>
After:  <p className="text-white">Some text</p>
```

To change a background color:

```
Before: <section className="py-20 bg-white">
After:  <section className="py-20 bg-illuminious-navy">
```

### Adding a New Page

1. Create the page file: `client/src/pages/YourPage.tsx`
2. Add the route in `client/src/App.tsx`:
   ```tsx
   import YourPage from "./pages/YourPage";
   // Inside the <Switch> block:
   <Route path="/your-page" component={YourPage} />
   ```

### Adding Images

1. Place the image file in `client/public/images/`
2. Reference it in code as: `src="/images/your-image.png"`

---

## Step 4: Preview Locally

```bash
cd /mnt/d/web3/illuminious-web
pnpm install
pnpm dev
```

Open your browser to: **http://localhost:3000/**

The dev server has hot-reload: any file changes will instantly reflect in the browser
without restarting.

To stop the server: press `Ctrl + C` in the terminal.

### If pnpm gives EPERM errors on /mnt/d/

Use npm as a fallback:

```bash
npm install --legacy-peer-deps
npm run dev
```

### Troubleshooting

| Problem | Solution |
|---------|---------|
| `pnpm: command not found` | Run: `sudo npm install -g pnpm` |
| `node: not found` | Install Node.js (see Prerequisites) |
| Port 3000 in use | The server auto-tries ports 3001-3020 |
| EPERM errors with pnpm | Use `npm install --legacy-peer-deps` instead |

---

## Step 5: Commit Your Changes

After verifying your changes look correct in the browser:

```bash
cd /mnt/d/web3/illuminious-web

# See what files you changed
git status

# See the actual changes
git diff

# Stage all changes
git add -A

# Commit with a descriptive message
git commit -m "Description of what you changed"
```

### Writing Good Commit Messages

- `Fix text color on Services page CTA section`
- `Add new case study for IoT wearable project`
- `Update contact phone number in Footer`
- `Replace hero image on About page`

---

## Step 6: Push to GitHub

```bash
export GIT_SSH_COMMAND="ssh -i /home/jamesg27/.ssh/id_ed25519"

git push origin main
```

That's it. Since you're working directly on `main`, the push goes straight to the
main branch on GitHub.

---

## Step 7: Verify on GitHub

1. Go to https://github.com/tudsds/illuminious-web
2. Check that your latest commit appears at the top
3. Click on the commit to review the changes

---

## Quick Reference: Full Workflow in One Block

```bash
# Setup SSH (run once per WSL session)
mkdir -p /home/jamesg27/.ssh
cp /mnt/d/web3/.ssh/id_ed25519 /home/jamesg27/.ssh/id_ed25519
chmod 600 /home/jamesg27/.ssh/id_ed25519
echo "Host github.com
  IdentityFile /home/jamesg27/.ssh/id_ed25519
  IdentitiesOnly yes" > /home/jamesg27/.ssh/config
chmod 600 /home/jamesg27/.ssh/config
export GIT_SSH_COMMAND="ssh -i /home/jamesg27/.ssh/id_ed25519"

# Pull latest
cd /mnt/d/web3/illuminious-web
git checkout main
git pull origin main

# Make your edits in your code editor...

# Preview locally
pnpm install
pnpm dev
# Open http://localhost:3000/ in browser
# Press Ctrl+C to stop when done previewing

# Commit and push
git add -A
git commit -m "Your change description"
git push origin main
```
