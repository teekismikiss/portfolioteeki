let n=0;
miHTML = "";
const expresion = [
  ["Chusi gatín", "Asturiano", "🇪🇸"],
  ["Jesús", "Español ", "🇪🇸"],
  ["Bless you", "Inglés", "🇬🇧"],
  ["Gesundheit", "Alemán", "🇩🇪"],
  ["À tes souhaits", "Francés", "🇫🇷"],
  ["Salute", "Italiano", "🇮🇹"],
  ["Saúde", "Portugués", "🇵🇹"],
  ["Gezondheid", "Neerlandés", "🇳🇱"],
  ["Prosit", "Danés", "🇩🇰"],
  ["Proshaj", "Albán", "🇦🇱"],
  ["Santinos", "Asturiano", "🇪🇸"],
  ["Nazdrave", "Búlgaro", "🇧🇬"],
  ["Na zdraví", "Checo", "🇨🇿"],
  ["Terveydeksi", "Finlandés", "🇫🇮"],
  ["Yamas", "Griego", "🇬🇷"],
  ["Salud", "Español ", "🇪🇸"]
  ["Egészségedre", "Húngaro", "🇭🇺"],
  ["Sláinte", "Irlandés", "🇮🇪"],
  ["Na zdrowie", "Polaco", "🇵🇱"],
  ["Noroc", "Rumano", "🇷🇴"],
  ["Budzdorov", "Ruso", "🇷🇺"],
  ["Živeli", "Serbio", "🇷🇸"],
  ["Na zdravie", "Eslovaco", "🇸🇰"],
  ["Nazdravlje", "Croata", "🇭🇷"],
  ["Gud välsigne dig", "Sueco", "🇸🇪"],
  ["İyi yaşa", "Turco", "🇹🇷"],
  ["Sahha", "Árabe", "🇸🇦"],
  ["Afiyat bashad", "Persa", "🇮🇷"],
  ["Shanti", "Sánscrito", "🇮🇳"],
  ["Labas", "Lituano", "🇱🇹"],
  ["Uz veselību", "Letón", "🇱🇻"],
  ["Tervehdys", "Estonio", "🇪🇪"],
  ["Hyvää terveyttä", "Carelio", "🇷🇺"],
  ["Sihat", "Malayo", "🇲🇾"],
  ["Saub khwan", "Tailandés", "🇹🇭"],
  ["Sức khỏe", "Vietnamita", "🇻🇳"],
  ["Mabuhay", "Tagalo", "🇵🇭"],
  ["Kia ora", "Maorí", "🇳🇿"],
  ["Afiyet olsun", "Turcomano", "🇹🇲"],
  ["Jian kang", "Chino Mandarín", "🇨🇳"],
  ["Odaijini", "Japonés", "🇯🇵"],
  ["Gwaenchanh-ayo", "Coreano", "🇰🇷"],
  ["Sukhi hotu", "Pali", "🇮🇳"],
  ["Bula", "Fiyiano", "🇫🇯"],
  ["Manuia", "Samoano", "🇼🇸"],
  ["I kene yan", "Bambara", "🇲🇱"],
  ["Eku", "Yoruba", "🇳🇬"],
  ["Nda", "Igbo", "🇳🇬"],
  ["Utshile", "Xhosa", "🇿🇦"],
  ["Uphile", "Zulú", "🇿🇦"],
  ["Afya", "Suajili", "🇰🇪"],
  ["Tenaistaylling", "Amhárico", "🇪🇹"],
  ["Akwaaba", "Twi", "🇬🇭"],
  ["Mo t'o", "Ewe", "🇹🇬"],
  ["Noflay", "Wolof", "🇸🇳"],
  ["A xit", "Maya", "🇲🇽"],
  ["Cualli", "Náhuatl", "🇲🇽"],
  ["Kawsay", "Quechua", "🇵🇪"],
  ["Iporã", "Guaraní", "🇵🇾"],
  ["Mari mari", "Mapudungun", "🇨🇱"],
  ["Pura vida", "Costa Rica", "🇨🇷"],
  ["Vives", "Catalán", "🇪🇸"],
  ["Osasuna", "Euskera", "🇪🇸"],
  ["Saude", "Gallego", "🇪🇸"],
  ["I wish you well", "EE.UU.", "🇺🇸"],
  ["Gott segne dich", "Luxemburgués", "🇱🇺"],
  ["Bene tibi", "Latín", "🇻🇦"]
];

//function deseo() {
  //miHTML = document.querySelector("#estornudo").innerHTML = `${expresion[n]} `;
  //n++; /*n=+5 para ir de 5 en 5*/
  //if (n >= expresion.length) {
    //n = 0;
//  }
//}
//function deseo() {
  //const h1 = document.querySelector("#estornudo");
  //
  // expresion(0), idioma (1), bandeja ( 2)
  //const saludo = expresion[n][0];
  //const idioma = expresion[n][1];
  //const bandera = expresion[n][2];

  //// actualizar el HTML
  //h1.innerHTML = `${saludo} <br> <small>(${idioma} ${bandera})</small>`;

  // Incremento y resetear llegado al final
  //n++; 
  //if (n >= expresion.length) {
   // n = 0;
 // }
//}
function deseo() {
  const h1 = document.querySelector("#estornudo");

  // índice aleatorio entre 0 y el largo del array
  const indiceAleatorio = Math.floor(Math.random() * expresion.length);
  
  const saludo = expresion[indiceAleatorio][0];
  const idioma = expresion[indiceAleatorio][1];
  const bandera = expresion[indiceAleatorio][2];

  // actualizar el HTML
  h1.innerHTML = `${saludo} <br> <small>(${idioma} ${bandera})</small>`;
}

