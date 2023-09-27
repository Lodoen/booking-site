# Booking Site (Project Exam 2)

![pe2](https://github.com/Lodoen/booking-site/assets/95305401/cad28062-c7e3-4012-9baa-82b4d6652667)

## Description

This brief was assigned to me as Project Exam 2 during my Front-End studies.

The goal of the assignment was:
"_To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate’s general development capabilities, in addition to visual and technical skills._"

The brief was described as: "_A newly launched accommodation booking site called Holidaze has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end accommodation booking application._

_There are two aspects to this brief: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues._".

<br />

The project consists of 6 pages:

- A home page where users can view / filter venues
- A individual venue page showing the details of the selected venue
  - Allows for customers to book the venue
  - Allows for venue managers to update / delete a venue they manage
- Profile page
  - Allows for the user to update their avatar
- Create page
  - Allows venue managers to create venues
- A login page
- A register page

<br />

The following user stories were required by the brief:

- [x] A user may view a list of Venues
- [x] A user may search for a specific Venue
- [x] A user may view a specific Venue page by id
- [x] A user may view a calendar with available dates for a Venue
- [x] A user with a stud.noroff.no email may register as a customer
- [x] A registered customer may create a booking at a Venue
- [x] A registered customer may view their upcoming bookings
- [x] A user with a stud.noroff.no email may register as a Venue manager
- [x] A registered Venue manager may create a Venue
- [x] A registered Venue manager may update a Venue they manage
- [x] A registered Venue manager may delete a Venue they manage
- [x] A registered Venue manager may view bookings for a Venue they manage
- [x] A registered user may login
- [x] A registered user may update their avatar
- [x] A registered user may logout

<br />

Additionally I implemented:

- Ability to cancel bookings
- A functional media gallery on the venue page
- Filter functionality on the home page

<br />

## Planning and development

![Style Tile](https://github.com/Lodoen/booking-site/assets/95305401/9b4d4812-b9f8-4791-9f93-33847408ac60)

### Design

Designed and planned using:

- [Microsoft Excel](https://www.microsoft.com/en-us/microsoft-365/excel) (Gantt chart)
- [Figma](https://www.figma.com) (style guide and prototype)
- [Trello](https://trello.com) (kanban project board)

### Built With

The project was created using:

- HTML
- JavaScript
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [react-icons](https://react-icons.github.io/react-icons)
- [styled-components](https://styled-components.com/docs)
- [react-hook-form](https://github.com/react-hook-form/react-hook-form)
- [yup](https://github.com/jquense/yup)
- [Noroff Holidaze API](https://docs.noroff.dev/holidaze/authentication)

### Deployment

The project was deployed using:

- [Github pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
  - Hosted on my own domain

<br />

## Setup and running the project

### Installing

1. Clone the repo

```
git clone https://github.com/Lodoen/booking-site.git
```

2. Install dependencies

```
npm install
```

<br />

### Usage Instructions

1. Visit `https://docs.noroff.dev/about` for endpoints
2. Enter API url in `.env`

<br />

### Running

The project is developed using vite + react, and can be run locally using

```
npm run dev
```

<br />

## Contributing

Any issues can be reported [here](https://github.com/Lodoen/booking-site/issues).

<br />

## Resources used in style guide

1. [Illustrations and Photography 1](https://www.freepik.com/free-photo/family-have-fun-park_3180016.htm)
2. [Illustrations and Photography 2](https://www.freepik.com/free-photo/full-shot-friends-traveling-with-map_15694811.htm)
3. [Illustrations and Photography 3](https://www.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_3953407.htm)
4. [Illustrations and Photography 4](https://www.freepik.com/free-photo/map-gps-direction-navigation-route-travel_17129290.htm)
5. [Illustrations and Photography 5](https://www.freepik.com/free-vector/flat-hotel-booking-concept-background_4713392.htm)
6. [Illustrations and Photography 6](https://www.freepik.com/free-vector/hostel-tourists-marks-flat-illustration_17714761.htm)
7. [Icons](https://react-icons.github.io/react-icons/)
