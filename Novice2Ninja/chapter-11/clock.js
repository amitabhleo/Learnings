const clock = document.querySelector('.clock');

//creating a tick which has to be called after second

const tick = () =>{

    const now  =  new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    //console.log(h,m,s);
    clock.innerHTML = `
            <span> ${h} </span> :
            <span> ${m}</span> :
            <span> ${s} </span>

    `;
 };

setInterval(tick,1000);