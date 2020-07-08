/*
Color change function:
*/
const color_change = (div) =>{
    var chage = document.getElementById(div)

    chage.style.transformOrigin = 'all'
    chage.style.transitionDuration = '5000ms'

    setTimeout(() => {
        chage.style.background = '#3b6970'    
    }, 100);

    setTimeout(() => {
        chage.style.background = '#204051'    
    }, 4000);

    setTimeout(() => {
        chage.style.background = '#84a9a0'    
    }, 8000);
    
    setTimeout(() => {
        chage.style.background = '#204051'    
    }, 12000);
    
}



color_change('head')
setInterval(() => {
    color_change('head')
}, 13000);




/*
    chage font weight:
*/

const font_w = (font) =>{
    for (let i = 0; i < font.length; i++) {
     
        font[i].style.fontWeight = '100'
        
    }
}

let h2s = document.querySelectorAll('#titl')

font_w(h2s)

/*
    bouncing efect:
*/
const bouns = (note)=>{

    const not = document.querySelectorAll(note)
    const nt = document.querySelectorAll(note).length - 1

    not[nt].style.transformOrigin = 'all'
    not[nt].style.transitionDuration = '500ms'

    setTimeout(() => {
        for(i=0; i < nt + 1; i++){
            not[i].style.transform =  'scale(1)'}    
    }, 400);
}

bouns('#boun')