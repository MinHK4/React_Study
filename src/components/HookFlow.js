import React, {useState, useEffect} from 'react'

// 부모 컴포넌트 렌더링 -> 자식 컴포넌트 렌더링
// 부모 Clean-UP 진행 -> 자식 useEffect 진행 -> 부모 useEffect 진행
const Child = () => {
  
  console.log("   Child render Start");
  const [text, setText] = useState(() => {
    console.log("   Child useState");
    return "";
  });

  useEffect(() => {
    console.log("   Child useEffect, no deps");
    return () => {
      console.log("   Child useEffect[Clean Up], no deps");
    };
  });

  useEffect(() => {
    console.log("   Child useEffect, empty deps");
    
    return () => {
      console.log("   Child useEffect[Clean Up], empty deps");
    };
  }, []);

  useEffect(() => {
    console.log("   Child useEffect, [text]");

    return () => {
      console.log("   Child useEffect[Clean Up], [text]");
    };
  }, [text]);

  function handleChange(event) {
    setText(event.target.value);
  }

  console.log("   Child render End");
  return(
    <input onChange={handleChange} />
  );
};

export default function HookFlow() {
  
  // 1. Render 
  // 컴포넌트를 그리는 작업으로 가장 먼저 실행됨
  // Hook 실행은 아무것도 되어 있지 않고 컴포넌트의 기본 변수들만 보여줌
  const defaultText = "hi";
  console.log("App render start!", defaultText, show);

  // 2. UseState Hook
  // 컴포넌트의 상태값을 관리하는 Hook으로 컴포넌트 마운트시에만 한번 동작
  // useState는 다른 기본 함수들과 동일하게 순차적으로 실행되는 것으로 보임
  // 하지만 해당 컴포넌트의 핵심 데이터인 상태를 관리하기 때문에 당연히 최상단에 배치
  const [show, setShow] = useState(() => {
    console.log("App useState");
    return false;
  });
  const [info, setInfo] = useState(false);

  // + useState가 컴포넌트 내의 다른 동작과 동일한 계층으로 순차진행된다는 증거 
  console.log("App render start!", defaultText, show);

  // 3. UseEffect Hook
  // 렌더링이 완료된 이후에 부가적으로 작동하는 효과
  // dependency Array에다가 어떤 값이 변했을 시 작동할지를 설정할 수 있음
  // 기본적으로 Mount될 때는 모두 다 실행
  // 없으면 re-render될때마다 실행
  useEffect(() => {
    console.log("App useEffect, no deps");
    return () => {
      console.log("App useEffect[Clean Up], no deps");
    };
  });
  
  // emty면 마운트될 때만 실행
  useEffect(() => {
    console.log("App useEffect, empty deps");
    return () => {
      console.log("App useEffect[Clean Up], empty deps");
    };
  }, []);
  
  // 변수값 있으면 해당 변수 변경시에만
  // info 상태 변경시에는 작동하지 않음!
  useEffect(() => {
    console.log("App useEffect, [show]");
    return () => {
      console.log("App useEffect[Clean Up], [show]");
    };
  }, [show]);

  // 2주차에 진행했던 이벤트 핸들러
  function handleClick() {
    setShow((prev) => !prev);
  }

  console.log("App render end!");

  // show값 여부에 따라서 Child 컴포넌트를 그릴 수도 있고 아닐 수도 있음
  return (
    <div>
      <button onClick={handleClick}>Search</button>
      <button onClick={()=>setInfo(!info)}>Info</button>
      {show ? <Child /> : null}
    </div>
  );
}
