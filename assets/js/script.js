var app = new Framework7({
  root: '#app',
  name: 'Pharma Eureka',
  id: 'com.pharma.eureka',
  colors: {
    // specify primary color theme
    primary: '#006D44'
  },
  theme: 'auto'
});

function sendCmd(cmd) {
  fetch(`https://PC-ROBOTIK:5000/run/${cmd}`)
    .then(res => res.json())
    .then(data => {
      app.notification.create({
                title: 'Pharma Eureka',
                text: `✅ Commande "${cmd}" envoyée avec succès !`,
                closeTimeout: 3000,  // ferme automatiquement après 3s
            }).open();
    })
    .catch(err => {
      app.notification.create({
                title: 'Erreur',
                text: `❌ Impossible d'envoyer la commande "${cmd}" => "${err}" `,
                color: 'red',
                closeTimeout: 5000,
            }).open();
    });
}

