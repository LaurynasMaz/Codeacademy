import { update } from "./main.js";
import { remove } from "./main.js";


export default class MovieCard{
  constructor(props){
    this.props = props;
  }

  render(){
  // Card Movie div
    this.container = document.createElement('div');
    this.container.classList.add("cardMovie");
  // Title
    this.title = document.createElement('h1');
    this.title.textContent = this.props.title;
 // Image
    this.image = document.createElement('img');
    this.image.src = this.props.image;
  //Director
    this.directorContainer = document.createElement("div")
    this.directorContainer.classList.add("directorContainer");
    this.directorLabel = document.createElement("label")
    this.directorLabel.textContent = "Director:"
    this.director = document.createElement('p');
    this.director.textContent = this.props.director;
    this.directorContainer.append(this.directorLabel, this.director);
  // Length
    this.lengthContainer = document.createElement("div")
    this.lengthContainer.classList.add("lengthContainer");
    this.label = document.createElement("label")
    this.label.textContent = "Length:"
    this.minLabel = document.createElement("label")
    this.minLabel.textContent = "min"
    this.length = document.createElement('p');
    this.length.textContent = this.props.length;
    this.lengthContainer.append(this.label, this.length, this.minLabel);

    // Release
    this.releaseContainer = document.createElement("div")
    this.releaseContainer.classList.add("releaseContainer");
    this.releaselabel = document.createElement("label")
    this.releaselabel.textContent = "Realese date:"
    this.releaseLabel2 = document.createElement("label")
    this.releaseLabel2.textContent = "m."
    this.release = document.createElement('p');
    this.release.textContent = this.props.release;
    this.releaseContainer.append(this.releaselabel, this.release, this.releaseLabel2);

    // Button Container
    this.buttonContainer = document.createElement("div")
    this.buttonContainer.classList.add("buttonContainer");
    // Delete button
    this.deleteButton = document.createElement('button');
    this.deleteButton.classList.add('deleteButton');
    this.deleteButton.id = this.props.id;
    this.deleteButton.append(document.createTextNode("Delete"));
    this.deleteButton.addEventListener('click',e=>{remove(this.props.id)});

    // Edit button
    this.editButton = document.createElement('button');
    this.editButton.classList.add('editButton');
    this.editButton.textContent = "Edit";
    this.editButton.addEventListener('click',e=>{this.handleEdit()});
    this.buttonContainer.append(this.editButton, this.deleteButton)

    this.container.append(this.title, this.image, this.directorContainer, this.lengthContainer, this.releaseContainer,this.buttonContainer);
    return this.container;
  }
  // Edit 
  handleEdit(){
    if(this.editButton.textContent === "Edit"){
      this.editButton.textContent = "Save";

      this.title.setAttribute("contenteditable", true);
      this.director.setAttribute("contenteditable", true);
      this.length.setAttribute("contenteditable", true);
      this.release.setAttribute("contenteditable", true);
    }else{
      this.editButton.textContent = "Edit";
      this.title.setAttribute("contenteditable", false);
      this.director.setAttribute("contenteditable", false);
      this.length.setAttribute("contenteditable", false);
      this.release.setAttribute("contenteditable", false);
      
      this.props.title = this.title.textContent;
      this.props.director = this.director.textContent;
      this.props.length = this.length.textContent;
      this.props.release = this.release.textContent;

      update(this.props.id, this.props);
    }
  }
}