
  function googleTranslateElementInit2() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      autoDisplay: false
    }, 'google_translate_element2');
  }








  function GTranslateFireEvent(el, eventName) {
    try {
      if (document.createEvent) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, true, true);
        el.dispatchEvent(event);
      } else {
        var event = document.createEventObject();
        el.fireEvent("on" + eventName, event);
      }
    } catch (e) {}
  }

  function doGTranslate(langPair) {
    if (langPair.value) langPair = langPair.value;
    if (langPair == '') return;
    var lang = langPair.split('|')[1];
    var combo;
    var selects = document.getElementsByTagName('select');
    for (var i = 0; i < selects.length; i++) {
      if (selects[i].className == 'goog-te-combo') {
        combo = selects[i];
        break;
      }
    }
    if (!combo || combo.length == 0 || combo.innerHTML.length == 0) {
      setTimeout(function() {
        doGTranslate(langPair)
      }, 500);
    } else {
      combo.value = lang;
      GTranslateFireEvent(combo, 'change');
      GTranslateFireEvent(combo, 'change');
    }
  }








    const employmentData = {
      chubb: {
        title: "Senior Data Engineer - 1",
        bullets: [
          "<b>Architected and implemented scalable data pipelines</b> in Databricks, integrating multiple sources and enhancing ETL speed by <b>30%</b>, which improved Qlik Sense dashboard reporting.",
          "<b>Migrated 6 legacy SSIS packages</b> from on-prem SQL Server to Apache Spark, reducing load times by <b>25%</b> and minimizing reliance on licensed platforms.",
          "<b>Designed a Spark-based reconciliation workflow</b> for Premiums and Claims data across Oracle, Azure SQL, and Actuarial Server, improving data accuracy by <b>40%</b>.",
          "<b>Optimized 15+ years of ACE/CHUBB premium transactions</b> using Spark and multithreading, cutting data extraction time from <b>8 to 3 hours</b>, increasing efficiency by <b>60%</b>.",
          "<b>Developed a Python reconciliation framework</b> that automated data validation, saving <b>4 hours of manual effort</b> and improving report efficiency by <b>90%</b>."
        ]
      },
      tcs: {
        title: "Data Analyst",
        bullets: [
          "<b>Developed Python automation</b> to streamline RFP preparation, saving <b>3 hours</b> of manual work and increasing efficiency by <b>25%</b>.",
          "<b>Designed and optimized process workflows</b>, reducing turnaround time and saving approximately <b>2 hours</b> compared to earlier methods.",
          "<b>Acted as a key liaison</b> between Account Managers and Retailers, gathering business requirements for tenders and managing <b>2 key accounts</b>.",
          "<b>Automated data quality checks</b>, reducing data-related errors by <b>25%</b> and improving report reliability for stakeholders.",
          "<b>Improved cross-functional collaboration</b> by translating business needs into actionable insights, ensuring better alignment during the tender process."
        ]
      },
      company3: {
        title: "Technical Recruiter",
        bullets: [
          "<b>Reviewed and screened profiles</b> for <b>10+ roles weekly</b>, submitting quality candidates to the Client Manager for a streamlined hiring process.",
          "<b>Translated business requirements</b> from <b>4+ hiring managers</b> into actionable talent acquisition strategies, ensuring targeted recruitment efforts.",
          "<b>Supported Fortune 500 clients</b> across <b>5 industries</b>—Banking, Automotive, Retail, E-Commerce, and Healthcare—enhancing cross-domain hiring effectiveness.",
          "<b>Collected and analyzed market intelligence</b> on job trends and competitive positions to inform recruitment strategy and improve candidate alignment.",
          "<b>Contributed to end-to-end recruitment</b> by coordinating with stakeholders, improving hiring cycle efficiency and candidate quality."
        ]
      }
    };
  
    function openEmploymentModal(companyKey) {
      const data = employmentData[companyKey];
      document.getElementById("modal-title").innerHTML = data.title;
      const list = document.getElementById("modal-description");
      list.innerHTML = data.bullets.map(b => `<li>${b}</li>`).join("");
      document.getElementById("employment-modal").classList.add("show");
    }
  
    function closeEmploymentModal() {
      document.getElementById("employment-modal").classList.remove("show");
    }
  
    function clickOutsideModal(event) {
      const modalContent = document.querySelector(".modal-content");
      if (!modalContent.contains(event.target)) {
        closeEmploymentModal();
      }
    }







  window.onload = function () {
    let currentPage = 0;
    const totalPages = 1;
    const projectSlider = document.getElementById('projectSlider');

    function updatePageIndicator() {
      document.getElementById('pageIndicator').textContent = `${currentPage + 1}/${totalPages}`;
    }

    function slideProjects(direction) {
      currentPage += direction;

      // Handle wrap-around
      if (currentPage < 0) {
        currentPage = totalPages - 1;
      } else if (currentPage >= totalPages) {
        currentPage = 0;
      }

      projectSlider.style.transform = `translateX(-${currentPage * 100}%)`;
      updatePageIndicator();
    }

    // Initialize
    updatePageIndicator();
    projectSlider.style.transform = 'translateX(0)';

    window.slideProjects = slideProjects;

    function openModal(title, description, link) {
      // Update the modal title
      document.getElementById('modalTitle').textContent = title;
      
      // Use innerHTML to allow links to work inside the description
      document.getElementById('modalDescription').innerHTML = description;
      
      // Update the modal link
      if (link) {
        document.getElementById('modalLink').href = link;
      }
      
      // Show the modal
      document.getElementById('projectModal').style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      document.getElementById('projectModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Attach to global scope so they work with inline onclick
    window.openModal = openModal;
    window.closeModal = closeModal;

    // Close modal when clicking outside
    window.onclick = function (event) {
      const modal = document.getElementById('projectModal');
      if (event.target == modal) {
        closeModal();
      }
    };

    // Calculate experience from Jan 17, 2019 to today
    const startDate = new Date("2019-01-17");
    const today = new Date();
    let months =
      (today.getFullYear() - startDate.getFullYear()) * 12 +
      (today.getMonth() - startDate.getMonth());

    if (today.getDate() < startDate.getDate()) {
      months--;
    }

    const experienceYears = (months / 12).toFixed(1);
    const expElement = document.getElementById("exp-years");
    if (expElement) {
      expElement.textContent = experienceYears;
    }
  };






 
// Get the dropdown elements
const resumeDropdown = document.querySelector('.resume-dropdown');
const dropdownContent = document.querySelector('.resume-dropdown-content');

// Toggle the dropdown visibility when the button is clicked
resumeDropdown.addEventListener('click', (event) => {
  // Prevent the click from propagating to the document and causing an immediate hide
  event.stopPropagation();

  // Toggle the dropdown visibility using 'active' class
  resumeDropdown.classList.toggle('active');
});

// Close the dropdown if clicking outside of it
document.addEventListener('click', (event) => {
  if (!resumeDropdown.contains(event.target)) {
    resumeDropdown.classList.remove('active');
  }
});






  let certCurrentIndex = 0;
  const certSlides = document.querySelectorAll('.certification-slide');
  const certSlider = document.getElementById('certificationSlider');
  const certPageIndicator = document.getElementById('certPageIndicator');
  
  function slideCertifications(direction) {
    certCurrentIndex += direction;

    // Prevent going out of bounds
    if (certCurrentIndex < 0) certCurrentIndex = 0;
    if (certCurrentIndex >= certSlides.length) certCurrentIndex = certSlides.length - 1;

    // Update slider position
    certSlider.style.transform = `translateX(-${certCurrentIndex * 100}%)`; // Slide the visible content
    certPageIndicator.textContent = `${certCurrentIndex + 1}/${certSlides.length}`; // Update page indicator
  }






  const testimonialSlider = document.getElementById("testimonialSlider");
  const testimonialCards = testimonialSlider.children;
  const testimonialsPerPage = 3;
  let testimonialIndex = 0;

  function slideTestimonials(direction) {
    const totalSlides = Math.ceil(testimonialCards.length / testimonialsPerPage);
    testimonialIndex += direction;

    if (testimonialIndex < 0) testimonialIndex = 0;
    if (testimonialIndex >= totalSlides) testimonialIndex = totalSlides - 1;

    const slideWidth = testimonialSlider.clientWidth;
    testimonialSlider.style.transform = `translateX(-${testimonialIndex * slideWidth}px)`;

    document.getElementById("testimonialIndicator").innerText = `${testimonialIndex + 1}`;
  }

  window.addEventListener("resize", () => {
    slideTestimonials(0); // Reset transform on resize
  });






  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          // Create the success modal dynamically
          const modal = document.createElement('div');
          modal.classList.add('success-modal');
          modal.innerHTML = `
            <div class="modal-content">
              <p>Your message has been sent successfully!</p>
            </div>
          `;
          
          // Append the modal to the body
          document.body.appendChild(modal);

          // Display the modal
          modal.style.display = 'block';

          // Hide modal after 2 seconds
          setTimeout(() => {
            modal.style.display = 'none';
            modal.remove(); // Remove the modal from the DOM after it's hidden
          }, 2000);

          // Reset the form after submission
          form.reset();
        } else {
          console.error('Form submission failed.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
