document.addEventListener('DOMContentLoaded', function() {
    var navbarHTML = `
    <header class="main-header">
        <div class="main-header-logo">
            <img src="https://helenethomsen.github.io/HelenesHobbies/images/logo/logo_dog_and_yarn_v1.png" alt="logo">
        </div>
        <nav class="main-header-nav">
            <ul>
                <li><a href="https://helenethomsen.github.io/HelenesHobbies/index.html">HOME</a></li>
                <li><a href="#">ONGOING</a></li>
                <li><a href="#">KNITTING</a></li>
                <li><a href="https://helenethomsen.github.io/HelenesHobbies/crochet/lego_keychains/lego_keychain.html">CROCHET</a></li>
                <li><a href="#">SHUTTLE<br> TATTING</a></li>
                <li><a href="#">TEABAG<br>FOLDING</a></li>
            </ul>
        </nav>
        <div class="main-header-sm">
            <a href="#"><div class="main-header-sm-fb"></div></a>
            <a href="#"><div class="main-header-sm-in"></div></a>
        </div>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});


// document.addEventListener('DOMContentLoaded', function() {
//     var navbarHTML = `
//     <header class="main-header">
//         <div class="main-header-logo">
//             <img src="https://helenethomsen.github.io/HelenesHobbies/images/logo/logo_dog_and_yarn_v1.png" alt="logo">
//         </div>
//         <nav class="main-header-nav">
//             <ul>
//                 <li><a href="../../index.html">HOME</a></li>
//                 <li><a href="#">ONGOING</a></li>
//                 <li><a href="#">KNITTING</a></li>
//                 <li><a href="crochet/lego_keychains/lego_keychain.html">CROCHET</a></li>
//                 <li><a href="#">SHUTTLE<br> TATTING</a></li>
//                 <li><a href="#">TEABAG<br>FOLDING</a></li>
//             </ul>
//             </nav>
//             <div class="main-header-sm">
//             <a href="#"><div class="main-header-sm-fb"></div></a>
//             <a href="#"><div class="main-header-sm-in"></div></a>
//         </div>
//     </header>
//     `;
//     document.body.insertAdjacentHTML('afterbegin', navbarHTML);
// });