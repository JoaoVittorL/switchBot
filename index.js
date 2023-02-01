const venom = require("venom-bot");

venom
  .create({
    session: "Send-group", //name of session
    multidevice: true, // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

let stage = 0;

function start(client) {
  client.onMessage((message) => {
    switch (stage) {
      case 0:
        if (message.body === "TI" && message.group === false) {
          stage = 1;""
          client.sendText(message.from, "Qual a sua solicitação de TI");
        } else if (message.body === "Obras") {
          stage = 1;
          client.sendText(message.from, "Digite o codigo da obra");
        } else {
          console.log("Eu amo a Roberrrta");
        }
        break;
      case 1:
        if (message.body === "Validação de rafa") {
          functionDoCodigo();
          client.sendText(message.from, "O código está feito obrigado");
        } else {
          console.log("codigo incorreto tente novamente muzy");
        }
        break;
      default:
        client.sendText(
          message.from,
          "Desculpe, não entendi o que você quer dizer."
        );
        stage = 0;
        break;
    }
  });
}
