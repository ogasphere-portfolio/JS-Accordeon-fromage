var app = {

    init: function(){
        console.log('init');
        app.monClick = document.querySelectorAll('.titre');
        
        
        for (let index = 0; index < app.monClick.length; index++) {
            app.monClick[index].addEventListener ('click', app.getClick);
            console.log(app.monClick[index]);
        }
        


    
    },

    getClick: function(event) {
        console.log('test : '+app.monClick.length);
        
        let elementClick = event.currentTarget;
        for (let index = 0; index < app.monClick.length; index++) {
            console.log('test : '+app.monClick[index]);
            app.monClick[index].classList.remove('open');
            
        }
        elementClick.classList.add ('open');
    }

}
document.addEventListener('DOMContentLoaded', app.init);

