// Sample data for media items (in a real app, this would come from a server/database)
const mediaData = [
    { title: "Beautiful Beach", type: "image", src: "https://via.placeholder.com/200x150" },
    { title: "Relaxing Music", type: "audio", src: "https://via.placeholder.com/200x150" },
    { title: "Mountain Landscape", type: "image", src: "https://via.placeholder.com/200x150" },
    { title: "City Night Lights", type: "video", src: "https://via.placeholder.com/200x150" },
    { title: "Forest Stream", type: "image", src: "https://via.placeholder.com/200x150" },
    // Add more items as needed
  ];
  
  // Function to populate the media grid
  function populateMediaGrid() {
    const mediaGrid = document.getElementById("mediaGrid");
    mediaGrid.innerHTML = "";
  
    mediaData.forEach((media) => {
      const mediaItem = document.createElement("div");
      mediaItem.className = "media-item";
      
      if (media.type === "image") {
        mediaItem.innerHTML = `<img src="${media.src}" alt="${media.title}">`;
      } else if (media.type === "video") {
        mediaItem.innerHTML = `<video src="${media.src}" controls></video>`;
      } else if (media.type === "audio") {
        mediaItem.innerHTML = `<audio src="${media.src}" controls></audio>`;
      }
      
      const mediaInfo = document.createElement("div");
      mediaInfo.className = "media-info";
      mediaInfo.innerText = media.title;
      
      mediaItem.appendChild(mediaInfo);
      mediaGrid.appendChild(mediaItem);
    });
  }
  
  // Function to simulate search (filtering media by title)
  function searchMedia() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredMedia = mediaData.filter(media => 
      media.title.toLowerCase().includes(searchInput)
    );
  
    // Update media grid with filtered results
    const mediaGrid = document.getElementById("mediaGrid");
    mediaGrid.innerHTML = "";
  
    filteredMedia.forEach((media) => {
      const mediaItem = document.createElement("div");
      mediaItem.className = "media-item";
      
      if (media.type === "image") {
        mediaItem.innerHTML = `<img src="${media.src}" alt="${media.title}">`;
      } else if (media.type === "video") {
        mediaItem.innerHTML = `<video src="${media.src}" controls></video>`;
      } else if (media.type === "audio") {
        mediaItem.innerHTML = `<audio src="${media.src}" controls></audio>`;
      }
      
      const mediaInfo = document.createElement("div");
      mediaInfo.className = "media-info";
      mediaInfo.innerText = media.title;
      
      mediaItem.appendChild(mediaInfo);
      mediaGrid.appendChild(mediaItem);
    });
  }
  
  // Initialize the grid on page load
  populateMediaGrid();
  