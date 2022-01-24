
let each_about_3dvs = document.querySelectorAll('.each-about');

if(each_about_3dvs){
  each_about_3dvs.forEach(item => {
    item.addEventListener('click', function(e) {
       let project = '';
       if(this.id === 'er_1' || this.id === 'er_2'|| this.id === 'er_3') project = 'Exterior Renderings';
       if(this.id === 'ir_1' || this.id === 'ir_2'|| this.id === 'ir_3') project = 'Interior Renderings';
       if(this.id === 'pav_1' || this.id === 'pav_2'|| this.id === 'pav_3') project = 'Project Aerial View';
      document.querySelector('#btm_frm #input_3_4').value = `Hi! I am querying from ${location.href} and I’m interested in the ${project} - ${Array.from(this.children)[0].innerText} and I would like to know more information.`
    })
  })
}
