
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> _          _              ____       _              ____ ____ 
| |    __ _| | _____      |  _ \\ ___ (_)_ __        / ___/ ___|
| |   / _` | |/ / _ \\     | |_) / _ \\| | '_ \\      | |  | |    
| |__| (_| |   <  __/  _  |  _ < (_) | | | | |  _  | |__| |___ 
|_____\\__,_|_|\\_\\___| (_) |_| \\_\\___/|_|_| |_| (_)  \\____\\____|
                                                               </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
