# Mängu kirjeldus ja eesmärk:

Käesoleva mängu puhul on tegu Covid-19 simulatsiooniga, mille eesmärk on nakatada kõik ekraanil liikuvad tegelased.
Ülesande teeb keeruliseks fakt, et kõik tegelased jooksevad viiruse eest ära ja viirusega saab nakatada ainult läheval asuvaid tegelasi, kuna viirus ei levi kaugele.
Viirust saab levitada vasaku hiireklahviga.
Tegelane on nakatatud kui ta puutub kokku viirusega(seejärel muutub ka tegelase animatsioon) 
Ekraanil ringi liikuvate objektide numbrit saab muuta url parameetriga "number"(näide: https://social-distancing-simulation.netlify.app/?number=20).
Kui kõik objektid on nakatatud lõppeb mäng ja on võimalus mäng taaskäivitada.


# Tehniline ülesehitus

Ülesande lahendamiseks kasutasin peamiselt kahte teeki: p5.js ja p5-play.js. Need võimaldasid luua keskkonna, milles sai manipuleerida erinevaid objekte, 
lisada neile erinevaid omadusi ja need objektid ka renderdada. TypeScript'i otsustasin ma mitte kasutada, kuna ei ole loodud teeki, kus oleks p5-play.js tüübid defineeritud.

## Kasutatud tehnoloogiate nimekiri:

   * HTML
   * CSS
   * JavaScript 
   * Bootstrap
   * Pug
   * Browserify
   * NPM
   * p5
   * p5-play
   * Netlify
   
Link mängule: https://social-distancing-simulation.netlify.app/?number=20
   

# Protsessi kirjeldus

Ülesande lahendamiseks läks mul ligikaudu 10 tundi. Selle aja sisse mahtus erinevate tehnoloogiate uurimine ja kaalumine(Sealhulgas mitu ebaõnnestunud katsetust).