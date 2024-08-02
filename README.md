# Patient Management 

## Overview

This is a frontend application built with Next.js, React, TypeScript, Tailwind and React Query. The application enables users to manage patient data, including retrieving, displaying, editing, deleting and adding patient records. It features an interactive and responsive user interface, form validation, and user-friendly feedback.

I chose to use Next.js for this project because I'm also interested in backend development and wanted to create a clean, integrated application. By avoiding mocks and shortcuts, I aimed to showcase my skills in creating a robust, full-featured application from start to finish.

I deployed the application on Vercel  [patient-management-rinavas-projects.vercel.app](https://patient-management-rinavas-projects.vercel.app)

## Features

- **Patient Cards**: Fetch and display patient records in cards with expandable/collapsible details.
- **Modal for Editing and Adding**: Use a modal component to edit existing patient data or add new patients.
- **Form Validation**: Validate data both on the frontend and backend, including regex for URL inputs.
- **Search Functionality** (Bonus): Search through patient records with a search bar.
- **Toast Notifications** (Bonus): Show user-friendly notifications for successful or failed data modifications.
- **Backend Integration** (Bonus): Implemented a backend with PostgreSQL for persistent data.
- **Custom Components**: Created all components, helpers, and hooks from scratch.
- **Responsive Design**: Ensure the application is responsive and works on different screen sizes.
- **Loading States**: Display loading states while fetching data or submitting forms.
- **Error Handling**: Show error messages when data fetching or submission fails.
- **Performance**: Optimized for performance with good metrics in Lighthouse.
- **UI/UX**: Designed custom components from scratch to ensure flexibility and maintain a unique design.

### Lighthouse Metrics 
This metrics are for the deployed version on my website but I can't provide the link because this challenge is anonymous. The Vercel version gives a low score on the SEO, that's because the website is not indexed by google.

#### Mobile
![image](https://github.com/user-attachments/assets/31332d12-62dc-44ed-b628-527dba3462ae)
#### Desktop
![image](https://github.com/user-attachments/assets/b8ca8d0b-461b-47f7-a162-fad2545672ce)

## Design 
I designed an idea of how the application should look like in figma. The design is simple and clean.
### Desktop
![image](https://github.com/user-attachments/assets/a0d880fc-8fb5-4141-bc2a-e9cdb5047aa8)
### Mobile
![image](https://github.com/user-attachments/assets/6ef999f1-bd48-4d00-bc16-f60904bc7e0c)

## Installation
1. Clone the repository and navigate to the project directory.
2. Paste the `.env` file into the root directory.
3. Install dependencies with `npm install`.
4. Start the development server with `npm run dev`.
5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.
