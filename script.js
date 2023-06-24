let discordSpan = document.getElementById("discordSpan")



// function copyText() {
//     const textToCopy = "Renanzera#9977";
//     navigator.clipboard.writeText(textToCopy).then(function() {
//       console.log('Texto copiado para a área de transferência!');
//       discordSpan.innerText = "Copiado!"
//       setTimeout(function(){
//         discordSpan.innerText = "Discord"
//       }, 2000)
//     }, function(err) {
//       discordSpan.innerText = `Erro: ${err}`
//       console.error('Não foi possível copiar o texto: ', err);
//     });
// }

function copyText() {
  const textToCopy = "Renanzera#9977";
  navigator.permissions.query({name: "clipboard-write"}).then(result => {
    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('Texto copiado para a área de transferência!');
        discordSpan.innerText = "Copiado!"
        setTimeout(function(){
          discordSpan.innerText = "Discord"
        }, 2000)
      }, function(err) {
        discordSpan.innerText = `Erro: ${err}`
        console.error('Não foi possível copiar o texto: ', err);
      });
    }
  });
}








