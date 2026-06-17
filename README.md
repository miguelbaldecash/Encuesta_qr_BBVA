# Encuesta QR BBVA - BaldeCash

Encuesta sobre adopcion del nuevo metodo de pago con QR BBVA, dirigida a clientes que aun no han utilizado esta opcion.

## Contexto

Como parte del experimento Fase 2 de pagos QR BBVA (junio 2026, 2,550 clientes), esta encuesta busca entender las barreras de adopcion en clientes que no eligieron pagar con QR.

## Marco teorico

Basada en el modelo **UTAUT2** (Venkatesh et al., 2012), adaptado para pagos moviles en Latinoamerica. Mide los siguientes constructos:

| Constructo | Pregunta |
|---|---|
| Condiciones facilitadoras | No tengo cuenta en BBVA |
| Expectativa de esfuerzo | Me parecio complicado el proceso |
| Confianza / Riesgo percibido | No estaba seguro de que el pago se registrara |
| Habito | Prefiero pagar por Yape porque ya lo conozco |
| Valor del precio | Me preocupaba que me cobraran algo adicional |

## Estructura

La encuesta tiene **branching logico** segun awareness:

- **Rama "Si lo vi"** (10 preguntas): razon abierta + 5 Likert + percepcion
- **Rama "No lo vi"** (7 preguntas): como pago, por que no vio el QR, disposicion a usarlo

Ambas ramas comparten preguntas finales de percepcion general y comentarios.

## URL

**https://miguelbaldecash.github.io/Encuesta_qr_BBVA/**

## Stack

HTML standalone, sin backend. Respuestas en `localStorage`. Para exportar: abrir consola (F12) y ejecutar `downloadResponses()`.
