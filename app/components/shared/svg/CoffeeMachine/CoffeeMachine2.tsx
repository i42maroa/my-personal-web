'use client'
import * as STATES from '@/app/interface/machineCoffeeState.interface'
import styles from './CoffeeMachine2.module.css'
import { useState } from 'react'
import { CoffeeSvg } from './coffes/Coffee/Coffee'
import { MilkSvg } from './coffes/Milk/Milk'
import { LatteSvg } from './coffes/Latte/Latte'
import { GlassSvg } from './coffes/Glass/Glass'
import showComponent from '@/hook/showComponent'
import showComponentOr from '@/hook/showComponentOr'
import changeRootColors from '@/hook/changeColor'
import { STATE_TOGGLE } from '@/data/state-toggle.data'

export function CoffeeMachine2 () {
  const [state, setMachineState] = useState(STATES.INITIAL_STATE)
  const [drink, setDrinkChoice] = useState(STATES.DRINK.NONE)

  const showLiquidDependOfChoice = () => {
    switch (drink) {
      case STATES.DRINK.COFFEE:
        return styles.showCoffeLiquid
      case STATES.DRINK.LATTE:
        return styles.showLatteLiquid
      case STATES.DRINK.MILK:
        return styles.showMilkLiquid
      default:
        return styles.water
    }
  }

  const showPanel = (drink : STATES.DRINK) => {
    const show = state.showPanel && state.drinkPress === drink
    return showComponent(show, styles.disableClass)
  }

  const changeColor = () => {
    switch (drink) {
      case STATES.DRINK.COFFEE:
        changeRootColors(STATE_TOGGLE[2].color)
        break
      case STATES.DRINK.LATTE:
        changeRootColors(STATE_TOGGLE[1].color)
        break
      case STATES.DRINK.MILK:
        changeRootColors(STATE_TOGGLE[0].color)
    }

    setMachineState(STATES.INITIAL_STATE)
  }

  const clickDrinkButton = (state : STATES.CoffeeMachineStateInterface) => {
    setMachineState(state)
    setDrinkChoice(state.drinkPress)
  }

  return (

    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p>WORK & COFFEE</p>
      </div>
      <div className={styles.machineContainer}>
        <div className={styles.panelConatiner}>
          <div className={` ${showPanel(STATES.DRINK.COFFEE)}`}>
            <h3 className={styles.textPanel}>COFFEE</h3>
            <div className={styles.imagePanel}>
              <CoffeeSvg panel />
            </div>
          </div>
          <div className={`${showPanel(STATES.DRINK.LATTE)}`}>
            <h3 className={styles.textPanel}>LATTE</h3>
            <div className={styles.imagePanel}>
              <LatteSvg panel />
            </div>
          </div>
          <div className={`${showPanel(STATES.DRINK.MILK)}`}>
            <h3 className={styles.textPanel}>MILK</h3>
            <div className={styles.imagePanel}>
              <MilkSvg />
            </div>
          </div>
          <div className={`${styles.enjoyPanel} ${showComponentOr(state.showEnjoyPanel, styles.disableClass, styles.enabledEnjoyPanel)}`}>
            <h2 className={styles.enjoyText}>DISFRUTA</h2>
          </div>
        </div>
        <div className={styles.coffeeButtons}>
          <button className={styles.button} onClick={() => clickDrinkButton(STATES.CLICK_COFFEE_BUTTON)}>
            <CoffeeSvg panel={false} />
          </button>
          <button className={styles.button} onClick={() => clickDrinkButton(STATES.CLICK_LATTE_BUTTON)}>
            <LatteSvg panel={false} />
          </button>
          <button className={styles.button} onClick={() => clickDrinkButton(STATES.CLICK_MILK_BUTTON)}>
            <MilkSvg />
          </button>
        </div>
        <div className={styles.dispensatorContainer}>
          <div className={styles.coffeExit} />
          <div className={styles.coffeeArm} />
          <div className={`${styles.chorro} ${showComponentOr(state.showChorro, styles.hiddenClass, showLiquidDependOfChoice())} }`} />
          <div className={`${styles.glassContainer} ${showComponentOr(state.showGlass, styles.hiddenClass, styles.showGlassContainer)}`} onClick={changeColor}>
            <GlassSvg />
          </div>
        </div>
        <div className={styles.buttonReadyContainer}>
          <button className={`${styles.button} ${styles.buttonOk} ${showComponent(state.showReadyButton, styles.hiddenClass)}`} onClick={() => setMachineState(STATES.PUT_GLASS_EVENT)}>OK</button>
        </div>
      </div>
    </div>
  )
}
