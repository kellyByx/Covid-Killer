import './styles.scss';
import { vaccins } from './src/data';

const app = document.querySelector('#app');
function render() {
// cration de la liste de card des vaccins:
  let vaccinsContainer = '<section>';
  vaccinsContainer += '<h1> Nom site </h1>';
  vaccinsContainer += `
<header>
    <button> Prix </button>
    <button id="nonApprouve"> Caché les vaccins NONs approuvés </button>
</header>
`;
  vaccinsContainer += '<main>';
  for (let i = 0; i < vaccins.length; i++) {
    vaccinsContainer += `
  <div class="card" style="width: 18rem;">
  <img src="images/${vaccins[i].image}" class="card-img-top" alt="vaccin">
  <div class="card-body">
    <h5 class="card-title">Nom: ${vaccins[i].nom}</h5>
    <p class="card-text">Inventeurs: ${vaccins[i].inventeurs}</p>
    <p class="card-text">Lieux de production: ${vaccins[i].lieuxDeProduction}</p>
    <p class="card-text">Technologie: ${vaccins[i].technologie}</p>
    <p class="card-text">Quantité: ${vaccins[i].quantite}</p>
    <p class="card-text">Prix à l'unité: ${vaccins[i].prixUnitaire} $</p>
    <p class="card-text">Approuvé: ${vaccins[i].approuve ? 'approuvé' : 'non approuvé'}</p>
    <p> Indiquer la quantité souhaitée: </p>
    <input  id="${i}" value=""> </input>
    <button id="${i}" class="btn btn-primary btn-reserver">Réserver</button>
  </div>
</div>
    `;
  }
  vaccinsContainer += '<main>';

  // création du footer = resumer de commande + boutton valider
  let resumeCommande = '';
  resumeCommande += `
    <footer class="footer">
    <h4>Resume de la commande: </h4>
`;

  for (let j = 0; j < vaccins.length; j++) {
    if (vaccins[j].reserve) {
      resumeCommande += `
        <p> Vaccin : ${vaccins[j].nom} </p>
        `;

      // resumeCommande += quantiteInput;
    }
  }
  resumeCommande += `
    <button class='btn-commander'> Passer la commande </button>
     </footer>`;
  app.innerHTML = vaccinsContainer + resumeCommande;
}
render();

// boutton : click reserver vaccin:
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn-reserver')) {
    console.log('bouton reserver reconnu');

    const unVaccin = vaccins[e.target.id];
    unVaccin.reserve = !unVaccin.reserve;
    render();
    // if (unVaccin.reserve === true) {
    // disableButton(quantiteInput);
    // }
  }

  // bouton caché les vacccin non approuvés:
  if (e.target.matches('#nonApprouve')) {
    console.log('je suis le boutton selection app ou non');
    const VaccinsPasAp = app.querySelectorAll('.card');
    VaccinsPasAp.forEach((unVacinPasAp, i) => {
      if (vaccins[i].approuve === false) {
        if (unVacinPasAp.classList.contains('d-none')) {
          unVacinPasAp.classList.remove('d-none');
          e.target.innerHTML = 'Caché les vaccins NONs approuvés';
        } else {
          unVacinPasAp.classList.add('d-none');
          e.target.innerHTML = 'voir tous les vaccins';
        }
      }
    });
  }
});
