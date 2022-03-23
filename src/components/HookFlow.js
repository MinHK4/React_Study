import React, {useState, useEffect} from 'react'

const Child = () => {
  console.log("Child render Start");

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

  console.log("Child render End");
  return(
    <input onChange={handleChange} />
  );
};

export default function HookFlow() {

  console.log("App render start!");

  const [show, setShow] = useState(() => {
    console.log("App useState");
    return false;
  });

  // 일단 render로 컴포넌트들을 다 그린고 난뒤에 부수 작업 진행
  useEffect(() => {
    console.log("App useEffect, no deps");
    return () => {
      console.log("App useEffect[Clean Up], no deps");
    };
  });

  useEffect(() => {
    console.log("App useEffect, empty deps");
    return () => {
      console.log("App useEffect[Clean Up], empty deps");
    };
  }, []);

  useEffect(() => {
    console.log("App useEffect, [show]");
    return () => {
      console.log("App useEffect[Clean Up], [show]");
    };
  }, [show]);

  function handleClick() {
    setShow((prev) => !prev);
  }

  console.log("App render end!");
  
  return (
    <div>
      <button onClick={handleClick}>Search</button>
      {show ? <Child /> : null}
    </div>
  );
}
