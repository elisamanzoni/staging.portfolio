function preload() {
  // put preload code here
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  var contact = select('#contact');
  contact.mouseClicked(contact_open);

  var exit = select('#exit');
  exit.mouseClicked(contact_close);

}

function draw() {
  // put drawing code here
}

function contact_open() {
  var contact = select('#contact');
  var contact_container = select ('#contact_container');
  if (contact.hasClass("green_background")){
    contact.removeClass("green_background");
    contact_container.removeClass('contact_container');
    contact_container.addClass('contact_container_sparito');

  } else{
    contact.addClass("green_background");
    contact_container.removeClass('contact_container_sparito');
    contact_container.removeClass('display_none');
    contact_container.addClass('contact_container');
  }
}

function contact_close() {
  var contact = select('#contact');
  var contact_container = select ('#contact_container');
  if (contact.hasClass("green_background")){
    contact.removeClass("green_background");
    contact_container.removeClass('contact_container');
    contact_container.addClass('contact_container_sparito');
  } else{
    contact.addClass("green_background");
    contact_container.removeClass('contact_container_sparito');
    contact_container.removeClass('display_none');
    contact_container.addClass('contact_container');
  }
}



//ABOUT

function education_open() {
  var education_description = select('#education_description');
  var education_nome = select('#education_nome');
  var education_arrow = select('#education_arrow');
  if (education_description.hasClass('display_none')) {
    education_description.removeClass('display_none');
    education_nome.addClass('color');
    education_arrow.addClass('rotate');
  } else {
    education_description.addClass('display_none');
    education_nome.removeClass('color');
    education_arrow.removeClass('rotate');
  }
}


function experience_open() {
  var experience_description = select('#experience_description');
  var experience_nome = select('#experience_nome');
  var experience_arrow = select('#experience_arrow');
  if (experience_description.hasClass('display_none')) {
    experience_description.removeClass('display_none');
    experience_nome.addClass('color');
    experience_arrow.addClass('rotate');
  } else {
    experience_description.addClass('display_none');
    experience_nome.removeClass('color');
    experience_arrow.removeClass('rotate');
  }
}



function languages_open() {
  var languages_description = select('#languages_description');
  var languages_nome = select('#languages_nome');
  var languages_arrow = select('#languages_arrow');
  if (languages_description.hasClass('display_none')) {
    languages_description.removeClass('display_none');
    languages_nome.addClass('color');
    languages_arrow.addClass('rotate');
  } else {
    languages_description.addClass('display_none');
    languages_nome.removeClass('color');
    languages_arrow.removeClass('rotate');
  }
}


function changePage(obj){
  console.log(obj.id);
  window.location.href = obj.id + ".html";
}
