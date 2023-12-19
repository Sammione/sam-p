function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector);
    els = Array.from(els);
    els.forEach(el => {
        addObserver(el, options);
    })
}
function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el);
        }else{
            entry.target.classList.add('active');
        }
        return;
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el);
                }else{
                    entry.target.classList.add('active');
                }
                observer.unobserve(entry.target);
            }
        })
    }, options)
    observer.observe(el);
}

scrollTrigger('.reveal', {
    rootMargin: '-40px',
});

scrollTrigger('.raw', {
  rootMargin: '-20px',
});

let arrpdf = ['https://onedrive.live.com/embed?resid=D077F1DD850104C7%21694&authkey=!AJKwV55YJ_I0y-0&em=2','https://onedrive.live.com/embed?resid=D077F1DD850104C7%21693&authkey=!AAwyuKL_2pDZ4eg&em=2','https://onedrive.live.com/embed?resid=D077F1DD850104C7%21692&authkey=!AEWFwwH1G0z9fms&em=2','https://onedrive.live.com/embed?resid=D077F1DD850104C7%21669&authkey=!AOJ1x1sBlKl_rRY&em=2'
,'https://onedrive.live.com/embed?resid=D077F1DD850104C7%21667&authkey=!APVSlbzgtIika7k&em=2', 
 'https://onedrive.live.com/embed?resid=D077F1DD850104C7%21671&authkey=!ABJoaxTZdKQt_VA&em=2',
  'https://onedrive.live.com/embed?resid=D077F1DD850104C7%21672&authkey=!AFDp3hdOBP70C6E&em=2', 
'https://onedrive.live.com/embed?resid=D077F1DD850104C7%21673&authkey=!AOEtOQOmYbP90rw&em=2', 
'https://onedrive.live.com/embed?resid=D077F1DD850104C7%21674&authkey=!ALXvCoY4OAdhyUU&em=2', 
'https://onedrive.live.com/embed?resid=D077F1DD850104C7%21676&authkey=!AAKyYEWSPwjN_RA&em=2'];

let butty = ['Business Optimization', 'Customer Preference & Price Segmentation', 'Upsell Opportunity Analysis', 'Covid-19 Sentiment Analysis', 
'EDA on VG-sales', 'Nigeria"s Economy using LSTM', 'Nigeria Economy Indicator Using Times Series',
'Stock Prediction', 'Recommender System', 'Phone Review'];

const prol = document.querySelector('.prol');

butty.forEach((but)=>{
    let rest = `
        <div class="project-data">
            <div class="project-topic">
                <h3>${but}</h3>
            </div>
                <button class="btn anc">Preview</button>
        </div>`;

    prol.innerHTML += rest;
})

const btngrp = document.querySelectorAll('.btn');
const embed = document.querySelector('.pdf');
const viewer = document.querySelector('.pdf-view');

btngrp.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
        let pdf = arrpdf[index];
        embed.src = pdf ;
        viewer.classList.add('active');
        console.log(embed);
    })
})
function closePdf(){
    if(viewer.classList.contains('active')){
        viewer.classList.remove('active');
    }
}
const menu = document.querySelector('.two');
function showMenu(){
    if(!menu.classList.contains('active')){
        menu.classList.add('active');
    }else{
        menu.classList.remove('active');
    }
}
