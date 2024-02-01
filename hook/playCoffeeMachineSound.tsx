export function playCoffeeMachineSound () {
  const reproducir = new Audio('audio/coffeeMachine.mp3')
  reproducir.volume = 0.7
  reproducir.play()
}
