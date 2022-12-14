import Heading, { helloWorld, notMorningPerson as notMorning } from './Heading.js';
import T from './Table.js';

 //      KOPMONENTAI

 //      UL/OL

 {
  class List{
    constructor(props){
      this.props = props;
      return this.render();
    }

    render = () => {
      this.htmlElement = document.createElement(this.props.type);

      Object.keys(this.props.attributes).forEach(attribute => {
        this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
      });

      this.props.listItems.forEach(listItem => {
        this.li = document.createElement('li');
        this.liTextNode = document.createTextNode(listItem.text);
        this.li.append(this.liTextNode);
        Object.keys(listItem.attributes).forEach(attribute => {
          this.li.setAttribute(attribute, listItem.attributes[attribute]);
        });
        this.htmlElement.append(this.li);
      });

      return this.htmlElement;
    }
  }

  let list = new List({
    type: 'ul',
    attributes: {
      class: 'lightThemeList',
      id: 'superUnorderedList'
    },
    listItems: [
      {
        text: 'list item tekstas1',
        attributes: {
          class: 'listItem1',
          style: 'color: rgb(128, 128, 26)'
        }
      },{
        text: 'list item tekstas2',
        attributes: {
          class: 'listItem2',
          style: 'color: green'
        }
      },{
        text: 'list item tekstas3',
        attributes: {
          class: 'listItem3',
          style: 'color: red'
        }
      }
    ]
  });

  document.querySelector("body").append(list);
}

//      SELECT

class Select{
   constructor(props){
    this.props = props;
    return this.render();
   }
   render = () =>{
    this.htmlElement = document.createElement(this.props.type);
    Object.keys(this.props.attributes).forEach(attribute => {
      this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
    });

    this.props.optionItems.forEach(optionItem => {
      this.option = document.createElement('option');
      this.optionTextNode = document.createTextNode(optionItem.text);
      this.option.append(this.optionTextNode);
      Object.keys(optionItem.attributes).forEach(attribute =>{
        this.option.setAttribute(attribute, optionItem.attributes[attribute]);
      });
      this.htmlElement.append(this.option);
    });

    return this.htmlElement;
   }
 }

 let select = new Select({
  type : 'select',
  attributes: {
    class: 'selectClass',
    id: 'selectId'
  },
  optionItems: [
    {
      text: 'option1',
      attributes: {
        class: 'option1',
        style: 'color: grey'
      }
    },{
      text: 'option2',
      attributes: {
        class: 'option2',
        style: 'color: red'
      }
    },{
      text: 'option3',
      attributes: {
        class: 'option3',
        style: 'color: blue'
      }
    }
  ]
});
document.querySelector("body").append(select);

//      TABLE

class Table{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render = () =>{
    // priskirimas table 
    this.htmlElement = document.createElement(this.props.type);
    Object.keys(this.props.attributes).forEach(attribute =>{
      this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
    });
    // sukuriame thead
    this.tableHead = document.createElement('thead');
    this.tr = document.createElement('tr');

    this.props.tableHeadItems.forEach(tableHeadItem => {
      this.th = document.createElement('th');
      this.th.innerText = tableHeadItem.text;
      this.tr.append(this.th);
    });
    this.tableHead.append(this.tr);

    // sukuriame tbody
    this.tableBody = document.createElement('tbody');
    this.tr = document.createElement('tr');

    this.props.tableBodyItems.forEach(tableBodyItem => {
      this.td = document.createElement('td');
      this.td.innerText = tableBodyItem.text;
      this.tr.append(this.td);
    });
    this.tableBody.append(this.tr);
    // bandoma 2 eilute tdbody veikia
    this.tr = document.createElement('tr');

    this.props.tableBodyItems2.forEach(tableBodyItem2 => {
      this.td = document.createElement('td');
      this.td.innerText = tableBodyItem2.text;
      this.tr.append(this.td);
    });
    this.tableBody.append(this.tr);
  
      this.htmlElement.append(this.tableHead, this.tableBody);

    return this.htmlElement;
  }
}


let table = new Table({
  type : 'table',
  attributes: {
    class: 'tableClass',
  },
  tableHeadItems: [
      {
        text: 'th1',
      },{
        text: 'th2',
      },{
        text: 'th3',
      }],
  tableBodyItems: [
      {
        text: 'tr1',
      },{
        text: 'tr2',
      },{
        text: 'tr3',
      },
  ],
  tableBodyItems2: [
    {
      text: 'tr4',
    },{
      text: 'tr5',
    },{
      text: 'tr6',
    }
],

});
document.querySelector("body").append(table);


//              MODULIAI
/*
  Kit?? JS fail?? importavimas ir naudojimas
    import ka from 'isKur'; - faile kuriame norime naudoti importus (main.js)
    type="module" - nusirodyti atribut?? "type" su nustatymu "module" JS failo prijungime HTML'e.
    export default something(){}; 'isKur' faile reikia nurodyti k?? jis eksportuoja.
  Galima ra??yti tiek export default, tiek export;
    export default - numatytasis eksportas, kur?? priimsi ra??ydamas - import anyNameIWant from 'exportFile.js'. Vardas, kur?? nurodai neprivalo sutapti su export default vardu esan??iu exportFile.js. Visviena bus eksportuojamas vienas vienintelis elementas, kuris turi default priera????.
    export - paprastas eksporas, kur??'iuos priimsi ra??ydamas - import { exportedName, exportedName2 } from 'exportFile.js'. Priimsi b??tent tuos elementus, kuri?? vardus para??ei ir kurie yra paprasti export'ai. Priimti paprastus eksportus galima kokiais tik nori pavadinimais naudojant "as" priera????: import { exportedName as pirmas, exportedName2 as antras } from 'exportFile.js'.
*/

let antraste = new Heading({
  dydis: '1',
  tekstas: 'Kaimieti??kai',
  atributai: {
    class: 'klasesVardas darVienaKlase',
    id: 'kazkoksId',
    style: 'color:red'
  }
});
console.log(antraste);
helloWorld();
notMorning();

//              Duomen?? saugojimas vartotojo dalyje
//  cookie
document.cookie = `vardas=kazkoks; expires=${new Date('2022 12 20')}`;
document.cookie = `kitas=kazkoks; expires=${new Date('2022 12 20')}`;
document.cookie = `vardas=kitoks; expires=${new Date('2022 12 20')}`;

// session storage
document.querySelector('body').addEventListener('click', () => {
  sessionStorage.setItem('vardas', 'Laurynas');
  sessionStorage.setItem('pavarde', 'Ma??eika');
  sessionStorage.setItem('lvlOfTired', '100');
});
// local storage
document.querySelector('body').addEventListener('click', () => {
  localStorage.setItem('vardas', 'Laurynas');
  localStorage.setItem('pavarde', 'Ma??eika');

  // localStorage.clear(); // i??valo vis?? storage
  console.log(localStorage.key(0));
  console.log(localStorage.getItem(localStorage.key(0)));
  localStorage.removeItem(localStorage.key(0));
  localStorage.setItem('pomegiai', ['game','sport','tv']);
  let data = {
    planeta: "??em??",
    zemynas: "Europa",
    salis: "Lietuva"
  }
  console.log(data);
  console.log(JSON.stringify(data));

  localStorage.setItem('gyvenamojiVieta', JSON.stringify(data));


  // localStorage.clear(); // i??valo vis?? storage
  // console.log(localStorage.key(0));
  // console.log(localStorage.getItem(localStorage.key(0)));
  // localStorage.removeItem(localStorage.key(0));
  });

  // JSON.stringify(object) -> paver??ia objekt?? ?? string'??
  // JSON.parse(stringifiedObject) -> paver??ia string'?? ?? objekt??


  /// Roko Lenetele kaip reikia 
  //      TABLE
{
  let table = new T({
    tableAttributes:{
      class: "kaledos sventes"
    },
    tableData : [{
      vardas: "Rokas",
      pavarde: "Banaitis",
      amzius: 26
    }, {
      vardas: "Rokas2",
      pavarde: "Banaitis2",
      amzius: 27
    }, {
      vardas: "Petras",
      pavarde: "Petrauskas",
      amzius: 50
    }]
  });

  document.querySelector('body').append(table);
}