import { useState } from "react";

export default function TaiwanHistory() {
  const [period, setPeriod] = useState("intro");

  const periods = {
    intro: {
      title: "台灣史概覽",
      content: "歡迎來到台灣歷史網！本網站提供各個時期的歷史介紹、互動地圖與多媒體學習資源。請選擇時期開始探索。"
    },
    dutch: {
      title: "荷西時期 (1624–1662)",
      content: "此時期荷蘭與西班牙曾先後在台灣建立殖民據點，並與原住民與漢人互動。"
    },
    ming: {
      title: "明鄭時期 (1662–1683)",
      content: "鄭成功自荷蘭人手中收復台灣，建立明鄭政權，試圖反清復明。"
    },
    qing: {
      title: "清領時期 (1683–1895)",
      content: "清朝將台灣納入版圖，設立府縣、推行制度與拓墾，歷經多次民變與抗爭。"
    },
    japan: {
      title: "日治時期 (1895–1945)",
      content: "日本統治台灣五十年，建立現代化制度，也引發抗日運動與文化認同的衝突。"
    },
    roc: {
      title: "戰後至今 (1945–現在)",
      content: "國民政府接收台灣，歷經戒嚴、解嚴、民主化，台灣逐漸建立現代民主社會。"
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">台灣歷史網</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(periods).map((key) => (
          <button
            key={key}
            onClick={() => setPeriod(key)}
            className={`px-3 py-1 rounded border ${period === key ? "bg-blue-500 text-white" : "bg-white text-black"}`}
          >
            {periods[key].title.split(" ")[0]}
          </button>
        ))}
      </div>
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">{periods[period].title}</h2>
        <p className="text-base leading-relaxed">{periods[period].content}</p>
      </div>
    </div>
  );
}