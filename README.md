#Teknisk dokumentation – Eksamen 1508
##Om projektet
Dette projekt er lavet som en del af 1508 til 2 semester eksamen på multimediedesign. Vi har lavet en dynamisk website med HTML, CSS, JavaScript og Astro, hvor indholdet bliver hentet fra en Superbase-database gennem et REST API.

Sitet består af flere sider, hvor brugeren kan:

- Navigere mellem flere informationssider.
- Klikke sig videre til undersider med mere detaljeret indhold.
- Interagere med elementer som cards og carousels.
- Se en guide i forbindelse med bestilling af kort.
- Udforske fordele, events og samarbejdspartnere.

###Links
GitHub repository: https://github.com/Claravictoria10/eksamen.git
GitHub Pages: [indsæt link]
Figma: https://www.figma.com/design/wB7AGAaLfj3dQGBnVAVXRl/Eksamen---Semester-2?node-id=147-258&t=7QU7FnqTy6FxkWXo-1
Trello: https://trello.com/invite/b/69f07b285ef831c1f46f9368/ATTI7b25a4a104b42a4f97e76eeda62d23dcC46B7EBB/eksamen-1508

##Projektstruktur ?????????????
Projektet er opdelt i HTML, CSS og JavaScript-filer.

project/
├── index.html
├── recipelist.html
├── recipedetails.html
├── form.html
├── css/
│ └── style.css
├── js/
│ ├── index.js
│ ├── recipelist.js
│ ├── recipedetails.js
│ └── form.js
└── README.md

###Filbeskrivelser
Pages:

- index.astro – forsiden
- information.astro – viser en masse information
- bestil kort.astro – viser en guide til at bestille et kort
- fordele.astro – viser en detail side omkring en bestemt fordel, samt en konkurrence og events.

Komponenter:

- Forside1.astro – første sektion på landingpagen med stort billede og introduktion til Dankort Øremærket
- Forside2.astro - Forsidebillede på siden omkring hvad Dankort øremærket står for.
- Forside3.astro - Forsidebillede på siderne med fordelene ved at vælge Dankort øremærket.
- Lesmere.astro – sektion med information og “Læs mere”-knap.
- Tal.astro – sektion, der visualiserer donationstal.
- Kort.astro – Sektion der ligger på forsiden og fører til siden, hvor der er en guide på hvordan du bestiller Dankort øremærket.
- Faellesskab.astro – sektion, der viser virksomheder og samarbejdspartnere som støtter Dankort Øremærket.
- Oremaerket.astro – sektion, der forklarer hvad Dankort Øremærket er, på en måde så målegruppen forstår det.
- Hvorfor.astro – sektion med argumenter for hvorfor man bør vælge Dankort øremærket, altså hvad man ender med at støtte.
- Usikkerverden.astro – sektion med fokus på fremtid, tryghed og usikkerhed i verden.
- Pcard.astro – komponent med cards der linker til de forskellige fordele.
- Detailsfordele.astro – sektion med uddybende information om en bestemt fordel.
- Roskilde.astro – sektion med Roskilde Festival konkurrence.
- Events.astro – sektion med carousel og information om events.
- Button1.astro – genanvendelig button-komponent brugt flere steder på sitet.
- Button2.astro – genanvendelig button-komponent til at skifte side.
- applepay.astro - Her vises der hvordan man hurtigt kan få sit kort i Apple Pay.
- bestilkort.astro - Nem og hurtig guide til hvordan man nemt kan få Dankort øremærket kort.

File oprettet via brug af Astro:

- astro.config.mjs – konfiguration af Astro-projektet
- package.json – indeholder projektets dependencies og scripts
- README.md – dokumentation og information om projektet

##Hvordan koden fungerer
Vi har JavaScript og css stående inde på selve komponentet. Jasvasqript står også på den page hvor et komponent med javasqript bruges.

###index.js ????
Her skal istedet stå javasqripten

###recipelist.js
Henter data fra Rest API'et og viser en liste med opskrifter på siden.

###Flow: ????

Siden loader
JavaScript kører
Data hentes fra Rest API
Data bliver gennemgået med loop
HTML bliver indsat i DOM'en
Brugeren kan klikke på en fordel

###recipedetails.js ?????
Bruges til detaljesiden. Den læser et id fra URL'en og henter derefter den rigtige opskrift fra Rest API'et.

Det gør det muligt at genbruge den samme HTML-side til mange opskrifter. I stedet for at lave én side per opskrift, bruger vi ét id i URL'en til at vise det rigtige indhold.

###form.js ????
Styrer formularen og validering af inputfelter.

Denne fil bruges til at sikre, at brugeren udfylder formularen korrekt. Det gør formularen mere brugervenlig og mindsker fejl.

##Navngivning ?????
Vi har navngivet vores filer, variabler og funktioner så de så tydeligt som muligt er selvforklarende.

###Eksempler på variabler
const recipeContainer;
const recipeId;
const selectedCategory;

###Eksempler på funktioner ????
fetchRecipes();
showRecipes();
showRecipeDetails();
validateForm();
Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet og lettere at læse.

##Kommentarer i koden ?????
Vi har kommenteret de steder i koden, hvor det giver mening. Fx ved funktioner, fetch-kald og steder hvor der sker DOM-manipulation.

###Eksempel:?????

// Henter opskrifter fra Rest API'et
async function fetchRecipes() {
const res = await fetch(apiURL);
const data = await res.json();
return data.recipes;
}
Vi har prøvet ikke at skrive kommentarer til helt åbenlyse ting, men kun dér hvor det hjælper forståelsen.

##Data og JSON-struktur ?????
Vi henter data fra et API i JSON-format.

###Et objekt kan fx se sådan ud: ?????

{
"id": 1,
"title": "Opskriftsnavn",
"description": "Kort beskrivelse",
"category": "dessert",
"cookTime": 45,
"servings": 4,
"thumbnail": "billede.jpg"
}

###Felter vi bruger ?????
id – bruges til at sende brugeren videre til detaljesiden
title – opskriftsnavn
description – beskrivelse af opskriften
category – opskriftkategori (fx dessert, hovedret, forret)
cookTime – tilberedningstid i minutter
servings – antal portioner
thumbnail – opskriftsbillede

##Git og branches
Vi har brugt GitHub og arbejdet i branches ud fra main for at kunne kode samtidig uden konflikter. Branches blev navngivet efter feature og navn, så det var tydeligt, hvem der havde arbejdet på hvad.

###Eksempler på branches
oermarketisa
lesmereally
kortlayoutclara

###Workflow
Lave en branch med feature-navn og eget navn til sidst
Kode en feature
Committe ændringer
Pushe til GitHub med gruppen
Merge til main med gruppen når det virkede
Det gjorde det nemmere at holde styr på, hvem der lavede hvad.

##Bæredygtighed
Vi har arbejdet med bæredygtighed ved at optimere alle billeder til WebP format og indsætte dem i Squoosh, så filstørrelserne blev holdt så lave som muligt. Derudover har vi arbejdet ud fra, at de største billeder maksimalt måtte fylde omkring 500 KB, samtidig med at en høj billedkvalitet blev bevaret.

##Udfordringer undervejs
Vi oplevede udfordringer med at hente og vise data korrekt fra Rest API’et. Derudover var det en udfordring at tilpasse tidligere kodeeksempler til vores eget projekt og skabe en overskuelig struktur i håndteringen af data fra Supabase.

###Løsninger: ??????

Console.logge data undervejs
Teste fetch-kald separat
Bruge URLSearchParams
Dele opgaverne mere tydeligt i gruppen

##Mulige forbedringer ??????
Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

###Gruppemedlemmer
Clara Storkfelt
Caroline Poder
Allysa Navarro
Isabella Larsen
