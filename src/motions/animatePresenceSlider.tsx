import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: aqua;
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  /* position: absolute; */
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// 하위 컴포넌트에 들어갈 cusrom 변수는 함수의 input 으로 들어가기 때문에
// 아래처럼 box 변수안의 entry, exit 처럼 isBack 같은 변수를 사용해도 된다
const box = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};

const AnimatePresenceSlider = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  // 아래의 custom 속성은 AnimatePresence 컴포넌트를 통해 하위 컴포넌트에 속하는 variants 에 공유시킨다.
  // 물론 해당 하위 컴포넌트에도 custom 속성을 넣어줘야 한다. (redux 의 store 같은 개념이다)
  // 슬라이드 시 커지면서 보여지고 작아지면서 사라지는 처리 + next, prev 의 효과 방향이 다르게 처리된다.
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              custom={back}
              variants={box}
              initial="entry"
              animate="center"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
};

export default AnimatePresenceSlider;
