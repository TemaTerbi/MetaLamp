const btn = document.querySelector('.like-like__btn');
const text = document.querySelector('.like-like__text');
const likefiil = document.getElementById('likefiil');
const likenone = document.getElementById('likenone');

let like = true,
  likeCount = document.querySelector('.like-like__text').innerHTML;

btn.addEventListener('click', () => {
  btn.classList.toggle('active')
  text.classList.toggle('activetext')
  likefiil.classList.toggle('vis')
  likefiil.classList.toggle('likee')
  likenone.classList.toggle('likee')
  likeCount = like ? ++likeCount  : --likeCount;
  like = !like;
  document.querySelector('.like-like__text').innerHTML = likeCount;
});


