export default function reveal(){
    window.sr = ScrollReveal({reset: true})
    
    sr.reveal('.categoria-card', {duration: 2000})
    sr.reveal('.cardCatalog', {duration: 2000})
    sr.reveal('.especial', {duration: 2000})
    sr.reveal('.txtSobre', {duration: 2000})
    sr.reveal('#sobre img', {duration: 2000})
    sr.reveal('.gallery', {duration: 2000})
    sr.reveal('.footer', {duration: 2000})
}