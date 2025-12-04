#include <Servo.h>

Servo servo_10;
Servo servo_11;
Servo servo_12;
Servo servo_13;


const int botoes[] = {2, 3, 4, 5}; // Pinos dos botões
const int posicaoInicial = 0;
const int posicaoLimite = 90;
bool estadosServos[] = {false, false, false, false}; // Estado de cada servo (false=inicial, true=limite)
bool botoesAnteriores[] = {HIGH, HIGH, HIGH, HIGH}; // Para detectar transição de botão

void setup() {
  servo_10.attach(10, 500, 2500);
  servo_11.attach(11, 500, 2500);
  servo_12.attach(12, 500, 2500);
  servo_13.attach(13, 500, 2500);

  for (int i = 0; i < 4; i++) {
    pinMode(botoes[i], INPUT_PULLUP);
  }

  servo_10.write(posicaoInicial);
  servo_11.write(posicaoInicial);
  servo_12.write(posicaoInicial);
  servo_13.write(posicaoInicial);
}

void loop() {
  // Array com os servos
  Servo* servos[] = {&servo_10, &servo_11, &servo_12, &servo_13};

  for (int i = 0; i < 4; i++) {
    bool leituraAtual = digitalRead(botoes[i]);

    // Detecta transição de HIGH para LOW (botão foi pressionado)
    if (botoesAnteriores[i] == HIGH && leituraAtual == LOW) {
      if (estadosServos[i] == false) {
        servos[i]->write(posicaoLimite);
        estadosServos[i] = true;
      } else {
        servos[i]->write(posicaoInicial);
        estadosServos[i] = false;
      }
      delay(200); // debounce simples
    }

    botoesAnteriores[i] = leituraAtual;
  }
}