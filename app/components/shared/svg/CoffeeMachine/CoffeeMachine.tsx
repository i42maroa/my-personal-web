/* eslint-disable no-tabs */
'use client'
import { CLICK_COFFEE_BUTTON, CLICK_LATTE_BUTTON, CLICK_MILK_BUTTON, CLICK_OK_BUTTON, INITIAL_STATE } from '@/app/interface/machineCoffeeState.interface'
import styles from './CoffeeMachine.module.css'
import { useState } from 'react'
import showComponent from '@/hook/showComponent'

export function CoffeeMachine () {
  const [state, setMachineState] = useState(INITIAL_STATE)

  return (

    <svg
      version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
      viewBox='0 0 537.09 642.63' className={styles.container} xmlSpace='preserve'
    >
      <g id='Capa_2'>
        <path className={styles.st0} d='M512.2,61.64h-488V622.9c0,2.58,2.24,4.67,5,4.67h478c2.76,0,5-2.09,5-4.67V61.64z' />
        <path
          className={styles.st1} d='M475.7,473.14h-144c-2.76,0-5-2.24-5-5v-387c0-2.76,2.24-5,5-5h144c2.76,0,5,2.24,5,5v387
		C480.7,470.9,478.46,473.14,475.7,473.14z'
        />
        <path
          className={styles.st2} d='M280.69,584.52H61.89c-2.76,0-5-2.24-5-5V404.39c0-2.76,2.24-5,5-5h218.8c2.76,0,5,2.24,5,5v175.14
		C285.69,582.28,283.45,584.52,280.69,584.52z'
        />
        <path
          className={styles.st3} d='M267.71,576.3H75.97c-2.76,0-5-2.24-5-5V412.14c0-2.76,2.24-5,5-5h191.74c2.76,0,5,2.24,5,5V571.3
		C272.71,574.06,270.48,576.3,267.71,576.3z'
        />
        <path
          className={styles.st1} d='M288.03,76.14H55.06c-2.76,0-5,2.24-5,5v281c0,2.76,2.24,5,5,5h232.97c2.76,0,5-2.24,5-5v-281
		C293.03,78.38,290.79,76.14,288.03,76.14z'
        />
        <path
          className={styles.st4} d='M520.2,61.64h-504c-2.76,0-5-2.24-5-5v-35.5c0-2.76,2.24-5,5-5h504c2.76,0,5,2.24,5,5v35.5
		C525.2,59.4,522.96,61.64,520.2,61.64z'
        />
        <path
          className={styles.st5} d='M180.56,433.01h-17.9c-0.51,0-0.93-0.38-0.99-0.88l-3.06-24.99h25.87l-2.92,24.99
		C181.5,432.63,181.07,433.01,180.56,433.01z'
        />
        <rect x='69.2' y='24.14' className={styles.st1} width='398.59' height='29.9' />
        <text transform='matrix(1 0 0 1 161.2542 50.4947)' className={styles.st6 && styles.st7}>WORK &amp; COFFEE</text>
      </g>

      {/* BUTTONS */}
      {/* //////////////////////////// */}
      <g id='buttons'>
        <g id='ready_x5F_button' className={`${styles.readyButton} ${showComponent(state.showReadyButton, styles.disableClass)}`} onClick={() => setMachineState(CLICK_OK_BUTTON)}>
          <circle className={styles.st9} cx='405.04' cy='550.53' r='62.88' />
          <g id='enjoy'>
            <text transform='matrix(0.9668 0 0 1 368.1782 561.1173)' className={styles.text}>OK</text>
          </g>
        </g>
        <g id='latte_x5F_button' className={styles.latteButton} onClick={() => setMachineState(CLICK_LATTE_BUTTON)}>
          <circle className={styles.st9} cx='403.7' cy='268.64' r='50.5' />
          <g id='coffe'>
            <g>
              <circle className={styles.st11} cx='382.34' cy='282.72' r='9.53' />
              <circle className={styles.st9} cx='382.34' cy='282.72' r='5.95' />
            </g>
            <path
              className={styles.st11} d='M407.62,303.26L407.62,303.26c-13.34,0-24.15-10.81-24.15-24.15v-10.89h48.31v10.89
				C431.77,292.45,420.95,303.26,407.62,303.26z'
            />
            <path className={styles.st12} d='M387.83,279.41v-5.63h39.57v5.63' />
            <path className={styles.st13} d='M387.83,279.41c0,10.93,8.86,19.78,19.78,19.78h0c10.93,0,19.78-8.86,19.78-19.78H387.83z' />
            <g>
              <path d='M397.66,262.48c0.55-5.1,1.54-9.91-1.8-13.7c-4.99-4.89-6.93-12.7-4.52-19.26c1.34,2.92,2.52,5.57,3.8,8.02
					c1.12,2.08,2.28,3.94,3.76,5.69c0.78,0.84,1.7,1.82,2.34,2.77C404.82,251.36,402.47,258.98,397.66,262.48L397.66,262.48z'
              />
            </g>
            <g>
              <path d='M412.19,262.48c0.55-5.1,1.54-9.91-1.8-13.7c-4.99-4.89-6.93-12.7-4.52-19.26c1.34,2.92,2.52,5.57,3.8,8.02
					c1.12,2.08,2.28,3.94,3.76,5.69c0.78,0.84,1.7,1.82,2.34,2.77C419.35,251.36,417,258.98,412.19,262.48L412.19,262.48z'
              />
            </g>
          </g>
        </g>
        <g id='milk_x5F_button' className={styles.milkButton} onClick={() => setMachineState(CLICK_MILK_BUTTON)}>
          <circle className={styles.st9} cx='403.7' cy='399.64' r='50.5' />
          <g id='milk'>
            <path
              className={styles.st14} d='M421.33,440.35h-34.72c-0.83,0-1.53-0.62-1.62-1.45l-7.3-63.15c-0.11-0.97,0.65-1.82,1.62-1.82h49.69
				c0.98,0,1.74,0.86,1.62,1.83l-7.68,63.15C422.85,439.73,422.16,440.35,421.33,440.35z'
            />
            <path
              className={styles.st8} d='M417.81,434.61h-27.6c-0.66,0-1.22-0.49-1.29-1.13l-5.8-49.2c-0.09-0.76,0.51-1.42,1.29-1.42h39.5
				c0.78,0,1.39,0.67,1.29,1.43l-6.11,49.2C419.02,434.12,418.47,434.61,417.81,434.61z'
            />
          </g>
        </g>
        <g id='coffee_x5F_button' className={styles.coffeeButton} onClick={() => setMachineState(CLICK_COFFEE_BUTTON)}>
          <circle className={styles.st9} cx='403.7' cy='142.64' r='50.5' />
          <g id='latte'>
            <g>
              <circle className={styles.st11} cx='379.77' cy='156.22' r='9.53' />
              <circle className={styles.st9} cx='379.77' cy='156.22' r='5.95' />
            </g>
            <path
              className={styles.st11} d='M405.04,176.76L405.04,176.76c-13.34,0-24.15-10.81-24.15-24.15v-10.89h48.31v10.89
				C429.2,165.95,418.38,176.76,405.04,176.76z'
            />
            <path
              className={styles.st15} d='M405.04,172.69L405.04,172.69c-10.93,0-19.78-8.86-19.78-19.78v-5.63h39.57v5.63
				C424.83,163.83,415.97,172.69,405.04,172.69z'
            />
            <g>
              <path d='M395.09,135.98c0.55-5.1,1.54-9.92-1.8-13.7c-4.99-4.89-6.93-12.7-4.52-19.26c1.34,2.92,2.52,5.57,3.8,8.02
					c1.12,2.08,2.28,3.94,3.76,5.69c0.78,0.84,1.7,1.82,2.34,2.77C402.25,124.85,399.9,132.47,395.09,135.98L395.09,135.98z'
              />
            </g>
            <g>
              <path d='M409.61,135.98c0.55-5.1,1.54-9.92-1.8-13.7c-4.99-4.89-6.93-12.7-4.52-19.26c1.34,2.92,2.52,5.57,3.8,8.02
					c1.12,2.08,2.28,3.94,3.76,5.69c0.78,0.84,1.7,1.82,2.34,2.77C416.77,124.85,414.42,132.47,409.61,135.98L409.61,135.98z'
              />
            </g>
          </g>
        </g>
      </g>

      {/* GLASS */}
      {/* //////////////////////////// */}
      <g id='chorro' className={`${styles.chorro} ${showComponent(state.showChorro, styles.disableClass)}`}>

        <rect x='162.38' y='434.01' className={styles.st8} width='18.63' height='43.56' />
      </g>

      <g id='glass_coffee' className={`${styles.glass} ${showComponent(state.showGlass, styles.disableClass)}`} onClick={() => setMachineState(INITIAL_STATE)}>
        <path
          className={styles.st1} d='M191.63,571.75h-40.67c-1.52,0-2.81-1.14-2.98-2.66l-9.07-78.56h65.26l-9.56,78.58
		C194.43,570.62,193.15,571.75,191.63,571.75z'
        />
        <path
          className={styles.st4} d='M207.29,490.4h-71.5c-1.66,0-3-1.34-3-3v-6.82c0-1.66,1.34-3,3-3h71.5c1.66,0,3,1.34,3,3v6.82
		C210.29,489.06,208.95,490.4,207.29,490.4z'
        />

        <ellipse transform='matrix(0.4941 -0.8694 0.8694 0.4941 -370.1641 414.9852)' className={styles.st4} cx='171.51' cy='525.57' rx='14.91' ry='10.65' />
        <g>
          <path d='M162.38,537.47c4.79-2.12,6.56-7.59,7.92-12.22c0,0.02,2.51,0.5,2.44,0.56c0,0-2.45-0.49-2.45-0.49
			c0.95-3.99,2.7-8,6.09-10.48c1.16-0.77,2.5-1.29,3.83-1.3c-2.4,1.06-3.92,3.03-5.05,5.28c-1.09,2.17-1.89,4.63-2.41,6.98
			c0,0-2.45-0.49-2.45-0.49l0.01-0.03l2.44,0.53C171.33,530.81,168.23,537.18,162.38,537.47L162.38,537.47z'
          />
        </g>
      </g>

      {/* PANEL */}
      {/* //////////////////////////// */}
      <g id='panel'>
        <g id='latte_x5F_panel' className={`${styles.lattePanel} ${showComponent(state.showLattePanel, styles.disableClass)}`}>
          <text transform='matrix(0.9668 0 0 1 95.5863 147.9879)' className={styles.text}>LATTE</text>
          <g>
            <circle className={styles.st11} cx='121.52' cy='286.51' r='19.52' />
            <circle className={styles.st1} cx='121.52' cy='286.51' r='12.19' />
          </g>
          <path
            className={styles.st11} d='M173.29,328.58L173.29,328.58c-27.32,0-49.47-22.15-49.47-49.47V256.8h98.95v22.31
			C222.77,306.43,200.62,328.58,173.29,328.58z'
          />
          <path className={styles.st12} d='M132.77,279.73V268.2h81.04v11.53' />
          <path className={styles.st17} d='M132.77,279.73c0,22.38,18.14,40.52,40.52,40.52h0c22.38,0,40.52-18.14,40.52-40.52H132.77z' />
          <g>
            <path d='M152.9,245.05c3.59-10.34,6.26-23.57-2.77-31.73c-8.83-9.38-12.14-23.31-10.18-35.77c2.54,10.25,5.54,20.08,11.81,28.44
				c0.71,0.98,1.84,2.32,2.71,3.2C165.05,219.21,161.88,235.14,152.9,245.05L152.9,245.05z'
            />
          </g>
          <g>
            <path d='M182.65,245.05c3.59-10.34,6.26-23.57-2.78-31.73c-8.83-9.38-12.14-23.31-10.18-35.77c2.54,10.25,5.54,20.08,11.81,28.44
				c0.71,0.98,1.84,2.32,2.71,3.2C194.8,219.21,191.63,235.14,182.65,245.05L182.65,245.05z'
            />
          </g>
        </g>
        <g id='coffe_x5F_panel' className={`${styles.coffeePanel} ${showComponent(state.showCoffeePanel, styles.disableClass)}`}>
          <g>
            <circle className={styles.st11} cx='120.66' cy='286.13' r='19.7' />
            <circle className={styles.st1} cx='120.66' cy='286.13' r='12.3' />
          </g>
          <path
            className={styles.st11} d='M172.9,328.58L172.9,328.58c-27.56,0-49.91-22.35-49.91-49.91v-22.51h99.82v22.51
			C222.81,306.24,200.46,328.58,172.9,328.58z'
          />
          <path
            className={styles.st15} d='M172.9,320.17L172.9,320.17c-22.58,0-40.88-18.3-40.88-40.88v-11.63h81.76v11.63
			C213.78,301.87,195.48,320.17,172.9,320.17z'
          />
          <g>
            <path d='M152.33,244.31c3.64-10.43,6.35-23.79-2.78-32.03c-8.9-9.46-12.25-23.5-10.29-36.07c2.69,11.03,6.03,21.64,13.19,30.38
				c0.77,0.82,2.31,2.51,3.07,3.35C164.36,219.83,160.6,235.33,152.33,244.31L152.33,244.31z'
            />
          </g>
          <g>
            <path d='M182.34,244.31c3.64-10.43,6.35-23.79-2.78-32.03c-8.9-9.46-12.25-23.5-10.29-36.07c2.69,11.03,6.03,21.64,13.19,30.38
				c0.77,0.82,2.31,2.51,3.07,3.35C194.38,219.83,190.61,235.33,182.34,244.31L182.34,244.31z'
            />
          </g>
          <text transform='matrix(0.9668 0 0 1 83.5116 150.2641)' className={styles.text}>COFFEE</text>
        </g>
        <g id='milk_x5F_panel' className={`${styles.milkPanel} ${showComponent(state.showMilkPanel, styles.disableClass)}`}>
          <text transform='matrix(0.9668 0 0 1 110.5517 150.2642)' className={styles.text}>MILK</text>
          <path
            className={styles.st14} d='M211.1,328.58h-71.93c-1.72,0-3.17-1.29-3.37-3l-15.11-130.85c-0.23-2.01,1.34-3.78,3.37-3.78h102.96
			c2.03,0,3.61,1.78,3.36,3.8L214.46,325.6C214.25,327.3,212.81,328.58,211.1,328.58z'
          />
          <path
            className={styles.st8} d='M203.8,316.68h-57.18c-1.37,0-2.52-1.01-2.68-2.34l-12.02-101.93c-0.18-1.57,1.07-2.94,2.68-2.94h81.85
			c1.62,0,2.87,1.39,2.67,2.96l-12.66,101.93C206.31,315.68,205.16,316.68,203.8,316.68z'
          />
        </g>
        <g id='enjoy_x5F_panel_00000110467936594307372790000018311558049984256188_' className={`${styles.readyPanel} ${showComponent(state.showEnjoyPanel, styles.disableClass)}`}>
          <text id='enjoy_00000034803948142822909800000006227116808538076588_' transform='matrix(0.9668 0 0 1 69.1957 229.5259)' className={styles.text}>DISFRUTA</text>
        </g>
      </g>
    </svg>

  )
}
