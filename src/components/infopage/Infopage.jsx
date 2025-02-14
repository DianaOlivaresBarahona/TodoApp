import React from "react";
import "./Infopage.css";

const Infopage = () => {
  return (
    <div className="infopage-container">
      <h1>PrioritEase – Smidig Uppgiftshantering, Enklare Än Någonsin</h1>
      <p>
        Att hålla koll på dina uppgifter ska vara enkelt, inte överväldigande.
        <strong> PrioritEase</strong> är den smarta att-göra-listan som hjälper
        dig att planera, prioritera och slutföra dina uppgifter med lätthet.
        Oavsett om det handlar om jobb, studier eller vardagliga sysslor, ger
        PrioritEase dig en tydlig översikt och en strukturerad väg mot dina mål.
      </p>
      <h2>Varför PrioritEase?</h2>
      <ul className="infopage-list">
        <li>
          <strong>✅ Enkel och intuitiv design</strong> – Lägg till, organisera
          och bocka av uppgifter med några få tryck.
        </li>
        <li>
          <strong>✅ Smart prioritering</strong> – Markera viktiga uppgifter och
          få en tydlig översikt över vad som behöver göras först.
        </li>

        <li>
          <strong>✅ Flexibla listor</strong> – Skapa personliga listor för
          arbete, hemmet eller större projekt.
        </li>
      </ul>
      <p>
        <strong>
          Med PrioritEase blir produktivitet en naturlig del av din vardag –
          utan stress.
        </strong>
        Planera smartare, arbeta effektivare och njut av känslan av att få saker
        gjorda.
      </p>
    </div>
  );
};

export default Infopage;
