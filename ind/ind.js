//copyright Roman Grigorkevivch
// 2017.29.12
// project version 1.1


let str1
let str2
let chart1
let chart2
let name="[Введите имя]"
let sname="[Введите фомилию]"

function gen() {
  str1=document.getElementById('name').value
  str2=document.getElementById('sname').value
  chart1=str1[0]
  chart2=str2[0]

  if (chart1=="А") {
    name="Артистичный"
    console.log(name);
  }
  if (chart1=="Б") {
    name="Большой"
    console.log(name);
  }
  if (chart1=="В") {
    name="Вольный"
    console.log(name);
  }
  if (chart1=="Г") {
    name="Гроздный"
    console.log(name);
  }
  if (chart1=="Д") {
    name="Дикий"
    console.log(name);
  }
  if (chart1=="Е"||chart1=="Ё") {
    name="Ездовой"
    console.log(name);
  }
  if (chart1=="Ж") {
    name="Жизнерадостный"
    console.log(name);
  }
  if (chart1=="З") {
    name="Злой"
    console.log(name);
  }
  if (chart1=="И") {
    name="Игривый"
    console.log(name);
  }
  if (chart1=="Л") {
    name="Лунный"
    console.log(name);
  }
  if (chart1=="М") {
    name="Маленький"
    console.log(name);
  }
  if (chart1=="Н") {
    name="Несгибаемый"
    console.log(name);
  }
  if (chart1=="О") {
    name="Огнегривый"
    console.log(name);
  }
  if (chart1=="П") {
    name="Певучий"
    console.log(name);
  }
  if (chart1=="Р") {
    name="Разъярённый"
    console.log(name);
  }
  if (chart1=="С") {
    name="Степной"
    console.log(name);
  }
  if (chart1=="Т") {
    name="Торопливый"
    console.log(name);
  }
  if (chart1=="У") {
    name="Ужасный"
    console.log(name);
  }
  if (chart1=="Ф") {
    name="Фыркающий"
    console.log(name);
  }
  if (chart1=="Х") {
    name="Хороший"
    console.log(name);
  }
  if (chart1=="Ц") {
    name="Цепкий"
    console.log(name);
  }
  if (chart1=="Ч") {
    name="Чёрный"
    console.log(name);
  }
  if (chart1=="Ш") {
    name="Шипящий"
    console.log(name);
  }
  if (chart1=="Э") {
    name="Этот"
    console.log(name);
  }
  if (chart1=="Ю") {
    name="Юнный"
    console.log(name);
  }
  if (chart1=="Я") {
    name="Яркий"
    console.log(name);
  }

  //----------------------
  if (chart2=="А") {
    sname="Ангел"
    console.log(sname);
  }
  if (chart2=="Б") {
    sname="Бобр"
    console.log(sname);
  }
  if (chart2=="В") {
    sname="Вепрь"
    console.log(sname);
  }
  if (chart2=="Г") {
    sname="Голубь"
    console.log(sname);
  }
  if (chart2=="Д") {
    sname="Дуб"
    console.log(sname);
  }
  if (chart2=="А") {
    sname="Ангел"
    console.log(sname);
  }
  if (chart2=="Е"||chart2=="Ё") {
    sname="Ёж"
    console.log(sname);
  }
  if (chart2=="Ж") {
    sname="Журавль"
    console.log(sname);
  }
  if (chart2=="З") {
    sname="Зубр"
    console.log(sname);
  }
  if (chart2=="И"||chart2=="Й") {
    sname="Имбирь"
    console.log(sname);
  }
  if (chart2=="К") {
    sname="Крот"
    console.log(sname);
  }
  if (chart2=="Л") {
    sname="Лис"
    console.log(sname);
  }
  if (chart2=="М") {
    sname="Мамонт"
    console.log(sname);
  }
  if (chart2=="Н") {
    sname="Носорог"
    console.log(sname);
  }
  if (chart2=="О") {
    sname="Олень"
    console.log(sname);
  }
  if (chart2=="П") {
    sname="Пеликан"
    console.log(sname);
  }
  if (chart2=="Р") {
    sname="Рак"
    console.log(sname);
  }
  if (chart2=="С") {
    sname="Страус"
    console.log(sname);
  }
  if (chart2=="Т") {
    sname="Трус"
    console.log(sname);
  }
  if (chart2=="У") {
    sname="Упырь"
    console.log(sname);
  }
  if (chart2=="Ф") {
    sname="Филин"
    console.log(sname);
  }
  if (chart2=="Х") {
    sname="Хомяк"
    console.log(sname);
  }
  if (chart2=="Ц") {
    sname="Царь"
    console.log(sname);
  }
  if (chart2=="Ч") {
    sname="Червяк"
    console.log(sname);
  }
  if (chart2=="Ш"||chart2=="Щ") {
    sname="Щавель"
    console.log(sname);
  }
  if (chart2=="Э") {
    sname="Эмо"
    console.log(sname);
  }
  if (chart2=="Ю") {
    sname="Юпитер"
    console.log(sname);
  }
  if (chart2=="Я") {
    sname="Якорь"
    console.log(sname);
  }
  //-------------------
  alert("У индейцев тебя бы звали: "+name+" "+sname )

}
