
  // pulled up so that have access to all adding a regex (regular expression to test validation)
  const usernamePattern = /^[a-zA-Z0-9]{6,12}$/;

const form = document.querySelector('.signup-form');

const feedback = document.querySelector('.feedback');
//const usrname = document.querySelector('#username');

form.addEventListener('submit',e =>{
    e.preventDefault();
    //console.log(usrname.value);
    //console.log(form.username.value);
    const username = form.username.value;
  
    
    if (usernamePattern.test(username)){
        feedback.textContent = 'this is a valid username';
    }else
    feedback.textContent = 'username should be 6 to 12 char long with no special char.'
});
//live form

form.username.addEventListener('keyup',e =>{
    //console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
       // console.log('success');
       form.username.setAttribute('class','success');
    }else
    //console.log('failure');
    form.username.setAttribute('class','error');
});