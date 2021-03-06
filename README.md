# MyNotes App
Capstone Project from the Web Development Bootcamp at [neueFische](https://www.neuefische.de/weiterbildung/web-development) 🐠

## About:
From once-in-a-lifetime events to everyday moments. MyNotes offers you the possibility to keep your memories save in one private digital place! For this purpose, you have a complete create and edit mode for your notes, which also includes the possibility for uploading photos. If you enable geolocation in your device settings, your location will be automatically added to each note. How convenient is that! Of course, you can also edit your location manually. To make it easy for you to navigate through your memories, you can use a full text search to find individual notes. Or you can use different filters to sort your notes by categories. Possibilities are endless, because you can create new categories yourself and use them as filters too.

<div>
<img align="left" width="250px" src="https://user-images.githubusercontent.com/97477326/161311743-122b5367-7833-4cc6-a504-337e7c94bda5.png" alt="Screenshot of MyNotes App" />
  <img  width="250px" src="https://user-images.githubusercontent.com/97477326/161312813-8b82879d-3e3e-4e80-b74a-6228b1939c49.png" alt="Screenshot of MyNotes App"/>
</div>


## Features:

- Create your Notes including date, individual categories, location, title, your personal text and optional images
- Each Note is fully editable afterwards
- Image Upload via Cloudinary
- Your location will be added automatically on create if you have agreed and enabled geolocation in your device settings.<br>
  Of course, you can also edit your location manually
- Use a full-text-search to find single Notes
- Filter your Notes by categories
- Create new categories and use them as filters when you need them


## Demo: 

#### Find the hosted version of the App here: [MyNotes - Demo](https://capstone-project-phi-rosy.vercel.app/)

As I go mobile first you will have the best app experience on mobile screen size from 375 to 428 pixel width


## Tech Stack:

Built with [Create React App](https://github.com/facebook/create-react-app) 

- React
- React Router
- React Hook Form
- React Testing Library
- Axios
- Styled Components
- Storybook
- Cloudinary
- OpenStreetMap


## Project Setup:

- Clone this repository
- Install with `npm install`
- Run on localhost with `npm start`
- Run tests with `npm run test`
- Run Storybook with `npm run storybook`
- You need an account on cloudinary to work with this app
- Create .env.local file #please check if you have added env.local in your .gitignore


## Cloudinary Setup
- Create an account on https://cloudinary.com/
- Go to https://cloudinary.com/console/settings/upload#upload_presets
- Click Enable unsigned uploading
- Copy the preset name (the 8 character hash below name)
- Add your cloudname and preset name to .env.local
