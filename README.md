# Project-Hydra

🦾 Comentário sobre o Projeto 

O Projeto Hydra consiste na modelagem prática de uma mão controlada individualmente por quatro servomotores SG90, cada um responsável pelo movimento de um “dedo”. O acionamento é feito por quatro botões independentes, permitindo que cada dedo se mova de forma separada o que simula de maneira eficiente o funcionamento básico de uma mão humana.

🎯 Objetivo do Projeto

O principal objetivo é demonstrar, de forma acessível e educacional, como funcionam:

A cinemática básica de próteses robóticas,

O controle individual de atuadores (neste caso, servos),

A integração entre eletrônica, programação e mecânica.

Esse tipo de modelo é muito usado em:

Iniciação à robótica,

Estudos sobre próteses acessíveis,

Demonstrações acadêmicas,

Projetos maker.

⚙️ Como o Sistema Funciona

Cada botão é ligado a uma entrada digital do Arduino. Quando o usuário pressiona um botão:

O Arduino identifica o sinal HIGH.

Ele envia um comando PWM ao servo correspondente.

O servo gira até a posição limite (ex.: 90°), puxando o fio do dedo da mão biônica e fechando o dedo.

Quando o botão é solto, o servo retorna ao ângulo inicial (0°), abrindo o dedo.

Ou seja:
👉 Botão pressionado = dedo fecha
👉 Botão solto = dedo abre

É uma lógica simples, mas muito eficiente para demonstrar controle biomecânico.

🧩 Componentes do Projeto

Conforme listado no seu Lean Canvas:

🔌 Eletrônicos

Arduino Uno

4 servomotores SG90

4 botões push-button

4 resistores de 10kΩ (pull-down)

Protoboard

Jumpers

Cabo USB

🛠️ Estrutura

A mão biônica (impresso em 3D, papelão ou madeira, dependendo do modelo)

🧠 Aprendizados Envolvidos

Esse projeto desenvolve várias competências importantes:

✔ Eletrônica básica

Você trabalha com:

Circuitos digitais

Resistores pull-down

Alimentação e controle de servos

✔ Programação em Arduino

Estruturas como:

Arrays

Condições (if)

Controle de estado

Saída PWM para servo

✔ Modelagem Robótica

Entendimento dos princípios:

Articulação via servomotor

Biomecânica simplificada

Prototipagem rápida

✔ Trabalho em equipe

O projeto envolve:

Divisão de funções

Planejamento

Montagem colaborativa

📹 Sobre o vídeo do Tinkercad

https://www.youtube.com/watch?v=d1GjJBS7WQA - Tinkercad

https://www.youtube.com/shorts/aA941x5Ryso - Fisico 
