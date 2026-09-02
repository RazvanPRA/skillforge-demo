# Cerinte produs: SkillForge

> Acest document este sursa de adevar pentru produs. Orice schimbare de scop, comportament sau decizie de produs se actualizeaza aici inainte sau odata cu implementarea, nu numai in conversatie.

## 1. Ce este SkillForge

SkillForge este un copilot personal de skills si cariera pentru persoane care vor sa creasca profesional pornind de la propriul context. Aplicatia pastreaza un profil real al utilizatorului — stack, skill-uri, niveluri, experienta, obiective si progres — iar agentul AI foloseste acel context pentru raspunsuri si pasi de invatare concreti.

Se adreseaza utilizatorilor individuali care pornesc din directii diferite: de exemplu, un developer backend care trece spre web si AI, un frontend developer care invata Python sau Java, un QA care trece la automatizare ori un junior care isi alege directia. Punctul comun este nevoia unui plan personalizat, nu o tehnologie anume.

Exemple de rezultate asteptate:

- identificarea lipsurilor pentru o tranzitie de cariera, de exemplu Java backend spre AI engineer;
- un plan practic pe o perioada ceruta, de exemplu trei luni pentru Next.js si AI SDK;
- continuarea invatarii pe baza progresului memorat, de exemplu dupa terminarea unui modul de streaming.

## 2. Cerinte functionale

- Fiecare utilizator are un cont individual si un profil separat, cu obiectiv profesional, stack, skill-uri, niveluri si progres.
- Agentul construieste contextul de sistem din profilul si memoria utilizatorului; nu raspunde ca un chat generic lipsit de context.
- Chatul livreaza raspunsurile in streaming si poate propune pasi concreti, prioritizati si adaptati obiectivului.
- Conversatiile, progresul si memoria relevanta persista intre sesiuni.
- Utilizatorul poate alege providerul/modelul pentru o conversatie intre OpenAI si Anthropic. Conversatia pastreaza providerul, modelul si metadatele necesare estimarii costului fiecarui raspuns.
- In fazele ulterioare, agentul poate folosi unelte in mod autonom pentru a cauta in notite si a actualiza planul de invatare, cu comportament si confirmari definite atunci cand sunt introduse.

## 3. Roadmap pe faze

| Faza | Continut |
| --- | --- |
| 0. Documentatie | Cerinte, conventii pentru agenti, README si documentarea manuala a integrarilor. |
| 1. Fundatia web | Aplicatie Next.js full-stack, TypeScript, App Router si structura pregatita pentru rute server. |
| 2. Cont si profil | Autentificare (provider de ales in acel modul), izolare pe utilizator si profil persistent. |
| 3. Agent si chat | AI SDK, apeluri exclusiv pe server, system prompt din profil si raspunsuri in streaming. |
| 4. Provideri si costuri | OpenAI si Anthropic selectabili in chat, modele configurabile si metadate de utilizare/cost. |
| 5. Memorie si plan | Memorie intre sesiuni, progres si plan de invatare personalizat. |
| 6. Unelte agentice | Cautare in notite si actualizarea planului de invatare prin unelte controlate. |
| 7. Productie | Pregatirea deploy-ului, observabilitate, securitate operationala si documentatia aferenta. |

Nu intra in faza 0: cod de aplicatie, conturi la provideri, chei API sau configurarea unei integrari externe.

## 4. Cerinte non-functionale

### Securitate si configurare

- Cheile API si toate secretele sunt pastrate exclusiv pe server, in variabile de mediu; nu ajung in browser, nu sunt incluse in codul client si nu sunt comise in repository.
- Orice integrare externa se documenteaza in `docs/<integrare>/README.md`. Documentul indica pasii manuali: crearea contului, generarea cheii, variabila de mediu dupa nume, configurarea dashboard-ului si costurile. Nu contine valori reale ale cheilor sau token-urilor.
- Providerii LLM sunt accesati printr-o interfata interschimbabila, pentru a permite compararea raspunsurilor si costurilor fara cuplare la un singur furnizor.

### Date personale

- Se colecteaza numai informatia de profil necesara personalizarii: experienta, stack, skill-uri, niveluri, obiective, planuri si progres.
- Datele sunt izolate strict pe utilizator. Un utilizator nu poate vedea sau influenta profilul, memoria ori conversatiile altuia.
- Utilizatorul trebuie sa poata vedea si modifica datele de profil. Mecanismele de stergere/export se planifica explicit cand se implementeaza persistenta si autentificarea.
- Datele de profil nu sunt folosite pentru antrenarea produsului SkillForge.

### Costuri si operare

- Pentru fiecare provider/model activ se pastreaza metadate suficiente pentru estimarea costului unui raspuns si pentru compararea furnizorilor.
- Preturile nu se fixeaza in acest document: documentatia fiecarui provider va trimite la pagina oficiala de preturi si va preciza data verificarii.
- Erorile unui provider, configurarea incompleta sau indisponibilitatea streamingului trebuie sa fie tratate explicit in modulul in care se implementeaza integrarea, fara expunerea de secrete utilizatorului.

## 5. Decizii de arhitectura

- Platforma tinta este Next.js full-stack cu TypeScript si App Router. Rutele server cheama modelele; interfata web nu detine chei de provider.
- AI SDK este mecanismul tinta pentru integrarea agentului si streaming.
- Primii provideri sunt OpenAI si Anthropic. Alegerea se face in chat pentru fiecare conversatie, iar implementarea trebuie sa pastreze providerul si modelul selectate.
- Autentificarea este o faza ulterioara. Alegerea unui serviciu sau a unei biblioteci de autentificare nu este facuta inca, dar toate modelele de date si rutele trebuie sa presupuna conturi individuale.

## 6. Glosar

| Termen | Definitie |
| --- | --- |
| Agent | Componenta AI care foloseste instructiuni, context, memorie si, ulterior, unelte pentru a ajuta utilizatorul. |
| Provider | Serviciul care ofera un model de limbaj, de exemplu OpenAI sau Anthropic. |
| Streaming | Trimiterea treptata a raspunsului de la server la interfata, pe masura ce modelul il genereaza. |
| Persona | Reprezentarea structurata a contextului profesional al utilizatorului: experienta, skill-uri, niveluri, obiective si preferinte relevante. |
| Memorie | Informatia persistenta pe care agentul o poate reutiliza intre sesiuni, precum progresul, deciziile si elementele relevante din conversatii. |
