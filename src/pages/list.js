import React from "react";
import Calendar from "../components/calendar";
import SEO from "../components/seo";
import dates from "./dates";
/*

es = 1994 Wang Ning <<Vida política>> Traducción automática
fr = 1994 Wang Huning <<vie politique>> Traduction automatique
ja = 1994年
ms = Tahun 1994, Wang huning, kehidupan politik, terjemahan automatik
ru = Год 1994, Wang huning, Политическая жизнь
vi = Năm 1994, Wang huning, Đời sống chính trị, dịch tự động
zh = 1994年
ko = 1994년 왕후닝 <<정치적 인생>> 번역 및 자동번역
EN = Year 1994, Wang huning, Political life, auto-translation
*/

export default props => {
  const { lang } = props.match.params;
  const [title, setTitle] = React.useState(
    "Year 1994, Wang huning, Political life, auto-translation"
  );
  React.useEffect(() => {
    switch (lang) {
      case "es":
        setTitle("1994 Wang Huning <<Vida política>> Traducción automática");
        break;
      case "fr":
        setTitle("1994 Wang Huning <<vie politique>> Traduction automatique");
        break;
      case "ja":
        setTitle("1994年");
        break;
      case "ms":
        setTitle(
          "Tahun 1994, Wang huning, kehidupan politik, terjemahan automatik"
        );
        break;
      case "ru":
        setTitle("Год 1994, Wang huning, Политическая жизнь");
        break;
      case "vi":
        setTitle("Năm 1994, Wang huning, Đời sống chính trị, dịch tự động");
        break;
      case "zh":
        setTitle("1994年");
        break;
      case "ko":
        setTitle("1994년 왕후닝 <<정치적 인생>> 번역 및 자동번역");
        break;
      case "en":
        setTitle("Year 1994, Wang huning, Political life, auto-translation");
        break;
      default:
    }
  }, [lang]);
  return (
    <div>
      <SEO title="List" />
      <h2 style={{ marginLeft: "1rem" }}>{title}</h2>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        <Calendar {...props} dates={dates} />
      </section>
    </div>
  );
};
