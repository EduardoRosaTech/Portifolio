document.addEventListener('DOMContentLoaded', () => {
  const listaProjetos = document.getElementById('lista-projetos');

  fetch('https://api.github.com/users/EduardoRosaTech/repos')
    .then(response => response.json())
    .then(repos => {
      repos.forEach(repo => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${repo.name}</strong><br>${repo.description || 'Sem descrição.'} <br><a href="${repo.html_url}" target="_blank">Ver no GitHub</a>`;
        listaProjetos.appendChild(li);
      });
    })
    .catch(err => {
      listaProjetos.innerHTML = '<li>Erro ao carregar os projetos do GitHub.</li>';
      console.error(err);
    });
});