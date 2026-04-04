import React from 'react'
import Accordion from "./Accordion"

const Items = () => {
  const items = [
    {
      title: "Hello",
      content: "Bye",
    },
    {
      title: "Hii",
      content: "Call",
    },
    {
      title: "Chill",
      content: "Hot",
    },
    {
      title: "Cold",
      content: "Warm",
    },
  ];
  return (
    <Accordion items={items}/>
  )
}

export default Items