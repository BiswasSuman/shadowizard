function shadowizard(options) {
  let images = document.querySelectorAll('.shadowizard');

  if(options.shadow_type === 'hard')
    options.shadow_type = '0px'
  else
    options.shadow_type = '15px';

  images.forEach(image => {
    image.style.boxShadow = `5px 5px ${options.shadow_type} 1px rgba(0.0.0.1)`;
    if(options.padding){
      image.style.padding = '1em';
    }
  })
}

module.exports.shadowizard = shadowizard;