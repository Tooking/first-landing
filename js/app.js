// import * as flsFunction from "./modules/functions.js";

// flsFunction.isWebp();

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animate');
      }
    });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.section7-content-container-element');
for (let elm of elements) {
  observer.observe(elm);
}

const menuBtn = document.querySelector('.menu-burger');
const menuList = document.querySelector('.menu-list');
const menuListElements = document.querySelectorAll('.menu-list-element');
let indicator = 0;

menuBtn.addEventListener('click', ()=>{
  if(indicator == 0){
    menuList.classList.add('open');
    document.querySelector('body').style.overflowY = "hidden";
    // menuBtn.style.background = "url('../img/mobile/close-white.svg') no-repeat center";
    indicator++;
    menuListElements.forEach(el =>{
      el.addEventListener('click', ()=>{
        menuList.classList.remove('open');
        document.querySelector('body').style.overflowY = "auto";
        // menuBtn.style.background = "url('/img/mobile/menu-icon.svg') no-repeat center";
        indicator = 0;
      })
    })
  }else{
    menuList.classList.remove('open');
    document.querySelector('body').style.overflowY = "auto";
    // menuBtn.style.background = "url('/img/mobile/menu-icon.svg') no-repeat center";
    indicator = 0;
  }
})


const pageWidth = document.documentElement.clientWidth;
console.log(pageWidth);

if (pageWidth < 576){
  document.querySelector('.module0').innerHTML = '<nobr>ВВЕДЕНИЕ</nobr><br><br> Рассказываю про этот бизнес, про деньги в этом бизнесе, про курс, про отличия траков';
  document.querySelector('.module1').innerHTML = '<nobr>КОНСУЛЬТИРОВАНИЕ</nobr><br><br> Рассказываю про поиск и выбор трака, о поиске страхового агента (<span>даём контакты страховых агентов</span>), а также реферальной программы';
  document.querySelector('.module2').innerHTML = '<nobr>ОТКРЫТИЕ БИЗНЕСА</nobr><br><br> Поиск бухгалтера, открытие LLS, открытие банковского аккаунта (<span>бизнес-счёт</span>), FMCSA, открытие DOT mc, аудит DOT';
  document.querySelector('.module3').innerHTML = '<nobr>ПОКУПКА ТРАКА</nobr><br><br> Где можно купить трак, о финансировании трака (<span>даём буст-компании</span>), говорим о страховании трака, постановке трака на учёт (<span>экономим деньги легально на таксах</span>)';
  document.querySelector('.module4').innerHTML = '<nobr>ДОСТАВКА ТРАКА</nobr><br><br> Доставка трака, закупка всего необходимого для перевозки, даём список документов, которые всегда нужно с собой возить';
  document.querySelector('.module5').innerHTML = '<nobr>LOG BOOK</nobr><br><br> Рассказываем про <span>электронный</span>, про <span>бумажный</span>, про осмотр трака перед рейсом, BOL (что это и как это подписывать)';
  document.querySelector('.module6').innerHTML = '<nobr>ПРОГРАММЫ ДЛЯ ЕЗДЫ ПО США</nobr><br><br> Топливные карты, проезд по платным дорогам, E-Zpass и Pre pass, программа для определения Zip Code, для сканирования документов, для определения локации в режиме life';
  document.querySelector('.module7').innerHTML = '<nobr>ПОЕЗДКА</nobr><br><br> Как сделать <span>pre trip inspection</span>, как заезжать на <span>weight station</span>, что делать когда остановил инспектор, как проходить <span>инспекцию level 1</span>, что делать с нарушениями и тд.';
  document.querySelector('.module8').innerHTML = '<nobr>ДИСПЕЧЕРСКИЕ КОМПАНИИ</nobr><br><br> Подключение <span>диспетчерских компаний</span>, про 2 вида компаний которые работают с теми у кого есть <span>social security</span> и те у кого нет, обзор грузов по штатам, где брать груз выгоднее, термины и тд.';
  document.querySelector('.module9').innerHTML = '<nobr>ИТОГ</nobr><br><br> Говорим про людей, которые нам будут <span>помогать с открытием компании</span>, проговариваем на чем важно экономить деньги, говорим на что обратить внимание при выборе трака и др.';
}

  