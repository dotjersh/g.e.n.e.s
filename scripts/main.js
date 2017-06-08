var ctx, canvas, parent, activeParent;

//load function
window.onload = function(){
  canvas = $('canvas')[0];
  ctx = canvas.getContext("2d");

  table();
  events();

  run();

  //update questions menu
  fillQuestions();

  //tooltips
  $('tbody input').tooltip();

  //loading finished
  setTimeout(function(){
    $('#loading').addClass('complete');
    $('.banner').addClass('complete');
    $('body').addClass('nomargin');
    //set mom to female
    parent = geno.mom;
    activeParent = 'mom';
    select('XX','sex');
  },500);

  //halfway through removal of the loading overlay, show help
  setTimeout(function(){
    $('.help').tooltip("show");
    $('.banner').remove();
  },1000);

  requestAnimationFrame(graphics);
}

//render loop
function graphics(){
  render(geno.child);
  requestAnimationFrame(graphics);
}

//upon click
function run(){
  gather();
  decifer();
  displayChild();
}

//puts questions in modal
function fillQuestions(){
  var output = "";

  for(var key in pheno){
    if (!pheno.hasOwnProperty(key)) continue; //skip array methods

    var genes = "";

    for(var i = 0; i < pheno[key].genes.length; i++){
      var alleles = "";
      for(var i2 = 0; i2 < pheno[key].genes[i].gene.length; i2++){
        alleles = alleles + `<span class="badge">` + pheno[key].genes[i].gene[i2] + `</span>`;
      }

      genes = genes + `<button class="btn key-` + pheno[key].genes[i].gene[0] + ` btn-default" onclick="select('` + pheno[key].genes[i].gene[0] + `','` + key +`');" type="button"><span class="alleles"> ` + alleles +` </span> ` + pheno[key].genes[i].name + ` </button>`;
    }

    output = output + `
      <div class="aQuestion">
        <h4><a class="black" target="_blank" href="https://wikipedia.org/wiki/` + pheno[key].name + `">` + pheno[key].name + `</a></h4>
        <div class="btn-group-vertical answer">
          ` + genes + `
        </div>
      </div><br>`;
  }

  $('.questionsLanding').html(output);

  //activate the first button in each
  $('.answer .btn:first-child').each(function(){
    $(this).addClass('btn-info');
  });

  //event for clicking
  $('.btn').click(function(){
    $(this).parent().children().removeClass('btn-info');
    $(this).addClass('btn-info');
  });

  //set mom's gene to female selected
  $('.key-XX').eq(1).parent().children().removeClass('btn-info');
  $('.key-XX').eq(1).addClass('btn-info');

}

function table(){
  var output = "";

  for(var key in pheno){
    if (!pheno.hasOwnProperty(key)) continue; //skip array methods
    output = output + "<tr><td><input title='" + pheno[key].name + "' class='" + key + "-dad' value='" + pheno[key].genes[0].gene[0] + "' maxlength='" + pheno[key].genes[0].gene[0].length + "'></input></td><td><input title='" + pheno[key].name + "' class='" + key + "-mom' value='" + pheno[key].genes[0].gene[0] + "' maxlength='" + pheno[key].genes[0].gene[0].length + "'></input></td><td><input title='" + pheno[key].name + "' class='" + key + "-child' readonly></input></td><th class='key " + key + "-key'>" + pheno[key].name + "</th></tr>";
  }

  $('tbody').html(output);
}

function select(allele,id){
  $("." + id + "-" + activeParent).val(allele);

  run();
}

function displayChild(){
  var i = 0;
  for(var key in pheno){
    if (!pheno.hasOwnProperty(key)) continue; //skip array methods
    $("." + key + "-child").val(geno.child[i]);
    i++;
  }
}

//Events
function events(){
  $('#save').click(function(){
    window.open(canvas.toDataURL('image/png'));
  });

  $('#kid').click(function(){
    $('#babyResults').html(toText());
  });

  $('#mom').click(function(){
    $('.person').html("Mother");
    parent = geno.mom;
    activeParent = 'mom';
  });

  $('#dad').click(function(){
    $('.person').html("Father");
    parent = geno.dad;
    activeParent = 'dad';
  });

  $('#random').click(function(){
    decifer();
    displayChild();
  });

  window.onkeyup = function(e){
    if(e.which == 13){
      run();
      e.preventDefault();
    }
  };

  $('body').click(function(){
    $('.help').tooltip("destroy");
  });

  $('#dnaButton').click(function(){
    $('#dnaResults').html(geno.child);
  });
}

function toText(){
  var output = "";

  var i = 0;
  for(var key in pheno){
    if (!pheno.hasOwnProperty(key)) continue; //skip array methods
    output += "<b>" + pheno[key].name + "</b>: " + search(key,geno.child[i]) + " <br>";
    i++;
  }

  return output;
}

function gather(){
  geno.mom = [];
  geno.dad = [];
  for(var key in pheno){
    if (!pheno.hasOwnProperty(key)) continue; //skip array methods

    geno.mom.push($('.' + key + '-mom').val());
    geno.dad.push($('.' + key + '-dad').val());
  }
}

function decifer(){
  for(var i = 0; i < geno.mom.length;i++){
    if(geno.mom[i] != "" && geno.dad[i] != ""){
      var temp = "";

      for(var x = 0; x < geno.dad[i].length; x++){
        temp += flip(geno.mom[i][x],geno.dad[i][x]);
      }

      geno.child[i] = sort(temp);
    }
  }
}

function toPheno(allele){
  for(var key in pheno){ //loop genotypes
    if (!pheno.hasOwnProperty(key)) continue; //skip array methods

    for(var i = 0; i < pheno[key].genes.length;i++){ //loop options
      for(var i2 = 0; i2 < pheno[key].genes[i].gene.length;i2++){ //loop applicable alleles
        if(pheno[key].genes[i].gene[i2] == allele){
          return pheno[key].genes[i].name.toLowerCase();
        }
      }
    }
  }
}

var t = toPheno;

function render(geno){
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  //ears
  lay('ear-' + t(geno[5]) + "-" + t(geno[6]));

  //Face Shape
  lay('face-' + t(geno[1]) + "-" + t(geno[2])+ "-" + t(geno[3]));

  //shirt
  lay('clothes');

  //Cleft Chin
  if(geno[4] == "zz"){
    lay('cleft');
  }

  //eye
    lay('iris-bck');

    //iris
    lay('iris-' + t(geno[20]) + "-" + t(geno[24]));

    //eye
    lay('eye-' + t(geno[20]) + "-" + t(geno[21]) + "-" + t(geno[22]));

  //eyebrows
  lay('eyelashes-' + t(geno[10]) + "-" + t(geno[11])+ "-" + t(geno[9]));

  //mouth
  lay('mouth-male-' + t(geno[13]) + "-" + t(geno[14]));

  //dimples
  if(geno[15] == "Dd" || geno[15] == "DD"){
    lay('dimples');
  }

  //dimples
  lay('hapsburg-' + t(geno[16]));

  //nose
  lay('nose-' + t(geno[17]));

  //freckles
  if(geno[18] == "ff"){
    lay('freckles');
  }

  //hair
  lay('hair-' + t(geno[0]) + "-" + t(geno[7])+ "-" + t(geno[9]));
}

function lay(src){
  try {
    ctx.drawImage(searchIMG(src),0,0,image.size,image.size,0,0,image.display,image.display);
  } catch(e){
    console.log(e);
  }
}

function flip(var1,var2){
  var ar = [var1,var2];
  return ar[Math.floor(Math.random() * 2)];
}

function search(phenotype,gene){
  for(var i = 0; i < pheno[phenotype].genes.length; i++){
    for(var x = 0; x < pheno[phenotype].genes[i].gene.length; x++){
      if(pheno[phenotype].genes[i].gene[x] == gene){
        return pheno[phenotype].genes[i].name;
      }
    }
  }
}

function sort(gene){
  var output = "";
  for(var i = 0; i < gene.length; i = i + 2){
    if(gene[i] > gene[i+1]){
      output += gene[i + 1] + gene[i];
    } else {
      output += gene[i] + gene[i + 1];
    }
  }
  return output;
}
