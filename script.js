// Função para calcular o total e atualizar a exibição
function updateTotal() {
    const ticketQuantity = document.getElementById("ticket-quantity").value;
    const ticketPrice = 60; // Preço fixo
    const totalValue = ticketQuantity * ticketPrice;
    document.getElementById("total-value").innerText = totalValue;
    updateBuyerFields(ticketQuantity); // Atualiza os campos de comprador
}

// Função para atualizar os campos de comprador
function updateBuyerFields(quantity) {
    const buyer2Fields = document.getElementById("buyer2-fields");
    if (quantity == 2) {
        buyer2Fields.style.display = "block";
    } else {
        buyer2Fields.style.display = "none";
    }
}

// Função para validar nome completo (nome e sobrenome)
function isValidName(name) {
    const nameParts = name.trim().split(" ");
    return nameParts.length >= 2 && nameParts[1] !== ""; // Verifica se há pelo menos duas palavras e a segunda não está vazia
}

// Função para concluir a compra
function purchaseTicket() {
    const quantity = document.getElementById("ticket-quantity").value;
    const guestName1 = document.getElementById("guest-name1").value;
    const guestCPF1 = document.getElementById("guest-cpf1").value;
    const guestName2 = quantity == 2 ? document.getElementById("guest-name2").value : '';
    const guestCPF2 = quantity == 2 ? document.getElementById("guest-cpf2").value : '';
    const messageBox = document.getElementById("message-box");

    // Validação do nome completo
    if (!isValidName(guestName1)) {
        messageBox.style.display = "block";
        messageBox.innerText = "Por favor, insira o Nome Completo 1 (nome e sobrenome).";
        return;
    }
    
    if (quantity == 2 && !isValidName(guestName2)) {
        messageBox.style.display = "block";
        messageBox.innerText = "Por favor, insira o Nome Completo 2 (nome e sobrenome).";
        return;
    }
    
    // Validação do CPF
    if (!isValidCPF(guestCPF1)) {
        messageBox.style.display = "block";
        messageBox.innerText = "CPF 1 inválido. Por favor, digite um CPF válido.";
        return;
    }

    if (quantity == 2 && !isValidCPF(guestCPF2)) {
        messageBox.style.display = "block";
        messageBox.innerText = "CPF 2 inválido. Por favor, digite um CPF válido.";
        return;
    }

    // Se os CPFs e os nomes forem válidos
    const totalValue = document.getElementById("total-value").innerText;
    const whatsappLink = https://wa.me/5531997746789?text=Olá, gostaria de finalizar a compra do(s) ingresso(s).%0A%0A*Nome Completo 1:* ${guestName1}%0A*CPF 1:* ${guestCPF1}%0A${quantity == 2 ? %0A*Nome Completo 2:* ${guestName2}%0A*CPF 2:* ${guestCPF2}%0A : ''}%0A*Quantidade de Ingressos:* ${quantity}%0A%0A*Valor Total:* R$${totalValue}%0A%0AVou enviar o comprovante.;

    messageBox.style.display = "block";
    messageBox.innerHTML = Chave PIX: freakynight2024@gmail.com<br>Para finalizar a compra, envie o comprovante para o WhatsApp:<br><br><strong><a href="${whatsappLink}" target="_blank">Clique aqui para enviar</a></strong>;
}

// Função para validar o CPF (exemplo usando uma biblioteca)
function isValidCPF(cpf) {
  // Utilize uma biblioteca de validação de CPF aqui
  // Exemplo usando a biblioteca 'cpf_cnpj':
  return cpf_cnpj.validate(cpf);
}

// Função para atualizar o preço do ingresso e exibir informações do lote
function updatePrice() {
  const hoje = new Date();
  let loteAtual;
  for (let lote of lotes) {
    if (hoje >= lote.inicio && hoje <= lote.fim) {
      loteAtual = lote;
      break;
    }
  }

  const precoAtual = loteAtual ? loteAtual.preco : 60; // Preço padrão se não encontrar lote
  document.getElementById("total-value").innerText = precoAtual;

  // Exibir informações do lote atual (opcional)
  const loteInfoElement = document.getElementById("lote-info");
  if (loteAtual) {
    loteInfoElement.textContent = `Lote atual: ${loteAtual.preco} - Válido até ${loteAtual.fim.toLocaleDateString()}`;
  } else {
    loteInfoElement.textContent = "Não há lotes disponíveis no momento.";
  }
}


// Função para exibir informações sobre o evento
function showEventInfo() {
    const eventInfo = document.getElementById("event-info");
    if (eventInfo.style.display === "none") {
        eventInfo.style.display = "block";
    } else {
        eventInfo.style.display = "none";
    }
}
