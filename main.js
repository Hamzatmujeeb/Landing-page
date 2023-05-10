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
