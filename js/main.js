// Selectors
const logo = document.querySelector(".logo");
const headerMenu = document.querySelector("header .menu");
const navLinks = document.querySelector("nav ul");
const bookNowBtn = document.querySelector(".book-now");
const bookAnAppointmentBtn = document.querySelector(".cta-book");
const discoverMoreBtn = document.querySelector(".cta-discover");
const deptCardsContainer = document.querySelector(
  "#departments .container .content",
);
const docCardsContainer = document.querySelector(
  "#our-team .container .team-container",
);
const deptCardsData = [
  {
    icon: "fa-solid fa-heart-pulse",
    dept: "Cardiology",
    description:
      "Advanced diagnostics and treatments for heart conditions and cardiovascular health.",
  },
  {
    icon: "fa-solid fa-tooth",
    dept: "Dental Care",
    description:
      "Full range of dental services including cleaning, surgery, and cosmetic dentistry.",
  },
  {
    icon: "fa-solid fa-brain",
    dept: "Neurology",
    description:
      "Specialized treatment for brain, spinal cord, and nervous system disorders.",
  },
  {
    icon: "fa-solid fa-baby",
    dept: "Pediatrics",
    description:
      "Expert and compassionate medical care for infants, children, and teenagers.",
  },
  {
    icon: "fa-solid fa-eye",
    dept: "Ophthalmology",
    description:
      "Comprehensive eye exams and treatments for all vision-related issues.",
  },
  {
    icon: "fa-solid fa-bone",
    dept: "Orthopedics",
    description:
      "Effective treatment for bone, joint, and muscle conditions and sports injuries.",
  },
];
const docCardsData = [
  {
    image: "./assets/img/doctor1.jpg",
    name: "Dr. James Wilson",
    specialty: "Chief Cardiologist",
  },
  {
    image: "./assets/img/doctor2.jpg",
    name: "Dr. Sarah Johnson",
    specialty: "Chief Cardiologist",
  },
  {
    image: "./assets/img/doctor3.jpg",
    name: "Dr. Michael Chen",
    specialty: "Dental Surgeon",
  },
  {
    image: "./assets/img/doctor4.jpg",
    name: "Dr. Emily Davis",
    specialty: "Neurology Specialist",
  },
];
const form = document.querySelector(".contact-form form");
const nameInput = form.querySelector("input[name='name']");
const emailInput = form.querySelector("input[name='email']");
const phoneInput = form.querySelector("input[name='phone']");
const messageInput = form.querySelector("textarea[name='message']");
const formBookNowBtn = document.querySelector(
  ".contact-form button[type='submit']",
);
const goTopBtn = document.querySelector("#go-top");

// Functions
function openMenu() {
  navLinks.classList.toggle("h-0");
  navLinks.classList.toggle("h-67.5");
}

function drawDeptCards(data) {
  let cardsHtml = "";
  data.forEach((e) => {
    cardsHtml += `
          <div class="card group">
            <i
              class="${e.icon} group-hover:text-medical-primary"
            ></i>
            <div class="text">
              <h3 class="card-heading">${e.dept}</h3>
              <p class="card-para">${e.description}</p>
            </div>
          </div>
`;
  });
  deptCardsContainer.innerHTML = cardsHtml;
}

function drawDocCards(data) {
  let cardsHtml = "";
  data.forEach((e) => {
    cardsHtml += `
          <div class="card">
            <div class="image overflow-hidden w-20 h-20 rounded-full">
              <img
                src="${e.image}"
                alt="${e.name}"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="text">
              <h3 class="card-heading">${e.name}</h3>
              <p class="card-para">${e.specialty}</p>
            </div>
          </div>
    `;
  });
  docCardsContainer.innerHTML = cardsHtml;
}

function filterInput(input, regEx) {
  input.addEventListener("input", () => {
    input.value = input.value.replace(regEx, "");
    if (input.value.length > 3) {
      input.classList.add("border-green-500");
      input.classList.remove("border-red-500");
    } else {
      input.classList.remove("border-green-500");
      input.classList.add("border-red-500");
    }
  });
}

function validateForm() {
  let isValid = true;
  const inputs = [nameInput, emailInput, phoneInput, messageInput];

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("border-red-500");
      isValid = false;
    } else {
      input.classList.remove("border-red-500");
    }
  });
  if (isValid) {
    alert("All data has been sent!");
    form.reset();
  } else {
    alert("Please, enter correct data!");
  }
}

function showTopBtn() {
  if (scrollY > innerHeight) {
    goTopBtn.style.opacity = "1";
    goTopBtn.style.transform = "translateY(0)";
  } else {
    goTopBtn.style.opacity = "0";
    goTopBtn.style.transform = "translateY(20px)";
  }
}

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Validation
filterInput(nameInput, /[^a-zA-Z\s]/g);
filterInput(emailInput, /[^a-zA-Z0-9@._-]/g);
filterInput(phoneInput, /[^0-9]/g);
filterInput(messageInput, /[^a-zA-Z0-9\s.,!?]/g);

// Events
logo.addEventListener("click", () => (window.location.href = "index.html"));

headerMenu.addEventListener("click", openMenu);

bookNowBtn.addEventListener("click", () => {
  window.location.href = "#contact-us";
});

bookAnAppointmentBtn.addEventListener("click", () => {
  window.location.href = "#contact-us";
});

discoverMoreBtn.addEventListener("click", () => {
  window.location.href = "#departments";
});

addEventListener("load", () => {
  drawDeptCards(deptCardsData);
  drawDocCards(docCardsData);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

addEventListener("scroll", showTopBtn);

goTopBtn.addEventListener("click", goTop);
