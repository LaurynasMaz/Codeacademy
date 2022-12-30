class CreateTask{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render(){
    // divas
    this.div = document.createElement('div');
      this.div.classList.add('tasks');
      this.div.classList.add('shadow');
      // tekstas
    this.text = document.createElement('input');
      this.text.classList.add("text")
      this.text.value=this.props.taskText;
      this.text.disabled=true;
      this.div.append(this.text);
     

      // kitas divas
      this.div2 = document.createElement('div');
        this.div2.classList.add('icons');
        this.div.append(this.div2)

      // mygtukai
      this.svg1 = document.createElement('svg');
        this.svg1.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 0 0 64 64" height="64px" id="Layer_1" version="1.1" viewBox="0 0 64 64" width="64px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z"/><polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  "/><polygon points="20.273,37.028 18.642,46.28 27.913,44.654  "/><path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z"/></g></svg>`
        this.svg1.classList.add('svg1');
        this.div2.append(this.svg1);

        this.svg2 = document.createElement('svg');
        this.svg2.classList.add('svg2')
        this.svg2.innerHTML = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M341,128V99c0-19.1-14.5-35-34.5-35H205.4C185.5,64,171,79.9,171,99v29H80v32h9.2c0,0,5.4,0.6,8.2,3.4c2.8,2.8,3.9,9,3.9,9  l19,241.7c1.5,29.4,1.5,33.9,36,33.9h199.4c34.5,0,34.5-4.4,36-33.8l19-241.6c0,0,1.1-6.3,3.9-9.1c2.8-2.8,8.2-3.4,8.2-3.4h9.2v-32  h-91V128z M192,99c0-9.6,7.8-15,17.7-15h91.7c9.9,0,18.6,5.5,18.6,15v29H192V99z M183.5,384l-10.3-192h20.3L204,384H183.5z   M267.1,384h-22V192h22V384z M328.7,384h-20.4l10.5-192h20.3L328.7,384z"/></svg>`
        this.div2.append(this.svg2);

        this.svg3 = document.createElement('svg');
        this.svg3.classList.add('svg3')
        this.svg3.innerHTML = `<?xml version="1.0" ?><svg height="15px" version="1.1" viewBox="0 0 18 15" width="18px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-423.000000, -47.000000)"><g id="check" transform="translate(423.000000, 47.500000)"><path d="M6,10.2 L1.8,6 L0.4,7.4 L6,13 L18,1 L16.6,-0.4 L6,10.2 Z" id="Shape"/></g></g></g></svg>`
        this.div2.append(this.svg3);
        // mygtuku veikimas
        this.edit = (e) =>{
          if(this.text.disabled){this.text.disabled=false}
          else if(!this.text.disabled){this.text.disabled=true};
        }
        this.delete = (e) =>{
          this.div.remove(this.div);
        }
        this.check = (e) =>{
         if(this.text.style.textDecoration === 'line-through'){
          this.text.style.textDecoration = 'none'
         }else{
          this.text.style.textDecoration = 'line-through'
         } 

        }
        this.svg1.addEventListener('click', e => this.edit(e)),
        this.svg2.addEventListener('click', e => this.delete(e))
        this.svg3.addEventListener('click', e => this.check(e))

        // Appendinam i diva
      this.props.outputContainer.append(this.div);
  }
}

document.querySelector('#form form').addEventListener("submit", e=> {
  e.preventDefault();

  new CreateTask({
    outputContainer: document.querySelector("#output"),
    taskText : document.querySelector("#form .divForm form input[type='text']").value,
  });
});