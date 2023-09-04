export default function showComponentOr (state:boolean, classCssFalse:string, classCssTrue:string) {
  return state ? classCssTrue : classCssFalse
}
