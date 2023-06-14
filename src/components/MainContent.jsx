import BigCharacter from "./BigCharacter";
import CorrLine from "./CorrLine";
import SentimentDist from "./SentimentDist";
import SidebarElement from "./SideBarElement";
import TopicProportion from "./TopicProportion";
import TopicValueTable from "./TopicValueTable";
import WordCloud from "./WordCloud";

const MainContent = ({ props }) => {
  const { total_topic, topics } = props;

  return (
    <main
      role="main"
      className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 mx-auto bg-bgcolor"
    >
      <SidebarElement props={{ section_name: "total_topic_analysis" }} />
      <p className="mx-3 my-3 py-2 flex items-center  font-bold text-4xl border-b-2">
        1. 전체 토픽 분석
      </p>

      <div className="grid grid-cols-4 grid-rows-[1fr-1fr-0.5fr] gap-4">
        <BigCharacter
          props={{ title: "총 트윗 수", content: total_topic.tweet_number }}
        />
        <SentimentDist props={{ sentiment_dist: total_topic.sentiment_dist }} />
        <TopicValueTable
          props={{
            title: "감성 분포 순위",
            description: "긍정-부정 기준",
            headers: ["순위", "토픽", "감성 분포"],
            datas: total_topic.sentiment_dist_rank,
          }}
        />
        <TopicValueTable
          props={{
            title: "상관관계 순위",
            description: "snp500, nasdaq100와 상관관계 비교",
            headers: ["순위", "토픽", "상관관계"],
            datas: total_topic.corr_rank_list,
          }}
        />
        <div className="col-span-4">
          <TopicProportion props={{ data: total_topic.topic_proportions }} />
        </div>

        <div className="w-full col-span-4 mx-auto w-2/3 bg-white rounded-md shadow-md flex justify-center flex-col">
          <h1 className="text-center font-bold text-lg my-3">
            전체 토픽 분석 결과
          </h1>
          <p className="text-justify break-all px-10">
            본 보고서는 트위터에서 google, apple, amazon, microsoft, nvidia 등
            유명 IT 기업에 관한 트윗을 수집하여 감성 분석을 진행하였다. 5.23~6.8
            동안의 총 tweet_number개의 트윗 중 긍정 트윗은{" "}
            <b>{total_topic.sentiment_dist[0].value}%</b>, 부정 트윗은{" "}
            <b>{total_topic.sentiment_dist[1].value}%</b>, 중립 트윗은{" "}
            <b>{total_topic.sentiment_dist[2].value}%</b>로 나타났다.{" "}
            <b>일자별 토픽 분포</b>를 살펴보면 5.23에는 ~~ 긍정 트윗 비율이 가장
            높은 토픽은 ~~ 부정 트윗 비율이 가장 높은 토픽은 ~~ snp500,
            nasdaq100과 가장 상관관계가 높은 토픽은 ~~, 낮은 토픽은 ~~
          </p>
        </div>
      </div>

      <SidebarElement props={{ section_name: "analysisPerTopic" }} />
      <p className="mx-3 my-3 py-2 flex items-center  font-bold text-4xl border-b-2">
        2. 토픽별 감성 분석
      </p>
      {topics.map((topic, index) => {
        return (
          <div className="my-5 border-b-2 border-b-gray" key={index}>
            <SidebarElement props={{ section_name: topic.topic_name }} />

            <p className="mx-3 my-3 py-2 flex items-center font-bold text-3xl">
              2.{index + 1} {topic.topic_name}
            </p>
            <div className="grid grid-cols-4 grid-rows-[1fr-1fr-1fr-1fr] gap-4">
              <BigCharacter
                props={{ title: "트윗 수", content: topic.tweet_number }}
              />
              <SentimentDist props={{ sentiment_dist: topic.sentiment_dist }} />
              {/* wordcloud는 div에다 안 넣으면 무한정 길어짐 */}
              <div className="row-span-1">
                <WordCloud props={{ data: topic.topic_words }} />
              </div>
              <TopicValueTable
                props={{
                  title: "연관 단어 순위",
                  description: "LDA 계산, 상위 10개",
                  headers: ["순위", "단어", "값"],
                  datas: topic.topic_words.slice(0, 10),
                }}
              />

              <BigCharacter
                props={{
                  title: "감성 점수 가장 높은 날",
                  content: topic.most_positive_day.slice(5),
                }}
              />
              <BigCharacter
                props={{
                  title: "감성 점수 가장 낮은 날",
                  content: topic.most_negative_day.slice(5),
                }}
              />
              <BigCharacter
                props={{
                  title: "토픽 분포 가장 높은 날",
                  content: topic.max_proportion_day.slice(5),
                }}
              />
              <BigCharacter
                props={{
                  title: "토픽 분포 가장 낮은 날",
                  content: topic.min_proportion_day.slice(5),
                }}
              />

              <div className="col-span-4 w-full">
                <CorrLine props={{ data: topic.sentiment_corr }} />
              </div>

              <div className="col-span-4 mx-auto flex flex-col justify-center items-center mt-1 mb-10 bg-white shadow-md rounded-lg px-3 pb-3">
                <h1 className="texxt-center text-lg mb-1">
                  window 크기별 상관관계
                </h1>
                <table className="table-auto text-xl">
                  <thead>
                    <th>Index|window</th>
                    {topic.correlations.window_sizes.map((day, index) => {
                      return <th key={index}>{day}</th>;
                    })}
                  </thead>
                  <tbody>
                    <tr>
                      <td>S&P500</td>
                      {topic.correlations.snp500.map((corr, index) => {
                        return <td key={index}>{corr}</td>;
                      })}
                    </tr>
                    <tr>
                      <td>NASDAQ100</td>
                      {topic.correlations.nasdaq100.map((corr, index) => {
                        return <td key={index}>{corr}</td>;
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default MainContent;
