import { useEffect } from "react";

const useRetext = (componentRef, attributeName) => {
  const applyTextEffect = (element) => {
    if (element.getAttribute(attributeName) !== null) {
      console.log(element.innerText);
    }
  };

  useEffect(() => {
    if (!componentRef.current) {
      return;
    }

    const scanElements = (element) => {
      applyTextEffect(element); // Apply to the current element

      for (let child of element.children) {
        scanElements(child);
      }
    };

    scanElements(componentRef.current);
  }, [componentRef, attributeName]);

  return applyTextEffect; // Return the function for customization
};

export default useRetext;
