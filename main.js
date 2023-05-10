// Use querySelectorAll to select all elements with the class name 'img-wrap'
const imgWraps = document.querySelectorAll('.img-wrap');

// Loop through each element with the class name 'img-wrap' and add event listener to it
imgWraps.forEach((imgWrap) => {
  const close = imgWrap.querySelector('.close');

  imgWrap.addEventListener('click', (event) => {
    // Prevent event bubbling to parent elements
    event.stopPropagation();

    // Add the 'preview' class to the element
    imgWrap.classList.add('preview');

    // Display the close button
    close.style.display = 'flex';
  });

  close.addEventListener('click', (event) => {
    // Prevent event bubbling to parent elements
    event.stopPropagation();

    // Remove the 'preview' class from the element
    imgWrap.classList.remove('preview');

    // Hide the close button
    close.style.display = 'none';
  });
});

//form
const form = document.getElementById('contact-form');

      form.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.querySelector('#fname').value.trim();
        const lastName = document.querySelector('#lname').value.trim();
        const email = document.querySelector('#email').value.trim();
        const country = document.querySelector('#country').value.trim();
        const subject = document.querySelector('#subject').value.trim();

        if (firstName === '' || lastName === '' || email === '' || country === '' || subject === '') {
          alert('Please fill in all fields');
          return;
        }

        alert(`Thank you for your message, ${firstName}! We will get back to you as soon as possible.`);
        form.reset();
      });