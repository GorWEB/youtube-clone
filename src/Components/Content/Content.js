import React from 'react'
import './Content.css'
import VideoCard from './VideoCard'

function Content() {
    return (
      <div className="content">
        <h2>Recommended</h2>
        <div className="content__videos">
          <VideoCard
            image="https://i.ytimg.com/vi/w8qYlxJ4bqA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBK97KINglo4Ph0TNbaCFffZFRxUw"
            title="—Простите Меня | Джек | Сверхъестественное"
            channel="BestKinoMoments"
            views="100 000 views"
            timestamp="5 days ago"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14Gh2lw5_Un_7mo0ZAU85n31Gqm6T_UMJiy30S6heFg=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/gwVTX9fSt6g/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCeXeKBddiredA810JJT6fBth_RIg"
            title="КОГДА В ТЕБЯ НЕ ВЕРЯТ"
            channel="BestKinoMoments"
            views="10 000 views"
            timestamp="3 days ago"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14Gh2lw5_Un_7mo0ZAU85n31Gqm6T_UMJiy30S6heFg=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/G2lWUfwg-m0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDNMyJ9RzQ3nAVOfDuGYAe9z-wQJQ"
            title="Час Пик | Угарный Момент | КАРТЕР ВЕДЕТ ПЕРЕГОВОРЫ ПО ТЕЛЕФОНУ"
            channel="BestKinoMoments"
            views="13 000 views"
            timestamp="2 days ago"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14Gh2lw5_Un_7mo0ZAU85n31Gqm6T_UMJiy30S6heFg=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/PxGCE_ffOyE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBzFAzfcc-FI1B4JY0gs5HEQ-G8Yw"
            title="Концовка Фильма Семь"
            channel="BestKinoMoments"
            views="85 000 views"
            timestamp="5 days ago"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14Gh2lw5_Un_7mo0ZAU85n31Gqm6T_UMJiy30S6heFg=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <VideoCard
            image="https://i.ytimg.com/vi/w8qYlxJ4bqA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBK97KINglo4Ph0TNbaCFffZFRxUw"
            title="—Простите Меня | Джек | Сверхъестественное"
            channel="BestKinoMoments"
            views="100 000 views"
            timestamp="5 days ago"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14Gh2lw5_Un_7mo0ZAU85n31Gqm6T_UMJiy30S6heFg=s88-c-k-c0x00ffffff-no-rj-mo"
          />
        </div>
      </div>
    );
}

export default Content
