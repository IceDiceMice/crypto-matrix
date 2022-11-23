import React from "react";
import "./Program.scss";
import ProgramBlock from "../ProframBlock/ProgramBlock";

const Program = () => {
  return (
    <div className='program-body'>
      <div className='our-program-title'>
        <p className='our-program'>Наша програма</p>
        <p className='our-program'>Наша програма</p>
        <p className='our-program'>Наша програма</p>
        <div className='program-line'></div>
      </div>
      <div className='program-steps'>
      <ProgramBlock title={'1. Знайомство з концепцією Smart Money'}>Познайомитеся з командою CRYPTOMATRIX, яка ознайомить Вас з концепцією Smart Money. Дізнаєтесь хто такі трейдери та які бувають види торгівлі.</ProgramBlock>
      <ProgramBlock title={'2. Інструменти трейдера'}>Ознайомитесь з інструментами трейдера, зареєструєтесь на біржі Binance, платформі TradingView та створите власний торговий журнал.</ProgramBlock>
      <ProgramBlock title={'3. Структура'}>Навчитесь проводити аналіз новинного фону, розрізняти графіки по їх структурі, визначати тренд, а також проводити синхронізацію тайм-фреймів.</ProgramBlock>
      <ProgramBlock title={'4. Ризик-менеджмент'}>Ознайомитесь з поняттям ризик-менеджменту, навчитеся вірно розраховувати stop loss/take profit, а також розглянете базові помилки при ризик-менеджменті.</ProgramBlock>
      <ProgramBlock title={'5. Ліквідність'}>Ознайомитесь з темою ліквідність та навчитесь правилам роботи з ліквідністю.</ProgramBlock>
      <ProgramBlock title={'6. POI'}>Опануєте основні інструменти для набору позицій та навчитесь використовувати їх на практиці.</ProgramBlock>
      <ProgramBlock title={'7. RANGE'}>Навчитесь торгувати консолідацією та дізнаєтесь про принципи роботи в боковику</ProgramBlock>
      <ProgramBlock title={'8. Торгові сетапи'}>Створите власну торгову модель та дізнаєтесь про торгові моделі успішних трейдерів, а також опануєте допоміжні інструменти для відкриття угод.</ProgramBlock>
      <ProgramBlock title={'9. Психологія'}>Розберемо портрет успішного трейдера, цілі та самореалізацію.</ProgramBlock>
      <ProgramBlock title={'10. Альтернативний заробіток'}>Дізнаєтесь про альтернативні види заробітку на ринку криптовалют. Навчитесь знаходити та аналізувати проєкти для інвестування.</ProgramBlock>
      <ProgramBlock>Випускний</ProgramBlock>
        </div>
      </div>

  );
};

export default Program;
