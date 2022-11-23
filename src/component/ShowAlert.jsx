function ShowAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.wrapper');
  const card = document.querySelector('.card');
  container.insertBefore(div, card);

  // Vanish in 3 seconds
  setTimeout(() => document.querySelector('.alert').remove(), 1500);
}

export default ShowAlert;