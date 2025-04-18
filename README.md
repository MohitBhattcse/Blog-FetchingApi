# Blog System
<br>
<br>
A simple blog system built with React.js that displays blog posts fetched from a public API, allows user comments and likes, includes a search/filter feature, and basic user authentication.
<br>
## Features
<br>
<br>
- **List Blogs**: Display a list of all blogs.<br>
- **Blog Details**: View detailed information about a selected blog post.<br>
- **Comments and Likes**: Users can add comments to blog posts and like them.<br>
- **Search/Filter Feature**: Users can search for blogs based on titles.<br>
- **User Authentication**: Basic authentication implemented using Context API.<br>
<br>
<br>
## Technologies Used<br>
- **Frontend**: React.js<br>
- **API**: JSONPlaceholder<br>
- **Styling**: Bootstrap<br>
- **State Management**: React Context API<br>
<br><br>
## Getting Started
<br><br>
### Prerequisites
<br><br>
- Node.js installed on your machine.<br>
- npm or yarn package manager.<br>
<br><br>
### Installation<br>
<br>
1. Clone the repository:
<br><br>
   ```sh
   git clone https://github.com/yourusername/blog-system.git
   cd blog-system
<br><br>
2. Install dependencies:
<br><br>
   ```sh<br>
   npm install
   ```
   or
<br><br>
   ```sh
   yarn install
   ```<br><br>
3. Start the development server:
<br>
   ```sh
   npm start<br><br>
   ```
   or
<br><br>
   ```sh
   yarn start
   ```<br><br>
4. Open your browser and navigate to `http://localhost:3000`.<br>
5. You should see the blog system running.<br><br>
## Usage<br>
1. **View Blogs**: The homepage displays a list of all blogs.<br>
2. **View Blog Details**: Click on a blog title to view its details, including comments and likes.<br>
3. **Add Comments**: Users can add comments to blog posts.<br>
4. **Like Blogs**: Users can like blog posts.<br>
5. **Search Blogs**: Use the search bar to filter blogs by title.<br>
6. **User Authentication**: Users can log in to access certain features.<br><br>
src/<br>
|-- api/<br>
|   |-- blogApi.js          # API integration to fetch blogs<br>
|-- components/<br>
|   |-- BlogList.js         # List of all blogs<br>
|   |-- BlogDetails.js      # Detailed view of a single blog<br>
|   |-- CommentSection.js    # Section for comments and likes<br>
|-- context/<br>
|   |-- AuthContext.js      # Context API for user authentication<br>
|-- App.js                   # Main application component<br>
|-- index.js                 # Entry point for the React application<br>
|-- App.css                  # Global styles for the application<br>
<br><br>
How to Use<br>
Visit the home page to see a list of blogs.<br>
Use the search box to filter blogs by title.<br>
Click on a blog title to view details.<br>
Add comments to the blog and like posts using the provided buttons.#   B l o g - F e t c h i n g A p i <br>
 
 
