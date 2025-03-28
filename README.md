# Blog System

A simple blog system built with React.js that displays blog posts fetched from a public API, allows user comments and likes, includes a search/filter feature, and basic user authentication.

## Features

- **List Blogs**: Display a list of all blogs.
- **Blog Details**: View detailed information about a selected blog post.
- **Comments and Likes**: Users can add comments to blog posts and like them.
- **Search/Filter Feature**: Users can search for blogs based on titles.
- **User Authentication**: Basic authentication implemented using Context API.

## Technologies Used

- **Frontend**: React.js
- **API**: JSONPlaceholder
- **Styling**: Bootstrap
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm or yarn package manager.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/blog-system.git
   cd blog-system

2. Install dependencies:

   ```sh
   npm install
   ```
   or

   ```sh
   yarn install
   ```
3. Start the development server:

   ```sh
   npm start
   ```
   or

   ```sh
   yarn start
   ```
4. Open your browser and navigate to `http://localhost:3000`.
5. You should see the blog system running.
## Usage
1. **View Blogs**: The homepage displays a list of all blogs.
2. **View Blog Details**: Click on a blog title to view its details, including comments and likes.
3. **Add Comments**: Users can add comments to blog posts.
4. **Like Blogs**: Users can like blog posts.
5. **Search Blogs**: Use the search bar to filter blogs by title.
6. **User Authentication**: Users can log in to access certain features.
src/
|-- api/
|   |-- blogApi.js          # API integration to fetch blogs
|-- components/
|   |-- BlogList.js         # List of all blogs
|   |-- BlogDetails.js      # Detailed view of a single blog
|   |-- CommentSection.js    # Section for comments and likes
|-- context/
|   |-- AuthContext.js      # Context API for user authentication
|-- App.js                   # Main application component
|-- index.js                 # Entry point for the React application
|-- App.css                  # Global styles for the application

How to Use
Visit the home page to see a list of blogs.
Use the search box to filter blogs by title.
Click on a blog title to view details.
Add comments to the blog and like posts using the provided buttons.#   B l o g - F e t c h i n g A p i  
 