# MyNotes App

> Capstone Project from the Web Development Bootcamp [neueFische](https://www.neuefische.de/weiterbildung/web-development) 🐠

> Built with [Create React App](https://github.com/facebook/create-react-app) 

## Features:
- Save your Notes by adding Notes with a date, individual categories, a location, a title, your personal text and images
- Your location will be added to your note automatically on create if you have agreed and enabled geolocation in your device settings. Of course, you can also edit your location manually
- Each note can be fully edited afterwards
- Use a full-text-search to find single Notes
- Filter your Notes by categories by 
  - adding categories to every Note on create
  - adding categories afterwards on editing Notes
- Create new categories and use them as filters when you need them
- 
## About:

<div align="left">
<img width="250px" src="https://user-images.githubusercontent.com/97477326/161311743-122b5367-7833-4cc6-a504-337e7c94bda5.png" alt="Screenshot of MyNotes App" />
  <img width="250px" src="https://user-images.githubusercontent.com/97477326/161312813-8b82879d-3e3e-4e80-b74a-6228b1939c49.png" alt="Screenshot of MyNotes App"/>
</div>

## Demo: 

Find the hosted version of the App on Vercel: [MyNotes - Demo](https://capstone-project-phi-rosy.vercel.app/)
<br>
As I go "mobile first" you will have the best app experience on mobile screen size from 375 to 428 pixel width


## Tech Stack:

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
- Run on http://localhost:3000/ with `npm start`
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
