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
Projektet er opdelt i HTML, CSS og JavaScript.

Eksamen/
├── public/
│ └──
├── src/
│ └── Componenter
│ └── Applepay.astro
│ └── Bestilkort1.astro
│ └── Button1.astro
│ └── Button2.astro
│ └── Detailsfordele.astro
│ └── Faellesskab.astro
│ └── Fordele1.astro
│ └── Forside1.astro
│ └── Forside2..astro
│ └── Forside3.astro
│ └── Hvorfor.astro
│ └── Kort.astro
│ └── Lesmere.astro
│ └── Oremaerket.astro
│ └── Pcard.astro
│ └── Roskilde.astro
│ └── Tal.astro
│ └── Usikkerverden.astro
│ └── css
│ └── main.css
│ └── Layout
│ └── Layout.astro
│ └── pages
│ └── details
│ └── [id].astro
│ └── bestilkort..astro
│ └── index.astro
│ └── information.astro
├── .gitignore
└── README.md

###Filbeskrivelser
Pages:

- index.astro – forsiden
- information.astro – viser en masse information
- bestil kort.astro – viser en guide til at bestille et kort
- details/[id].astro – dynamisk detaljeside, der viser en valgt fordel ud fra id

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
- Button1.astro – genanvendelig button-komponent brugt flere steder på sitet.
- Button2.astro – genanvendelig button-komponent til at skifte side.
- applepay.astro - Her vises der hvordan man hurtigt kan få sit kort i Apple Pay.
- bestilkort.astro - Nem og hurtig guide til hvordan man nemt kan få Dankort øremærket kort.
- Fordele1.astro - Her ligger komponentet som har Pcardet liggende inde i sig.

Ekstra filer:

- README.md – teknisk okumentation om projektet
- .gitignore – filer og mapper der ikke skal pushes til GitHub

Layout og styling:

- Layout.astro – fælles layout med header/footer og struktur for siderne
- main.css – global styling for hele sitet

Billeder:

- public/img – mappe med billeder og ikoner
- public/Images1 – mappe med øvrige billeder

##Hvordan koden fungerer
Vi har CSS og JavaScript direkte i de komponenter, hvor funktionaliteten bruges. Derudover bruges JavaScript også på de pages, hvor komponenterne bliver hentet ind og dataen skal vises dynamisk.

###js
Da vi har arbejdet i Astro, har vi ikke haft separate JavaScript-filer. I stedet har vi skrevet vores JavaScript direkte i de komponenter og pages, hvor funktionaliteten blev brugt.

###Flow:

Siden loader
JavaScript kører
Data hentes fra Supabase REST API
Data gennemgås med loop
HTML indsættes dynamisk i DOM’en
Brugeren kan interagere med fordelene

##Navngivning
Vi har navngivet vores filer, variabler og funktioner så de så tydeligt som muligt er selvforklarende.

###Eksempler på variabler
endpoint – indeholder URL’en til vores Supabase API
options – indeholder headers og API key til fetch requesten
data – gemmer den hentede data fra databasen

###Eksempler på funktioner
fetch() – henter data fra vores Supabase API
response.json() – omdanner dataen til JSON objekter
headers – sender API key med i fetch requesten
await – venter på at dataen bliver hentet færdigt

##Kommentarer i koden
Vi har primært kommenteret de steder i koden, hvor funktionaliteten var mere kompleks, særligt i JavaScript. Formålet var at gøre det lettere at forstå hinandens kode uden at gøre koden unødvendigt rodet.

###Eksempel:

//gå til det her endpoint og så sæt de her options med, når du fetcher//
const data= await fetch (endpoint, options).then((response) => response.json());

##Data og JSON-struktur
Vi henter data dynamisk fra vores Supabase database gennem et REST API i JSON-format.

###Et objekt kan fx se sådan ud:

{
"id": 1,
"img": "img/sikkerhed.svg",
"name": "Sikkerhed",
"information": "Dankort hjælper med at beskytte dine penge",
"imgdetails": "img/sikkerhed.webp"
}

###Felter vi bruger
id – bruges til at identificere objektet
img - ikon/billede til cardet
name - navnet på fordelen
information - beskrivelse af fordelen
imgdetails - billede brugt på detaljesiden

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

###Løsninger:

Console.log data undervejs
Dele opgaverne mere tydeligt i gruppen
Lavet validering på arbejdet

##Mulige forbedringer
Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- Dynamiske donationstal med JavaScript
- Karussellen fra prototypen

###Gruppemedlemmer
Clara Victoria Muxoll Storkfelt
Caroline Værn Poder
Allysa Pearl Lingatong Navarro
Isabella Clara Larsen
