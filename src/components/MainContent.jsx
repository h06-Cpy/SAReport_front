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
      <SidebarElement props={{ section_name: "introduction" }} />
      <p className="mx-3 my-3 py-2 flex items-center font-bold text-4xl border-b-2">
        1. 서론
      </p>
      <div className="w-full col-span-4 mx-auto bg-white rounded-md shadow-md flex justify-center flex-col">
        {/* <p className="text-justify break-all px-10 py-8 text-lg tracking-wide">
          본 보고서에서는 트위터에서 google, apple, amazon, microsoft, nvidia 등
          유명 IT 기업에 관한 트윗을 수집하여 감성 분석을 진행하였다. 본
          보고서의 목적은 유명 IT 기업에 대한 비재무적 분석을 돕고 IT 산업
          트렌드 및 인사이트를 제공하며 기업 가치와 사람들의 감성의 연관성을
          파악하기 위함이다. 기존 기업 분석은 재무적 분석이 대부분이며
          실시간성이 크지 않다. 그러므로 본 보고서에서는 실시간성을 띄며 기업에
          대한 사람들의 감성이 잘 드러나는 트위터 데이터를 이용하였다.
          <b>2023년 5월 23일</b>부터 <b>6월 15일</b>까지의 트윗 데이터를
          수집하였으며 토픽 모델링을 통해 10개의 토픽을 선정하였다. 각 토픽 별로
          RoBERTa 기반 딥러닝 모델을 이용한 감성 분석을 통해 감성 점수를
          얻어냈고 시계열 데이터인 주가지수와 상관관계 계수를 측정하였다.
          <br />
          본론에서는 전체 토픽 분석 결과와 토픽별 감성 분석 결과를 나타낸다.
          전체 토픽 분석에서는 전체 트윗의 감성 분포, 토픽별 감성 분포 순위,
          상관관계 순위, 날짜별 토픽 분포를 보여주며 토픽별 감성 분석에서는 각
          토픽별 감성 분포, 토픽 연관 단어, 감성 점수와 주가 지수의 상관관계를
          보여준다. 언제 감성 점수 높고 낮은지, 언제 토픽 분포가 높고 낮은지의
          정보도 제공한다.
          <br />
        </p> */}
      </div>
      <SidebarElement props={{ section_name: "total_topic_analysis" }} />
      <p className="mx-3 my-3 py-2 flex items-center font-bold text-4xl border-b-2">
        2. 전체 토픽 분석
      </p>

      <div className="grid grid-cols-4 grid-rows-[1fr-1fr] gap-4">
        <BigCharacter
          props={{ title: "총 트윗 수", content: total_topic.tweet_number }}
        />
        <SentimentDist props={{ sentiment_dist: total_topic.sentiment_dist }} />
        <TopicValueTable
          props={{
            title: "감성 분포 순위",
            description: "긍정-부정 기준",
            headers: ["토픽", "감성 분포"],
            datas: total_topic.sentiment_dist_rank,
          }}
        />
        <TopicValueTable
          props={{
            title: "상관관계 순위",
            description: "snp500, nasdaq100과 상관관계",
            headers: ["토픽", "상관관계"],
            datas: total_topic.corr_rank_list,
          }}
        />
        <div className="col-span-4">
          <TopicProportion props={{ data: total_topic.topic_proportions }} />
        </div>
      </div>

      <SidebarElement props={{ section_name: "analysisPerTopic" }} />
      <p className="mx-3 my-3 py-2 flex items-center  font-bold text-4xl border-b-2">
        3. 토픽별 감성 분석
      </p>
      {topics.map((topic, index) => {
        return (
          <div className="my-5 border-b-2 border-b-gray" key={index}>
            <SidebarElement props={{ section_name: topic.topic_name }} />

            <p className="mx-3 my-3 py-2 flex items-center font-bold text-3xl">
              3.{index + 1} {topic.topic_name}
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
                  headers: ["단어", "값"],
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
                <CorrLine
                  props={{
                    data: topic.sentiment_corr,
                    max_corr_window_size: topic.max_corr_window_size,
                  }}
                />
              </div>

              <div className="col-span-4 mx-auto flex flex-col justify-center items-center mt-1 mb-10 bg-white shadow-md rounded-lg px-3 pb-3">
                <h1 className="texxt-center text-lg mb-1">
                  window 크기별 상관관계
                </h1>
                <table className="table-auto mx-auto my-3 border-spacing-y-2 text-xl">
                  <thead className="border-y-2 border-y-black">
                    <th className="px-6 py-4">Index|window</th>
                    {topic.correlations.window_sizes.map((day, index) => {
                      return (
                        <th key={index} className="px-6 py-4">
                          {day}
                        </th>
                      );
                    })}
                  </thead>
                  <tbody>
                    <tr className="hover:bg-almostgreen hover:text-lightgreen_hover hover:font-bold text-tabletext">
                      <td className="px-6 py-4">S&P500</td>
                      {topic.correlations.snp500.map((corr, index) => {
                        return (
                          <td key={index} className="px-6 py-4">
                            {corr}
                          </td>
                        );
                      })}
                    </tr>
                    <tr className="hover:bg-almostgreen hover:text-lightgreen_hover hover:font-bold text-tabletext">
                      <td className="px-6 py-4">NASDAQ100</td>
                      {topic.correlations.nasdaq100.map((corr, index) => {
                        return (
                          <td key={index} className="px-6 py-4">
                            {corr}
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
      <SidebarElement props={{ section_name: "conclusion" }} />
      <p className="mx-3 my-3 py-2 flex items-center font-bold text-4xl border-b-2">
        4. 결론
      </p>
    </main>
  );
};

export default MainContent;
