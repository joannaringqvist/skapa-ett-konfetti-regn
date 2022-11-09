const colors = ['pink', 'salmon', 'turquoise', 'gold', 'palegreen', 'lavender'];
const colorIndex = colors.length - 1;

const chooseParticleColor = (groupName) => {
  const randomIndex = Math.round(Math.random() * colorIndex);
  return colors[randomIndex];
  //return `RGB(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

const bang = (addConfettiParticles) => {
    addConfettiParticles({
      groupName: 'happy confetti',  
      particleAmount: 300,  
      xPosition: 50,     
      yPosition: 60,
      xVelocity: 0,       
      yVelocity: 3,     
      xSpread: 99,       
      ySpread: 50 
    })
}

export {
  chooseParticleColor,
  bang
}