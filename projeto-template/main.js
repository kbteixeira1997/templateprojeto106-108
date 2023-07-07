function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  //colocar o link do teachablemachine no lugar dos ###############
  classifier = ml5.soundClassifier('#########/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
// criar o animais ou musica que voce vai usar
//var dog = 0;
//var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    //document.getElementById("result_label").innerHTML = 'Som detectado de  - '+ results[0].label;
    //document.getElementById("result_count").innerHTML = 'Cachorro detectado - '+dog+ ' Gato detectado - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

   /// codigo aqui!!
  }
}
