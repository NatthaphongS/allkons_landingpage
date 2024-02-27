// Dynamically load the "particles.js" script
function loadParticlesScript() {
  const script = document.createElement('script');
  script.src = './src/particlejs/particles.js';
  script.async = true;
  document.body.appendChild(script);
  const script2 = document.createElement('script');
  script2.src = './src/particlejs/particles-config.js';
  script2.async = true;
  document.body.appendChild(script2);

  script.onload = () => {
    // Script has loaded
    console.log('Particles.js script loaded successfully.');
    // Here you can initialize particles.js as needed
  };

  script.onerror = (error) => {
    console.error('Error loading the particles.js script:', error);
  };
}

// Call this function early in your app's initialization process
export default loadParticlesScript;
