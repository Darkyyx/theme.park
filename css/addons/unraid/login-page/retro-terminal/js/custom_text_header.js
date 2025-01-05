
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> ____     ___    ___   _   _        ____    ____ 
|  _ \   / _ \  |_ _| | \ | |      / ___|  / ___|
| |_) | | | | |  | |  |  \| |     | |     | |    
|  _ <  | |_| |  | |  | |\  |  _  | |___  | |___ 
|_| \_\  \___/  |___| |_| \_| (_)  \____|  \____|
                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
