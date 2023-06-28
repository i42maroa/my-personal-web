export function showNavbarDependOfScroll (state:boolean, classScrollUp:string, classScrollDown:string) {
  return state ? classScrollUp : classScrollDown
}
