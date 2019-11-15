export const color = () => {
  let rgb = [];
    
    for (let i = 0; i < 8; i++) {
      let color = [];
      for (let i = 0; i < 3; i++) {
        color = [ ...color, Math.floor(Math.random() * 256 ) ]
      }
      rgb = [...rgb, color]
    }

  return { rgb }
}