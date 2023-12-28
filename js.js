// Define sample blog post data
const blogPosts = [
  {
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
    author: "John Doe",
    date: "2022-01-01"
  },
  {
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
    author: "Jane Smith",
    date: "2022-01-15"
  }
];

// Function to display blog posts on the website
function displayBlogPosts() {
  const blogContainer = document.getElementById("blog-container");
  blogPosts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <p>By ${post.author} on ${post.date}</p>
    `;
    blogContainer.appendChild(postElement);
  });
}

// Call the function to display the blog posts when the page loads
document.addEventListener("DOMContentLoaded", displayBlogPosts);