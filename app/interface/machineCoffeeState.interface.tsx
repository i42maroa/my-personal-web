export interface CoffeeMachineStateInterface {
    showCoffeePanel:boolean,
    showMilkPanel:boolean,
    showLattePanel:boolean,
    showEnjoyPanel:boolean,
    showReadyButton:boolean,
    showGlass:boolean,
    showChorro:boolean
}

export const INITIAL_STATE:CoffeeMachineStateInterface = {
  showCoffeePanel: false,
  showMilkPanel: false,
  showLattePanel: false,
  showEnjoyPanel: false,
  showReadyButton: false,
  showGlass: false,
  showChorro: false
}

export const CLICK_COFFEE_BUTTON:CoffeeMachineStateInterface = {
  showCoffeePanel: true,
  showMilkPanel: false,
  showLattePanel: false,
  showEnjoyPanel: false,
  showReadyButton: true,
  showGlass: false,
  showChorro: false
}

export const CLICK_MILK_BUTTON:CoffeeMachineStateInterface = {
  showCoffeePanel: false,
  showMilkPanel: true,
  showLattePanel: false,
  showEnjoyPanel: false,
  showReadyButton: true,
  showGlass: false,
  showChorro: false
}

export const CLICK_LATTE_BUTTON:CoffeeMachineStateInterface = {
  showCoffeePanel: false,
  showMilkPanel: false,
  showLattePanel: true,
  showEnjoyPanel: false,
  showReadyButton: true,
  showGlass: false,
  showChorro: false
}

export const CLICK_OK_BUTTON:CoffeeMachineStateInterface = {
  showCoffeePanel: false,
  showMilkPanel: false,
  showLattePanel: false,
  showEnjoyPanel: true,
  showReadyButton: false,
  showGlass: true,
  showChorro: true
}
