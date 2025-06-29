import { useMemo, useRef, useState, useEffect } from "react";
import ElasticSlider from "./ElasticSlider";
import { Minus, Plus } from "lucide-react";

const getRandomSpotlightColor = () => {
    const r = Math.floor(150 + Math.random() * 100);
    const g = Math.floor(150 + Math.random() * 100);
    const b = Math.floor(150 + Math.random() * 100);
    return `rgba(${r}, ${g}, ${b}, 0.25)`; // soft glow
};
  


const Card = ({

    id,
    question,
    op1,
    op2,
    op3,
    op4,
    type,
    onAnswerSelect,
    className = ""
  
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [selected, setSelected] = useState(null); // 🟢 track selected option
  const spotlightColor = useMemo(() => getRandomSpotlightColor(), []); // stable per card

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleSelect = (option) => {
    setSelected(option);
    onAnswerSelect(id, String(option)); // always string for MCQ
  };

  const optionStyle = (option) =>
    `border-2 py-[1.5rem] px-[1rem] rounded-2xl 
     transition-colors cursor-pointer duration-300
     ${selected === option ? 'border-blue-500 bg-blue-800 text-white' : 'border-neutral-600 hover:border-blue-600'}`;

  useEffect(() => {
    if (type === 'slider') {
      onAnswerSelect(id, 0.5); // default value as float between 0 and 1
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setOpacity(0.6)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-3xl mt-[2rem] border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="flex flex-col m-[1.5rem] ">
        <p className="raleway text-3xl font-semibold">{question}</p>
        {type === 'mcq' ? (
            <div className="raleway text-xl flex flex-col gap-8 mt-20">
                {[op1, op2, op3, op4].map((opt, idx) => (
                <div key={idx} onClick={() => handleSelect(opt)} className={optionStyle(opt)}>
                    <p>{opt}</p>
                </div>
                ))}
            </div>
        ) : (
            <div className=" mt-10 flex justify-center ">
                <ElasticSlider
                    className=""
                    leftIcon={<>Disagree</>}
                    rightIcon={<>Agree</>}
                    startingValue={0}
                    defaultValue={50}
                    maxValue={100}
                    isStepped
                    stepSize={1}
                    onValueChange={(val) => onAnswerSelect(id, val / 100)}
                />
            </div>
        )}
      </div>
    </div>
  );
};

export default Card;
