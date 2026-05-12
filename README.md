# Movie App

A polished React movie discovery app that combines the TMDB API with Appwrite to deliver: search results, trending movies, and search analytics.

## Features

- Search thousands of movies using the TMDB API
- Display popular movies by default
- Show trending movie results based on previous searches stored in Appwrite
- Debounced search input for better performance
- Clean UI built with React and Tailwind CSS

## Technologies

- React 19
- Vite
- Tailwind CSS
- Appwrite
- TMDB API
- react-use

## How It Works

- `App.jsx` fetches movie data from TMDB.
- Search input is debounced using `useDebounce`.
- Appwrite stores search terms and counts for trending display.
- Trending movies are loaded from Appwrite and displayed separately.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with these variables:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_ENDPOINT=https://your-appwrite-endpoint/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local Vite URL shown in the terminal.

## Scripts

- `npm run dev` – start development server
- `npm run build` – create production build
- `npm run preview` – preview production build locally
- `npm run lint` – run ESLint

## Project Structure

- `src/App.jsx` – main app component and movie fetching logic
- `src/appwrite.js` – Appwrite database helpers for search tracking
- `src/components/search.jsx` – search input component
- `src/components/MovieCard.jsx` – movie card display component
- `src/components/spinner.jsx` – loading spinner

## Notes

- Make sure your TMDB API key is properly configured.
- Appwrite must be set up with a database and collection for search tracking.
- The trending section is generated from the Appwrite collection ordered by search count.

## License

This project is open for modification and learning purposes.
