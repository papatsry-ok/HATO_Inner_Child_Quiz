import React, { useState } from "react";
import home from "../asset/Home.png";
import q1 from "../asset/Question1.png";
import q2 from "../asset/Question2.png";
import q3 from "../asset/Question3.png";
import q4 from "../asset/Question4.png";
import q5 from "../asset/Question5.png";
import android from "../asset/android.png";
import ios from "../asset/ios.png";
import info from "../asset/personalinformation.png";
import free from "../asset/resultFreeSpirit.png";
import healer from "../asset/resultHealer.png";
import light from "../asset/resultLightGiver.png";
import listen from "../asset/resultListener.png";
import nurtu from "../asset/resultNurturer.png";
import protect from "../asset/resultProtector.png";

interface Question {
  image: string;
  answers: {
    text: string;
    scores: {
      nurturer: number;
      protector: number;
      freeSpirit: number;
      listener: number;
      healer: number;
      lightGiver: number;
    };
  }[];
}

interface PersonalInfo {
  name: string;
  email: string;
  age: "มัธยม" | "มหาลัย" | "ทำงาน";
  message: string;
}

const questions: Question[] = [
  {
    image: q1,
    answers: [
      {
        text: "อยากรู้สึกถึงการได้รับความรัก",
        scores: {
          nurturer: 5,
          protector: 0,
          freeSpirit: 0,
          listener: 0,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "อยากได้ยินว่าฉันดีพอแล้ว",
        scores: {
          nurturer: 4,
          protector: 0,
          freeSpirit: 0,
          listener: 0,
          healer: 1,
          lightGiver: 0,
        },
      },
      {
        text: "อยากรู้สึกปลอดภัยและมีคนปกป้อง",
        scores: {
          nurturer: 0,
          protector: 5,
          freeSpirit: 0,
          listener: 0,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "อยากมีใครสักคนที่รับฟังและเข้าใจ",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 0,
          listener: 5,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "ฉันรู้สึกว่าได้รับความรักและการสนับสนุน",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 0,
          listener: 0,
          healer: 0,
          lightGiver: 5,
        },
      },
    ],
  },
  {
    image: q2,
    answers: [
      {
        text: "ฉันพยายามซ่อนความรู้สึกนั้นไว้",
        scores: {
          nurturer: 0,
          protector: 3,
          freeSpirit: 0,
          listener: 2,
          healer: 5,
          lightGiver: 0,
        },
      },
      {
        text: "ฉันแสดงออก แต่ไม่มีใครเข้าใจ",
        scores: {
          nurturer: 3,
          protector: 2,
          freeSpirit: 0,
          listener: 4,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "ฉันพยายามเบี่ยงเบนความรู้สึกของตัวเอง โดยการไปทำกิจกรรมอื่นๆ",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 5,
          listener: 0,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "ฉันไม่รู้จะทำยังไง เลยเก็บมันไว้ในใจ",
        scores: {
          nurturer: 0,
          protector: 4,
          freeSpirit: 0,
          listener: 3,
          healer: 5,
          lightGiver: 0,
        },
      },
      {
        text: "ฉันรู้สึกว่าได้รับความช่วยเหลือในการจัดการกับความรู้สึกของตัวเอง",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 3,
          listener: 2,
          healer: 0,
          lightGiver: 5,
        },
      },
    ],
  },
  {
    image: q3,
    answers: [
      {
        text: "'เธอเป็นที่รักเสมอ แค่เป็นตัวของเธอเองก็พอ'",
        scores: {
          nurturer: 5,
          protector: 0,
          freeSpirit: 0,
          listener: 0,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "'ไม่เป็นไรเลยนะที่จะรู้สึกในสิ่งที่เธอกำลังรู้สึก'",
        scores: {
          nurturer: 3,
          protector: 4,
          freeSpirit: 0,
          listener: 5,
          healer: 3,
          lightGiver: 0,
        },
      },
      {
        text: "'เก่งมาก! เธอเข้มแข็งกว่าที่รู้ตัวซะอีก'",
        scores: {
          nurturer: 0,
          protector: 3,
          freeSpirit: 0,
          listener: 0,
          healer: 5,
          lightGiver: 0,
        },
      },
      {
        text: "'เธอสมควรได้รับความสุขและอิสรภาพในชีวิต'",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 5,
          listener: 0,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "'จงเก็บรอยยิ้มนี้ไว้เสมอ'",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 0,
          listener: 0,
          healer: 0,
          lightGiver: 5,
        },
      },
    ],
  },
  {
    image: q4,
    answers: [
      {
        text: "เล่นเกม หรือหัวเราะไปกับเพื่อนๆ",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 5,
          listener: 0,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "ความภูมิใจในสิ่งที่ตัวเองสร้างหรือทำสำเร็จ",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 3,
          listener: 0,
          healer: 0,
          lightGiver: 5,
        },
      },
      {
        text: "ช่วงเวลาแห่งความอ่อนโยนจากคนที่คุณรัก",
        scores: {
          nurturer: 5,
          protector: 0,
          freeSpirit: 0,
          listener: 4,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "การได้สำรวจโลกกว้างหรือจินตนาการถึงการผจญภัย",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 5,
          listener: 0,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "ความรู้สึกปลอดภัยและอบอุ่นในความรัก",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 0,
          listener: 0,
          healer: 0,
          lightGiver: 5,
        },
      },
    ],
  },
  {
    image: q5,
    answers: [
      {
        text: "'ฉันรักเธอแบบไม่มีเงื่อนไข'",
        scores: {
          nurturer: 5,
          protector: 0,
          freeSpirit: 0,
          listener: 0,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "'เธอปลอดภัยเมื่ออยู่กับฉัน'",
        scores: {
          nurturer: 0,
          protector: 5,
          freeSpirit: 0,
          listener: 0,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "'มันไม่เป็นไรเลยนะ ที่จะปล่อยอดีตไป'",
        scores: {
          nurturer: 3,
          protector: 0,
          freeSpirit: 0,
          listener: 4,
          healer: 5,
          lightGiver: 0,
        },
      },
      {
        text: "'เธอเป็นอิสระที่จะเป็นตัวของเธอเอง และทำตามหัวใจของเธอได้'",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 5,
          listener: 0,
          healer: 0,
          lightGiver: 0,
        },
      },
      {
        text: "'รอยยิ้มและความอ่อนโยนของเธอทำให้คนรอบข้างอบอุ่นเสมอ'",
        scores: {
          nurturer: 0,
          protector: 0,
          freeSpirit: 0,
          listener: 0,
          healer: 0,
          lightGiver: 5,
        },
      },
    ],
  },
];

const characters = [
  {
    name: "นกพิราบผู้ดูแล",
    key: "nurturer",
    img: nurtu,
    engName: "The Nurturer",
  },
  {
    name: "นกพิราบผู้ปกป้อง",
    key: "protector",
    img: protect,
    engName: "The Protector",
  },
  {
    name: "นกพิราบแห่งเสรี",
    key: "freeSpirit",
    img: free,
    engName: "The Free Spirit",
  },
  {
    name: "นกพิราบผู้รับฟัง",
    key: "listener",
    img: listen,
    engName: "The Listener",
  },
  {
    name: "นกพิราบผู้รักษา",
    key: "healer",
    img: healer,
    engName: "The Healer",
  },
  {
    name: "นกพิราบแห่งแสง",
    key: "lightGiver",
    img: light,
    engName: "The Light Giver",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    nurturer: 0,
    protector: 0,
    freeSpirit: 0,
    listener: 0,
    healer: 0,
    lightGiver: 0,
  });
  const [showResults, setShowResults] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    email: "",
    age: "มัธยม",
    message: "",
  });

  const handleAnswer = (answer: (typeof questions)[0]["answers"][0]) => {
    const newScores = { ...scores };
    Object.entries(answer.scores).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowPersonalInfo(true);
    }
  };

  const handlePersonalInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPersonalInfo(false);
    setShowResults(true);
  };

  const getTopCharacters = () => {
    return characters
      .map((char) => ({
        ...char,
        score: scores[char.key],
      }))
      .sort((a, b) => b.score - a.score);
  };

  if (showStart) {
    return (
      <div
        className="w-[375px] h-[667px] bg-cover bg-center flex flex-col justify-between"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div></div>
        <button
          onClick={() => setShowStart(false)}
          className="mx-auto mb-16"
          style={{
            paintOrder: "stroke",
            WebkitTextStroke: "3.32px #6D6047",
            width: "322px",
            height: "46.61px",
            borderRadius: "83.68px",
            borderColor: "#EBD8FC",
            borderWidth: "3px",
            fontFamily: "Mitr, sans-serif",
            fontSize: "25.42px",
            color: "#FFFFFF",
            textShadow: "1px 1px 0 #6D6047, -1px -1px 0 #6D6047",
            background:
              "linear-gradient(50deg, #FBE6FE 20%, #FFF3EB 45%, #FFE6FF 90%)",
          }}
        >
          เริ่มกันเลย
        </button>
      </div>
    );
  }

  if (showPersonalInfo) {
    return (
      <div
        className="w-[375px] h-[667px] bg-cover bg-center p-4 flex items-center pt-[40vh]"
        style={{
          backgroundImage: `url(${info})`,
        }}
      >
        <div className="max-w-md mx-auto p-8 relative">
          <form onSubmit={handlePersonalInfoSubmit} className="space-y-3">
            <div>
              <label className="block text font-medium text-gray-600 mb-1">
                ชื่อ
              </label>
              <input
                type="text"
                value={personalInfo.name}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, name: e.target.value })
                }
                className="w-full py-1 px-3 rounded-[50.00px] bg-pink-50 border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200 text-xs text-gray-600"
              />
              <p className="text-xs text-gray-500 mt-2">
                *ใช้แสดงในคำตอบเท่านั้น ไม่มีการเก็บบันทึกใดๆ
              </p>
            </div>

            {/* <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                className="w-full py-1 px-3 rounded-[50.00px] bg-pink-50 border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200 text-xs text-gray-600"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                ช่วงวัย
              </label>
              <div className="flex gap-2">
                {(["มัธยม", "มหาลัย", "ทำงาน"] as const).map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => setPersonalInfo({ ...personalInfo, age })}
                    className={`flex-1 py-1 rounded-xl border transition-colors ${
                      personalInfo.age === age
                        ? "bg-pink-200 border-pink-300 text-gray-700"
                        : "bg-pink-50 border-pink-100 text-gray-500 hover:bg-pink-100"
                    } text-xs font-medium`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                บอกความรู้สึกในใจ
              </label>
              <textarea
                value={personalInfo.message}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, message: e.target.value })
                }
                className="w-full py-3 px-3 rounded-[20.00px] bg-pink-50 border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200 text-xs text-gray-600 h-15 resize-none"
              />
            </div>*/}

            <button
              type="submit"
              className="w-full bg-pink-200 hover:bg-pink-300 text-gray-700 font-medium py-2 px-6 rounded-full transition-colors mt-4"
            >
              ไปดูคำตอบกันเลย
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (showResults) {
    const topCharacter = getTopCharacters()[0];

    return (
      <div
        className="w-[375px] h-[667px] bg-cover bg-center p-4"
        style={{
          backgroundImage: `url(${topCharacter.img})`,
        }}
      >
        <div
          className="max-w-md mx-auto p-6 relative"
          style={{ position: "relative", top: "14.5rem" }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                paintOrder: "stroke",
                WebkitTextStroke: "3.32px #9D7676",
                fontFamily: "Mitr, sans-serif",
                fontSize: "25.42px",
                color: "#FFFFFF",
                // textShadow: "1px 1px 0 #6D6047, -1px -1px 0 #6D6047",
                position: "relative",
                margin: "0 auto",
              }}
            >
              {personalInfo.name}
            </p>

            <p
              style={{
                fontFamily: "Mitr, sans-serif",
                fontSize: "8px",
                color: "#5B412C",
                marginTop: "314px",
                marginLeft: "20px",
                marginBottom: "-7px",
              }}
            >
              เข้ามาเขียนระบายความรู้สึกได้ที่นี่! เราจะรับฟังคุณเอง |{" "}
              <a
                href="https://instagram.com/hato.land"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#BA5959", textDecoration: "none" }}
              >
                @hato.land
              </a>
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <a
                href="https://bit.ly/hato-iOS"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                <img src={ios} alt="App Store" style={{ width: "70px" }} />
              </a>
              <a
                href="https://bit.ly/hato-android"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "45px" }}
              >
                <img
                  src={android}
                  alt="Google Play"
                  style={{ width: "80px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-[375px] h-[667px] bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${questions[currentQuestion].image})`,
      }}
    >
      <div
        className="max-w-md mx-auto p-6 relative"
        style={{ marginTop: "17.5rem" }}
      >
        <div className="space-y-2">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer)}
              className="w-full text-left py-2 px-3 rounded-[50.00px] bg-pink-50 hover:bg-pink-100 transition-colors text-sm text-[#433C2F]"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
