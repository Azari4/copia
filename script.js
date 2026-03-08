// ===== CAROUSEL (hero alerts) – kept static 3-card display =====

// ===== SCROLL TO TOP =====
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== TABS =====
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// ===== DEGREE CIRCLE ANIMATION =====
const circle = document.querySelector('.circle');
if (circle) {
  setTimeout(() => {
    circle.style.strokeDasharray = '63, 100';
  }, 300);
}

// ===== REFRESH BUTTON SPIN =====
const refreshBtn = document.querySelector('.refresh-btn');
if (refreshBtn) {
  refreshBtn.addEventListener('click', () => {
    refreshBtn.style.transition = 'transform 0.6s ease';
    refreshBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      refreshBtn.style.transition = 'none';
      refreshBtn.style.transform = 'rotate(0deg)';
    }, 650);
  });
}

// ===== ADD NEW TASK BUTTON =====
const addTaskBtn = document.querySelector('.btn-outline');
if (addTaskBtn) {
  addTaskBtn.addEventListener('click', () => {
    const input = prompt('Enter a new task:');
    if (input && input.trim()) {
      const todoEmpty = document.querySelector('.todo-empty');
      if (todoEmpty) {
        todoEmpty.style.display = 'none';
      }
      const list = document.querySelector('.todo-list') || (() => {
        const ul = document.createElement('ul');
        ul.className = 'link-list todo-list';
        addTaskBtn.parentElement.insertBefore(ul, addTaskBtn);
        return ul;
      })();
      const li = document.createElement('li');
      li.innerHTML = `<span class="link-icon">✅</span><span>${input.trim()}</span>`;
      list.appendChild(li);
    }
  });
}
