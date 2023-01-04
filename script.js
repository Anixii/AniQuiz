
 const capitalsOfAsia = document.querySelector('#capitals_of_asia'); 
const wrapper = document.querySelector('.wrapper')
const Asia =document.querySelector('.asia') 
const historyKyrgyz = document.querySelector('.history') 
const historyKyrgyzPeople = document.querySelector('#history__kyrgyz-people') 
const frontendCard = document.querySelector('#frontend'); 
const frontend = document.querySelector('.frontend')
frontendCard.addEventListener('click',()=>{ 
    wrapper.style.display = 'none'; 
    frontend.style.display = 'block' 
    NextLevelFront(1,false)
})
capitalsOfAsia.addEventListener('click', ()=>{ 
    wrapper.style.display = 'none'; 
    Asia.style.display = 'block'
});  
historyKyrgyzPeople.addEventListener('click',()=>{  
    wrapper.style.display = 'none'; 
    historyKyrgyz.style.display = 'block' 
    NextLevelHistory(1,false)
} );

 




//Capitals of Asia
let count = 0;
  function NextLevel(level, answer){ 
    
    const quizTile = document.querySelector('.quiz__title'); 
    
    if(level == 1){ 
        Asia.innerHTML= ` 
        <div class="quiz-block asia__quiz-one">
        <div class="quiz__title asia__quiz-one">Столица Индии?</div> 
        <div class="answer-block asia__answers-one">           
            <button class="answer asia__answer-one btn_firts" onclick="NextLevel(2,false)">Катманду</button> 
            <button class="answer  asia__answer-one btn_second "onclick="NextLevel(2,false)" >Кабул</button> 
            <button class="answer  asia__answer-one btn_third"onclick="NextLevel(2,false)">Мумбаи</button> 
            <button class="answer  asia__answer-one btn_fourth"onclick="NextLevel(2,true)">Нью-Дели</button>
        </div>
    </div>
        `
    if(answer == true){ 
        count++
    }
    }else if (level==2){ 
        Asia.innerHTML= ` 
        <div class="quiz-block asia__quiz-one">
        <div class="quiz__title asia__quiz-one">Столица Северной Кореи?</div> 
        <div class="answer-block asia__answers-one">           
            <button class="answer asia__answer-one btn_firts" onclick="NextLevel(3,false)">Чжанжоу</button> 
            <button class="answer  asia__answer-one btn_second "onclick="NextLevel(3,false)" >Тайбей</button> 
            <button class="answer  asia__answer-one btn_third"onclick="NextLevel(3,false)">Сеул</button> 
            <button class="answer  asia__answer-one btn_fourth"onclick="NextLevel(3,true)">Пхеньян</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++
        }
    } else if( level ==3){ 
        Asia.innerHTML= ` 
        <div class="quiz-block asia__quiz-one">
        <div class="quiz__title asia__quiz-one">Столица Ирана</div> 
        <div class="answer-block asia__answers-one">           
            <button class="answer asia__answer-one btn_firts" onclick="NextLevel(4,true)">Тегран</button> 
            <button class="answer  asia__answer-one btn_second "onclick="NextLevel(4,false)" >Кабул</button> 
            <button class="answer  asia__answer-one btn_third"onclick="NextLevel(4,false)">Багдад</button> 
            <button class="answer  asia__answer-one btn_fourth"onclick="NextLevel(4,false)">Бейрут</button>
        </div>
    </div> 
        ` 
        if(answer == true){ 
            count++
        }
    } else if (level == 4){ 
        Asia.innerHTML= ` 
        <div class="quiz-block asia__quiz-one">
        <div class="quiz__title asia__quiz-one">Столица Тайланда?</div> 
        <div class="answer-block asia__answers-one">           
            <button class="answer asia__answer-one btn_firts" onclick="NextLevel(5,false)">Тайбей</button> 
            <button class="answer  asia__answer-one btn_second "onclick="NextLevel(5,false)" >Джакарта</button> 
            <button class="answer  asia__answer-one btn_third"onclick="NextLevel(5,true)">Бангкок</button> 
            <button class="answer  asia__answer-one btn_fourth"onclick="NextLevel(5,false)">Фучжоу</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++
        }
        
    } else if (level == 5){ 
        Asia.innerHTML= ` 
        <div class="quiz-block asia__quiz-one">
        <div class="quiz__title asia__quiz-one">Столица Бангладеша</div> 
        <div class="answer-block asia__answers-one">           
            <button class="answer asia__answer-one btn_firts" onclick="NextLevel(6,false)">Мандалай</button> 
            <button class="answer  asia__answer-one btn_second "onclick="NextLevel(6,false)" >Богра</button> 
            <button class="answer  asia__answer-one btn_third"onclick="NextLevel(6,true)">Дакка</button> 
            <button class="answer  asia__answer-one btn_fourth"onclick="NextLevel(6,false)">Здесь нет правильного ответа</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++
        }
    } else if( level== 6){  
        if(answer == true){ 
            count++
        }
        Asia.innerHTML= ` 
        <div class="quiz-block asia__quiz-one">
        <div class="quiz__title asia__quiz-one">Вы прошли ANIQUIZ<br> Ваш счет ${count} / 6</div>   
        <button class="restart" onclick='RestartGeographyAsia()'>Выйти в главное меню </button>
    </div>
        `  
        count = 0
    }
    
  } 
function RestartGeographyAsia(){ 
    Asia.style.display = 'none'; 
    wrapper.style.display = 'block'
    Asia.innerHTML = ` 
   <div class="quiz-block asia__quiz-one"> 
        <div class="quiz__title asia__quiz-one">Столица Китая?</div>  
        
        <div class="answer-block asia__answers-one">           
            <button class="answer asia__answer-one btn_firts" onclick="NextLevel(1,false)">Шанхай</button> 
            <button class="answer  asia__answer-one btn_second "onclick="NextLevel(1,true)" >Пекин</button> 
            <button class="answer  asia__answer-one btn_third"onclick="NextLevel(1,false)">Ухань</button> 
            <button class="answer  asia__answer-one btn_fourth"onclick="NextLevel(1,false)">Сеул</button>
        </div>
    </div> 
   ` 

}
 
//History 
function NextLevelHistory(level,answer){ 
    let historyTitle = document.querySelector('.history__title'); 
    if(level == 1){
    historyKyrgyz.innerHTML = ` 
    <div class="quiz-block history__quiz"> 
    <div class="quiz__title history__title"> 
    Первое упоминание о Кыргызах
    </div> 
    <div class="answer-block history__answers">           
    <button class="answer history__answer-one btn_firts" onclick="NextLevelHistory(2,false)">106 год до н.э.</button> 
    <button class="answer history__answer-one btn_second "onclick="NextLevelHistory(2,false)" >51 год до н.э</button> 
    <button class="answer history__answer-one btn_third"onclick="NextLevelHistory(2,true)">201 год до н.э.</button> 
    <button class="answer history__answer-one btn_fourth"onclick="NextLevelHistory(2,false)">Здесь нет правильного ответа</button>
    </div>
</div>
    ` 
    if(answer == true){ 
        count++ 
        console.log(count)
    } 
    } else if(level == 2){ 
        historyKyrgyz.innerHTML = ` 
        <div class="quiz-block history__quiz"> 
        <div class="quiz__title history__title"> 
        Где на территории Кыргызстана были обнаружены первые памятники каменного века?
        </div> 
        <div class="answer-block history__answers">           
        <button class="answer history__answer-one btn_firts" onclick="NextLevelHistory(3,true)">На берегу реки Он-Арча и в местности Кожо-Бакырган-Сай</button> 
        <button class="answer history__answer-one btn_second "onclick="NextLevelHistory(3,false)" >В долине реки Исфайрам-Сай и в местности Саламат-Булак</button> 
        <button class="answer history__answer-one btn_third"onclick="NextLevelHistory(3,false)">На берегу реки Аламудун и пещере Теке-Секирик</button> 
        <button class="answer history__answer-one btn_fourth"onclick="NextLevelHistory(3,false)">Здесь нет правильного ответа</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++ 
            console.log(count)
        } 
    } else if(level == 3){ 
        historyKyrgyz.innerHTML = ` 
        <div class="quiz-block history__quiz"> 
        <div class="quiz__title history__title"> 
        На территории Кыргызстана в эпоху бронзы развивались какие культуры?
        </div> 
        <div class="answer-block history__answers">           
        <button class="answer history__answer-one btn_firts" onclick="NextLevelHistory(4,false)">Андроновская и Ачинская</button> 
        <button class="answer history__answer-one btn_second "onclick="NextLevelHistory(4,true)" >Андроновская и Чустская</button> 
        <button class="answer history__answer-one btn_third"onclick="NextLevelHistory(4,false)">Чустская и Далверзинская</button> 
        <button class="answer history__answer-one btn_fourth"onclick="NextLevelHistory(4,false)">Андроновская и Далверзинская</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++ 
            console.log(count)
        } 
    } else if (level == 4){ 
        historyKyrgyz.innerHTML = ` 
        <div class="quiz-block history__quiz"> 
        <div class="quiz__title history__title"> 
        Столица усунского государства?
        </div> 
        <div class="answer-block history__answers">           
        <button class="answer history__answer-one btn_firts" onclick="NextLevelHistory(5,fasle)">Ордос</button> 
        <button class="answer history__answer-one btn_second "onclick="NextLevelHistory(5,false)" >Кашгар</button> 
        <button class="answer history__answer-one btn_third"onclick="NextLevelHistory(5,true)">Чигу</button> 
        <button class="answer history__answer-one btn_fourth"onclick="NextLevelHistory(5,false)">Cуяб</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++ 
            console.log(count)
        } 
    } else if (level == 5){ 
        historyKyrgyz.innerHTML = ` 
        <div class="quiz-block history__quiz"> 
        <div class="quiz__title history__title"> 
        Кем впервые упоминается этноним-Кыргыз-?
        </div> 
        <div class="answer-block history__answers">           
        <button class="answer history__answer-one btn_firts" onclick="NextLevelHistory(6,fasle)">Бань-Гу</button> 
        <button class="answer history__answer-one btn_second "onclick="NextLevelHistory(6,false)" >Ли-Гуанли</button> 
        <button class="answer history__answer-one btn_third"onclick="NextLevelHistory(6,false)">Ли-Лин</button> 
        <button class="answer history__answer-one btn_fourth"onclick="NextLevelHistory(6,true)">Сыма Цянь</button>
        </div>
    </div>
        `  
        if(answer == true){ 
            count++ 
            console.log(count)
        } 
    } else if (level==6){ 
        
        if(answer == true){ 
            count++ 
            console.log(count)
        }  
        historyKyrgyz.innerHTML= ` 
        <div class="quiz-block asia__quiz-one">
        <div class="quiz__title history__title">Вы прошли ANIQUIZ<br> Ваш счет ${count} / 5</div>   
        <button class="restart" onclick='RestartHistory()'>Выйти в главное меню </button>
    </div>
        `    
        count = 0
    }
}
function RestartHistory(){ 
    historyKyrgyz.style.display = 'none'; 
    wrapper.style.display = 'block'; 

}
 

function NextLevelFront(level, answer){ 
    if(level == 1){ 
        frontend.innerHTML= ` 
        <div class="quiz-block frontend__quiz"> 
        <div class="quiz__title frontend__title"> 
            Любимая фраза Юсуфа
        </div>  
        <div class='quiz__img '> <img src='img/yusuf.png'>  <img src="img/yusuf-2.png">      </div>
        <div class="answer-block frontend__answers">           
        <button class="answer history__answer-one btn_firts" onclick="NextLevelFront(2,false)">Рыся гот</button> 
        <button class="answer history__answer-one btn_second "onclick="NextLevelFront(2,false)" >За сколько бы выебал бабулю?</button> 
        <button class="answer history__answer-one btn_third"onclick="NextLevelFront(2,true)">Im stronger, Im smarter, Im better, IM BETTER</button> 
        <button class="answer history__answer-one btn_fourth"onclick="NextLevelFront(2,false)">Алексей, иди нахуй</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++
        }
    } else if( level ==2){ 
        frontend.innerHTML= ` 
        <div class="quiz-block frontend__quiz"> 
        <div class="quiz__title frontend__title"> 
        Сколько лет девушке Рыси?
        </div>  
        <div class='quiz__img '> <img src='img/rskld-girl.png'>      </div>
        <div class="answer-block frontend__answers">           
        <button class="answer history__answer-one btn_firts" onclick="NextLevelFront(3,false)">15 лет</button> 
        <button class="answer history__answer-one btn_second "onclick="NextLevelFront(3,true)" >10лет</button> 
        <button class="answer history__answer-one btn_third"onclick="NextLevelFront(3,false)">16лет</button> 
        <button class="answer history__answer-one btn_fourth"onclick="NextLevelFront(3,false)">У него нету девушки</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++
        }
    } else if(level == 3 ){ 
        frontend.innerHTML= ` 
        <div class="quiz-block frontend__quiz"> 
        <div class="quiz__title frontend__title"> 
        Кто нарисовал хуй возле Айти Академии
        </div>  
        <div class='quiz__img '> <img src='img/aza-braza.png'>  <img src="img/rskld-1.png">      </div>
        <div class="answer-block frontend__answers">           
        <button class="answer history__answer-one btn_firts" onclick="NextLevelFront(4,false)">Азамат</button> 
        <button class="answer history__answer-one btn_second "onclick="NextLevelFront(4,false)" >Белек</button> 
        <button class="answer history__answer-one btn_third"onclick="NextLevelFront(4,true)">Рыся</button> 
        <button class="answer history__answer-one btn_fourth"onclick="NextLevelFront(4,false)">Иван</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++
        }
    } else if (level == 4){ 
        frontend.innerHTML= ` 
        <div class="quiz-block frontend__quiz"> 
        <div class="quiz__title frontend__title"> 
        Рыскелди - ...
        </div>  
        <div class='quiz__img '> <img src='img/rskld-sexy-boy.png'>  <img src="img/rskld-awa.png">      </div>
        <div class="answer-block frontend__answers">           
        <button class="answer history__answer-one btn_firts" onclick="NextLevelFront(5,false)">Hot Boy</button> 
        <button class="answer history__answer-one btn_second "onclick="NextLevelFront(5,false)" >Sexy Box</button> 
        <button class="answer history__answer-one btn_third"onclick="NextLevelFront(5,false)">Kachok Boy</button> 
        <button class="answer history__answer-one btn_fourth"onclick="NextLevelFront(5,true)">Soft Boy</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++
        }
    } else if (level == 5){ 
        frontend.innerHTML= ` 
        <div class="quiz-block frontend__quiz"> 
        <div class="quiz__title frontend__title"> 
        Что сказал Юсуф?
        </div>  
        <div class='quiz__img '> <img src='img/yusuf-sigma.png'>       </div>
        <div class="answer-block frontend__answers">           
        <button class="answer history__answer-one btn_firts" onclick="NextLevelFront(6,false)">Я Заснул</button> 
        <button class="answer history__answer-one btn_second "onclick="NextLevelFront(6,true)" >Я проспал</button> 
        <button class="answer history__answer-one btn_third"onclick="NextLevelFront(6,false)">Я Соснул</button> 
        <button class="answer history__answer-one btn_fourth"onclick="NextLevelFront(6,false)">Сделал лицо сигмы и ушел</button>
        </div>
    </div>
        ` 
        if(answer == true){ 
            count++
        }
    } else if(level == 6){ 
        if(answer == true){ 
            count++
        } 
        frontend.innerHTML= ` 
        <div class="quiz-block asia__quiz-one">
        <div class="quiz__title asia__quiz-one">Вы прошли ANIQUIZ<br> Ваш счет ${count} / 5</div>   
        <button class="restart" onclick='RestartGeographyFront()'>Выйти в главное меню </button>
    </div>` 
        count = 0
    } 
} 
function RestartGeographyFront(){ 
    frontend.style.display = 'none'; 
    wrapper.style.display = 'block'; 

}