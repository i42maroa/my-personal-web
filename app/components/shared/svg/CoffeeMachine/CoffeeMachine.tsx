'use client'
import * as STATES from '@/app/interface/machineCoffeeState.interface'
import styles from './CoffeeMachine.module.css'
import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { CoffeeSvg } from './coffes/Coffee/Coffee'
import { MilkSvg } from './coffes/Milk/Milk'
import { LatteSvg } from './coffes/Latte/Latte'
import { GlassSvg } from './coffes/Glass/Glass'
import showComponent from '@/hook/showComponent'
import showComponentOr from '@/hook/showComponentOr'
import { StatusColorContext } from '@/app/StatusContextProvider'
import { TurnOnButton } from '../Buttons/TurnOn'
import Link from 'next/link'
import changeContextState from '@/hook/changeContext'

export function CoffeeMachine ({ setShowNav, setShowCoffeMachine }:{setShowNav:Dispatch<SetStateAction<boolean>>, setShowCoffeMachine:Dispatch<SetStateAction<boolean>>}) {
  const [state, setMachineState] = useState(STATES.INITIAL_STATE)
  const [drink, setDrinkChoice] = useState(STATES.DRINK.NONE)
  const context = useContext(StatusColorContext)

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
        context.dispatch(changeContextState(context.state, { num: 2, show: true }))
        break
      case STATES.DRINK.LATTE:
        context.dispatch(changeContextState(context.state, { num: 1, show: true }))
        break
      case STATES.DRINK.MILK:
        context.dispatch(changeContextState(context.state, { num: 0, show: true }))
    }

    setMachineState(STATES.INITIAL_STATE)
  }

  const clickDrinkButton = (state : STATES.CoffeeMachineStateInterface) => {
    setMachineState(state)
    setDrinkChoice(state.drinkPress)
  }

  const handleOnButton = () => {
    setShowNav(false)
    setShowCoffeMachine(false)
    setMachineState(STATES.PUT_GLASS_EVENT)
    changeColor()
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span>COFFEE MACHINE</span>
      </div>
      <div className={styles.machineContainer}>

        <div className={styles.panelContainer}>
          <div className={` ${showPanel(STATES.DRINK.COFFEE)}`}>
            <div className={styles.imagePanel}>
              <CoffeeSvg panel />
            </div>
            <span className={styles.textPanel}>COFFEE</span>
          </div>
          <div className={`${showPanel(STATES.DRINK.LATTE)}`}>
            <div className={styles.imagePanel}>
              <LatteSvg panel />
            </div>
            <span className={styles.textPanel}>LATTE</span>
          </div>
          <div className={`${showPanel(STATES.DRINK.MILK)}`}>
            <div className={styles.imagePanel}>
              <MilkSvg />
            </div>
            <span className={styles.textPanel}>LECHE</span>
          </div>
          <div className={`${styles.enjoyPanel} ${showComponentOr(state.showEnjoyPanel, styles.disableClass, styles.enabledEnjoyPanel)}`}>
            <span className={styles.enjoyText}>DISFRUTA</span>
          </div>
        </div>
        <div className={styles.coffeeButtons}>
          {
            context.state.num !== STATES.DRINK.COFFEE &&
              <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => clickDrinkButton(STATES.CLICK_COFFEE_BUTTON)} />
                <span>EXPRESO</span>
              </div>
          }
          {
            context.state.num !== STATES.DRINK.LATTE &&
              <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => clickDrinkButton(STATES.CLICK_LATTE_BUTTON)} />
                <span>LATTE</span>
              </div>
          }
          {
            context.state.num !== STATES.DRINK.MILK &&
              <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => clickDrinkButton(STATES.CLICK_MILK_BUTTON)} />
                <span>LECHE</span>
              </div>
          }
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
          <Link href='/#frontal' className={`${styles.buttonOk} ${showComponent(state.showReadyButton, styles.hiddenClass)}`} onClick={() => handleOnButton()}>
            <TurnOnButton />
          </Link>
        </div>
      </div>
    </div>
  )
}
