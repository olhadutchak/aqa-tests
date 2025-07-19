# AQA Engineer Test Assessment – Playlist App

This project contains automated UI tests for the [Playlist App](https://vite-react-alpha-lemon.vercel.app/), built using **Cypress** and **JavaScript**.

## Project Overview

The goal is to test the core functionality of a simple playlist application: searching for tracks, adding them to a playlist, and verifying the total duration.

## Test Cases Implemented

1. **Search Functionality**
   - Enters a keyword in the search input field.
   - Verifies that only tracks matching the search are displayed.

2. **Add Track Using "+" Button**
   - Clicks the "+" button next to a track.
   - Verifies that the track appears in the "Your Playlist" section.

3. **Verify Total Duration of Playlist (in seconds)**
   - Adds multiple tracks to the playlist.
   - Manually calculates the total duration (from `"mm:ss"` format).
   - Verifies that it matches the UI-displayed total.

---

## Tech Stack

| Tool         | Purpose                   |
|--------------|---------------------------|
| Cypress      | UI automation framework   |
| JavaScript   | Test scripting language   |
| dotenv       | Managing environment vars |
| ESLint       | Code quality              |
| Prettier     | Code formatting           |

---

## Setup & Run Instructions

### 1. Clone the repo

```bash
git clone https://github.com/olhadutchak/aqa-tests.git
cd aqa-tests
npm install

## Configure environment
Create a .env file in the root directory: 
CYPRESS_BASE_URL=https://vite-react-alpha-lemon.vercel.app/

### Run tests

npx cypress open
npx cypress run
npm run test
