// Menu items data with fixed special category image URLs
const menuItems = [
    {
      title: "Margherita Pizza",
      description: "Classic delight with fresh tomatoes, mozzarella cheese, and basil.",
      category: "vegetarian",
      price: "$12",
      img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "BBQ Chicken Wings",
      description: "Tender chicken wings glazed in smoky barbecue sauce.",
      category: "non-vegetarian",
      price: "$15",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Vegan Salad Bowl",
      description: "Mixed greens, chickpeas, avocado with a fresh lemon dressing.",
      category: "vegetarian",
      price: "$10",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Beef Steak",
      description: "Grilled beef steak with rosemary and red wine reduction.",
      category: "non-vegetarian",
      price: "$25",
      img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Chocolate Lava Cake",
      description: "Warm chocolate cake with gooey chocolate center.",
      category: "special",
      price: "$8",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
    }
  ];
  
  const menuContainer = document.getElementById('menu-items');
  const filterButtons = document.querySelectorAll('.menu-filters button');
  
  function displayMenuItems(items) {
    if (items.length === 0) {
      menuContainer.innerHTML = "<p>No items match the selected filter.</p>";
      return;
    }
    menuContainer.innerHTML = items.map(item => `
      <div class="menu-card" tabindex="0">
        <img src="${item.img}" alt="${item.title} image" loading="lazy" />
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span>${item.price}</span>
      </div>
    `).join('');
  }
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
  
      const filterVal = btn.getAttribute('data-filter');
      if (filterVal === 'all') {
        displayMenuItems(menuItems);
      } else {
        displayMenuItems(menuItems.filter(item => item.category === filterVal));
      }
    });
  });
  
  // Initialize menu display with 'all' items
  displayMenuItems(menuItems);
  
  // Reservation form handling
  const reservationForm = document.getElementById('reservationForm');
  const confirmation = document.getElementById('confirmation');
  const dateInput = document.getElementById('date');
  
  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
  
  reservationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if (!reservationForm.checkValidity()) {
      confirmation.style.color = 'red';
      confirmation.textContent = 'Please fill all required fields correctly.';
      confirmation.style.display = 'block';
      return;
    }
  
    const formData = {
      name: reservationForm.name.value.trim(),
      email: reservationForm.email.value.trim(),
      phone: reservationForm.phone.value.trim(),
      date: reservationForm.date.value,
      time: reservationForm.time.value,
    };
  
    // Simple confirmation message (since no backend/email)
    confirmation.style.color = '#2d662d';
    confirmation.textContent = `Thank you, ${formData.name}! Your reservation for ${formData.date} at ${formData.time} has been received. We look forward to serving you!`;
    confirmation.style.display = 'block';
  
    reservationForm.reset();
    dateInput.setAttribute('min', today);
  });
  
  // Navigation active link switching on click
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      navLinks.forEach(l => l.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
  
