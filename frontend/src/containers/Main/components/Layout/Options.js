import React, {useEffect, useState} from "react";
import useTransition from "../../../../components/hooks/transition";

import Option from "./Option";

import { Container, Content } from "./styles";

/* 
    options = [
        {title: String, icon: ?Component}
    ]
*/

export default function Options({ options = [] }) {
  const [visible, setVisible] = useState(false)
  const {mode} = useTransition({duration: 200, visible});


  useEffect(() => {
    setVisible(true);
  },[]);

  console.log(mode);

  return (
    <Container>
      <Content>
        {options.map((item) => (
          <Option {...item} key={`${item.title}`} />
        ))}
      </Content>
    </Container>
  );
}
