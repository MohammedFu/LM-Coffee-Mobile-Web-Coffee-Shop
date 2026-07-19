# LM Coffee — Mobile & Web Coffee Shop

A small Expo + React Native demo app showcasing a Coffee Shop UI: a landing screen with background art, a menu list, and a contact page with phone/sms links and hours. Built with Expo Router (file-based routing) and designed to run on iOS, Android, and web.

---

## screenshots

 `assets/images/iced-coffee.png`.

---

## Features

- Expo-based universal app (iOS, Android, web)
- File-based routing via `expo-router`
- Light / Dark theme support using `Appearance`
- Menu list with images and descriptions (FlatList)
- Contact screen with click-to-call and SMS links
- Simple, self-contained constants for colors, menu items, and images

---

## Tech stack

- Expo SDK 53
- React 19
- React Native 0.79.2
- expo-router (file-based routing)
- @expo/vector-icons, react-navigation
- JavaScript / JSX (project scaffolded with TypeScript config)

---

## Quick start

Prerequisites
- Node.js (recommended LTS)
- npm (or yarn)
- Expo CLI available via `npx` (no global install required)

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx expo start
```

Open directly:
- Android emulator: `npm run android`
- iOS simulator: `npm run ios`
- Web: `npm run web`

Reset the starter project (moves current starter to `app-example` and creates a blank `app/` folder):

```bash
npm run reset-project
```

Lint:

```bash
npm run lint
```

---

## Project structure

```
app/                    # File-based routes (expo-router)
  index.jsx             # Home / landing screen (background image, navigation)
  menu.jsx              # Menu screen (FlatList of MENU_ITEMS)
  contact.jsx           # Contact screen (phone, sms, hours)
  _layout.tsx           # App layout / navigation shell
  +not-found.tsx        # 404 / not found

assets/                 # Images and static assets (e.g. iced-coffee.png)
constants/              # Colors.ts, MenuItems.js, MenuImages.js
components/             # Reusable UI components (small or empty)
scripts/reset-project.js# Utility used by `npm run reset-project`
package.json            # Scripts and deps (expo, expo-router, react)
app.json, eas.json      # Expo and EAS configuration
```

---

## Files of interest

- `app/index.jsx` — home screen and navigation links
- `app/menu.jsx` — menu UI using `constants/MenuItems.js` and `constants/MenuImages.js`
- `app/contact.jsx` — contact details and click-to-call/SMS links
- `constants/Colors.ts` — theme color tokens (light/dark)
- `scripts/reset-project.js` — helper used by `npm run reset-project`

---

## Recommendations & next steps

- Convert `constants/MenuItems.js` and `constants/MenuImages.js` to TypeScript for better typing and editor experience.
- Move contact details (phone number, address, hours) into a config file or environment variables if you expect to reuse this for multiple shops.
- Add unit/UI tests for `Menu` and `Contact` (e.g. with Jest + @testing-library/react-native).
- Consider adding deep-linking and share functionality for menu items.

---

## Contributing

Contributions welcome. If you add features, please:
1. Fork and create a feature branch.
2. Run `npm install` and add/update tests.
3. Open a pull request with a clear description.

---

## Contact

The contact info inside the app:
- Store: LM Coffee Lane
- City: Sana'a City, Yemen
- Phone: 770-180-062
