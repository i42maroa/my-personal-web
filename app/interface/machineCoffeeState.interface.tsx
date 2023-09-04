export enum DRINK{
  COFFEE, LATTE, MILK, NONE
}

export interface CoffeeMachineStateInterface {
    showPanel:boolean,
    showEnjoyPanel: boolean,
    showReadyButton:boolean,
    showGlass:boolean,
    showChorro:boolean,
    drinkPress:DRINK
}

export const INITIAL_STATE:CoffeeMachineStateInterface = {
  showPanel: false,
  showEnjoyPanel: false,
  showReadyButton: false,
  showGlass: false,
  showChorro: false,
  drinkPress: DRINK.NONE
}

export const CLICK_COFFEE_BUTTON:CoffeeMachineStateInterface = {
  showPanel: true,
  showEnjoyPanel: false,
  showReadyButton: true,
  showGlass: false,
  showChorro: false,
  drinkPress: DRINK.COFFEE
}

export const CLICK_MILK_BUTTON:CoffeeMachineStateInterface = {
  showPanel: true,
  showEnjoyPanel: false,
  showReadyButton: true,
  showGlass: false,
  showChorro: false,
  drinkPress: DRINK.MILK
}

export const CLICK_LATTE_BUTTON:CoffeeMachineStateInterface = {
  showPanel: true,
  showEnjoyPanel: false,
  showReadyButton: true,
  showGlass: false,
  showChorro: false,
  drinkPress: DRINK.LATTE
}

export const PUT_GLASS_EVENT:CoffeeMachineStateInterface = {
  showPanel: false,
  showEnjoyPanel: true,
  showReadyButton: false,
  showGlass: true,
  showChorro: true,
  drinkPress: DRINK.NONE
}

export const CLICK_OK_BUTTON:CoffeeMachineStateInterface = {
  showPanel: false,
  showEnjoyPanel: true,
  showReadyButton: false,
  showGlass: true,
  showChorro: true,
  drinkPress: DRINK.NONE
}
