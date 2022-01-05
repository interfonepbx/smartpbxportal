$(document).ready(function(){
// ON SUBMIT FUNCTION
$("td").on('click', function(e){
e.preventDefault();
element = $(this).attr('class');
// Numbers Page Html
optionsHtml = "<tr class='change-number-description configure-number-options'><td colspan='3'><div class='row'><div class='col-md-3'><a href='#' data-bs-target='#prepend' data-bs-toggle='modal'><img src='assets/images/icons/Prepend.svg' /><h3>Prepend</h3></a></div></div></td></tr>";
inputHtml = "<tr class='change-number-description'><td colspan='3'><form><div class='row mb-3'><label for='inputEmail3' class='col-sm-3 col-form-label'>Enter la description</label><div class='col-sm-8'><input type='text' class='form-control' id='inputEmail3'></div></div><div class='row justify-content-end'><div class='col-sm-6 align-self-end'><a href='#'>Annuler</a><input type='submit' value='Sauvegarder les modifications'></div></div></form></td></tr>";
// Users Page Html
extensionHtml = "<tr class='change-number-description user-extensions-options'><td colspan='5'><form><div class='row mb-3'><div class='col-2 col-sm-2'><a href='#'>Retirer</a></div><div class='col-10 col-sm-10'><span>1001</span></div></div><div class='row justify-content-end'><div class='col-6 col-sm-6'><a href='#' id='add-extension' class='orange-btn'><img src = 'assets/images/icons/white/add.svg' alt='Add'> Ajouter une extension à cet utilisateur</a></div><div class='col-sm-6 align-self-end text-right'><a href='#'>Annuler</a><input type='submit' value='Sauvegarder les modifications'></div></div></form></td></tr>";
userPhoneNumbersHtml = "<tr class='change-number-description user-extensions-options'><td colspan='5'><form><div class='row mb-3'><div class='col-2 col-sm-2'><a href='#'>Retirer</a></div><div class='col-10 col-sm-10'><span>+32 81 84 07 64</span></div></div><div class='row justify-content-end'><div class='col-6 col-sm-6 text-left'><a href='#' class='orange-btn'><img src = 'assets/images/icons/white/add.svg' alt='Add'> Ajouter une extension à cet utilisateur</a></div><div class='col-sm-6 align-self-end text-right'><a href='#'>Annuler</a><input type='submit' value='Sauvegarder les modifications'></div></div></form></td></tr>";
userTelephonesHtml = "<tr class='change-number-description user-extensions-options'><td colspan='5'><form><div class='row mb-3'><div class='col-2 col-sm-2'><a href='#'>Retirer</a></div><div class='col-10 col-sm-10'><span>Demo Dorrphone interfone</span></div></div><div class='row justify-content-end'><div class='col-6 col-sm-6 text-left'><a href='#' class='orange-btn'><img src = 'assets/images/icons/white/add.svg' alt='Add'> Ajouter une extension à cet utilisateur</a><a href='#' class='blue-btn'><img src = 'assets/images/icons/white/add.svg' alt='Add'> Nouveau Téléphones</a></div><div class='col-sm-6 align-self-end text-right'><a href='#'>Annuler</a><input type='submit' value='Sauvegarder les modifications'></div></div></form></td></tr>";
$('tr.change-number-description').remove();
// Numbers
if(element == 'number-description'){$(this).parent('tr').after(inputHtml);}
if(element == 'number-options'){$(this).parent('tr').after(optionsHtml);}
// Users Page
if(element == 'user-extensions'){$(this).parent('tr').after(extensionHtml);}
if(element == 'user-phone-numbers'){$(this).parent('tr').after(userPhoneNumbersHtml);}
if(element == 'user-telephones'){$(this).parent('tr').after(userTelephonesHtml);}

});
// END SUBMIT FUNCTION


// Close FUNCTION
$("#add-extension").on('click', function(e){
e.preventDefault();
element = $(this).attr('id');
// add extension html
addExtensionHtml = "<tr class='add-extension'><td colspan='5'><form><div class='row mb-3'><div class='col-12'><label>Numéro d'extension:</label><input type='text' value='1009' /> <a id='close' href='#'><img src='assets/images/icons/pink/close.svg' alt='close' /></a></div></div></form></td></tr>";
$(this).parent('tr').before(addExtensionHtml);
});
// End Close FUNCTION


// Close FUNCTION
$("#close").on('click', function(e){
e.preventDefault();
element = $(this).attr('class');
$(this).parent('tr').remove();
});
// End Close FUNCTION


});
// END READY FUNCTION

