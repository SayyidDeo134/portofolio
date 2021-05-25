
const Data = [
    {
        id: 1,
        photo: [
            { src: 'cbt-online-1.png', alt: 'cbt-online' },
            { src: 'cbt-online-2.png', alt: 'cbt-online' },
            { src: 'cbt-online-3.png', alt: 'cbt-online' },
            { src: 'cbt-online-4.png', alt: 'cbt-online' }
        ],
        title: 'CBT Online',
        description: 'Aplikasi Ujian Berbasis Komputer / disebut CBT ( Computer Based Test ) menggunakan media website, aplikasi ini menggunakan perpaduan 2 bahasa pemrograman yaitu PHP dan Javascript dengan dibungkus software yang membuat sistem lebih aman dan terstrukur yaitu menggunakan framework CODEIGNITER 4',
        link: 'http://cbt.komputerkit.com/'
    },
    {
        id: 2,
        photo: [
            { src: 'sma-mutiarabunda-1.png', alt: 'sma-mutiarabunda' },
            { src: 'sma-mutiarabunda-2.png', alt: 'sma-mutiarabunda' },
            { src: 'sma-mutiarabunda-3.png', alt: 'sma-mutiarabunda' },
            { src: 'sma-mutiarabunda-4.png', alt: 'sma-mutiarabunda' }
        ],
        title: 'SMA Mutiara Bunda Sidoarjo',
        description: 'Aplikasi pengelola data sekolah menggunakan media website, aplikasi ini menggunakan perpaduan 2 bahasa pemrograman yaitu PHP dan Javascript aplikasi ini juga menggunakan framework CODEIGNITER 4',
        link: 'http://smamutiarabundasidoarjo.sch.id/'
    }
]

let btnModal = document.querySelectorAll('.btn-modal')

btnModal.forEach(item => {
    item.addEventListener('click', function () {
        let getID = item.getAttribute('data-id')
        let result = Data.filter(res => res.id == getID)
        let titleModal = document.querySelector('.modal-title')
        let descModal = document.querySelector('.desc-modal')
        let linkModal = document.querySelector('.link-modal')
        let carouselItem = document.querySelectorAll('.img-slide')

        for (let i = 0; i < carouselItem.length; i++) {
            carouselItem[i].src = './assets/image/portfolio/' + result[0].photo[i].src
            carouselItem[i].alt = result[0].photo[i].alt
        }

        titleModal.innerHTML = result[0].title
        descModal.innerHTML = result[0].description
        linkModal.href = result[0].link

    })
})

