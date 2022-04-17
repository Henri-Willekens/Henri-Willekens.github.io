Henri Willekens 0942807 

# Week 9 eindopdracht deel B

Zie de cursushandleiding voor de exacte beoordeling.

<br>
<br>
<br>

## Stap 2 VERVOLG - OPTIONEEL 

Om je beter voor te bereiden op het uitwerken van je product heb je een tweede prototype gebouwd. Het doel van het prototype is hetzelfde, maar je gaat kijken of
jouw idee beter kan werken als je een ander algoritme gebruikt.

***Ik heb een ander model gebruikt van Google het werkt wel sneller dan de vorige maar het mist alleen een emotie die ik toch niet gebruikte. Ook werkt het niewe model niet als goed als de vorige als het gaat om tegelijkertijd heel veel mensen op te zoeken. Maar voor snelheid is de nieuwe toch beter want hij is wel 10 keer zo snel dan het eerste concept.***

<br>
<br>
<br>

## Stap 3 Uitwerking

Je hebt je prototype uit stap 2 uitgewerkt tot een werkende applicatie met een gebruiksvriendelijke interface, gericht op eindgebruikers uit je doelgroep.
Je app heeft een duidelijke naam en legt uit wat de bedoeling is.
Je code staat in GitHub classroom. Je werkende eindproduct staat live online op een publieke url.

***https://henri-willekens.github.io/***



### Bonuspunt
Je hebt getest met eindgebruikers uit de doelgroep. Dit is iemand die zonder enige voorkennis jouw app kan testen. Voeg het resultaat van deze test toe aan je inleverdocument.

<br>
<br>
<br>

## Stap 4 Reflectie

Voorwaardelijk: de punten voor reflectie kan je alleen halen als je een werkende app online hebt staan.

Voor de reflectie pitch je jouw uitwerking van stap 3 aan je eigen TLE team. Dit doe je op eigen gelegenheid. Het doel is om feedback van je team te verzamelen.
In je inleverdocument plaats je een korte screencast van de werking van je eindproduct, en de link naar je online eindproduct. Daarnaast beantwoord je onderstaande vragen:

### Refectie Techniek


- Heeft het gekozen algoritme / library goed gewerkt voor jouw toepassing? Zou een ander algoritme / library beter kunnen werken? Heb je dit geprobeerd?

***Voor een analytisch website waarbij een manager wil weten dat mensen blij is dit goed. De library die ik nu gebruik werkt sneller dan de vorige concept. De gekoze algoritme is mobileNet image classification van tensorflow.***


- Heb je genoeg data kunnen verzamelen? Zou jouw applicatie beter kunnen worden als er meer of betere data is? Hoe kom je aan betere data?

***De gezichtsherkenning is simpel en heeft geen verbeteringen nodig want het werkt al goed genoeg. Tenzij je in de applicatie zelf de gezichten nog verder wil aanscherpen. De emotieherkenning kan wel beter worden met meer trainingdata omdat het heel soms de verkeerde emotie labeld.***


- Vindt er training van een model plaats in het prototype en/of in het eindproduct? Licht dit toe.

***Niet in mijn applicatie maar het is wel door iemand anders getrained want de gezichtsherkenning schetst eigenlijk waar je ogen neus en mond is en op basis daar van zou het alle gezichten herkennen. En voor de emotie herkenning is het getrained met publieke google foto's. Dit werd getrained door een label te plaatsen op foto's bijvoorbeeld blij, boos, neutraal en verdrietig.***


- Heeft de data een verborgen voorkeur? Wat wordt hier mee bedoeld?

***Het pakt de makkelijkste te vinden eerst en daarna zoekt het steeds moeilijkere totdat ie het opgeeft. Als de gezichtsherkenning opgeeft met zoeken dan betekent het dat een mens een bril draagt of op een ander manier hun gezicht bedekt.***


- Wat voor accuracy vind jij goed genoeg voor jouw toepassing?

***0.7 voor de emotie en voor de gezicht is 0.5 voldoende. De accuracy heb ik in mijn eerste concept al getest.***


- Zijn er privacy concerns in je app? Denk aan het opslaan / versturen van gevoelige data.

***De informatie die verzameld worden kan je zien als een teller of een stemsysteem. Hiermee bedoel ik dat als iemand voor de camera lacht dan telt die persoon als een "blij mens" in de database. Het enigste wat wel zorgen kan hebben is dat je foto's kan maken zonder toestemming. Verder is het applicatie ethisch neutraal omdat het werkt op alle gezichten.***



### Refectie eindproduct

- Wat voor feedback heb je gekregen van je TLE team?
***Ik heb gekozen voor een eigen keuze opdracht want voor de TLE opdracht heb ik niet genoeg data. Voor mijn applicatie moet het snel een aantal gezichten kunnen identificeren van foto's zodat het voor de doelgroep interessant is over hoe goed hun service gaat met hun klanten.***


- Is jouw werk bruikbaar voor het eindproduct van TLE? Ga je er aan doorwerken?
Waarom wel of niet?

***Het is bruikbaar en de AI kan prima ingezet en de mogelijkheid om alle resultaten in je clipboard te kopieren is goed voor de doelgroep. Maar als ik verder zou willen werken aan dit project dan zou ik als eerste willen dat foto's automatisch per interval naar de website kon uploaden. Als tweede wil ik dat de data opgeslagen wordt in de database en laat zien op een grafiek in real-time. Als laatste wil ik de emotie detectie verbeteren door meer data te trainen. Ik wil wel de punten die ik heb opgenoemt aan werken want zo'n website heeft veel kansen voor mijn toekomstige analytische projecten.***


- Heeft AI waarde toegevoegd aan je concept, of had dit ook zonder AI gekund?

***Ja want het kan gebruikt worden met behulp van een camera die 24/7 aan staat om realtime klanten van hun services te beoordelen. Hieronder is een voorbeeld resultaat van wat AI doet in mijn applicatie***
2022-4-16 13:48:17 New image! In totaal zijn 10 mensen blij van de 20
2022-4-16 13:48:17 happy
2022-4-16 13:48:17 happy
2022-4-16 13:48:16 happy
2022-4-16 13:48:16 happy
2022-4-16 13:48:4 New image! In totaal zijn 6 mensen blij van de 16
2022-4-16 13:48:4 neutral
2022-4-16 13:48:4 neutral
2022-4-16 13:48:3 neutral
2022-4-16 13:48:3 neutral
2022-4-16 13:48:3 happy
2022-4-16 13:48:2 surprise
2022-4-16 13:48:2 sad
2022-4-16 13:48:2 neutral
2022-4-16 13:47:44 New image! In totaal zijn 5 mensen blij van de 8
2022-4-16 13:47:44 happy
2022-4-16 13:47:44 angry
2022-4-16 13:47:44 happy
2022-4-16 13:47:43 happy
2022-4-16 13:47:43 happy
2022-4-16 13:47:43 happy
2022-4-16 13:46:28 New image! In totaal zijn 0 mensen blij van de 2
2022-4-16 13:46:28 neutral
2022-4-16 13:46:28 neutral



- Ben je zelf tevreden met het eindresultaat? Werkt het zo goed als je verwacht / gehoopt
had? Waarom wel of niet?

***Ik ben tevreden van wat ik heb gedaan omdat ik geleerd heb hoe AI werkt in emoties en gezichtsherkenning. Ook heb ik geleerd hoe je data kan uitlezen en op een grafiek kan plaatsen. Overigens heeft mijn verbeterde code en nieuwe model er voor gezorgt dat het sneller alle resultaten kan pakken dan mijn eerste concept. Alleen zijn mijn HTML en CSS skills niet zo goed.*** 


- Is je app zodanig goed dat eindgebruikers er zonder verdere instructies mee uit de
voeten kunnen? Waarom wel of niet?

***De instructies om mijn applicatie te gebruiken kan onduidelijk zijn want het werkt alleen op Chrome omdat je in chrome://flags/ de Experimental Web Platform features en WebGL Developer Extensions moet enabled hebben. Naar mijn mening is het weinig tekst van wat de applicatie kan doen maar omdat het voor een bedrijf applicatie is gemaakt is dit wel genoeg info.***
