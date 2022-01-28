
const DAILY = 'daily';
const WEEKLY = 'weekly';
const MONTHLY = 'monthly';

const workh2 = document.getElementById('work-h2');
const workp = document.getElementById('work-p');
const playh2 = document.getElementById('play-h2');
const playp = document.getElementById('play-p');
const studyh2 = document.getElementById('study-h2');
const studyp = document.getElementById('study-p');
const exerciseh2 = document.getElementById('exercise-h2');
const exercisep = document.getElementById('exercise-p');
const socialh2 = document.getElementById('social-h2');
const socialp = document.getElementById('social-p');
const selfcareh2 = document.getElementById('selfcare-h2');
const selfcarep = document.getElementById('selfcare-p');

let state = DAILY;
changeValues(state);

const daily = document.getElementById('daily');
if(daily){
    daily.addEventListener('click', event => {
        state = DAILY;
        changeValues(DAILY);
    }, false);
}
const weekly = document.getElementById('weekly');
if(weekly){
    weekly.addEventListener('click', event => {
        state = WEEKLY;
        changeValues(WEEKLY);
    }, false);
}
const monthly = document.getElementById('monthly');
if(monthly){
    monthly.addEventListener('click', event => {
        state = MONTHLY;
        changeValues(MONTHLY);
    }, false);
}

function changeValues (state) {
    const target = [DAILY, WEEKLY, MONTHLY];
    const targetel = document.getElementById(state);
    targetel.style.color = 'white'
    target.map(item => {
        if(item !== state) {
            const el = document.getElementById(item);
            el.style.color = 'hsl(236, 100%, 87%)';
        }
    })


    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let vals ;
        if(state === 'daily') vals = element.timeframes.daily;
        if(state === 'weekly') vals = element.timeframes.weekly;
        if(state === 'monthly') vals = element.timeframes.monthly;
        if(vals) {
            switch (element.title) {
                case 'Work':
                    workh2.textContent = `${vals.current}hrs`;
                    workp.textContent = `Previous - ${vals.previous}hrs`;
                    break;
                case 'Play':
                    playh2.textContent = `${vals.current}hrs`;
                    playp.textContent = `Previous - ${vals.previous}hrs`;
                    break;
                case 'Study':
                    studyh2.textContent = `${vals.current}hrs`;
                    studyp.textContent = `Previous - ${vals.previous}hrs`;
                    break;
                case 'Exercise':
                    exerciseh2.textContent = `${vals.current}hrs`;
                    exercisep.textContent = `Previous - ${vals.previous}hrs`;
                    break;
                case 'Social':
                    socialh2.textContent = `${vals.current}hrs`;
                    socialp.textContent = `Previous - ${vals.previous}hrs`;
                    break;
                case 'Self Care':
                    selfcareh2.textContent = `${vals.current}hrs`;
                    selfcarep.textContent = `Previous - ${vals.previous}hrs`;
                    break;
            
                default:
                    break;
            }
        }
    }
}