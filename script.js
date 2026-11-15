/* PERSONALISE: add 12 photos and replace the 18 messages below. */
const PHOTO_FILES = Array.from({length:12},(_,i)=>`photo-${String(i+1).padStart(2,'0')}.jpeg`);
const WISHES = [
  {
    message: `Happy 18th Birthday, Ujju!🫶🏻🤍

I honestly don't know how to put
into words how much I love our little
trio of me, you and Radhika. I love
the way the three of us are together
and how we always manage to make
even the simplest moments
memorable. And having you around
is extra special because we're the
same age and you match my vibe in
so many things. It's honestly nice
having someone who gets my kind of
humour, thoughts and random
craziness without having to explain
everything.

I'm really glad that we share this
bond, and I hope it stays the same
no matter how much things change
as we grow up. Now that you're
officially turning 18, I wish you all
the happiness, success and amazing
experiences life has to offer.

Never change the person you are.
Here's to more memories, endless
laughs and our trio being our trio for
years to come.

Happy birthday once again, Ujju!🫶🏻

-Nannu`,
    by: "Nannu"
  },
  {
    message: `Happy 18th Birthday, my dear Ujwala!
❤️🌻

I don't think I've ever properly expressed
how special you are to me, so today I want
to share something from my heart.

You were the first sister in this universe
with whom I experienced such a close bond.
From the day you were born, you became
someone incredibly special to me. Before
you, I didn't really know what it felt like
to have a younger sister so close to me. 

When I look back, I realise how many
beautiful little memories we've created
together. Teasing each other for absolutely
no reason, laughing at the silliest things,
watching cartoons together and pretending
to be those cartoon characters, fighting over
stupid things, not speaking to each other for
days, helping each other with studies,
protecting you whenever I could, partying
and enjoying every little moment whenever
we were together. These might seem like
ordinary things, but they're some of my
favourite memories.

I even remember those initial days when
Harshith and Radhika came into our lives.
You were so close to them, sometimes even
closer to them than you were to me.And
honestly, I used to feel jealous and
possessive. 

At that time, I didn't understand those
feelings properly, but looking back, that's
when I realised just how special you were to
me and how much I valued having you
around.

And now, look at us! We've grown up,
entered our adolescence, experienced so many
changes, and somehow, we're still here,
together, making memories and enjoying life.
I'm genuinely happy seeing how far we've
come and how our little bond has grown over
the years.

I also want to take this opportunity to thank
you for everything. For all the memories,
laughter, fights, silly moments and for simply
being my sister. And at the same time, I
want to apologise for all the times I've hurt
you, misunderstood you, fought with you,
been possessive, or failed to understand your
feelings. Whatever has happened between us
until now, I hope you know that none of it
changes how much you mean to me.

As you turn 18, I wish you all the
happiness, success, confidence and beautiful
experiences life can offer. Chase your dreams,
enjoy your life, make mistakes, learn, grow
and never stop being the person you are.

No matter how much we fight, tease each
other or stop talking, you'll always be that
first little sister who made me understand
what having a sister truly feels like.

Happy 18th Birthday once again, my dear
Ujwala!❤️

Lots of love,

G Murali Krishnan 🌻`,
    by: "G Murali Krishnan"
  },
  {
    message: `Dearest Ujju,


Wishing you a very Happy Birthday!


Watching you grow from a little girl
into a brave, confident young woman
pursuing your graduation has been a true
joy. Time has flown by so fast, but our
bond has only grown stronger—you hold
a very special place in my heart. You
are my special daughter.


Your strength, courage, and bright
outlook on life are extraordinary. You
have a good heart and a listening ear
for the things that truly matter. My
only wish for you is that you continue
to be a pillar and role model for our
family, balancing your bold spirit with
patience and flexibility for those around
you.


May God bless you with an abundance
of good health, great success, wealth,
and abundant joy in the years ahead.


With all my love,


Ganesh Periyappa`,
    by: "Ganesh Periyappa"
  },
  {
    message: `Happy Birthday, dear!
Wishing you lots of
happiness, love, and
success always! ❤️🎂`,
    by: "Revathi Periamma"
  },
  {
    message: `happy birthday my darling
marmaa! may your life be
surrounded with love, joy,
and gentle and little
moments that become
beautiful memories. I am so
proud of you. I am so
lucky to love you. You
bring light wherever you go
may your days be soft with
kindness bright, with
laughter and full of people
who love you well.
Watching you grow is a
very special part of our
life. Happy birthday, dear.
Love you.`,
    by: "Jaya Athai"
  },
  {
    message: `Dear Ujju,

I just wanted to tell you how
much I adore you and how
grateful I am to have you in
my life. You bring so much
love, comfort, and happiness
wherever you go. I truly value
our bond and all the special
memories we share.

You are not just my sister but
also someone I can always
count on. I’m incredibly lucky
to have you, and I hope you
always know how special you
are to me.

With lots of love,

Your big brother

Vittal`,
    by: "Vittal"
  },
  {
    message: `Hi Ujju!

Happy happy birthday!
Wish you the best health,
happiness, and wisdom!
🤗

Party hard, study harder!
😁

Don't forget, Ganne ka
juice, ek gilaas bheeees
roopai ka! 🤣`,
    by: "Jiju"
  },
  {
    message: `Hi my Ujju kutty! 

Happy happy 18th.
Wishing you beautiful
and healthy next year as
I think about the first day
I held you in the hospital
and roaming around
every blood bank in
Bangalore on the day
when you were born.
Time flies and I cherish
all memories of the time I
spent growing up with
you as my lil sister. 

All the best, have
awesome fun yet always
be wise and brave.`,
    by: "Madhu akka"
  },
  {
    message: `hello ujju kutty,nee vantha
poranadha udane ennaku
rombo avalilla santhosham.
Dilip ah paatha udane nee
appa ayiten nu solli na
romboooo santhosapatten.Nee
ella nerum um santhoshama
irunthu, vyaadhi edhum
illama irrukamnum nu
bhagawaan ah prarthanai
pannikiren. Nee ipo tha
porantha maari irunthuthu
inniki unnaku 18 vayusu
aayirthu nu neneka moothu
romba aachiryama irruku.Nee
amma appa solra pechu ah
ketundu chamattha irrukanum
adhuku ennoda aashirvatham.

Poranthanaal Vazhthukal
ujju kutty 

-Vacchu paati`,
    by: "Vacchu Paati"
  },
  {
    message: `Hello Ujju,

Happy Happiest Birthday😘🫂

Always keep smiling, stay healthy, and have
a wonderful and fantastic life ahead. Dream
big and make sure you achieve everything
you wish for, Ujju. I know you will! ✨🔥

May all your dreams and wishes come true.
🪷

And remember, no matter what happens in
life, you always have someone who will
never leave your side – Radha Krishna.
They will always be with you, Ujju. So don't
worry about anything or overthink things too
much.

If you ever feel low, stressed, or depressed,
you can always come and share things with
me. I know you have your close ones, but it's
just my care and concern for you, Ujju. I
want you to know that I'll always be there
for you, no matter what happens. ❤️

May Radha Krishna always guide you,
protect you, and be with you.

Love you lots, Ujju! ❤️

With love,

Veena`,
    by: "Veena"
  },
  {
    message: `Happiest Birthday, Ujju! ❤️

You have always been like my cute little
sister, someone who listens to me no
matter what. Hope you have a wonderful
day! May you shine bright, achieve
everything you dream of, and get all the
happiness you deserve.

I really hope our bond stays the same
always. No matter what, I’ll always be
there to support you. I genuinely admire
the way you care for your mom and the
beautiful bond you both share. ❤️

Keep being the sweet and caring person
you are. Wishing you lots of happiness,
success, and beautiful memories ahead.

Have the best birthday, Ujju! Stay happy
always. Lots of love! ❤️🫂

with love 

vidya <3`,
    by: "Vidya"
  },
  {
    message: `Happy Birthday, Ujju!
❤️🎂 May God bless
you with lots of success,
happiness, good health,
and prosperity. May
you achieve great
heights in life and have
an amazing year
ahead! Keep shining!
With love 

Pooja Akka ✨`,
    by: "Pooja Akka"
  },
  {
    message: `Happy Birthday, Ujjuuuu 💕🌻

You are my favourite kind of
happiness my little sunflower
in a world full of ordinary
flowers I’ll look for you my
sunflower flower I hope your
birthday is as beautiful as your
smile and as warm as the
sunshine I hope we keep
growing together loving each
other and finding happiness in
even the smallest moments
Ujjuuu never forget how
special you are to me I wish
you endless happiness beautiful
memories and all the love your
I wish alll your wish comee
true and you have the best
day 

Nishchii 🌻🌻💕🪬`,
    by: "Nishchii"
  },
  {
    message: `Yoooo happpiesttt 18th birthdayyy
ujjuu😎🥳🥳.


You are the sister i have always
been with in my childhood😁❤️❤️.
We used to do all fun but
naughty things🤩🤣. The dance
choreography we did and the times
where we both used to have so
much funn. I was ur rat nd u
were the scientist where u tried
things no me😭🤣 just like u
applying fevikwick on my mouth
saying lipstick🤣🤣. 


I hope that u will succeed in your
life nd be the the happiestt🤩❤️.


Once again happy birthday to my
goated strong supportive sisterr
ujwala😎❤️😁😁


~Vamshi😁`,
    by: "Vamshi"
  },
  {
    message: `Happiest 18th Birthday, Princess! ❤️🎂


I still can’t believe you are 18 already! I can
still vividly remember you as that tiny little
angel who came into our lives on November 16,
2008, at 7:26 PM. I still remember the
beautiful sight of you with your head covered in
silky, smooth hair, right down to your eyebrows.
❤️


How quickly time has flown! From that tiny
little baby to the beautiful, brave young girl you
are today, it has been such a wonderful journey
to witness.


I am truly grateful to God for blessing us with
you. You have brought tremendous changes,
happiness and meaning into our lives. You are,
and will always be, our perfect lucky charm. ❤️


As you step into this beautiful new chapter of
your life, I wish you good health, endless
happiness, courage and success in everything you
do. Always continue to be the brave and
courageous girl you are. Never be afraid to
dream big, stand strong and follow your heart.


And always remember, no matter how old you
grow or where life takes you, Amma and Appa
will always be by your side, loving you,
supporting you and cheering you on.


Happy 18th Birthday, our Princess! You will
always be our little angel, no matter how grown-
up you become. We love you endlessly! ❤️😘`,
    by: "Karthi Mom"
  },
  {
    message: `My dearest Ujwala,

This year, your birthday is truly special and unforgettable. On 16th November, you complete 17 beautiful years of your life and step into your 18th year, bringing new dreams, maturity and responsibilities.

Watching you grow into a beautiful, sensible and responsible young lady fills our hearts with happiness and pride.

You have always been, and will forever remain, a very special blessing to me and your mom. No matter how grown-up you become, you will always be our little princess, our happiness and our precious angel.

As you begin this wonderful new chapter, may God bless you with good health, wisdom, confidence, success and endless happiness. Always believe in yourself, respect others, make wise decisions and never stop chasing your dreams.

Remember, growing older brings responsibilities, but you will never be too old for your parents' love. ❤️

Happy Birthday, our beautiful angel!
May your future shine brighter than the stars.

With endless love, blessings and warm hugs,

Dad Dilip & Mom ❤️`,
    by: "Dilip Dad"
  },
  {
    message: `Happy Birthday, my dearest Ujju! ❤️🎂
💐

You are not just my brother's daughter;
you are one of the sweetest blessings in
our family. Watching you grow into the
lovely person you are today fills my
heart with so much happiness and
pride.

I wish you a beautiful life filled with
endless happiness, good health, success,
and lots of love. May every dream you
have come true, and may God always
guide and protect you at every step of
your journey.

No matter how old you grow, you will
always remain our dear little Ujju.
Keep smiling, keep shining, and never
stop being the wonderful person you
are.

Lots and lots of love, hugs, and heartfelt
blessings. Happy Birthday, dear Ujju! 

with love

Priya athai`,
    by: "Priya Athai"
  },
  {
    message: `Hi baby happy birthday happy 18 to u no words can ever express my to u u will always be a very very spcl part of my life I just want u to know I will be there for u always`,
    by: "Radhika"
  }
];
const screens=[...document.querySelectorAll('.screen')];
let currentWish=0,galleryStarted=false,heartsStarted=false,heartTimer=null;

function showScreen(id){
  screens.forEach(s=>s.classList.toggle('active',s.id===id));
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='polaroid-screen'&&!galleryStarted){galleryStarted=true;buildPolaroids()}
  if(id==='wishes-screen')renderWish();
  if(id==='final-screen'&&!heartsStarted){heartsStarted=true;startRisingHearts()}
}
document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>showScreen(b.dataset.next)));

function buildPolaroids(){
  const grid=document.getElementById('memory-grid');
  const wall=document.getElementById('memory-wall');
  const caption=document.getElementById('caption');
  const labels=['little moments','the good old days','sunshine girl','core memory'];
  PHOTO_FILES.forEach((src,i)=>{
    const card=document.createElement('figure');
    card.className='memory-card';
    card.style.setProperty('--delay',`${i*.12}s`);
    card.style.setProperty('--start-rot',`${(i%2?1:-1)*(18+i%4*4)}deg`);
    card.style.setProperty('--land-rot',`${(i%2?1:-1)*(2+i%4*1.5)}deg`);
    card.style.animationDelay=`${i*.12}s`;
    const img=document.createElement('img');
    img.src=src;img.alt=`Ujju memory ${i+1}`;
    img.onerror=()=>img.src=placeholder(i+1);
    const cap=document.createElement('figcaption');
    cap.textContent=labels[i%labels.length];
    card.append(img,cap);grid.appendChild(card);
    requestAnimationFrame(()=>card.classList.add('landed'));
  });
  setTimeout(()=>{wall.classList.add('settled');caption.textContent='12 memories. 18 years. One unforgettable girl.'},5000);
  caption.textContent='Look at those memories falling into place…';
}
function placeholder(n){
  const colors=[['#f5dfb2','#d88f43'],['#f2d6d0','#a96d61'],['#e1e8d5','#687d58'],['#f4e7bd','#bd8a3f']];
  const [bg,fg]=colors[(n-1)%4];
  return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="${bg}"/><text x="200" y="230" text-anchor="middle" font-size="100" fill="${fg}">✿</text><text x="200" y="340" text-anchor="middle" font-family="Georgia" font-size="28" fill="${fg}">Add photo ${n}</text></svg>`);
}
function renderWish(){
  const w=WISHES[currentWish];
  document.getElementById('wish-number').textContent=String(currentWish+1).padStart(2,'0');
  document.getElementById('wish-message').textContent=w.message;
  document.getElementById('wish-author').textContent=w.by;
  document.getElementById('wish-message-scroll').scrollTop=0;
}
document.getElementById('next').addEventListener('click',()=>{currentWish=(currentWish+1)%WISHES.length;renderWish()});
document.getElementById('prev').addEventListener('click',()=>{currentWish=(currentWish-1+WISHES.length)%WISHES.length;renderWish()});

function startRisingHearts(){
  const layer=document.getElementById('heart-rise-layer');
  const symbols=['♥','♡','💛'];
  function addHeart(){
    if(!document.getElementById('final-screen').classList.contains('active'))return;
    const heart=document.createElement('span');
    heart.className='rising-heart';
    heart.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    heart.style.left=`${Math.random()*96}%`;
    heart.style.setProperty('--size',`${14+Math.random()*23}px`);
    heart.style.setProperty('--duration',`${6+Math.random()*5}s`);
    heart.style.setProperty('--drift',`${-45+Math.random()*90}px`);
    layer.appendChild(heart);
    heart.addEventListener('animationend',()=>heart.remove(),{once:true});
  }
  addHeart();heartTimer=window.setInterval(addHeart,430);
}
document.getElementById('print').addEventListener('click',()=>window.print());
document.getElementById('replay').addEventListener('click',()=>{
  galleryStarted=false;heartsStarted=false;if(heartTimer){clearInterval(heartTimer);heartTimer=null;}
  document.getElementById('memory-grid').innerHTML='';
  document.getElementById('memory-wall').classList.remove('settled');
  document.getElementById('heart-rise-layer').innerHTML='';
  document.getElementById('caption').textContent='And here they come…';
  currentWish=0;showScreen('news-screen');
});
renderWish();