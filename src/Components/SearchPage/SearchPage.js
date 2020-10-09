import React from 'react'
import './SearchPage.css'
import {useParams} from 'react-router-dom'
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

function SearchPage() {
    const searchTerm=useParams().searchTerm
    return (
      <div className="searchPage">
        <div className="searchPage__filter">
          <TuneIcon className="searchPage__filterIcon" />
          <h3>Filter</h3>
        </div>
        <hr />
        <ChannelRow
          image="https://lh3.googleusercontent.com/a-/AOh14Gh2lw5_Un_7mo0ZAU85n31Gqm6T_UMJiy30S6heFg=s88-c-k-c0x00ffffff-no-rj-mo"
          channel="Best KinoMoments"
          verified
          subs={"100K"}
          nOfvideos={400}
          description="Best moments for lovely movies"
        />
        <hr />
        <VideoRow
          image="https://i.ytimg.com/vi/w8qYlxJ4bqA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBK97KINglo4Ph0TNbaCFffZFRxUw"
          title="—Простите Меня | Джек | Сверхъестественное"
          channel="BestKinoMoments"
          timestamp="2 days ago"
          views="100 000"
          description="Сверхъестественное 15 сезон 13 серия"
        />
        <VideoRow
          image="https://i.ytimg.com/vi/gwVTX9fSt6g/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCeXeKBddiredA810JJT6fBth_RIg"
          title="КОГДА В ТЕБЯ НЕ ВЕРЯТ"
          channel="BestKinoMoments"
          timestamp="4 days ago"
          views="10 000 views"
          description="Друзья на канале не включена монетизация."
        />
        <VideoRow
          image="https://i.ytimg.com/vi/G2lWUfwg-m0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDNMyJ9RzQ3nAVOfDuGYAe9z-wQJQ"
          title="Час Пик | Угарный Момент | КАРТЕР ВЕДЕТ ПЕРЕГОВОРЫ ПО ТЕЛЕФОНУ"
          channel="BestKinoMoments"
          timestamp="2 days ago"
          views="13 000 views"
          description="Час Пик (Rush Hour)(1998) Друзья на канале не включена монетизация."
        />
        <VideoRow
          image="https://i.ytimg.com/vi/PxGCE_ffOyE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBzFAzfcc-FI1B4JY0gs5HEQ-G8Yw"
          title="Концовка Фильма Семь"
          channel="BestKinoMoments"
          views="85 000 views"
          timestamp="5 days ago"
          description="Концовка Фильма Семь"
        />
      </div>
    );
}

export default SearchPage
