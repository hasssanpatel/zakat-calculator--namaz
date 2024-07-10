// src/HadithOnZakat.jsx
import React, { useState } from 'react';
import './HadithOnZakat.css';

const hadiths = [
    {
      reference: "Sahih Muslim 19",
      text: "It is narrated on the authority of Abdullah b. 'Umar that the Messenger of Allah (ﷺ) said: Islam is based on (the following) five (pillars): to testify that there is no god but Allah and Muhammad is His servant and Messenger, to establish prayer, to pay Zakat, to perform the pilgrimage to the House, and to fast during Ramadan. "
    },
    {
      reference: "Sahih Muslim 987",
      text: "Abu Huraira reported: The Messenger of Allah (ﷺ) said: 'He who gives in charity the value of a date which he legally earned, and Allah accepts only that which is pure, Allah accepts it with His right hand and fosters it for him, as one of you fosters his colt, until it becomes like a mountain.' "
    },
    {
      reference: "Sahih Bukhari 1453",
      text: "Narrated Abu Huraira: The Prophet (ﷺ) said, 'The one who looks after a widow or a poor person is like a Mujahid (warrior) who fights for Allah's Cause, or like him who performs prayers all the night and fasts all the day.' "
    },
    {
      reference: "Sahih Muslim 85",
      text: "It is narrated on the authority of Abu Huraira that the Messenger of Allah (ﷺ) said: 'There is no right for the son of Adam except in these things: A house in which he lives, a garment to cover his nakedness, and dry bread and water.' "
    },
    {
      reference: "Sahih Muslim 993",
      text: "Abu Huraira reported: The Messenger of Allah (ﷺ) said, 'When a man dies, his acts come to an end, but three: recurring charity, or knowledge (by which people) benefit, or a pious son, who prays for him (for the deceased).' "
    },
    {
      reference: "Sahih Bukhari 1768",
      text: "Narrated Abu Huraira: The Prophet (ﷺ) said, 'A man who spends on his family (with the intention of reward) and his expenditure is regarded as Sadaqa (charity) for him.' "
    },
    {
      reference: "Sahih Muslim 1021",
      text: "Abu Huraira reported: The Messenger of Allah (ﷺ) said, 'Charity does not decrease wealth, no one forgives another except that Allah increases his honor, and no one humbles himself for the sake of Allah except that Allah raises his status.' "
    },
    {
      reference: "Sahih Bukhari 1348",
      text: "Narrated Abu Huraira: The Prophet (ﷺ) said, 'Every day two angels come down from Heaven and one of them says, 'O Allah! Compensate every person who spends in Your Cause,' and the other (angel) says, 'O Allah! Destroy every miser.' "
    },
    {
      reference: "Sahih Muslim 984",
      text: "Abu Huraira reported: The Prophet (ﷺ) said, 'If any owner of gold or silver does not pay what is due on him, when the Day of Resurrection would come, plates of fire would be beaten out for him; these would then be heated in the fire of Hell and his sides, his forehead and his back would be cauterized with them. Whenever these cool down, they would be reheated.' "
    },
    {
      reference: "Sahih Muslim 97",
      text: "It is narrated on the authority of Abu Huraira that the Messenger of Allah (ﷺ) said: 'Faith has over seventy branches or over sixty branches, the most excellent of which is the declaration that there is no god but Allah, and the humblest of which is the removal of what is injurious from the path: and modesty is the branch of faith.' "
    },
    {
      reference: "Sahih Muslim 1015",
      text: "Abu Huraira reported: The Messenger of Allah (ﷺ) said, 'Allah, the Exalted and Glorious, said: Spend, O son of Adam, and I shall spend on you.' "
    },
    {
      reference: "Sahih Muslim 78",
      text: "It is narrated on the authority of Abu Huraira that the Messenger of Allah (ﷺ) said: 'The lowest form of usury is the one which a man pays to one another (with a slight increase in the amount), for when he receives the principal, he is pleased, but when he fails to get it, the other man would demand more.'' "
    },
];

const HadithOnZakat = () => {
  const [randomIndex, setRandomIndex] = useState(null);
  const [shownhadiths, setShownhadiths] = useState([]);

  const showRandomHadith = () => {
    if (!hadiths || hadiths.length === 0) {
      console.error("hadiths array is empty or undefined.");
      return;
    }

    if (shownhadiths.length === hadiths.length) {
      alert('All hadiths have been shown.');
      return;
    }

    let random;
    do {
      random = Math.floor(Math.random() * hadiths.length);
    } while (shownhadiths.includes(random));

    setRandomIndex(random);
    setShownhadiths([...shownhadiths, random]);
  };

  return (
    <div>
      <h1>Hadith on Zakat</h1>
      <div className="hadith-container">
        <button onClick={showRandomHadith}>Show Random Hadith</button>
        {randomIndex !== null && (
          <div className="hadith">
            <strong>Reference:</strong> {hadiths[randomIndex].reference} <br />
            <strong>Text:</strong> {hadiths[randomIndex].text}
          </div>
        )}
      </div>
    </div>
  );
};

export default HadithOnZakat;
