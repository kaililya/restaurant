import './index.css'



const button = document.querySelectorAll('.posters__button');
const posterTemplate = document.querySelector('.poster-template').content; 
const postersContainer = document.querySelector('.posters__container');

const initialPosters = [
    {
        image: 'https://s3-alpha-sig.figma.com/img/8085/70bb/98f771656661b1b7d1f6da588d1de402?Expires=1682294400&Signature=b3~zRDem2RHwqPKBVccM2EzuYEvYwID6G2SOT~2vYj~cYLo2kKZ0CdwpAsFFVk2MSZPtAPGfMeZMUEBoNLz6zansId3TQrRx8o~E9ro1p6KzdDx04tK4S6zG~ShTA~sviQX5Yy-JdqJuAfJ4C3feSCitpZnYvLho1EWAQRIi~-qjMmJoZ5w8pMOFT-oFWXg3bIfwpvibjMJ2-T8HC4D2lSjvdSqXw6v4QJXGAv5~mEX99acGSKal08eYQyqWVGy7b6faeP89ttUl3uCQ6D8jQfT809w0BVe4VOHyeth4Y~unL2oiiTuhTSqR-kLZ3NnBvAXSdl7k2cb38d9pm2qlUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        meetingDate: new Date(2011, 2, 4, 0, 0, 0, 0)
    },

    {
        image: 'https://s3-alpha-sig.figma.com/img/f8cd/3025/e84aa3bd7330702d035f3591b9adfe40?Expires=1682294400&Signature=khnUn3mlK78OxPzdRxiGjJbvcLDg454bF0ktoUR3sLVIBj~7lX5JipmMj5BeubHhHofoZNKlGvN0RancYU4415OHH5KiKv~TmL-OXwCJi5aWvJAGa3twug8Rofy71Y2JRk5lktHKh--8ucbEunvUKvh6vFFuzIAUpnBK1YeVNQ3ZnFuHrbT5tiFdvMyDlghCzrObgE9CzpyPV4ZvE6cqJpjISHrRd-kTU15iFlIEfaEn29TLSGbU1BtdIpwM5KCT1eQm2VP1NGkguikt2By8PR3~LexdDnR2bF~6lJfPwDrsggyru9GrbZsWXr437artqEEnXZgEZdg5s6HQXaRSFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        meetingDate: new Date(2011, 0, 1, 0, 0, 0, 0)
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/f8cd/3025/e84aa3bd7330702d035f3591b9adfe40?Expires=1682294400&Signature=khnUn3mlK78OxPzdRxiGjJbvcLDg454bF0ktoUR3sLVIBj~7lX5JipmMj5BeubHhHofoZNKlGvN0RancYU4415OHH5KiKv~TmL-OXwCJi5aWvJAGa3twug8Rofy71Y2JRk5lktHKh--8ucbEunvUKvh6vFFuzIAUpnBK1YeVNQ3ZnFuHrbT5tiFdvMyDlghCzrObgE9CzpyPV4ZvE6cqJpjISHrRd-kTU15iFlIEfaEn29TLSGbU1BtdIpwM5KCT1eQm2VP1NGkguikt2By8PR3~LexdDnR2bF~6lJfPwDrsggyru9GrbZsWXr437artqEEnXZgEZdg5s6HQXaRSFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        meetingDate: new Date(2011, 0, 2, 0, 0, 0, 0)
    },
    {      
        image: 'https://s3-alpha-sig.figma.com/img/f8cd/3025/e84aa3bd7330702d035f3591b9adfe40?Expires=1682294400&Signature=khnUn3mlK78OxPzdRxiGjJbvcLDg454bF0ktoUR3sLVIBj~7lX5JipmMj5BeubHhHofoZNKlGvN0RancYU4415OHH5KiKv~TmL-OXwCJi5aWvJAGa3twug8Rofy71Y2JRk5lktHKh--8ucbEunvUKvh6vFFuzIAUpnBK1YeVNQ3ZnFuHrbT5tiFdvMyDlghCzrObgE9CzpyPV4ZvE6cqJpjISHrRd-kTU15iFlIEfaEn29TLSGbU1BtdIpwM5KCT1eQm2VP1NGkguikt2By8PR3~LexdDnR2bF~6lJfPwDrsggyru9GrbZsWXr437artqEEnXZgEZdg5s6HQXaRSFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        meetingDate: new Date(2011, 0, 3, 0, 0, 0, 0)
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/f8cd/3025/e84aa3bd7330702d035f3591b9adfe40?Expires=1682294400&Signature=khnUn3mlK78OxPzdRxiGjJbvcLDg454bF0ktoUR3sLVIBj~7lX5JipmMj5BeubHhHofoZNKlGvN0RancYU4415OHH5KiKv~TmL-OXwCJi5aWvJAGa3twug8Rofy71Y2JRk5lktHKh--8ucbEunvUKvh6vFFuzIAUpnBK1YeVNQ3ZnFuHrbT5tiFdvMyDlghCzrObgE9CzpyPV4ZvE6cqJpjISHrRd-kTU15iFlIEfaEn29TLSGbU1BtdIpwM5KCT1eQm2VP1NGkguikt2By8PR3~LexdDnR2bF~6lJfPwDrsggyru9GrbZsWXr437artqEEnXZgEZdg5s6HQXaRSFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        meetingDate: new Date(2011, 0, 4, 0, 0, 0, 0)
    },
    // 
    {
        image: 'https://s3-alpha-sig.figma.com/img/9112/9862/3892a6c2bf69eba6cc6dad0cc0ce0da5?Expires=1682294400&Signature=gyb-v3tWtWXfDYJB41b9FAS3dWyyc9womJPKqnJJuxvjHlgV4lncSXhFsD1mkaIAyWh6vEltUiQyMXZF4wdtuK52wVkr2Y-QcROpR2EmFCeKfR~YYu4ba~W1vehtLZQ66j8fOgBcBOJKfV9l-yLwrRFLP-HxyWaPLqWK9-VwaD7kvZj1L5pNM-26BjTsYhIKqgkrhpDVowCX7Zo19nxCKpzVKnNXlJ96QH5W475KIZHaijCs7oyawZad78HvLdMqwXF~u8SuXDbmaZlAKNKIuxAIjUMkxwjtMr5vLDav7XnmPpKRkIUMDm3wd6fFksA~zApinwEWSV5CSK6xkyL8WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        meetingDate: new Date(2011, 1, 1, 0, 0, 0, 0)
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/9112/9862/3892a6c2bf69eba6cc6dad0cc0ce0da5?Expires=1682294400&Signature=gyb-v3tWtWXfDYJB41b9FAS3dWyyc9womJPKqnJJuxvjHlgV4lncSXhFsD1mkaIAyWh6vEltUiQyMXZF4wdtuK52wVkr2Y-QcROpR2EmFCeKfR~YYu4ba~W1vehtLZQ66j8fOgBcBOJKfV9l-yLwrRFLP-HxyWaPLqWK9-VwaD7kvZj1L5pNM-26BjTsYhIKqgkrhpDVowCX7Zo19nxCKpzVKnNXlJ96QH5W475KIZHaijCs7oyawZad78HvLdMqwXF~u8SuXDbmaZlAKNKIuxAIjUMkxwjtMr5vLDav7XnmPpKRkIUMDm3wd6fFksA~zApinwEWSV5CSK6xkyL8WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        meetingDate: new Date(2011, 1, 2, 0, 0, 0, 0)
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/9112/9862/3892a6c2bf69eba6cc6dad0cc0ce0da5?Expires=1682294400&Signature=gyb-v3tWtWXfDYJB41b9FAS3dWyyc9womJPKqnJJuxvjHlgV4lncSXhFsD1mkaIAyWh6vEltUiQyMXZF4wdtuK52wVkr2Y-QcROpR2EmFCeKfR~YYu4ba~W1vehtLZQ66j8fOgBcBOJKfV9l-yLwrRFLP-HxyWaPLqWK9-VwaD7kvZj1L5pNM-26BjTsYhIKqgkrhpDVowCX7Zo19nxCKpzVKnNXlJ96QH5W475KIZHaijCs7oyawZad78HvLdMqwXF~u8SuXDbmaZlAKNKIuxAIjUMkxwjtMr5vLDav7XnmPpKRkIUMDm3wd6fFksA~zApinwEWSV5CSK6xkyL8WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        meetingDate: new Date(2011, 1, 3, 0, 0, 0, 0)
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/9112/9862/3892a6c2bf69eba6cc6dad0cc0ce0da5?Expires=1682294400&Signature=gyb-v3tWtWXfDYJB41b9FAS3dWyyc9womJPKqnJJuxvjHlgV4lncSXhFsD1mkaIAyWh6vEltUiQyMXZF4wdtuK52wVkr2Y-QcROpR2EmFCeKfR~YYu4ba~W1vehtLZQ66j8fOgBcBOJKfV9l-yLwrRFLP-HxyWaPLqWK9-VwaD7kvZj1L5pNM-26BjTsYhIKqgkrhpDVowCX7Zo19nxCKpzVKnNXlJ96QH5W475KIZHaijCs7oyawZad78HvLdMqwXF~u8SuXDbmaZlAKNKIuxAIjUMkxwjtMr5vLDav7XnmPpKRkIUMDm3wd6fFksA~zApinwEWSV5CSK6xkyL8WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        meetingDate: new Date(2011, 1, 4, 0, 0, 0, 0)
    }
]

function createPoster(poster) {
    const posterElement = posterTemplate.querySelector('.poster').cloneNode(true);
    const posterElementImg = posterElement.querySelector('.poster__image');
    posterElementImg.src = poster.image;

    // posterElementImg.src = `<%=require('${poster.image}')%>`;
    return posterElement;
}


function addPoster(posterList, currentPoster) {
    return posterList.prepend(createPoster(currentPoster));
}

initialPosters.sort((eventOne, eventTwo) => eventTwo.meetingDate - eventOne.meetingDate).reverse().slice(0,4).forEach((poster) => {
    addPoster(postersContainer, poster)
})


button.forEach(button => {
    // если скор  реверсный список, иначе обычный список
    // и до этого нужно почистить весь контейнер
    button.addEventListener('click', (event) => {
        if (!Array.from(event.target.classList).includes('posters__button_active')) {
            event.target.classList.add('posters__button_active');
            initialPosters.sort((eventOne, eventTwo) => eventTwo.meetingDate - eventOne.meetingDate).slice(0,4).forEach((poster) => {
                addPoster(postersContainer, poster)
            })
            if (event.target.previousElementSibling !== null) {
                event.target.previousElementSibling.classList.toggle('posters__button_active');
            } else {
                event.target.nextElementSibling.classList.toggle('posters__button_active');
            }
        }     
    })
})




















// import Swiper JS
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Autoplay])
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    parallax: true,

    speed: 1000,
    centeredSlides: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});