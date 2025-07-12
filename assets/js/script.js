
      function toggleDropdown(id) {
        const dropdown = document.getElementById(id);
        dropdown.classList.toggle('hidden');
      }
    
      // Optional: Toggle entire mobile menu
      document.getElementById('menu-btn').addEventListener('click', function () {
        document.getElementById('menu').classList.toggle('hidden');
      });


     
      window.addEventListener("load", () => {
        setTimeout(() => {
          const preloader = document.querySelector(".preloader");
          preloader.classList.add("opacity-0");
          setTimeout(() => {
            preloader.style.display = "none";
          }, 700); // match the fade-out duration
        }, 2000); // 2 seconds delay to simulate loading
      });


