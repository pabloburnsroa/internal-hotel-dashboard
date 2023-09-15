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
- Database: Postgres database [supabase](https://supabase.com/)

## Installation

## Tests
TBC

## Modeling The App State Using Supabase (PostgresDB)
1. Bookings - each booking will need guest and room info (use foreign keys to connect tables together in PostgresDB)
2. Rooms - each room will need guest and booking info
3. Guests
4. Settings
5. Users 

- All of the 5 will be stored in supabase as global remote state - one table for each state slice in the DB
- Managed on the front-end using ReactQuery

## Connecting The App with Our Supabase DB
```
npm install @supabase/supabase-js


import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

```
### Using TanStack Query (FKA React Query)
[TanStack Docs](https://tanstack.com/query/guides/getting-started#installation)
#### Why use TanStack Query?
- Aysnchronous state management
- Declarative, handles caching, background updates
- Pre-fetching data
- Automatic re-fetching to keep state synched
- Offline support (User can use cached data)
- Required as remote state is different from 'regular' UI state - out-of-sync

### Installing TanStack Query
```
npm i @tanstack/react-query
```

### How to Use?
TBC

### Credits
- Folder structure: [Web Dev Simplified](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)


### Additional Packages 
- [React Icons](https://www.npmjs.com/package/@iconscout/react-unicons): For icons
- [React Hot Toast](https://react-hot-toast.com/) 
- [React-Hook-Form](https://react-hook-form.com/get-started)


### License