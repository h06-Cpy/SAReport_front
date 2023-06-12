//서버에서 가져올 데이터들

const total_topic = {
  sentiment_dist: [
    // 한 단위(아마 15일?) 동안 총 분포
    { name: "긍정", value: 50 },
    { name: "부정", value: 20 },
    { name: "중립", value: 30 },
  ],

  topic_proportions: [
    { date: "5-23", topic0: 0.2, topic1: 0.6, topic2: 0.2 }, //토픽 3개 가정
    { date: "5-24", topic0: 0.1, topic1: 0.4, topic2: 0.5 },
    { date: "5-25", topic0: 0.2, topic1: 0.1, topic2: 0.7 },
    { date: "5-26", topic0: 0.7, topic1: 0.2, topic2: 0.1 },
    { date: "5-27", topic0: 0.8, topic1: 0.1, topic2: 0.1 },
    { date: "5-28", topic0: 0.3, topic1: 0.4, topic2: 0.3 },
  ],
};

const topics = [
  {
    topic_name: "토픽이름1",
    correlations: {
      refer_days: [1, 3],
      snp500: [0.7, 0.8],
      nasdaq100: [0.6, 0.5],
    },

    sentiment_corr: [
      //이제 개별 토픽별로 필요
      { date: "5-23", sentiment: 20000, snp500: 14000, nasdaq100: 14000 },
      { date: "5-24", sentiment: 16000, snp500: 13000, nasdaq100: 13000 },
      { date: "5-25", sentiment: 17000, snp500: 19000, nasdaq100: 19000 },
      { date: "5-26", sentiment: 12000, snp500: 20000, nasdaq100: 20000 },
      { date: "5-27", sentiment: 13000, snp500: 18000, nasdaq100: 18000 },
      { date: "5-28", sentiment: 13000, snp500: 20000, nasdaq100: 20000 },
    ],

    sentiment_dist: [
      // 한 단위(아마 15일?) 동안 총 분포
      { name: "긍정", value: 50 },
      { name: "부정", value: 20 },
      { name: "중립", value: 30 },
    ],

    topic_words: [
      {
        text: "ansol",
        value: 100,
      },
      {
        text: "youngjun",
        value: 100,
      },
      {
        text: "jiyun",
        value: 100,
      },
      {
        text: "hyunwook",
        value: 100,
      },
      {
        text: "joongstone",
        value: 100,
      },
    ],

    positive_words: [
      { name: "quick", value: 90 },
      { name: "nice", value: 80 },
      { name: "good", value: 70 },
    ],

    negative_words: [
      { name: "bad", value: 90 },
      { name: "slow", value: 80 },
      { name: "design", value: 70 },
    ],
  },
];
