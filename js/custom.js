const NAV_LI = document.querySelectorAll('.gnb li');
const NAV = document.querySelector('.gnb>ul');
const SECTION = document.querySelectorAll('.section');
console.log(NAV_LI, [...NAV.children], NAV.children);

new fullpage('#main',{
    scrolloOverflow: false,
    // navigation: true,
    anchors : ['pe01','pe02','pe03','pe04'],
    responsiveWidth: 500,
    afterRender: function(){
        SECTION[0].classList.add('on');
    },
    onLeave: function(origin, destination, direction, trigger){
        console.log(origin.index, destination.index, direction, trigger)

        NAV_LI.forEach(it => it.classList.remove('on'));
        NAV_LI[destination.index].classList.add('on');

        SECTION.forEach(it => it.classList.remove('on'));
        SECTION[destination.index].classList.add('on');

        if(destination.index == 1) {
            NAV.classList.add('on_color');
        } else {
            NAV.classList.remove('on_color');
        }

        if(direction == 'down') {
            document.querySelector('#header').classList.add('on')
        }else {
            document.querySelector('#header').classList.remove('on')
        }
    },
})  
