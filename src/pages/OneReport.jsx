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
import MainContent from "../components/MainContent";

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
      <nav className="flex items-center h-10 bg-lightlightgreen top-0">
        <h1 className="mx-5 text-center text-xl text-white">
          Sentiment Analysis Report of IT Companies
        </h1>
      </nav>
      <div className="flex flex-row flex-wrap justify-between">
        <Sidebar props={{ datas: topics }} />
        <MainContent props={{ total_topic: total_topic, topics: topics }} />
      </div>
    </>
  );
};

export default OneReport;
