

document.addEventListener('DOMContentLoaded', function () {

    // Menu Mobile
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        // Ignora links dentro de modais
        if (this.closest('.modal')) return;

        // MOBILE + botão Consertos
        if (
            window.innerWidth <= 640 &&
            this.id === 'btnConsertos'
        ) {
            return;
        }

        const href = this.getAttribute('href');

        if (href !== '#') {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                const headerHeight = document.querySelector('.header').offsetHeight;

                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });

            }

        }

    });

});



    // Header Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.pageYOffset > 100
            ? '0 4px 20px rgba(255, 45, 45, 0.3)'
            : '0 4px 20px rgba(255, 45, 45, 0.2)';
    });

    // Animações de Entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.servico-card, .destaque-card, .depoimento-card, .feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    document.addEventListener('scroll', () => {
        document.querySelectorAll('.in-view').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    });

    setTimeout(() => window.dispatchEvent(new Event('scroll')), 100);

    // WhatsApp
    const defaultMessage = encodeURIComponent('Olá! Preciso de uma ajuda.');
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        if (!link.getAttribute('href').includes('text=')) {
            link.setAttribute('href', `${link.getAttribute('href')}?text=${defaultMessage}`);
        }
    });

    // Form -> WhatsApp (botão do formulário)
    window.enviarParaWhatsApp = function (event) {
        event.preventDefault();

        const form = event.target;
        if (!form) return;

        const nome = form.querySelector('input[name="nome"]')?.value?.trim() || '';
        const modelo = form.querySelector('input[name="modelo"]')?.value?.trim() || '';
        const problema = form.querySelector('textarea[name="problema"]')?.value?.trim() || '';

        const phone = '5511982541173';

        const mensagem = [
            'Olá! Vim pelo site e quero um orçamento.',
            nome ? `Nome: ${nome}` : null,
            modelo ? `Modelo do aparelho: ${modelo}` : null,
            problema ? `O que aconteceu: ${problema}` : null,
        ].filter(Boolean).join('\n');

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');

        form.reset();
    };
 

// ================= DADOS: LINHAS → MODELOS =================
const linhasData = {
    // IPHONE
    'iphones':  ['iphone-6-6s', 'iphone-6-plus-6s-plus', 'iphone-7', 'iphone-7-plus', 'iphone-8','iphone-8-se', 'iphone-8-plus',
        'iphone-x', 'iphone-xs', 'iphone-xs-max','iphone-xr', 'iphone-11', 'iphone-11-pro', 'iphone-11-pro-max', 'iphone-12',
        'iphone-12-mini', 'iphone-12-pro', 'iphone-12-pro-max','iphone-13', 'iphone-13-mini', 'iphone-13-pro', 'iphone-13-pro-max', 
        'iphone-14','iphone-14-pro', 'iphone-14-plus', 'iphone-14-pro-max','iphone-15', 'iphone-15-pro', 'iphone-15-plus'],
    'ipads': ['ipad-1-mini','ipad-2-mini','ipad-3-mini','ipad-4-mini','ipad-1','ipad-2','ipad-3','ipad-4','ipad-5','ipad-6','ipad-7',
        'ipad-8','ipad-9'],
    'apple-watch': ['gera-1', 'gera-2', 'gera-3', 'gera-4', 'gera-5', 'gera-6'],

    // SAMSUNG
    
    'samsung-linha-a': ['samsung-a01-a01-core', 'samsung-a02-a02s', 'samsung-a03','samsung-a04', 'samsung-a05', 'samsung-a11', 
        'samsung-a12','samsung-a13', 'samsung-a14', 'samsung-a15', 'samsung-a20','samsung-a21', 'samsung-a22', 'samsung-a23', 
        'samsung-a24','samsung-a25', 'samsung-a30', 'samsung-a31', 'samsung-a32','samsung-a33', 'samsung-a34', 
        'samsung-a35', 'samsung-a50', 'samsung-a51','samsung-a52', 'samsung-a53','samsung-a54', 'samsung-a55', 'samsung-a70',
        'samsung-a71', 'samsung-a72', 'samsung-a73','samsung-a80', 'samsung-a7-2018','samsung-a8', 'samsung-a8-plus'],
    'samsung-linha-j': ['samsung-j2p', 'samsung-j2c', 'samsung-j3', 'samsung-j4', 'samsung-j4p', 'samsung-j4c', 'samsung-j5', 
        'samsung-j5-metal','samsung-j5-prime','samsung-j5-pro','samsung-j6','samsung-j6-plus', 'samsung-j7', 'samsung-j7-prime',
        'samsung-j7-pro','samsung-j8'],
    'samsung-linha-m': ['samsung-m10', 'samsung-m12', 'samsung-m13', 'samsung-m14', 'samsung-m20','samsung-m21s','samsung-m22', 
        'samsung-m23', 'samsung-m30', 'samsung-m31', 'samsung-m32', 'samsung-m33','samsung-m51', 'samsung-m52', 'samsung-m53', 
        'samsung-m54', 'samsung-m62'],
    'samsung-linha-s': ['samsung-s7', 'samsung-s7-edge', 'samsung-s8', 'samsung-s8-plus', 'samsung-s9','samsung-s9-plus', 
        'samsung-s10-e', 'samsung-s10', 'samsung-s10-plus', 'samsung-s20','samsung-s20-fe', 'samsung-s20-plus', 'samsung-s20-ultra', 
        'samsung-s21', 'samsung-s21-plus', 'samsung-s21-fe', 'samsung-s22', 'samsung-s22-plus', 'samsung-s22-ultra', 'samsung-s23', 
        'samsung-s23-fe','samsung-s23-plus','samsung-s23-ultra', 'samsung-s24'],
    'samsung-linha-note': ['samsung-note-10', 'samsung-note10-plus', 'samsung-note10-lite','samsung-note20', 'samsung-note20-plus', 
        'samsung-note20-ultra'],
    'samsung-tablet': ['samsung-tab-a7-lite', 'samsung-tab-a-2016', 'samsung-tab-a-2019','samsung-tab-a8', 'samsung-tab-a7', 
        'samsung-tab-a-2019','samsung-tab-e', 'samsung-tab-s6-lite', 'samsung-tab-a8','samsung-tab-s5-e'],
    

    // MOTOROLA
    'moto-linha-g': ['moto-g4', 'moto-g5', 'moto-g6', 'moto-g7', 'moto-g8', 'moto-g9','moto-g10-g20-g30', 
        'moto-g5g', 'moto-g5g-plus', 'moto-g04', 'moto-g13', 'moto-g14', 'moto-g22', 'moto-g23', 'moto-g24', 
        'moto-g31', 'moto-g32', 'moto-g34', 'moto-g41', 'moto-g42', 'moto-g50', 'moto-g51', 'moto-g52', 
        'moto-g53', 'moto-g54', 'moto-g60', 'moto-g62', 'moto-g71','moto-g72', 'moto-g73', 'moto-g82', 
        'moto-g84', 'moto-g100', 'moto-g200'],
    'moto-linha-e': ['moto-e4', 'moto-e5', 'moto-e6', 'moto-e6-plus','moto-e7', 'moto-e13', 'moto-e20', 
        'moto-e22', 'moto-e30', 'moto-e32', 'moto-e40'],
    'moto-linha-one': ['moto-one', 'moto-vision', 'moto-hyper', 'moto-action', 'moto-zoom', 'moto-macro', 
        'moto-fusion', 'moto-fusion-plus'],
    'moto-linha-edge': ['moto-edge', 'moto-edge-20', 'moto-edge-20-pro', 'moto-edge-20-lite', 'moto-edge-20-plus', 
        'moto-edge30', 'moto-edge-30-neo', 'moto-edge-30-fusion', 'moto-edge-40',  'moto-edge-40-neo'],
    'moto-linha-z': ['moto-z', 'moto-z-play', 'moto-z2-play', 'moto-z3-play'], 
    'moto-linha-x':['moto-x4', 'moto-x-style'], 
    'moto-linha-c':['moto-c', 'moto-c-plus'],

    // XIAOMI
    'xiaomi-linha-note':  ['xiaomi-note5', 'xiaomi-note6', 'xiaomi-note7', 'xiaomi-note8','xiaomi-note8-pro', 'xiaomi-note9', 
        'xiaomi-note10-4g', 'xiaomi-note10s', 'xiaomi-note10-lite', 'xiaomi-note10-5g', 'xiaomi-note10-pro',   'xiaomi-note11-4g', 
        'xiaomi-note11-5g', 'xiaomi-note11-s', 'xiaomi-note11-pro', 'xiaomi-note11-pro-plus', 'xiaomi-note11-t-pro', 
        'xiaomi-note12-4g', 'xiaomi-note12-5g', 'xiaomi-note12-s','xiaomi-note12-c', 'xiaomi-note1-pro', 'xiaomi-note12-pro-plus',
        'xiaomi-note13-4g','xiaomi-note13-5g', 'xiaomi-note13-pro-4g', 'xiaomi-note13-pro-5g', 'xiaomi-note13-pro-plus'],
    'xiaomi-linha-redmi': ['xiaomi-redmi-6-6a', 'xiaomi-redmi-7-7a', 'xiaomi-redmi-8-8a', 'xiaomi-redmi-9a-9c', 'xiaomi-redmi10-c-a',
        'xiaomi-redmi-11-prime','xiaomi-redmi-12', 'xiaomi-redmi-12c', 'xiaomi-redmi-13c'],
    'xiaomi-linha-mi':['xiaomi-mi-go', 'xiaomi-mi-a1-antigo', 'xiaomi-mi-a1-novo', 'xiaomi-mi-a2-a2-lite', 'xiaomi-mi-a3',
        'xiaomi-mi-a3-lite', 'xiaomi-mi8', 'xiaomi-mi8-lite', 'xiaomi-mi8a', 'xiaomi-mi8t', 'xiaomi-mi9', 'xiaomi-mi9t-pro', 
        'xiaomi-mi9t', 'xiaomi-mi9-lite', 'xiaomi-mi9se','xiaomi-mi10t', 'xiaomi-mi10-lite', 'xiaomi-mi11', 'xiaomi-mi11-lite'],
    'xiaomi-linha-poco':  ['xiaomi-poco-c65', 'xiaomi-poco-x3', 'xiaomi-poco-x3-pro', 'xiaomi-poco-x3-gt', 'xiaomi-poco-x4-gt', 
        'xiaomi-poco-x4-pro', 'xiaomi-poco-x5','xiaomi-poco-x5-pro', 'xiaomi-poco-x6', 'xiaomi-poco-x6-pro', 'xiaomi-poco-f1',
        'xiaomi-poco-f2', 'xiaomi-poco-f3', 'xiaomi-poco-f4', 'xiaomi-poco-m3', 'xiaomi-poco-m4', 'xiaomi-poco-m4-pro', 
        'xiaomi-poco-m5', 'xiaomi-poco-s2'],    
    
    // REALME
    'realme-linha-c':['realme-c2', 'realme-c3', 'realme-12c', 'realme-c11', 'realme-c12','realme-c15', 'realme-c20', 'realme-c25', 
        'realme-c30', 'realme-c33', 'realme-c35', 'realme-c53', 'realme-c55', 'realme-c65', 'realme-c67'],
    'realme-linha--':['realme-6', 'realme-7', 'realme-7-pro', 'realme-8-4g', 'realme-8-5g', 'realme-8-pro', 'realme-9', 'realme-10'],
    'realme-linha-gt':['realme-gt2'],

    // ASUS
    'asus-linha-zenfone-ze': ['asus-zenfone-ze600', 'asus-zenfone-ze601', 'asus-zenfone-ze553', 'asus-zenfone-ze550', 
        'asus-zenfone-ze551', 'asus-zenfone-ze552', 'asus-zenfone-ze554','asus-zenfone-ze620', 'asus-zenfone-ze630'],
    'asus-linha-zenfone-zc': ['asus-zenfone-zc553', 'asus-zenfone-zc554', 'asus-zenfone-zc520','asus-zenfone-zc600'],
    'asus-linha-zenfone-zb': ['asus-zenfone-zb633', 'asus-zenfone-zb634', 'asus-zenfone-zb630','asus-zenfone-zb631', 
        'asus-zenfone-zb570', 'asus-zenfone-zb500','asus-zenfone-zb551', 'asus-zenfone-zb552', 'asus-zenfone-zb553', 
        'asus-zenfone-zb555', 'asus-zenfone-zb601', 'asus-zenfone-zb602'],
    'asus-linha-zenfone-za': ['asus-zenfone-za550', 'asus-zenfone-za501'],
    'asus-linha-zenfone-zs': ['asus-rogphone-zs660', 'asus-zenfone-zs620', 'asus-zenfone-zs630','asus-zenfone-zs670'],
    'asus-linha-zenfone-zd': ['asus-zenfone-zd551', 'asus-zenfone-zd552', 'asus-zenfone-zd553', 'asus-zenfone-zd554'],

    // INFINIX
    'infinix-linha-hot':['infinix-hot-8-lite', 'infinix-hot-10', 'infinix-hot-10-play', 'infinix-hot-11', 'infinix-hot-11s',
        'infinix-hot-11-pro', 'infinix-hot-40-pro', 'infinix-hot-30-i', 'infinix-hot-20-i','infinix-hot-20-play'],
    'infinix-linha-note':['infinix-note-10-pro', 'infinix-note-11', 'infinix-note-11-pro', 'infinix-note-12-pro'],
    'infinix-linha-spark':['infinix-spark-6-go', 'infinix-spark-6', 'infinix-spark-7','infinix-spark-8'],

    //NOKIA
    'nokia-linha-c':['nokia-c01', 'nokia-c11', 'nokia-c20', 'nokia-c30', 'nokia-c50'],
    'nokia-linha-g':['nokia-g20', 'nokia-g21', 'nokia-g50'],
    'nokia-linha--':['nokia-2.3', 'nokia-2.4', 'nokia-3.1', 'nokia-5.3', 'nokia-6.1', 'nokia-6.2'],

    //LG
    'lg-linha-k':['lg-k4', 'lg-k8', 'lg-k10', 'lg-k10-power', 'lg-k10-pro', 'lg-k10-2017', 'lg-k11', 'lg-k12', 'lg-k12-plus',
        'lg-k12-max', 'lg-k12-prime','lg-k22', 'lg-k40-k40s', 'lg-k41-k41s', 'lg-k42', 'lg-k50-k50s', 'lg-k51-k51s', 'lg-k52', 
        'lg-k61', 'lg-k62', 'lg-k71', 'lg-k72'],
    'lg-linha-q':['lg-q6'],
};

// ================= NOMES LEGÍVEIS DOS MODELOS =================
const modelosNomes = {
    'iphone-6-6s': 'IPHONE 6 / 6S', 'iphone-6-plus-6s-plus':'IPHONE 6 / 6S PLUS', 'iphone-7': 'IPHONE 7', 'iphone-7-plus': 'IPHONE 7 PLUS',
        'iphone-8': 'IPHONE 8', 'iphone-8-se': 'IPHONE 8 SE', 'iphone-8-plus': 'IPHONE 8 PLUS', 'iphone-x': 'IPHONE X',
        'iphone-xs': 'IPHONE XS', 'iphone-xs-max': 'IPHONE XS MAX', 'iphone-xr': 'IPHONE XR',
        'iphone-11': 'IPHONE 11', 'iphone-11-pro': 'IPHONE 11 PRO', 'iphone-11-pro-max': 'IPHONE 11 PRO MAX', 'iphone-12':'IPHONE 12',
        'iphone-12-mini': 'IPHONE 12 MINI', 'iphone-12-pro': 'IPHONE 12 PRO', 'iphone-12-pro-max': 'IPHONE 12 PRO MAX',
        'iphone-13': 'IPHONE 13', 'iphone-13-mini': 'IPHONE 13 MINI', 'iphone-13-pro': 'IPHONE 13 PRO', 'iphone-13-pro-max':'IPHONE 13 PRO',
        'iphone-14':'IPHONE 14','iphone-14-pro': 'IPHONE 14 PRO', 'iphone-14-plus': 'IPHONE 14 PLUS',
        'iphone-14-pro-max': 'IPHONE 14 PRO MAX', 'iphone-15': 'IPHONE 15', 'iphone-15-pro': 'IPHONE 15 PRO',
        'iphone-15-plus': 'IPHONE 15 PLUS',
    'ipad-1-mini':'IPAD 1 MINI', 'ipad-2-mini':'IPAD 2 MINI', 'ipad-3-mini':'IPAD 3 MINI', 'ipad-4-mini':'IPAD 4 MINI',
        'ipad-1':'IPAD 1', 'ipad-2':'IPAD 2', 'ipad-3':'IPAD 3', 'ipad-4':'IPAD 4', 'ipad-5':'IPAD 5', 'ipad-6':'IPAD 6',
        'ipad-7':'IPAD 7', 'ipad-8':'IPAD 8', 'ipad-9':'IPAD 9',
    'gera-1': 'GERAÇÃO 1 - 38/42 MM', 'gera-2':'GERAÇÃO 2 - 38/42 MM', 'gera-3':'GERAÇÃO 3 - 38/42 MM', 'gera-4':'GERAÇÃO 4 - 40/44 MM',
    'gera-5':'GERAÇÃO 5 - 40/44 MM', 'gera-6':'GERAÇÃO 6 - 40/44 MM',


    'samsung-a01-a01-core':'A01 / A01 CORE', 'samsung-a02-a02s':'A02 /A02S', 'samsung-a03':'A03 / A03S / A03 CORE',
        'samsung-a04':'A04 / A04 E / A04 S', 'samsung-a05':'A05 / A05S', 'samsung-a10':'A10 / A10S', 'samsung-a11':'A11', 
        'samsung-a12':'A12','samsung-a13':'A13 4G / A13 5G', 'samsung-a14':'A14', 'samsung-a15':'A15', 'samsung-a20':'A20 / A20S',
        'samsung-a21':'A21 / A21S', 'samsung-a22':'A22 4G / A22 5G', 'samsung-a23':'A23', 'samsung-a24':'A24',
        'samsung-a25':'A25', 'samsung-a30':'A30 / A30S', 'samsung-a31':'A31', 'samsung-a31':'A31', 'samsung-a32':'A32 4G /A32 5G',
        'samsung-a33':'A33', 'samsung-a34':'A34', 'samsung-a35':'A35', 'samsung-a50':'A50', 'samsung-a51':'A51',
        'samsung-a52':'A52 / A52S', 'samsung-a53':'A53', 'samsung-a54':'A54', 'samsung-a55':'A55', 'samsung-a70':'A70',
        'samsung-a71':'A71', 'samsung-a72':'A72', 'samsung-a73':'A73', 'samsung-a80':'A80', 'samsung-a7-2018':'A7 2018',
        'samsung-a8':'A8', 'samsung-a8-plus':'A8 PLUS',
    'samsung-j2p':'J2 PRO', 'samsung-j2c':'J2 CORE', 'samsung-j3':'J3', 'samsung-j4':'J4', 'samsung-j4p':'J4 PLUS', 
        'samsung-j4c':'J4 CORE', 'samsung-j5':'J5', 'samsung-j5-metal':'J5 METAL','samsung-j5-prime':'J5 PRIME',
        'samsung-j5-pro':'J5 PRO','samsung-j6':'J6', 'samsung-j6-plus':'J6 PLUS', 'samsung-j7':'J7', 'samsung-j7-prime':'J7 PRIME',
        'samsung-j7-pro':'J7 PRO','samsung-j7-metal':'J7 METAL', 'samsung-j8':'J8',
    'samsung-m10':'M10', 'samsung-m12':'M12', 'samsung-m13':'M13', 'samsung-m14':'M14', 'samsung-m20':'M20','samsung-m21s':'M21 S',
        'samsung-m22':'M22', 'samsung-m23':'M23', 'samsung-m30':'M30', 'samsung-m31':'M31', 'samsung-m32':'M32', 'samsung-m33':'M33',
        'samsung-m51':'M51', 'samsung-m52':'M52', 'samsung-m53':'M53', 'samsung-m54':'M54', 'samsung-m62':'M62',
    'samsung-s7':'S7', 'samsung-s7-edge':'S7 EDGE', 'samsung-s8':'S8', 'samsung-s8-plus':'S8 PLUS', 'samsung-s9':'S9',
        'samsung-s9-plus':'S9 PLUS', 'samsung-s10-e':'S10 E', 'samsung-s10':'S10', 'samsung-s10-plus':'S10 PLUS', 'samsung-s20':'S20',
        'samsung-s20-fe':'S20 FE', 'samsung-s20-plus':'S20 PLUS', 'samsung-s20-ultra':'S20 ULTRA', 'samsung-s21':'S21', 
        'samsung-s21-plus':'S21 PLUS', 'samsung-s21-fe':'S21 FE', 'samsung-s22':'S22', 'samsung-s22-plus':'S22 PLUS', 
        'samsung-s22-ultra':'S22 ULTRA', 'samsung-s23':'S23', 'samsung-s23-fe':'S23 FE', 'samsung-s23-plus':'S23 PLUS',
        'samsung-s23-ultra':'S23 ULTRA', 'samsung-s24':'S24',
    'samsung-note-10':'NOTE 10', 'samsung-note10-plus':'NOTE 10 PLUS', 'samsung-note10-lite':'NOTE 10 LITE', 
        'samsung-note20':'NOTE 20', 'samsung-note20-plus':'NOTE 20 PLUS', 'samsung-note20-ultra':'NOTE 20 ULTRA',
    'samsung-tab-a7-lite':'TAB A7 LITE - 8.7', 'samsung-tab-a-2016':'TAB A 2016 - 7.0', 'samsung-tab-a-2019':'TAB A 2019 - 8.0',
        'samsung-tab-a8':'TAB A8 - 8.0', 'samsung-tab-a7':'TAB A7 - 10.4', 'samsung-tab-a-2019':'TAB A 2019 - 10.1',
        'samsung-tab-e':'TAB E - 9.6', 'samsung-tab-s6-lite':'TAB S6 LITE - 10.4', 'samsung-tab-a8':'TAB A8 - 10.5',
        'samsung-tab-s5-e':'TAB S5 E - 10.5',
    

    'moto-g4':'G4 / G4 PLAY / G4PLUS', 'moto-g5':'G5 S / G5 PLUS / G5 S PLUS', 'moto-g6':'G6 /G6 PLAY/ G6 PLUS', 
        'moto-g7':'G7 / G7 PLAY / G7 PLUS', 'moto-g8':'G8 / G8 PLAY /G8 PLUS', 'moto-g9':'G9 / G9 PLAY / G9 PLUS',
        'moto-g10-g20-g30':'G10/ G20 / G30', 'moto-g5g':'G 5G', 'moto-g5g-plus':'G 5G PLUS', 'moto-g04':'G04 / G04S', 
        'moto-g13':'G 13', 'moto-g14':'G 14', 'moto-g22':'G 22', 'moto-g23':'G 23', 'moto-g24':'G 24', 'moto-g31':'G 31', 
        'moto-g32':'G 32', 'moto-g34':'G 34', 'moto-g41':'G 41', 'moto-g42':'G 42', 'moto-g50':'G 50', 'moto-g51':'G 51', 
        'moto-g52':'G 52', 'moto-g53':'G 53', 'moto-g54':'G 54', 'moto-g60':'G 60 / G60S', 'moto-g62':'G 62', 'moto-g71':'G 71',
        'moto-g72':'G 72', 'moto-g73':'G 73', 'moto-g82':'G 82', 'moto-g84':'G 84', 'moto-g100':'G 100', 'moto-g200':'G 200',
    'moto-e4':'E4 / E4 PLUS', 'moto-e5':'E5/ E5 PLAY / E5 PLUS', 'moto-e6':'E6 / E6 PLAY / E6-S', 'moto-e6-plus':'E6 PLUS',
        'moto-e7':'E7 /E7 PLUS / E7 POWER', 'moto-e13':'E13', 'moto-e20':'E20', 'moto-e22':'E22', 'moto-e30':'E30', 
        'moto-e32':'E32', 'moto-e40':'E40',
    'moto-one':'ONE', 'moto-vision':'VISION', 'moto-hyper':'HYPER', 'moto-action':'ACTION', 'moto-zoom':'ZOOM', 
        'moto-macro':'MACRO', 'moto-fusion':'FUSION', 'moto-fusion-plus':'FUSION PLUS', 
    'moto-edge':'EDGE', 'moto-edge-20':'EDGE 20', 'moto-edge-20-pro':'EDGE 20 PRO', 'moto-edge-20-lite':'EDGE 20 LITE', 
        'moto-edge-20-plus':'EDGE 20 PLUS', 'moto-edge30':'EDGE', 'moto-edge-30-neo':'EDGE 30 NEO', 
        'moto-edge-30-fusion':'EDGE 30 FUSION', 'moto-edge-40':'EDGE 40', 'moto-edge-40-neo':'EDGE 40 NEO',
    'moto-z':'Z', 'moto-z-play':'Z PLAY', 'moto-z2-play':'Z2 PLAY', 'moto-z3-play':'Z3 PLAY', 
    'moto-x4':'X4', 'moto-x-style':'X STYLE',
    'moto-c':'C', 'moto-c-plus':'C PLUS',

    'xiaomi-note5':'NOTE 5', 'xiaomi-note6':'NOTE 6', 'xiaomi-note7':'NOTE 7', 'xiaomi-note8':'NOTE 8',
        'xiaomi-note8-pro':'NOTE 8 PRO', 'xiaomi-note9':'NOTE 9 / 9S', 'xiaomi-note10-4g':'NOTE 10 4G', 'xiaomi-note10s':'NOTE 10S', 
        'xiaomi-note10-lite':'NOTE 10 LITE', 'xiaomi-note10-5g':'NOTE 10 5G', 'xiaomi-note10-pro':'NOTE 10 PRO',   
        'xiaomi-note11-4g':'NOTE 11 4G', 'xiaomi-note11-5g':'NOTE 11 5G', 'xiaomi-note11-s':'NOTE 11 S', 
        'xiaomi-note11-pro':'NOTE 11 PRO', 'xiaomi-note11-pro-plus':'NOTE 11 PRO PLUS', 'xiaomi-note11-t-pro':'NOTE 11 T PRO', 
        'xiaomi-note12-4g':'NOTE 12 4G', 'xiaomi-note12-5g':'NOTE 12 5G', 'xiaomi-note12-s':'NOTE 12S','xiaomi-note12-c':'NOTE 12 C', 
        'xiaomi-note1-pro':'NOTE 12 PRO', 'xiaomi-note12-pro-plus':'NOTE 12 PRO PLUS', 'xiaomi-note13-4g':'NOTE 13 4G',
        'xiaomi-note13-5g':'NOTE 13 5G', 'xiaomi-note13-pro-4g':'NOTE 13 PRO 4G', 'xiaomi-note13-pro-5g':'NOTE 13 PRO 5G', 
        'xiaomi-note13-pro-plus':'NOTE 13 PRO PLUS', 
    'xiaomi-redmi-6-6a':'REDMI 6 / 6A', 'xiaomi-redmi-7-7a':'REDMI 7 / 7A', 'xiaomi-redmi-8-8a':'REDMI 8 / 8A', 
        'xiaomi-redmi-9a-9c':'REDMI 9A / 9C', 'xiaomi-redmi10-c-a':'REDMI 10 / 10A / 10C', 'xiaomi-redmi-11-prime':'REDMI 11 PRIME',
        'xiaomi-redmi-12':'REDMI 12', 'xiaomi-redmi-12c':'REDMI 12C', 'xiaomi-redmi-13c':'REDMI 13C',
    'xiaomi-mi-go':'MI GO', 'xiaomi-mi-a1-antigo':'MI A1 ANTIGO', 'xiaomi-mi-a1-novo':'MI A1 NOVO', 
        'xiaomi-mi-a2-a2-lite':'MI A2 / A2 LITE', 'xiaomi-mi-a3':'MI A3', 'xiaomi-mi-a3-lite':'MI A3 LITE', 'xiaomi-mi8':'MI 8', 
        'xiaomi-mi8-lite':'MI 8 LITE', 'xiaomi-mi8a':'MI 8A', 'xiaomi-mi8t':'MI 8 T', 'xiaomi-mi9':'MI 9', 
        'xiaomi-mi9t-pro':'MI 9T PRO', 'xiaomi-mi9t':'MI 9T', 'xiaomi-mi9-lite':'MI 9 LITE', 'xiaomi-mi9se':'MI 9SE',
        'xiaomi-mi10t':'MI 10T', 'xiaomi-mi10-lite':'MI 10 LITE', 'xiaomi-mi11':'MI 11', 'xiaomi-mi11-lite':'MI 11 LITE', 
    'xiaomi-poco-c65':'POCO C65', 'xiaomi-poco-x3':'POCO X3', 'xiaomi-poco-x3-pro':'POCO X3 PRO', 'xiaomi-poco-x3-gt':'POCO X3 GT', 
        'xiaomi-poco-x4-gt':'POCO X4 GT', 'xiaomi-poco-x4-pro':'POCO X4 PRO', 'xiaomi-poco-x5':'POCO X5',
        'xiaomi-poco-x5-pro':'POCO X5 PRO', 'xiaomi-poco-x6':'POCO X6', 'xiaomi-poco-x6-pro':'POCO X6 PRO', 'xiaomi-poco-f1':'POCO F1',
        'xiaomi-poco-f2':'POCO F2', 'xiaomi-poco-f3':'POCO F3', 'xiaomi-poco-f4':'POCO F4', 'xiaomi-poco-m3':'POCO M3', 
        'xiaomi-poco-m4':'POCO M4', 'xiaomi-poco-m4-pro':'POCO M4 PRO', 'xiaomi-poco-m5':'POCO M5', 'xiaomi-poco-s2':'POCO S2',

    'realme-c2':'REALME C2', 'realme-c3':'REALME C3', 'realme-12c':'REALME 12C', 'realme-c11':'REALME C11', 'realme-c12':'REALME C12',
        'realme-c15':'REALME C15', 'realme-c20':'REALME C20', 'realme-c25':'REALME C25', 'realme-c30':'REALME C30', 
        'realme-c33':'REALME C33', 'realme-c35':'REALME C35', 'realme-c53':'REALME C53', 'realme-c55':'REALME C55', 
        'realme-c65':'REALME C65', 'realme-c67':'REALME C67', 
    'realme-6':'REALME 6', 'realme-7':'REALME 7', 'realme-7-pro':'REALME 7 PRO', 'realme-8-4g':'REALME 8 4G', 
        'realme-8-5g':'REALME 8 5G', 'realme-8-pro':'REALME 8 PRO', 'realme-9':'REALME 9', 'realme-10':'REALME 10', 
    'realme-gt2':'REALME GT2 EXPLORER',  

    'asus-zenfone-ze600':'ZENFONE - ZE600', 'asus-zenfone-ze601':'ZENFONE - ZE601', 'asus-zenfone-ze553':'ZENFONE - ZE553', 
        'asus-zenfone-ze550':'ZENFONE - ZE550', 'asus-zenfone-ze551':'ZENFONE - ZE551', 'asus-zenfone-ze552':'ZENFONE - ZE552', 
        'asus-zenfone-ze554':'ZENFONE - ZE554','asus-zenfone-ze620':'ZENFONE - ZE620', 'asus-zenfone-ze630':'ZENFONE - ZE630',
    'asus-zenfone-zc553':'ZENFONE - ZC553', 'asus-zenfone-zc554':'ZENFONE - ZC554', 'asus-zenfone-zc520':'ZENFONE - ZC520',
        'asus-zenfone-zc600':'ZENFONE - ZC600',
    'asus-zenfone-zb633':'ZENFONE - ZB633', 'asus-zenfone-zb634':'ZENFONE - ZB634', 'asus-zenfone-zb630':'ZENFONE - ZB630',
        'asus-zenfone-zb631':'ZENFONE - ZB631', 'asus-zenfone-zb570':'ZENFONE - ZB570', 'asus-zenfone-zb500':'ZENFONE - ZB500',
        'asus-zenfone-zb551':'ZENFONE - ZB551', 'asus-zenfone-zb552':'ZENFONE - ZB552', 'asus-zenfone-zb553':'ZENFONE - ZB553', 
        'asus-zenfone-zb555':'ZENFONE - ZB555', 'asus-zenfone-zb601':'ZENFONE - ZB601', 'asus-zenfone-zb602':'ZENFONE - ZB602',
    'asus-zenfone-za550':'ZENFONE - ZA550', 'asus-zenfone-za501':'ZENFONE - ZA501',
    'asus-rogphone-zs660':'ROG PHONE - ZS660', 'asus-zenfone-zs620':'ZENFONE - ZS620', 'asus-zenfone-zs630':'ZENFONE - ZS630',
        'asus-zenfone-zs670':'ZENFONE - ZS670',
    'asus-zenfone-zd551':'ZENFONE - ZD551', 'asus-zenfone-zd552':'ZENFONE - ZD552', 'asus-zenfone-zd553':'ZENFONE - ZD553', 
        'asus-zenfone-zd554':'ZENFONE - ZD554', 

    'infinix-hot-8-lite':'INFINIX HOT 8 LITE', 'infinix-hot-10':'INFINIX HOT 10', 'infinix-hot-10-play':'INFINIX HOT 10 PLAY', 
        'infinix-hot-11':'INFINIX HOT 11', 'infinix-hot-11s':'INFINIX HOT 11S', 'infinix-hot-11-pro':'INFINIX HOT 11 PRO', 
        'infinix-hot-40-pro':'INFINIX HOT 40 PRO', 'infinix-hot-30-i':'INFINIX HOT 30I', 'infinix-hot-20-i':'INFINIX HOT 20I',
        'infinix-hot-20-play':'INFINIX HOT 20 PLAY', 
    'infinix-note-10-pro':'INFINIX NOTE 10 PRO', 'infinix-note-11':'INFINIX NOTE 11', 'infinix-note-11-pro':'INFINIX NOTE 11 PRO', 
        'infinix-note-12-pro':'INFINIX NOTE 12 PRO',
    'infinix-spark-6-go':'INFINIX SPARK 6 GO', 'infinix-spark-6':'INFINIX SPARK 6', 'infinix-spark-7':'INFINIX SPARK 7',
        'infinix-spark-8':'INFINIX SPARK 8', 
    
    'nokia-c01':'NOKIA C01', 'nokia-c11':'NOKIA C11', 'nokia-c20':'NOKIA C20', 'nokia-c30':'NOKIA C30', 'nokia-c50':'NOKIA C50',
    'nokia-g20':'NOKIA G20', 'nokia-g21':'NOKIA G21', 'nokia-g50':'NOKIA G50',
    'nokia-2.3':'NOKIA 2.3', 'nokia-2.4':'NOKIA 2.4', 'nokia-3.1':'NOKIA 3.1', 'nokia-5.3':'NOKIA 5.3', 'nokia-6.1':'NOKIA 6.1',
        'nokia-6.2':'NOKIA 6.2',
    
    'lg-k4':'K4', 'lg-k8':'K8', 'lg-k10':'K10', 'lg-k10-power':'K10 POWER', 'lg-k10-pro':'K10 PRO', 'lg-k10-2017':'K10 2017', 
        'lg-k11':'K11', 'lg-k12':'K12', 'lg-k12-plus':'K12 PLUS', 'lg-k12-max':'K12 MAX', 'lg-k12-prime':'K12 PRIME',
        'lg-k22':'K22', 'lg-k40-k40s':'K40 / K40S', 'lg-k41-k41s':'K41 / K41S', 'lg-k42':'K42', 'lg-k50-k50s':'K50 / K50S', 
        'lg-k51-k51s':'K51 / K51S', 'lg-k52':'K52', 'lg-k61':'K61', 'lg-k62':'K62', 'lg-k71':'K71', 'lg-k72':'K72',
    'lg-q6':'Q6', 

    };

// ================= DADOS DE PREÇOS DE CADA MODELO =================
const dispositivoData = {
    'iphone-6-6s': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 200,00 Á VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 140,00'], 
        ['BOTÕES', 'R$ 130,00'], ['MICROFONE', 'R$ 140,00'],['BATERIA', 'R$ 140,00'], ['CÂMERA TRASEIRA', 'R$ 170,00'], 
        ['CÂMERA FRONTAL', 'R$ 130,00'],['FPC', 'R$ 190,00'], ['TAMPA TRASEIRA', 'NÃO FAZ'], ['VIDRO TELA', 'R$ 200,00'],
        ['LENTE CÂMERA', 'R$ 50,00'], ['FACE ID', 'NÃO FAZ'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 120,00'], 
        ['SOFTWARE', 'R$ 70,00'],],
    'iphone-6-plus-6s-plus': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 220,00 Á VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 140,00'], 
        ['BOTÕES', 'R$ 130,00'], ['MICROFONE', 'R$ 140,00'],['BATERIA', 'R$ 140,00'], ['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'],['FPC', 'R$ 190,00'], ['TAMPA TRASEIRA', 'NÃO FAZ'], ['VIDRO TELA', 'R$ 200,00'],
        ['LENTE CÂMERA', 'R$ 50,00'], ['FACE ID', 'NÃO FAZ'], ['ALTO FALANTE', 'R$ 130,00'],['AURICULAR', 'R$ 120,00'], 
        ['SOFTWARE', 'R$ 70,00'],],
    'iphone-7': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 200,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 150,00'], 
        ['BOTÕES', 'R$ 130,00'], ['MICROFONE', 'R$ 140,00'],['BATERIA', 'R$ 150,00'], ['CÂMERA TRASEIRA', 'R$ 240,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'],['FPC', 'R$ 220,00'], ['TAMPA TRASEIRA', 'NÃO FAZ'], ['VIDRO TELA', 'R$ 180,00'],
        ['LENTE CÂMERA', 'R$ 50,00'], ['FACE ID', 'NÃO FAZ'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 120,00'], 
        ['SOFTWARE', 'R$ 70,00'], ],
    'iphone-7-plus': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 140,00'], 
        ['BOTÕES', 'R$ 140,00'], ['MICROFONE', 'R$ 160,00'],['BATERIA', 'R$ 160,00'], ['CÂMERA TRASEIRA', 'R$ 300,00'], 
        ['CÂMERA FRONTAL', 'R$ 150,00'],['FPC', 'R$ 220,00'], ['TAMPA TRASEIRA', 'NÃO FAZ'], ['VIDRO TELA', 'R$ 180,00'],
        ['LENTE CÂMERA', 'R$ 50,00'], ['FACE ID', 'NÃO FAZ'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], 
        ['SOFTWARE', 'R$ 70,00'],],
    'iphone-8': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 150,00'], 
        ['BOTÕES', 'R$ 130,00'], ['MICROFONE', 'R$ 150,00'], ['BATERIA', 'R$ 150,00'], ['CÂMERA TRASEIRA', 'R$ 290,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 220,00'], ['TAMPA TRASEIRA', 'R$ 220,00'], ['VIDRO TELA', 'R$ 200,00'],
        ['LENTE CÂMERA', 'R$ 50,00'], ['FACE ID', 'NÃO FAZ'], ['ALTO FALANTE', 'R$ 150,00'], ['AURICULAR', 'R$ 140,00'], 
        ['SOFTWARE', 'R$ 70,00'],],
    'iphone-8-se': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 140,00'], 
        ['BOTÕES', 'R$ 130,00'], ['MICROFONE', 'R$ 140,00'],['BATERIA', 'R$ 150,00'], ['CÂMERA TRASEIRA', 'R$ 270,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 220,00'], ['TAMPA TRASEIRA', 'R$ 220,00'], ['VIDRO TELA', 'R$ 200,00'],
        ['LENTE CÂMERA', 'R$ 50,00'], ['FACE ID', 'NÃO FAZ'], ['ALTO FALANTE', 'R$ 150,00'], ['AURICULAR', 'R$ 140,00'], 
        ['SOFTWARE', 'R$ 70,00'],],
    'iphone-8-plus': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 230,00 À VISTA / R$ 250,00 EM 10X'], ['CONECTOR', 'R$ 150,00'], 
        ['BOTÕES', 'R$ 130,00'], ['MICROFONE', 'R$ 170,00'],['BATERIA', 'R$ 160,00'], ['CÂMERA TRASEIRA', 'R$ 350,00'], 
        ['CÂMERA FRONTAL', 'R$ 150,00'],['FPC', 'R$ 220,00'], ['TAMPA TRASEIRA', 'R$ 220,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 50,00'], ['FACE ID', 'NÃO FAZ'], ['ALTO FALANTE', 'R$ 150,00'],['AURICULAR', 'R$ 140,00'], 
        ['SOFTWARE', 'R$ 70,00'],],
    'iphone-x': [
        ['TELA FRONTAL INCELL JK', 'R$ 230,00 À VISTA / R$ 250,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 270,00 À VISTA / R$290,00 EM 10X'],['CONECTOR', 'R$ 170,00'], ['BOTÕES', 'R$ 150,00'],
        ['MICROFONE', 'R$ 170,00'],['BATERIA', 'R$ 200,00'], ['CÂMERA TRASEIRA', 'R$ 320,00'], ['CÂMERA FRONTAL', 'R$ 270,00'],
        ['FPC', 'R$ 250,00'], ['TAMPA TRASEIRA', 'R$ 220,00'], ['VIDRO TELA', 'R$ 250,00'],['LENTE CÂMERA', 'R$ 50,00'], 
        ['FACE ID', 'R$ 270,00'], ['ALTO FALANTE', 'R$ 150,00'], ['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 70,00'],],
    'iphone-xs': [
        ['TELA FRONTAL INCELL JK', 'R$ 230,00 À VISTA / R$ 250,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 290,00 À VISTA / R$ 310,00 EM 10X'],['CONECTOR', 'R$ 170,00'],['BOTÕES', 'R$ 150,00'],
        ['MICROFONE', 'R$ 170,00'],['BATERIA', 'R$ 200,00'], ['CÂMERA TRASEIRA', 'R$ 350,00'], ['CÂMERA FRONTAL', 'R$ 290,00'],
        ['FPC', 'R$ 250,00'], ['TAMPA TRASEIRA', 'R$ 220,00'], ['VIDRO TELA', 'R$ 260,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['FACE ID', 'R$ 270,00'], ['ALTO FALANTE', 'R$ 160,00'], ['AURICULAR', 'R$ 190,00'], ['SOFTWARE', 'R$ 70,00'],],
    'iphone-xs-max': [
        ['TELA FRONTAL INCELL JK', 'R$ 270,00 À VISTA / R$ 290,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 370,00 À VISTA / R$ 390,00 EM 10X'],['CONECTOR', 'R$ 230,00'],['BOTÕES', 'R$ 180,00'],
        ['MICROFONE', 'R$ 230,00'],['BATERIA', 'R$ 220,00'], ['CÂMERA TRASEIRA', 'R$ 370,00'], ['CÂMERA FRONTAL', 'R$ 190,00'],
        ['FPC', 'R$ 250,00'], ['TAMPA TRASEIRA', 'R$ 220,00'], ['VIDRO TELA', 'R$ 270,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['FACE ID', 'R$ 290,00'], ['ALTO FALANTE', 'R$ 180,00'],['AURICULAR', 'R$ 190,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-xr': [
        ['TELA FRONTAL INCELL JK', 'R$ 220,00 À VISTA / R$ 250,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 270,00 À VISTA / R$ 290,00 EM 10X'],['CONECTOR', 'R$ 160,00'],['BOTÕES', 'R$ 140,00'],
        ['MICROFONE', 'R$ 150,00'],['BATERIA', 'R$ 170,00'], ['CÂMERA TRASEIRA', 'R$ 300,00'], ['CÂMERA FRONTAL', 'R$ 160,00'],
        ['FPC', 'R$ 240,00'], ['TAMPA TRASEIRA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 210,00'],['LENTE CÂMERA', 'R$ 55,00'], 
        ['FACE ID', 'R$ 380,00'], ['ALTO FALANTE', 'R$ 160,00'],['AURICULAR', 'R$ 150,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-11': [
        ['TELA FRONTAL INCELL JK', 'R$ 220,00 À VISTA / R$ 250,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 270,00 À VISTA / R$ 290,00 EM 10X'],['CONECTOR', 'R$ 220,00'],['BOTÕES', 'R$ 190,00'],
        ['MICROFONE', 'R$ 220,00'],['BATERIA', 'R$ 220,00'], ['CÂMERA TRASEIRA', 'R$ 370,00'], ['CÂMERA FRONTAL', 'R$ 350,00'],
        ['FPC', 'R$ 250,00'], ['TAMPA TRASEIRA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 270,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['FACE ID', 'R$ 350,00'], ['ALTO FALANTE', 'R$ 170,00'],['AURICULAR', 'R$ 190,00'], ['SOFTWARE', 'R$ 90,00'],],
    'iphone-11-pro': [
        ['TELA FRONTAL INCELL JK', 'R$ 260,00 À VISTA / R$ 290,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 360,00 À VISTA / R$ 390,00 EM 10X'],['CONECTOR', 'R$ 240,00'],['BOTÕES', 'R$ 200,00'],
        ['MICROFONE', 'R$ 250,00'],['BATERIA', 'R$ 230,00'], ['CÂMERA TRASEIRA', 'R$ 490,00'], ['CÂMERA FRONTAL', 'R$ 370,00'],
        ['FPC', 'R$ 250,00'], ['TAMPA TRASEIRA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 290,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['FACE ID', 'R$ 350,00'], ['ALTO FALANTE', 'R$ 190,00'],['AURICULAR', 'R$ 200,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-11-pro-max': [
        ['TELA FRONTAL INCELL JK', 'R$ 270,00 À VISTA / R$ 290,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 390,00 À VISTA / R$ 420,00 EM 10X'],['CONECTOR', 'R$ 240,00'],['BOTÕES', 'R$ 200,00'],
        ['MICROFONE', 'R$ 240,00'],['BATERIA', 'R$ 250,00'], ['CÂMERA TRASEIRA', 'R$ 490,00'], ['CÂMERA FRONTAL', 'R$ 390,00'],
        ['FPC', 'R$ 260,00'], ['TAMPA TRASEIRA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 320,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['FACE ID', 'R$ 370,00'], ['ALTO FALANTE', 'R$ 200,00'],['AURICULAR', 'R$ 220,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-12': [
        ['TELA FRONTAL INCELL JK', 'R$ 320,00 À VISTA / R$ 350,00 EM 10X'],
        ['TELA FRONTAL OLED', 'R$ 590,00 À VISTA / R$ 690,00 EM 10X'],['CONECTOR', 'R$ 290,00'],['BOTÕES', 'R$ 250,00'], 
        ['MICROFONE', 'R$ 290,00'],['BATERIA', 'R$ 250,00'], ['CÂMERA TRASEIRA', 'R$ 490,00'], ['CÂMERA FRONTAL', 'R$ 470,00'],
        ['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 320,00'], ['VIDRO TELA', 'R$ 450,00'],['LENTE CÂMERA', 'R$ 80,00'], 
        ['FACE ID', 'R$ 490,00'], ['ALTO FALANTE', 'R$ 300,00'],['AURICULAR', 'R$ 350,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-12-mini': [
        ['TELA FRONTAL INCEL', 'R$ 390,00 À VISTA / R$ 430,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 550,00 À VISTA / R$ 590,00 EM 10X'],['CONECTOR', 'R$ 350,00'],['BOTÕES', 'R$ 290,00'],
        ['MICROFONE', 'R$ 350,00'],['BATERIA', 'R$ 350,00'], ['CÂMERA TRASEIRA', 'R$ 550,00'], ['CÂMERA FRONTAL', 'R$ 350,00'],
        ['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 320,00'], ['VIDRO TELA', 'R$ 450,00'],['LENTE CÂMERA', 'R$ 80,00'], 
        ['FACE ID', 'R$ 490,00'], ['ALTO FALANTE', 'R$ 320,00'],['AURICULAR', 'R$ 350,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-12-pro': [
        ['TELA FRONTAL INCELL JK', 'R$ 320,00 À VISTA / R$ 350,00 EM 10X'],
        ['TELA FRONTAL OLED', 'R$ 590,00 À VISTA / R$ 690,00 EM 10X'],['CONECTOR', 'R$ 350,00'], ['BOTÕES', 'R$ 290,00'], 
        ['MICROFONE', 'R$ 350,00'],['BATERIA', 'R$ 350,00'], ['CÂMERA TRASEIRA', 'R$ 550,00'], ['CÂMERA FRONTAL', 'R$ 490,00'],
        ['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 320,00'], ['VIDRO TELA', 'R$ 450,00'],['LENTE CÂMERA', 'R$ 80,00'], 
        ['FACE ID', 'R$ 490,00'], ['ALTO FALANTE', 'R$ 320,00'],['AURICULAR', 'R$ 350,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-12-pro-max': [
        ['TELA FRONTAL INCELL JK', 'R$ 420,00 À VISTA / R$ 450,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA OLED', 'R$ 790,00 À VISTA / R$ 890,00 EM 10X'],['CONECTOR', 'R$ 350,00'],['BOTÕES', 'R$ 290,00'],
        ['MICROFONE', 'R$ 350,00'],['BATERIA', 'R$ 350,00'], ['CÂMERA TRASEIRA', 'R$ 690,00'], ['CÂMERA FRONTAL', 'R$ 550,00'],
        ['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 350,00'], ['VIDRO TELA', 'R$ 490,00'],['LENTE CÂMERA', 'R$ 80,00'], 
        ['FACE ID', 'R$ 550,00'], ['ALTO FALANTE', 'R$ 320,00'],['AURICULAR', 'R$ 350,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-13': [
        ['TELA FRONTAL INCELL JK', 'R$ 390,00 À VISTA / R$ 430,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA OLED', 'R$ 690,00 À VISTA / R$ 790,00 EM 10X'],['CONECTOR', 'R$ 370,00'],['BOTÕES', 'R$ 350,00'], 
        ['MICROFONE', 'R$ 370,00'],['BATERIA', 'R$ 370,00'], ['CÂMERA TRASEIRA', 'R$ 650,00'], ['CÂMERA FRONTAL', 'R$ 600,00'],
        ['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 350,00'], ['VIDRO TELA', 'R$ 550,00'],['LENTE CÂMERA', 'R$ 80,00'], 
        ['FACE ID', 'R$ 650,00'], ['ALTO FALANTE', 'R$ 350,00'],['AURICULAR', 'R$ 320,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-13-mini': [
        ['TELA FRONTAL INCELL', 'R$ 420,00 À VISTA / R$ 450,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 690,00 À VISTA / R$ 750,00 EM 10X'],['CONECTOR', 'R$ 370,00'], ['BOTÕES', 'R$ 350,00'],
        ['MICROFONE', 'R$ 370,00'],['BATERIA', 'R$ 370,00'], ['CÂMERA TRASEIRA', 'R$ 650,00'], ['CÂMERA FRONTAL', 'R$ 350,00'],
        ['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 350,00'], ['VIDRO TELA', 'R$ 590,00'],['LENTE CÂMERA', 'R$ 80,00'], 
        ['FACE ID', 'R$ 650,00'], ['ALTO FALANTE', 'R$ 350,00'],['AURICULAR', 'R$ 320,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-13-pro': [
        ['TELA FRONTAL PRIMEIRA LINHA OLED', 'R$ 890,00 À VISTA / R$ 990,00 EM 10X'],['CONECTOR', 'R$ 370,00'], ['BOTÕES', 'R$ 350,00'],
        ['MICROFONE', 'R$ 370,00'],['BATERIA', 'R$ 370,00'], ['CÂMERA TRASEIRA', 'R$ 650,00'], ['CÂMERA FRONTAL', 'R$ 600,00'],
        ['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 350,00'], ['VIDRO TELA', 'R$ 590,00'],['LENTE CÂMERA', 'R$ 80,00'], 
        ['FACE ID', 'R$ 650,00'], ['ALTO FALANTE', 'R$ 320,00'],['AURICULAR', 'R$ 350,00'], ['SOFTWARE', 'R$ 80,00'],],
    'iphone-13-pro-max': [
        ['TELA FRONTAL INCELL', 'R$ 890,00 À VISTA / R$ 990,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA OLED', 'R$ 1250,00 À VISTA / R$ 1390,00 EM 10X'],['CONECTOR', 'R$ 390,00'], 
        ['BOTÕES', 'R$ 350,00'], ['MICROFONE', 'R$ 390,00'],['BATERIA', 'R$ 490,00'], ['CÂMERA TRASEIRA', 'R$ 750,00'], 
        ['CÂMERA FRONTAL', 'R$ 690,00'],['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 370,00'], ['VIDRO TELA', 'R$ 690,00'],
        ['LENTE CÂMERA', 'R$ 80,00'], ['FACE ID', 'R$ 690,00'], ['ALTO FALANTE', 'R$ 350,00'],['AURICULAR', 'R$ 390,00'], 
        ['SOFTWARE', 'R$ 90,00'],],
    'iphone-14': [
        ['TELA FRONTAL PRIMEIRA LINHA OLED', 'R$ 690,00 À VISTA / R$ 790,00 EM 10X'],['CONECTOR', 'R$ 390,00'],['BOTÕES', 'R$ 370,00'],
        ['MICROFONE', 'R$ 390,00'],['BATERIA', 'R$ 450,00'], ['CÂMERA TRASEIRA', 'R$ 670,00'], ['CÂMERA FRONTAL', 'R$ 650,00'],
        ['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 370,00'], ['VIDRO TELA', 'R$ 590,00'],['LENTE CÂMERA', 'R$ 80,00'], 
        ['FACE ID', 'R$ 650,00'], ['ALTO FALANTE', 'R$ 350,00'],['AURICULAR', 'R$ 390,00'], ['SOFTWARE', 'R$ 90,00'],],
    'iphone-14-pro': [
        ['TELA FRONTAL OLED', 'R$ 1490,00 À VISTA / R$ 1690,00 EM 10X'],['CONECTOR', 'R$ 390,00'], ['BOTÕES', 'R$ 370,00'], 
        ['MICROFONE', 'R$ 390,00'],['BATERIA', 'R$ 450,00'], ['CÂMERA TRASEIRA', 'R$ 670,00'], ['CÂMERA FRONTAL', 'R$ 650,00'],
        ['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 370,00'], ['VIDRO TELA', 'R$ 690,00'],['LENTE CÂMERA', 'R$ 80,00'], 
        ['FACE ID', 'R$ 670,00'], ['ALTO FALANTE', 'R$ 390,00'],['AURICULAR', 'R$ 360,00'], ['SOFTWARE', 'R$ 90,00'],],
    'iphone-14-plus': [
        ['TELA FRONTAL INCELL', 'R$ 590,00 À VISTA / R$ 650,00 EM 10X'],
        ['TELA FRONTAL PRIMEIRA LINHA OLED', 'R$ 890,00 À VISTA / R$ 990,00 EM 10X'],['CONECTOR', 'R$ 390,00'],['BOTÕES', 'R$ 370,00'],
        ['MICROFONE', 'R$ 390,00'],['BATERIA', 'R$ 450,00'], ['CÂMERA TRASEIRA', 'R$ 670,00'], ['CÂMERA FRONTAL', 'R$ 650,00'],
        ['FPC', 'R$ 390,00'], ['TAMPA TRASEIRA', 'R$ 370,00'], ['VIDRO TELA', 'R$ 690,00'],['LENTE CÂMERA', 'R$ 80,00'], 
        ['FACE ID', 'R$ 670,00'], ['ALTO FALANTE', 'R$ 390,00'],['AURICULAR', 'R$ 360,00'], ['SOFTWARE', 'R$ 90,00'],],
    'iphone-14-pro-max': [
        ['TELA FRONTAL PRIMEIRA LINHA OLED', 'R$ 1890,00 À VISTA / R$ 2190,00 EM 10X'],['CONECTOR', 'R$ 450,00'],
        ['BOTÕES', 'R$ 390,00'], ['MICROFONE', 'R$ 450,00'],['BATERIA', 'R$ 490,00'], ['CÂMERA TRASEIRA', 'R$ 770,00'], 
        ['CÂMERA FRONTAL', 'R$ 750,00'],['FPC', 'R$ 450,00'], ['TAMPA TRASEIRA', 'R$ 450,00'], ['VIDRO TELA', 'R$ 750,00'],
        ['LENTE CÂMERA', 'R$ 90,00'], ['FACE ID', 'R$ 790,00'], ['ALTO FALANTE', 'R$ 400,00'],['AURICULAR', 'R$ 450,00'],
        ['SOFTWARE', 'R$ 90,00'],],
    'iphone-15': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 1190,00 À VISTA / R$ 1290,00 EM 10X'],['CONECTOR', 'R$ 550,00'],
        ['BOTÕES', 'R$ 490,00'], ['MICROFONE', 'R$ 550,00'],['BATERIA', 'R$ 650,00'],['CÂMERA TRASEIRA', 'R$ 790,00'], 
        ['CÂMERA FRONTAL', 'R$ 750,00'],['FPC', 'R$ 590,00'], ['TAMPA TRASEIRA', 'R$ 590,00'], ['VIDRO TELA', 'R$ 790,00'],
        ['LENTE CÂMERA', 'R$ 120,00'], ['FACE ID', 'R$ 950,00'], ['ALTO FALANTE', 'R$ 520,00'],['AURICULAR', 'R$ 550,00'], 
        ['SOFTWARE', 'R$ 90,00'],],
    'iphone-15-pro': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 1590,00 À VISTA / R$ 1690,00 EM 10X'],['CONECTOR', 'R$ 590,00'], 
        ['BOTÕES', 'R$ 490,00'], ['MICROFONE', 'R$ 590,00'],['BATERIA', 'R$ 690,00'], ['CÂMERA TRASEIRA', 'R$ 890,00'], 
        ['CÂMERA FRONTAL', 'R$ 790,00'],['FPC', 'R$ 690,00'], ['TAMPA TRASEIRA', 'R$ 590,00'], ['VIDRO TELA', 'R$ 990,00'],
        ['LENTE CÂMERA', 'R$ 120,00'], ['FACE ID', 'R$ 990,00'], ['ALTO FALANTE', 'R$ 520,00'],['AURICULAR', 'R$ 550,00'], 
        ['SOFTWARE', 'R$ 90,00'],],
    'iphone-15-plus': [
        ['TELA FRONTAL ORIGINAL', 'R$ 2100,00 À VISTA / R$ 2250,00 EM 10X'],['CONECTOR', 'R$ 590,00'], ['BOTÕES', 'R$ 490,00'], 
        ['MICROFONE', 'R$ 590,00'],['BATERIA', 'R$ 690,00'], ['CÂMERA TRASEIRA', 'R$ 890,00'], ['CÂMERA FRONTAL', 'R$ 790,00'],
        ['FPC', 'R$ 690,00'], ['TAMPA TRASEIRA', 'R$ 590,00'], ['VIDRO TELA', 'R$ 950,00'],['LENTE CÂMERA', 'R$ 120,00'], 
        ['FACE ID', 'R$ 990,00'], ['ALTO FALANTE', 'R$ 520,00'],['AURICULAR', 'R$ 550,00'], ['SOFTWARE', 'R$ 90,00'],],
    'iphone-15-pro-max': [
        ['TELA FRONTAL PRIMEIRA LINHA OLED', 'R$ 1190,00 À VISTA / R$ 2290,00 EM 10X'],['CONECTOR', 'R$ 690,00'],
        ['BOTÕES', 'R$ 490,00'], ['MICROFONE', 'R$ 690,00'],['BATERIA', 'R$ 690,00'],['CÂMERA TRASEIRA', 'R$ 990,00'], 
        ['CÂMERA FRONTAL', 'R$ 890,00'],['FPC', 'R$ 690,00'],['TAMPA TRASEIRA', 'R$ 690,00'],['VIDRO TELA', 'R$ 1200,00'],
        ['LENTE CÂMERA', 'R$ 120,00'],['FACE ID', 'R$ 990,00'],['ALTO FALANTE', 'R$ 500,00'],['AURICULAR', 'R$ 550,00'], 
        ['SOFTWARE', 'R$ 90,00'],],

        //IPAD
    'ipad-1-mini':[
        ['TOUCH + VIDRO', 'R$ 260,00 À VISTA / R$ 290,00 EM 10X'],
        ['CONECTOR','R$ 220,00'], ['BOTÕES', 'R$ 190,00'], ['SOFTWARE', 'R$ 80,00'],],
     'ipad-2-mini':[
        ['TOUCH + VIDRO', 'R$ 260,00 À VISTA / R$ 290,00 EM 10X'],
        ['CONECTOR','R$ 220,00'], ['BOTÕES', 'R$ 190,00'], ['SOFTWARE', 'R$ 80,00'],],
     'ipad-3-mini':[
        ['TOUCH + VIDRO', 'R$ 290,00 À VISTA / R$ 320,00 EM 10X'],
        ['CONECTOR','R$ 220,00'], ['BOTÕES', 'R$ 220,00'], ['SOFTWARE', 'R$ 80,00'],],
    'ipad-4-mini':[
        ['TOUCH + VIDRO', 'R$ 340,00 À VISTA / R$ 380,00 EM 10X'],
        ['CONECTOR','R$ 240,00'], ['BOTÕES', 'R$ 220,00'], ['SOFTWARE', 'R$ 80,00'],],
    'ipad-1':[
        ['TOUCH + VIDRO', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],
        ['CONECTOR','R$ 220,00'], ['BOTÕES', 'R$ 190,00'], ['SOFTWARE', 'R$ 80,00'],],
    'ipad-2':[
        ['TOUCH + VIDRO', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'],
        ['CONECTOR','R$ 220,00'], ['BOTÕES', 'R$ 190,00'], ['SOFTWARE', 'R$ 80,00'],],
    'ipad-3':[
        ['TOUCH + VIDRO', 'R$ 260,00 À VISTA / R$ 290,00 EM 10X'],
        ['CONECTOR','R$ 220,00'], ['BOTÕES', 'R$ 220,00'], ['SOFTWARE', 'R$ 80,00'],],
    'ipad-4':[
        ['TOUCH + VIDRO', 'R$ 360,00 À VISTA / R$ 390,00 EM 10X'],
        ['CONECTOR','R$ 250,00'], ['BOTÕES', 'R$ 230,00'], ['SOFTWARE', 'R$ 80,00'],],
    'ipad-5':[
        ['TOUCH + VIDRO', 'R$ 360,00 À VISTA / R$ 390,00 EM 10X'],
        ['CONECTOR','R$ 290,00'], ['BOTÕES', 'R$ 260,00'], ['SOFTWARE', 'R$ 80,00'],],
    'ipad-6':[
        ['TOUCH + VIDRO', 'R$ 450,00 À VISTA / R$ 490,00 EM 10X'],
        ['CONECTOR','R$ 290,00'], ['BOTÕES', 'R$ 260,00'], ['SOFTWARE', 'R$ 80,00'],],
    'ipad-7':[
        ['TOUCH + VIDRO', 'R$ 450,00 À VISTA / R$ 490,00 EM 10X'],
        ['CONECTOR','R$ 390,00'], ['BOTÕES', 'R$ 350,00'], ['SOFTWARE', 'R$ 90,00'],],
    'ipad-8':[
        ['TOUCH + VIDRO', 'R$ 490,00 À VISTA / R$ 550,00 EM 10X'],
        ['CONECTOR','R$ 390,00'], ['BOTÕES', 'R$ 350,00'], ['SOFTWARE', 'R$ 90,00'],],
    'ipad-9':[
        ['TOUCH + VIDRO', 'R$ 590,00 À VISTA / R$ 650,00 EM 10X'],
        ['CONECTOR','R$ 390,00'], ['BOTÕES', 'R$ 350,00'], ['SOFTWARE', 'R$ 90,00'],],
    
    
    // SAMSUNG
    //LINHA A
    'samsung-a01-a01-core': [
        ['TELA FRONTAL INCELL', 'R$ 170,00 À VISTA / R$ 190,00 EM 10X'], ['CONECTOR', 'R$ 70,00'], ['BOTÕES', 'R$ 90,00'], 
        ['MICROFONE', 'R$ 90,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 130,00'], 
        ['FPC', 'R$ 170,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'samsung-a02-a02s': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 200,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 90,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 160,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 170,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 170,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 100,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-a03': [
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 200,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 90,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 160,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 170,00'], ['TAMPA / CARCAÇA', 'R$ 150,00'], ['VIDRO TELA', 'R$ 190,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 80,00']], 
    'samsung-a04': [
        ['TELA FRONTAL INCELL', 'R$ 200,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 160,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 180,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 190,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-a05': [
        ['TELA FRONTAL INCELL', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 220,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 220,00'], ['TAMPA / CARCAÇA', 'R$ 180,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a10':[
        ['TELA FRONTAL INCELL', 'R$ 170,00 À VISTA / R$ 190,00 EM 10X'], ['CONECTOR', 'R$ 70,00'], ['BOTÕES', 'R$ 90,00'], 
        ['MICROFONE', 'R$ 90,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 130,00'], 
        ['FPC', 'R$ 170,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 140,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'samsung-a11':[
        ['TELA FRONTAL INCELL', 'R$ 170,00 À VISTA / R$ 190,00 EM 10X'], ['CONECTOR', 'R$ 70,00'], ['BOTÕES', 'R$ 90,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 160,00'], ['CÂMERA FRONTAL', 'R$ 130,00'], 
        ['FPC', 'R$ 170,00'], ['TAMPA / CARCAÇA', 'R$ 150,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'samsung-a12':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 200,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 90,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 160,00'], 
        ['CÂMERA FRONTAL', 'R$ 130,00'], ['FPC', 'R$ 180,00'], ['TAMPA / CARCAÇA', 'R$ 170,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-a13':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 320,OO À VISTA / R$ 350,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 180,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a14':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 450,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 180,00'], ['TAMPA / CARCAÇA', 'R$ 240,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a15':[
        ['TELA FRONTAL INCELL', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'],
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 370,00 À VISTA / R$ 390,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 490,OO À VISTA / R$ 550,00 EM 10X'], ['CONECTOR', 'R$ 130,00'], 
        ['BOTÕES', 'R$ 130,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 170,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 150,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 170,00'], ['VIDRO TELA', 'R$ 240,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a20':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 420,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a21':[
        ['TELA FRONTAL INCELL', 'R$ 200,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 170,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a22':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 260,00 À VISTA / R$ 290,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 450,OO À VISTA / R$ 490,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 130,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a23':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 550,OO À VISTA / R$ 590,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 240,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a24':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 390,00 À VISTA / R$ 430,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 550,OO À VISTA / R$ 590,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], 
        ['BOTÕES', 'R$ 140,00'], ['MICROFONE', 'R$ 160,00'], ['BATERIA', 'R$ 180,00'],['CÂMERA TRASEIRA', 'R$ 250,00'], 
        ['CÂMERA FRONTAL', 'R$ 160,00'], ['FPC', 'R$ 220,00'], ['TAMPA / CARCAÇA', 'R$ 170,00'], ['VIDRO TELA', 'R$ 360,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 100,00']], 
    'samsung-a25':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 390,00 À VISTA / R$ 430,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 590,OO À VISTA / R$ 640,00 EM 10X'], ['CONECTOR', 'R$ 150,00'], 
        ['BOTÕES', 'R$ 140,00'], ['MICROFONE', 'R$ 150,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], 
        ['CÂMERA FRONTAL', 'R$ 190,00'], ['FPC', 'R$ 240,00'], ['TAMPA / CARCAÇA', 'R$ 170,00'], ['VIDRO TELA', 'R$ 360,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 150,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']], 
    'samsung-a30':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 360,00 À VISTA / R$ 390,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 230,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 100,00']], 
    'samsung-a31':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 360,00 À VISTA / R$ 390,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 590,OO À VISTA / R$ 650,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 170,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 150,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 250,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 100,00']], 
    'samsung-a32':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 360,00 À VISTA / R$ 390,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 590,OO À VISTA / R$ 650,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 170,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 150,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 100,00']], 
    'samsung-a33':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 320,00 À VISTA / R$ 350,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 650,OO À VISTA / R$ 690,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 170,00'],['CÂMERA TRASEIRA', 'R$ 240,00'], 
        ['CÂMERA FRONTAL', 'R$ 160,00'], ['FPC', 'R$ 250,00'], ['TAMPA / CARCAÇA', 'R$ 170,00'], ['VIDRO TELA', 'R$ 270,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a34':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 460,00 À VISTA / R$ 490,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 650,OO À VISTA / R$ 690,00 EM 10X'], ['CONECTOR', 'R$ 150,00'], 
        ['BOTÕES', 'R$ 140,00'], ['MICROFONE', 'R$ 160,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], 
        ['CÂMERA FRONTAL', 'R$ 170,00'], ['FPC', 'R$ 250,00'], ['TAMPA / CARCAÇA', 'R$ 180,00'], ['VIDRO TELA', 'R$ 370,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 150,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a35':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 450,00 À VISTA / R$ 490,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 650,OO À VISTA / R$ 690,00 EM 10X'], ['CONECTOR', 'R$ 150,00'], 
        ['BOTÕES', 'R$ 140,00'], ['MICROFONE', 'R$ 160,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], 
        ['CÂMERA FRONTAL', 'R$ 190,00'], ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 200,00'], ['VIDRO TELA', 'R$ 390,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 150,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a50':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 550,OO À VISTA / R$ 590,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 130,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 130,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a51':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 420,00 À VISTA / R$ 460,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 890,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 130,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 170,00'],['CÂMERA TRASEIRA', 'R$ 200,00'], 
        ['CÂMERA FRONTAL', 'R$ 150,00'], ['FPC', 'R$ 230,00'], ['TAMPA / CARCAÇA', 'R$ 150,00'], ['VIDRO TELA', 'R$ 250,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 130,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a52':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 420,00 À VISTA / R$ 460,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 750,OO À VISTA / R$ 800,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 130,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 180,00'],['CÂMERA TRASEIRA', 'R$ 220,00'], 
        ['CÂMERA FRONTAL', 'R$ 160,00'], ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 290,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a53':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 370,00 À VISTA / R$ 390,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 750,OO À VISTA / R$ 790,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], 
        ['BOTÕES', 'R$ 140,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 180,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], 
        ['CÂMERA FRONTAL', 'R$ 180,00'], ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 180,00'], ['VIDRO TELA', 'R$ 330,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 150,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a54':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 400,00 À VISTA / R$ 450,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 700,OO À VISTA / R$ 750,00 EM 10X'], ['CONECTOR', 'R$ 160,00'], 
        ['BOTÕES', 'R$ 150,00'], ['MICROFONE', 'R$ 160,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 350,00'], 
        ['CÂMERA FRONTAL', 'R$ 190,00'], ['FPC', 'R$ 350,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 350,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 160,00'],['AURICULAR', 'R$ 150,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a55':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 590,00 À VISTA / R$ 650,00 EM 10X'], ['CONECTOR', 'R$ 160,00'], ['BOTÕES', 'R$ 150,00'], 
        ['MICROFONE', 'R$ 160,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 350,00'], ['CÂMERA FRONTAL', 'R$ 190,00'], 
        ['FPC', 'R$ 350,00'], ['TAMPA / CARCAÇA', 'R$ 220,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 160,00'],['AURICULAR', 'R$ 150,00'],['SOFTWARE', 'R$ 120,00']],
    'samsung-a70':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 360,00 À VISTA / R$ 390,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 650,OO À VISTA / R$ 690,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 130,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 220,00'], 
        ['CÂMERA FRONTAL', 'R$ 160,00'], ['FPC', 'R$ 220,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 290,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a71':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 370,00 À VISTA / R$ 390,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 890,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 140,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 180,00'],['CÂMERA TRASEIRA', 'R$ 270,00'], 
        ['CÂMERA FRONTAL', 'R$ 180,00'], ['FPC', 'R$ 250,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 350,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 150,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a72':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 390,00 À VISTA / R$ 420,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 690,OO À VISTA / R$ 720,00 EM 10X'], ['CONECTOR', 'R$ 150,00'], 
        ['BOTÕES', 'R$ 140,00'], ['MICROFONE', 'R$ 150,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 350,00'], 
        ['CÂMERA FRONTAL', 'R$ 190,00'], ['FPC', 'R$ 270,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 150,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a73':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 450,00 À VISTA / R$ 490,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 690,OO À VISTA / R$ 750,00 EM 10X'], ['CONECTOR', 'R$ 150,00'], 
        ['BOTÕES', 'R$ 140,00'], ['MICROFONE', 'R$ 150,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 350,00'], 
        ['CÂMERA FRONTAL', 'R$ 220,00'], ['FPC', 'R$ 270,00'], ['TAMPA / CARCAÇA', 'R$ 220,00'], ['VIDRO TELA', 'R$ 390,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 150,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a80':[
        ['TELA PRIMEIRA LINHA S/ ARO', 'R$ 540,00 À VISTA / R$ 570,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$ 750,OO À VISTA / R$ 790,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 140,00'], ['MICROFONE', 'R$ 160,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 260,00'], 
        ['CÂMERA FRONTAL', 'R$ 290,00'], ['FPC', 'R$ 220,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 390,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a7-2018':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 290,00 À VISTA / R$ 320,00 EM 10X'],['CONECTOR', 'R$ 190,00'], 
        ['BOTÕES', 'R$ 170,00'], ['MICROFONE', 'R$ 170,00'], ['BATERIA', 'R$ 250,00'],['CÂMERA TRASEIRA', 'R$ 350,00'], 
        ['CÂMERA FRONTAL', 'R$ 190,00'], ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 150,00'], ['VIDRO TELA', 'R$ 260,00'],
        ['LENTE CÂMERA', 'R$ 70,00'], ['ALTO FALANTE', 'R$ 200,00'],['AURICULAR', 'R$ 190,00'], ['SOFTWARE', 'R$ 100,00']],
    'samsung-a8':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 360,00 À VISTA / R$ 390,00 EM 10X'],['CONECTOR', 'R$ 200,00'], 
        ['BOTÕES', 'R$ 200,00'], ['MICROFONE', 'R$ 190,00'], ['BATERIA', 'R$ 220,00'],['CÂMERA TRASEIRA', 'R$ 250,00'], 
        ['CÂMERA FRONTAL', 'R$ 190,00'], ['FPC', 'R$ 270,00'], ['TAMPA / CARCAÇA', 'R$ 150,00'], ['VIDRO TELA', 'R$ 290,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 190,00'],['AURICULAR', 'R$ 190,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-a8-plus':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 370,00 À VISTA / R$ 390,00 EM 10X'],['CONECTOR', 'R$ 200,00'], 
        ['BOTÕES', 'R$ 200,00'], ['MICROFONE', 'R$ 190,00'], ['BATERIA', 'R$ 230,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], 
        ['CÂMERA FRONTAL', 'R$ 190,00'], ['FPC', 'R$ 270,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 290,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 190,00'],['AURICULAR', 'R$ 190,00'], ['SOFTWARE', 'R$ 120,00']],
    //LINHA J 
    'samsung-j2p':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 70,00'],['CÂMERA TRASEIRA', 'R$ 170,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 70,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 100,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j2c':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 70,00'],['CÂMERA TRASEIRA', 'R$ 170,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 70,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 100,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j3':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 70,00'],['CÂMERA TRASEIRA', 'R$ 170,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 70,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 100,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j4':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 70,00'],['CÂMERA TRASEIRA', 'R$ 170,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 70,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 100,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j4p':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 200,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 150,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 130,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j4c':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 200,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 150,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 130,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j5':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 70,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 70,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 80,00']], 
    'samsung-j5-metal':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 70,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 70,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j5-prime':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 170,00 À VISTA / R$ 190,00 EM 10X'],['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 220,00'], ['VIDRO TELA', 'R$ 160,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j5-pro':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 230,00 À VISTA / R$ 250,00 EM 10X'],['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 180,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 160,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j6':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 280,00 À VISTA / R$ 320,00 EM 10X'],['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 230,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j6-plus':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 180,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 130,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 130,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j7':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 220,00 À VISTA / R$ 240,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 70,00'],['CÂMERA TRASEIRA', 'R$ 170,00'], 
        ['CÂMERA FRONTAL', 'R$ 130,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 70,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j7-prime':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 170,00'],['CÂMERA TRASEIRA', 'R$ 170,00'], 
        ['CÂMERA FRONTAL', 'R$ 130,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 240,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j7-pro':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'],['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 170,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 130,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j7-metal':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 70,00'],['CÂMERA TRASEIRA', 'R$ 170,00'], 
        ['CÂMERA FRONTAL', 'R$ 130,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 70,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-j8':[
        ['TELA PRIMEIRA LINHA VIVID', 'R$ 260,00 À VISTA / R$ 290,00 EM 10X'],['CONECTOR', 'R$ 150,00'], 
        ['BOTÕES', 'R$ 150,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 150,00'], ['FPC', 'R$ 220,00'], ['TAMPA / CARCAÇA', 'R$ 260,00'], ['VIDRO TELA', 'R$ 250,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 100,00']],
    // LINHA M 
    'samsung-m10':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'samsung-m12':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-m13':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 170,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 170,00'], ['VIDRO TELA', 'R$ 190,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-m14':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 170,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-m20':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 200,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 200,00'], ['VIDRO TELA', 'R$ 180,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-m21s':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 230,00 À VISTA / R$ 250,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 200,00'], ['VIDRO TELA', 'R$ 200,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 90,00']],
    'samsung-m22':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 450,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 200,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 90,00']],
    'samsung-m23':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 370,OO À VISTA / R$ 390,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 200,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-m30':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 200,00'], ['VIDRO TELA', 'R$ 200,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 100,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-m31':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 240,00 À VISTA / R$ 260,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 490,OO À VISTA / R$ 550,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 190,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 200,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 110,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 80,00']],
    'samsung-m32':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 300,00 À VISTA / R$ 350,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 650,OO À VISTA / R$ 700,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 220,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 220,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 270,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-m33':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 160,00'], ['CÂMERA TRASEIRA', 'R$ 190,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 220,00'], ['TAMPA / CARCAÇA', 'R$ 160,00'], ['VIDRO TELA', 'R$ 240,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 140,00'], ['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-m51':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 360,00 À VISTA / R$ 390,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 650,OO À VISTA / R$ 690,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 220,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 250,00'], ['TAMPA / CARCAÇA', 'R$ 170,00'], ['VIDRO TELA', 'R$ 340,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-m52':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 420,00 À VISTA / R$ 450,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 690,OO À VISTA / R$ 750,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 170,00'],['CÂMERA TRASEIRA', 'R$ 250,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 270,00'], ['TAMPA / CARCAÇA', 'R$ 170,00'], ['VIDRO TELA', 'R$ 350,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-m53' :[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 450,00 À VISTA / R$ 490,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 690,OO À VISTA / R$ 750,00 EM 10X'], ['CONECTOR', 'R$ 120,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 180,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 380,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-m54':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 470,00 À VISTA / R$ 490,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 720,OO À VISTA / R$ 770,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 140,00'], 
        ['MICROFONE', 'R$ 160,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 320,00'], ['CÂMERA FRONTAL', 'R$ 170,00'], 
        ['FPC', 'R$ 270,00'], ['TAMPA / CARCAÇA', 'R$ 240,00'], ['VIDRO TELA', 'R$ 420,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 160,00'],['AURICULAR', 'R$ 140,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-m62':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 550,00 À VISTA / R$ 590,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    // LINHA S
    'samsung-s7':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s7-edge':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s8':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s8-plus':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s9':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s9-plus':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']], 
    'samsung-s10-e':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s10':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s10-plus':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s20':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s20-fe':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 300,00 À VISTA / R$ 350,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 650,OO À VISTA / R$ 700,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 220,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 220,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 270,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s20-plus':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 300,00 À VISTA / R$ 350,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 650,OO À VISTA / R$ 700,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 160,00'],['CÂMERA TRASEIRA', 'R$ 220,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 220,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 270,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 120,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s20-ultra':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']], 
    'samsung-s21':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s21-plus':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s21-fe':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s22':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s22-plus':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s22-ultra':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s23':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']], 
    'samsung-s23-fe':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s23-plus':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s23-ultra':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-s24':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    // LINHA NOTE
    'samsung-note-10':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-note10-plus':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-note10-lite':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-note20':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-note20-plus':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    'samsung-note20-ultra':[
        ['TELA FRONTAL ORIGINAL', 'R$ 790,OO À VISTA / R$ 850,00 EM 10X'], ['CONECTOR', 'R$ 140,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 190,00'],['CÂMERA TRASEIRA', 'R$ 290,00'], ['CÂMERA FRONTAL', 'R$ 160,00'], 
        ['FPC', 'R$ 290,00'], ['TAMPA / CARCAÇA', 'R$ 190,00'], ['VIDRO TELA', 'R$ 390,00'],['LENTE CÂMERA', 'R$ 70,00'], 
        ['ALTO FALANTE', 'R$ 140,00'],['AURICULAR', 'R$ 130,00'], ['SOFTWARE', 'R$ 120,00']],
    // TABLET
    'samsung-tab-a7-lite':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'],['SOFTWARE', 'R$ 120,00']],
    'samsung-tab-a-2016':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'],['SOFTWARE', 'R$ 120,00']],
    'samsung-tab-a-2019':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'],['SOFTWARE', 'R$ 120,00']],
    'samsung-tab-a8':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'],['SOFTWARE', 'R$ 120,00']],
    'samsung-tab-a7':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'],['SOFTWARE', 'R$ 120,00']], 
    'samsung-tab-a-2019':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'],['SOFTWARE', 'R$ 120,00']],
    'samsung-tab-e':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'],['SOFTWARE', 'R$ 120,00']],
    'samsung-tab-s6-lite':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'],['SOFTWARE', 'R$ 120,00']],
    'samsung-tab-a8':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'],['SOFTWARE', 'R$ 120,00']],
    'samsung-tab-s5-e':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 250,00 À VISTA / R$ 280,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'],['SOFTWARE', 'R$ 120,00']],
    
    
    
    // MOTOROLA
    // LINHA G
    'moto-g4':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g5':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g6':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g7':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g8':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g9':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g10-g20-g30':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g5g':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g5g-plus':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g04':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g13':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g14':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g22':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g23':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g24':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g31':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g32':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g34':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g41':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g42':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g50':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g51':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g52':[ 
        ['TELA FRONTAL PRIMEIRA LINHA S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g53':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g54':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g60':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g62':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g71':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g72':[ 
        ['TELA FRONTAL VIVID S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], 
        ['TELA FRONTAL ORIGINAL', 'R$590,00 À VISTA / R$ 650,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g73':[
        ['TELA FRONTAL PRIMEIRA LINHA S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g82':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 100,00'], ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], 
        ['CÂMERA FRONTAL', 'R$ 120,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']], 
    'moto-g84':[
        ['TELA FRONTAL VIVID S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g100':[
        ['TELA FRONTAL VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-g200':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$590,00 À VISTA / R$ 650,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    // LINHA E 
    'moto-e4':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-e5':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-e6':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-e6-plus':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-e7':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-e13':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-e20':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']], 
    'moto-e22':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-e30':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-e32':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-e40':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    // LINHA ONE
    'moto-one':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-vision':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-hyper':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 390,00 À VISTA / R$ 450,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-action':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 390,00 À VISTA / R$ 450,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-zoom':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-macro':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-fusion':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    'moto-fusion-plus':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 100,00'], 
        ['MICROFONE', 'R$ 120,00'], ['BATERIA', 'R$ 140,00'],['CÂMERA TRASEIRA', 'R$ 150,00'], ['CÂMERA FRONTAL', 'R$ 120,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 150,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 90,00'],['AURICULAR', 'R$ 90,00'], ['SOFTWARE', 'R$ 70,00']],
    // LINHA EDGE
    'moto-edge':[
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 420,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'moto-edge-20':[
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 420,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'moto-edge-20-pro':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 420,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'moto-edge-20-lite':[
        ['TELA FRONTAL PRIMEIRA LINHA S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 420,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'moto-edge-20-plus':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 420,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],  
    'moto-edge30':[
        ['TELA FRONTAL VIVID S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL VIVID C/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 420,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'moto-edge-30-neo':[
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 420,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'moto-edge-30-fusion':[
        ['TELA PRIMEIRA LINHA S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'moto-edge-40':[
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 420,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'moto-edge-40-neo':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 390,OO À VISTA / R$ 420,00 EM 10X'], ['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    // LINHA Z
    'moto-z':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'moto-z-play':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'moto-z2-play':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'moto-z3-play':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    // LINHA X
    'moto-x4':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'moto-x-style':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    // LINHA C
    'moto-c':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'moto-c-plus':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],

    
    // XIAOMI
    // LINHA NOTE
    'xiaomi-note5':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note6':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note7':[
        ['TELA FRONTAL VIVID C/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL VIVID S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note8':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note8-pro':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note9':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'xiaomi-note10-4g':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note10s':
    [['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note10-lite':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note10-5g':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note10-pro':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note11-4g':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'xiaomi-note11-5g':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note11-s':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note11-pro':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note11-pro-plus':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note11-t-pro':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'xiaomi-note12-4g':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note12-5g':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note12-s':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note12-c':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note1-pro':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note12-pro-plus':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note13-4g':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note13-5g':[ 
        ['TELA FRONTAL VIVID S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], 
        ['BOTÕES', 'R$ 120,00'], ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], 
        ['CÂMERA FRONTAL', 'R$ 140,00'], ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],
        ['LENTE CÂMERA', 'R$ 60,00'], ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note13-pro-4g':[
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note13-pro-5g':[ 
        ['TELA FRONTAL VIVID S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-note13-pro-plus':[
        ['TELA FRONTAL VIVID S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    // LINHA REDMI
    'xiaomi-redmi-6-6a':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-redmi-7-7a':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-redmi-8-8a':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-redmi-9a-9c':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-redmi10-c-a':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-redmi-11-prime':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-redmi-12':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-redmi-12c':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-redmi-13c':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    // LINHA MI
    'xiaomi-mi-go':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi-a1-antigo':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi-a1-novo':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi-a2-a2-lite':[
         ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi-a3':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi-a3-lite':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi8':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi8-lite':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi8a':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi8t':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi9':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi9t-pro':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'xiaomi-mi9t':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi9-lite':[
        ['TELA FRONTAL PRIMEIRA LINHA S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi9se':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi10t':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi10-lite':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi11':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-mi11-lite':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    // LINHA POCO
    'xiaomi-poco-c65':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-x3':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-x3-pro':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-x3-gt':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-x4-gt':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-x4-pro':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-x5':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-x5-pro':[ 
        ['TELA FRONTAL PRIMEIRA LINHA S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-x6':[
        ['TELA FRONTAL VIVID S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-x6-pro':[
        ['TELA FRONTAL PRIMEIRA LINHA S/ ARO', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],
        ['TELA FRONTAL ORIGINAL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-f1':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-f2':[
         ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-f3':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-f4':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-m3':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-m4':[
         ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-m4-pro':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-m5':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'xiaomi-poco-s2':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    

    // REALME
    // LINHA C
    'realme-c2':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c3':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-12c':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c11':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c12':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c15':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c20':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c25':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']], 
    'realme-c30':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c33':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c35':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c53':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c55':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c65':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-c67':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    // LINHA -
    'realme-6':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']], 
    'realme-7':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-7-pro':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-8-4g':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-8-5g':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-8-pro':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-9':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'realme-10':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    // GT
    'realme-gt2':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],


    //ASUS
    // LINHA ZE
    'asus-zenfone-ze600':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-ze601':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-ze553':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-ze550':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-ze551':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-ze552':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-ze554':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-ze620':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-ze630':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    // LINHA ZC
    'asus-zenfone-zc553':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-zc554':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-zc520':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-zc600':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    // LINHA ZB
    'asus-zenfone-zb633':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb634':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb630':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb631':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb570':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb500':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb551':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb552':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb553':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb555':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb601':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'asus-zenfone-zb602':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    // LINHA ZA
    'asus-zenfone-za550':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-za501':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    // LINHA ZS
    'asus-rogphone-zs660':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-zs620':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-zs630':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-zs670':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    // LINHA ZD
    'asus-zenfone-zd551':[
         ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-zd552':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-zd553':[
         ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'asus-zenfone-zd554':[ 
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],

    
    // INFINIX
    // LINHA HOT
    'infinix-hot-8-lite':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-hot-10':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-hot-10-play':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-hot-11':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-hot-11s':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-hot-11-pro':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-hot-40-pro':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-hot-30-i':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-hot-20-i':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-hot-20-play':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    // LINHA NOTE
    'infinix-note-10-pro':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-note-11':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-note-11-pro':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-note-12-pro':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    // LINHA SPARK
    'infinix-spark-6-go':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-spark-6':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-spark-7':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'infinix-spark-8':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],


    // NOKIA
    // LINHA C
    'nokia-c01':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']], 
    'nokia-c11':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'nokia-c20':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'nokia-c30':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'nokia-c50':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    // LINHA G
    'nokia-g20':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'nokia-g21':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'nokia-g50':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],   
    // LINHA -
    'nokia-2.3':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'nokia-2.4':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'nokia-3.1':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'nokia-5.3':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'nokia-6.1':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],
    'nokia-6.2':[['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X']],


    // LG
    // LINHA K 
    'lg-k4':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k8':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k10':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k10-power':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k10-pro':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k10-2017':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k11':[
        ['TELA FRONTAL INCELL', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'], ['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k12':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k12-plus':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k12-max':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k12-prime':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k22':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k40-k40s':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k41-k41s':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k42':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k50-k50s':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k51-k51s':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k52':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 
    'lg-k61':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k62':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k71':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    'lg-k72':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']],
    // LINHA Q 
    'lg-q6':[
        ['TELA FRONTAL PRIMEIRA LINHA VIVID', 'R$ 190,00 À VISTA / R$ 220,00 EM 10X'],['CONECTOR', 'R$ 100,00'],['BOTÕES', 'R$ 120,00'], 
        ['MICROFONE', 'R$ 140,00'], ['BATERIA', 'R$ 150,00'],['CÂMERA TRASEIRA', 'R$ 180,00'], ['CÂMERA FRONTAL', 'R$ 140,00'], 
        ['FPC', 'R$ 190,00'], ['TAMPA / CARCAÇA', 'R$ 140,00'], ['VIDRO TELA', 'R$ 220,00'],['LENTE CÂMERA', 'R$ 60,00'], 
        ['ALTO FALANTE', 'R$ 120,00'],['AURICULAR', 'R$ 100,00'], ['SOFTWARE', 'R$ 100,00']], 





};

// ================= REFERÊNCIAS DOS MODAIS =================
const modelosModal   = document.getElementById('modelosModal');
const detalhesModal  = document.getElementById('detalhesModal');

// ================= DETECÇÃO MOBILE =================
function isMobile() {
    return window.innerWidth < 768;
}

// ================= MOBILE PAGE OVERLAY =================
// Cria a estrutura do overlay no DOM (se ainda não existir)
function criarMobileOverlay() {
    if (document.getElementById('mobile-page-overlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'mobile-page-overlay';
    overlay.innerHTML = `
        <div class="mp-header">
            <button class="mp-back-btn" id="mp-back-btn" aria-label="Voltar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <span class="mp-header-title" id="mp-header-title"></span>
        </div>
        <div id="mp-body"></div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('mp-back-btn').addEventListener('click', fecharMobilePage);
    window.addEventListener('popstate', fecharMobilePage);
}

function abrirMobilePage(titulo, linhas, whatsappUrl) {
    criarMobileOverlay();
    const overlay = document.getElementById('mobile-page-overlay');
    document.getElementById('mp-header-title').textContent = titulo;

    // Monta o corpo: título grande + lista de botões
    const body = document.getElementById('mp-body');
    body.innerHTML = `
        <div class="mp-brand-title">${titulo}</div>
        <div class="mp-list" id="mp-list"></div>
        <div class="mp-footer">
            <p class="mp-footer-obs">Consulte disponibilidade de peças.</p>
            <a href="${whatsappUrl}" class="mp-footer-whatsapp" target="_blank" rel="noopener">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.528 5.845L.057 23.882l6.196-1.424A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.681.845.874-3.567-.234-.372A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                Pedir no WhatsApp
            </a>
        </div>
    `;

    // Preenche os botões de linha
    const list = document.getElementById('mp-list');
    linhas.forEach(({ label, linhaKey }) => {
        const btn = document.createElement('button');
        btn.className = 'mp-list-btn';
        btn.textContent = label;
        btn.addEventListener('click', () => {
            abrirMobileModelos(linhaKey, label, whatsappUrl);
        });
        list.appendChild(btn);
    });

    overlay.classList.add('open');
    overlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    history.pushState({ mobilePage: true }, '');
}

function abrirMobileModelos(linhaKey, linhaNome, whatsappUrl) {
    const modelos = linhasData[linhaKey];
    const body = document.getElementById('mp-body');
    document.getElementById('mp-header-title').textContent = linhaNome;

    body.innerHTML = `
        <div class="mp-brand-title">${linhaNome}</div>
        <div class="mp-list" id="mp-list"></div>
        <div class="mp-footer">
            <p class="mp-footer-obs">Clique no modelo para ver os preços.</p>
            <a href="${whatsappUrl}" class="mp-footer-whatsapp" target="_blank" rel="noopener">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.528 5.845L.057 23.882l6.196-1.424A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.681.845.874-3.567-.234-.372A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                Pedir no WhatsApp
            </a>
        </div>
    `;

    const list = document.getElementById('mp-list');
    if (modelos && modelos.length) {
        modelos.forEach(modeloKey => {
            const btn = document.createElement('button');
            btn.className = 'mp-list-btn';
            btn.textContent = modelosNomes[modeloKey] || modeloKey;
            btn.addEventListener('click', () => {
                abrirMobileDetalhes(modeloKey, modelosNomes[modeloKey] || modeloKey, whatsappUrl);
            });
            list.appendChild(btn);
        });
    } else {
        list.innerHTML = '<p style="color:#666;text-align:center;padding:20px">Modelos não disponíveis.</p>';
    }

    document.getElementById('mobile-page-overlay').scrollTop = 0;
}

function abrirMobileDetalhes(key, titulo, whatsappUrl) {
    const dados = dispositivoData[key];
    document.getElementById('mp-header-title').textContent = titulo;
    const body = document.getElementById('mp-body');

    let itensHtml = '';
    if (dados && dados.length) {
        dados.forEach(([item, preco]) => {
            if (!item) return;
            itensHtml += `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid #222;">
                    <span style="color:#ccc;font-size:14px;">${item}</span>
                    <span style="color:#fff;font-weight:700;font-size:15px;">${preco}</span>
                </div>`;
        });
    } else {
        itensHtml = '<p style="color:#666;text-align:center;padding:32px">Dados não disponíveis.</p>';
    }

    body.innerHTML = `
        <div class="mp-brand-title" style="font-size:26px;padding-top:24px;">${titulo}</div>
        <div style="background:#1a1a1a;border-radius:12px;margin:0 16px 24px;overflow:hidden;border:1px solid #222;">
            <div style="background:#8B0000;padding:12px 20px;text-align:center;">
                <span style="color:#fff;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">Serviços e Preços</span>
            </div>
            ${itensHtml}
        </div>
        <div class="mp-footer">
            <a href="${whatsappUrl}" class="mp-footer-whatsapp" target="_blank" rel="noopener">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.528 5.845L.057 23.882l6.196-1.424A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.997-1.366l-.358-.213-3.681.845.874-3.567-.234-.372A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                Pedir no WhatsApp
            </a>
        </div>
    `;

    document.getElementById('mobile-page-overlay').scrollTop = 0;
}

function fecharMobilePage() {
    const overlay = document.getElementById('mobile-page-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

// ================= ABRIR / FECHAR MODAL (DESKTOP) =================
function abrirModal(el) {
    el.classList.add('open');
    el.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}
function fecharModal(el) {
    el.classList.remove('open');
    el.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// ================= MODAL 3 - PREÇOS (DESKTOP) =================
function abrirDetalhes(key, titulo) {
    const dados = dispositivoData[key];
    document.getElementById('detalhesModalTitle').textContent = titulo;
    const tbody = document.getElementById('detalhesTableBody');
    tbody.innerHTML = '';
    if (dados) {
        for (let i = 0; i < dados.length; i += 2) {
            const par1 = dados[i];
            const par2 = dados[i + 1] || ['', ''];
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${par1[0]}</td><td>${par1[1]}</td><td>${par2[0]}</td><td>${par2[1]}</td>`;
            tbody.appendChild(tr);
        }
    } else {
        tbody.innerHTML = '<tr><td colspan="4">Dados não disponíveis.</td></tr>';
    }
    abrirModal(detalhesModal);
}

document.getElementById('detalhesModalClose').addEventListener('click', () => fecharModal(detalhesModal));
detalhesModal.querySelector('.modal-overlay').addEventListener('click', () => fecharModal(detalhesModal));

// ================= MODAL 2 - MODELOS DA LINHA (DESKTOP) =================
function abrirModelos(linhaKey, linhaNome) {
    const modelos = linhasData[linhaKey];
    document.getElementById('modelosModalTitle').textContent = linhaNome;
    const tbody = document.getElementById('modelosTableBody');
    tbody.innerHTML = '';

    if (modelos && modelos.length) {
        for (let i = 0; i < modelos.length; i += 4) {
            const tr = document.createElement('tr');
            for (let j = 0; j < 4; j++) {
                const td = document.createElement('td');
                td.className = 'item';
                const modeloKey = modelos[i + j];
                if (modeloKey) {
                    const a = document.createElement('a');
                    a.href = '#';
                    a.textContent = modelosNomes[modeloKey] || modeloKey;
                    a.addEventListener('click', (e) => {
                        e.preventDefault();
                        abrirDetalhes(modeloKey, modelosNomes[modeloKey] || modeloKey);
                    });
                    td.appendChild(a);
                }
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    } else {
        tbody.innerHTML = '<tr><td colspan="4">Modelos não disponíveis.</td></tr>';
    }
    abrirModal(modelosModal);
}

document.getElementById('modelosModalClose').addEventListener('click', () => fecharModal(modelosModal));
modelosModal.querySelector('.modal-overlay').addEventListener('click', () => fecharModal(modelosModal));

// ================= SETUP DE CADA MARCA =================
// Dados de linhas para cada marca (usados no mobile page)
const marcaLinhas = {
    'precosModal': {
        titulo: 'APPLE',
        linhas: [
            { label: 'IPHONES',     linhaKey: 'iphones' },
            { label: 'IPADS',       linhaKey: 'ipads' },
            { label: 'APPLE WATCH', linhaKey: 'apple-watch' },
        ]
    },
    'precosModalSamsung': {
        titulo: 'SAMSUNG',
        linhas: [
            { label: 'Linha Galaxy A', linhaKey: 'samsung-linha-a' },
            { label: 'Linha Galaxy J', linhaKey: 'samsung-linha-j' },
            { label: 'Linha Galaxy M', linhaKey: 'samsung-linha-m' },
            { label: 'Linha Galaxy S', linhaKey: 'samsung-linha-s' },
            { label: 'Linha NOTE',     linhaKey: 'samsung-linha-note' },
            { label: 'TABLET',         linhaKey: 'samsung-tablet' },
        ]
    },
    'precosModalMotorola': {
        titulo: 'MOTOROLA',
        linhas: [
            { label: 'Linha Moto G',    linhaKey: 'moto-linha-g' },
            { label: 'Linha Moto E',    linhaKey: 'moto-linha-e' },
            { label: 'Linha Moto ONE',  linhaKey: 'moto-linha-one' },
            { label: 'Linha Moto EDGE', linhaKey: 'moto-linha-edge' },
            { label: 'Linha Moto Z',    linhaKey: 'moto-linha-z' },
            { label: 'Linha Moto X',    linhaKey: 'moto-linha-x' },
            { label: 'Linha Moto C',    linhaKey: 'moto-linha-c' },
        ]
    },
    'precosModalXiaomi': {
        titulo: 'XIAOMI',
        linhas: [
            { label: 'Linha Redmi Note', linhaKey: 'xiaomi-linha-note' },
            { label: 'Linha Redmi',      linhaKey: 'xiaomi-linha-redmi' },
            { label: 'Linha Mi',         linhaKey: 'xiaomi-linha-mi' },
            { label: 'Linha Poco',       linhaKey: 'xiaomi-linha-poco' },
        ]
    },
    'precosModalRealme': {
        titulo: 'REALME',
        linhas: [
            { label: 'Linha C',  linhaKey: 'realme-linha-c' },
            { label: 'Linha -',  linhaKey: 'realme-linha--' },
            { label: 'Linha GT', linhaKey: 'realme-linha-gt' },
        ]
    },
    'precosModalAsus': {
        titulo: 'ASUS',
        linhas: [
            { label: 'Linha Zenfone ZE', linhaKey: 'asus-linha-zenfone-ze' },
            { label: 'Linha Zenfone ZC', linhaKey: 'asus-linha-zenfone-zc' },
            { label: 'Linha Zenfone ZB', linhaKey: 'asus-linha-zenfone-zb' },
            { label: 'Linha Zenfone ZA', linhaKey: 'asus-linha-zenfone-za' },
            { label: 'Linha Zenfone ZS', linhaKey: 'asus-linha-zenfone-zs' },
            { label: 'Linha Zenfone ZD', linhaKey: 'asus-linha-zenfone-zd' },
        ]
    },
    'precosModalInfinix': {
        titulo: 'INFINIX',
        linhas: [
            { label: 'Linha HOT',   linhaKey: 'infinix-linha-hot' },
            { label: 'Linha NOTE',  linhaKey: 'infinix-linha-note' },
            { label: 'Linha SPARK', linhaKey: 'infinix-linha-spark' },
        ]
    },
    'precosModalNokia': {
        titulo: 'NOKIA',
        linhas: [
            { label: 'Linha C', linhaKey: 'nokia-linha-c' },
            { label: 'Linha G', linhaKey: 'nokia-linha-g' },
            { label: 'Linha -', linhaKey: 'nokia-linha--' },
        ]
    },
    'precosModalLg': {
        titulo: 'LG',
        linhas: [
            { label: 'Linha K', linhaKey: 'lg-linha-k' },
            { label: 'Linha Q', linhaKey: 'lg-linha-q' },
        ]
    },
};

const WA_URL = 'https://wa.me/5511982541173';

function setupMarcaModal(modalId, closeBtnId, btnAbreId) {
    const marcaModal = document.getElementById(modalId);
    if (!marcaModal) return;

    const btnAbre  = document.getElementById(btnAbreId);
    const closeBtn = document.getElementById(closeBtnId);
    const overlay  = marcaModal.querySelector('.modal-overlay');
    const info     = marcaLinhas[modalId];

    // Abre: mobile → page overlay | desktop → modal
    function handleAbrir(e) {
        e.stopPropagation();
        if (isMobile()) {
            abrirMobilePage(info.titulo, info.linhas, WA_URL);
        } else {
            abrirModal(marcaModal);
        }
    }

    btnAbre?.addEventListener('click', handleAbrir);
    closeBtn?.addEventListener('click', () => fecharModal(marcaModal));
    overlay?.addEventListener('click', () => fecharModal(marcaModal));

    // Links de linha dentro do modal desktop
    marcaModal.querySelectorAll('a[data-open-linha]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            abrirModelos(link.getAttribute('data-open-linha'), link.textContent.trim());
        });
    });
}

// ================= APPLE (btn com id diferente) =================
const appleInfo = marcaLinhas['precosModal'];
document.getElementById('btn-precos-iphone')?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isMobile()) {
        abrirMobilePage(appleInfo.titulo, appleInfo.linhas, WA_URL);
    } else {
        abrirModal(document.getElementById('precosModal'));
    }
});
document.getElementById('precosModalClose')?.addEventListener('click', () => fecharModal(document.getElementById('precosModal')));
document.getElementById('precosModal')?.querySelector('.modal-overlay')?.addEventListener('click', () => fecharModal(document.getElementById('precosModal')));
document.getElementById('precosModal')?.querySelectorAll('a[data-open-linha]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        abrirModelos(link.getAttribute('data-open-linha'), link.textContent.trim());
    });
});

// ================= OUTRAS MARCAS =================
setupMarcaModal('precosModalSamsung',  'precosModalSamsungClose',  'btn-precos-samsung');
setupMarcaModal('precosModalMotorola', 'precosModalMotorolaClose', 'btn-precos-motorola');
setupMarcaModal('precosModalXiaomi',   'precosModalXiaomiClose',   'btn-precos-xiaomi');
setupMarcaModal('precosModalRealme',   'precosModalRealmeClose',   'btn-precos-realme');
setupMarcaModal('precosModalAsus',     'precosModalAsusClose',     'btn-precos-asus');
setupMarcaModal('precosModalInfinix',  'precosModalInfinixClose',  'btn-precos-infinix');
setupMarcaModal('precosModalNokia',    'precosModalNokiaClose',    'btn-precos-nokia');
setupMarcaModal('precosModalLg',       'precosModalLgClose',       'btn-precos-lg');

// ================= ESC FECHA TUDO =================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        fecharMobilePage();
        [detalhesModal, modelosModal,
         document.getElementById('precosModal'),
         document.getElementById('precosModalSamsung'),
         document.getElementById('precosModalMotorola'),
         document.getElementById('precosModalXiaomi'),
         document.getElementById('precosModalRealme'),
         document.getElementById('precosModalAsus'),
         document.getElementById('precosModalInfinix'),
         document.getElementById('precosModalNokia'),
         document.getElementById('precosModalLg'),
        ].forEach(m => m && fecharModal(m));
    }
});

})
