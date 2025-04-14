import React, { useEffect } from "react";
import styles from "./blockStepper.module.css";
import { object } from "zod";
import BlockElement from "@/components/specific/blockElement/BlockElement";
import { blockType } from "@/types/ComponentProps.Types";
import { Button } from "@/components/ui/button";
export default function BlockStepper({
  data: data,
  setData: setData,
}: {
  data: blockType[];
  setData: any;
}) {
  function addItem() {
    const newEl: blockType = {
      from: 1,
      to: 1,
      id: crypto.randomUUID(),
      block: "I",
    };
    setData((prev: blockType) => {
      return [...prev, newEl];
    });
  }
  return (
    <div id={styles.container}>
      {data.map((e: object) => {
        const el = e as blockType;
        return (
          <BlockElement key={el.id} id={el.id} data={el} setData={setData} />
        );
      })}
      <Button onClick={addItem}>+</Button>
    </div>
  );
}
