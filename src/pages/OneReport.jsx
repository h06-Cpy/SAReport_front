import CorrLine from "../components/CorrLine";
import KeywordBar from "../components/KeywordBar";
import SectionTitle from "../components/SectionTitle";
import SentimentDist from "../components/SentimentDist";
import Sidebar from "../components/Sidebar";
import TopicName from "../components/TopicName";
import TopicProportion from "../components/TopicProportion";
import WordCloud from "../components/WordCloud";
import SidebarElement from "../components/SideBarElement";
import { useEffect, useState } from "react";

const OneReport = () => {
  const [total_topic, set_total_topic] = useState(null);
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        set_total_topic(data.total_topic);
        setTopics(data.topics);
      });
  }, []);

  if (total_topic === null || topics === null) {
    return <p className="font-bold text-4xl">loading...</p>;
  }

  return (
    <>
      <div className="flex flex-row flex-wrap justify-between">
        <Sidebar props={{ datas: topics }} />

        <main
          role="main"
          className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 mx-auto"
        >
          <SidebarElement props={{ section_name: "total_topic_analysis" }} />
          <SectionTitle props={{ sectionId: 0 }} />

          <div className="bg-almostgreen mx-auto flex justify-center my-3">
            <SentimentDist
              props={{ sentiment_dist: total_topic.sentiment_dist }}
            />
          </div>

          <div className="bg-almostgreen mx-auto flex justify-center my-3">
            <TopicProportion props={{ data: total_topic.topic_proportions }} />
          </div>

          <SidebarElement props={{ section_name: "analysisPerTopic" }} />
          <SectionTitle props={{ sectionId: 1 }} />

          {topics.map((topic, index) => {
            return (
              <div className="bg-almostgreen my-10" key={index}>
                <SidebarElement props={{ section_name: topic.topic_name }} />
                <TopicName
                  props={{
                    isPositive: true,
                    topic_name: topic.topic_name,
                    score: topic.score,
                  }}
                />
                {/* <p className="mx-auto text-center font-bold text-2xl my-3">
                  {topic.topicname}: {topic.score}
                </p> */}
                <div>
                  <div className="flex flex-row items-center justify-around my-3">
                    <SentimentDist
                      props={{ sentiment_dist: topic.sentiment_dist }}
                    />
                    <div>
                      <WordCloud props={{ data: topic.topic_words }} />
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-around my-3">
                    <KeywordBar
                      props={{ data: topic.positive_words, isPositive: true }}
                    />
                    <KeywordBar
                      props={{ data: topic.negative_words, isPositive: false }}
                    />
                  </div>
                  <div className="bg-almostgreen mx-auto flex justify-center my-3">
                    <CorrLine props={{ data: topic.sentiment_corr }} />
                  </div>
                  <div className="mx-auto flex justify-center my-3">
                    <table className="table-auto">
                      <thead>
                        <th className="border">Index\window</th>
                        {topic.correlations.refer_days.map((day, index) => {
                          return (
                            <th key={index} className="border">
                              {day}
                            </th>
                          );
                        })}
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border">S&P500</td>
                          {topic.correlations.snp500.map((corr, index) => {
                            return (
                              <td key={index} className="border">
                                {corr}
                              </td>
                            );
                          })}
                        </tr>
                        <tr>
                          <td className="border">NASDAQ100</td>
                          {topic.correlations.nasdaq100.map((corr, index) => {
                            return (
                              <td key={index} className="border">
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
        </main>
      </div>
    </>
  );
};

export default OneReport;
