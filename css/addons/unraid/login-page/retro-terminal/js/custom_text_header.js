
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> _        _    _  _______   ____   ___ ___ _   _   ____ ____ 
| |      / \  | |/ / ____| |  _ \ / _ \_ _| \ | | / ___/ ___|
| |     / _ \ | ' /|  _|   | |_) | | | | ||  \| || |  | |    
| |___ / ___ \| . \| |___ _|  _ <| |_| | || |\  || |__| |___ 
|_____/_/   \_\_|\_\_____(_)_| \_\\___/___|_| \_(_)____\____|
                                                             </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
