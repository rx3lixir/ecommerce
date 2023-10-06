"use client";

import { useStotreModal } from "@/hooks/use-modal";
import { useEffect, useState } from "react";

const SetupPage = () => {
  const onOpen = useStotreModal((state) => state.onOpen);
  const isOpen = useStotreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  return <div className='p-4'>Root Page</div>;
};

export default SetupPage;
