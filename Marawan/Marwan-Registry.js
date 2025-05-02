function showForm(formId) {
  const forms = document.querySelectorAll('.form');
  const targetForm = document.getElementById(formId);
  const message = document.getElementById('message');

  forms.forEach(form => {
      if (form.id !== formId) {
          form.classList.remove('active');
          setTimeout(() => {
              form.style.display = 'none';
          }, 300);
      }
  });

  setTimeout(() => {
      targetForm.style.display = 'block';
      setTimeout(() => targetForm.classList.add('active'), 10);
  }, 300);

  message.textContent = '';
}

function login() {
  let username = document.getElementById('login-username').value;
  let password = document.getElementById('login-password').value;
  let message = document.getElementById('message');
  sessionStorage.setItem("loggedIn", "true");
  if (username && password) {
      message.textContent = `Welcome back, ${username}!`;
      message.style.color = 'green';
      window.location.href = '/index.html';
  } else {
      message.textContent = 'Please fill in both fields.';
      message.style.color = 'red';
  }
}

function signup() {
  let email = document.getElementById('signup-email').value;
  let password = document.getElementById('signup-password').value;
  let message = document.getElementById('message');
  sessionStorage.setItem("loggedIn", "true");
  if (email && password) {
      message.textContent = `Thanks for signing up, ${email}!`;
      message.style.color = 'green';
      window.location.href = '/index.html';
  } else {
      message.textContent = 'Please fill in both fields.';
      message.style.color = 'red';
  }
}

