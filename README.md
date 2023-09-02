# HotelNexus

## Project Description
HotelNexus is custom-built internal dashboard for small boutique hotels to manage bookings, rooms and guests.

## Screenshots
TBC

### Build Status
TBC

## Requirements & Features
#### Authentication
- Users are employees of the hotel, they will to log onto the app 
- New users can only be signed up by authorised users
- Users can upload an avatar, change name and password
- routes: /users, /login
- pages: SignUp, Login
#### Rooms
- App needs a table view with all rooms, showing a photo(s), name, capacity, price and discount if applicable
- Authorised users can update, delete, create new rooms
- routes: /rooms
- pages: Rooms
#### Bookings
- App requires a table view with all current bookings, showing arrival, departure dates, status, and paid amount, room and guest data
- Booking status's: unconfirmed, checked in, checked out. Filter table by status
- Booking data includes: number of guests, number of nights, guest observations, breakfast, breakfast price
- route: /bookings
- pages: Bookings
#### Check in/out
- Users should be able to check in, check out and delete a guest, update?
- On check in, users need to accept payment and confirm (if guest not paid before arrival)
- Guest should be able to add breakfast for entire stay if not already
- routes: /checkin/:bookingID
#### Guests
- Guest data: name, email, national id, nationality, flag of nationality, emergency number
#### Dashboard
- Dashboard (home screen) should display, 1,7,30,90 days of booking information with information: list of guests, stats on recent booking (sales, check ins, occupancy rate), daily hotel sales, stay durations
- route: /dashboard
- pages: Dashboard
#### Settings
- Users should be able to update app-wide settings: breakfast price, min, max nights/booking, max guests
- App should have dark/light mode
- routes: /settings
- pages: Settings

## Tech Stack
- Routing: [React Router](https://reactrouter.com/en/main)
- Styling: [styled-components](https://styled-components.com/)
- State management: React Query ([TanStack](https://tanstack.com/query/latest/docs/react/overview))
- UI state management: Context API
- Form management: [React Hook Form](https://www.react-hook-form.com/)

## Installation
TBC

## Tests
TBC

### How to Use?
TBC

### Credits
- Folder structure: [Web Dev Simplified](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)

### License