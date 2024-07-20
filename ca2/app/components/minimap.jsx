import React, { useEffect, useRef, useState } from 'react'

const Minimap = ({ children }) => {
  const minimapRef = useRef(null)
  const contentRef = useRef(null)
  const viewportRef = useRef(null)
  const [scale, setScale] = useState(0.15)

  useEffect(() => {
    const updateMinimap = () => {
      const minimap = minimapRef.current
      const content = contentRef.current
      const viewport = viewportRef.current

      if (!minimap || !content || !viewport) return

      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
        console.log("document height" + documentHeight)

      const minimapWidth = windowWidth * scale; // 15% of window width
      const minimapHeight = windowHeight
      console.log(minimapHeight)


      minimap.style.width = `${minimapWidth}px`
      minimap.style.height = `${minimapHeight}px`

      content.style.transform = `scale(${scale})`
      content.style.width = `${(100 / scale)}%`
      content.style.height = `${documentHeight}px`

      //minimap selector
      viewport.style.height = `${(windowHeight * scale)}px`
      viewport.style.width =  `${windowWidth * scale}px`
    };

    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight)
      const viewport = viewportRef.current
      const minimap = minimapRef.current
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (viewport) {
        viewport.style.top = `${(window.scrollY * scale)}px`;
      }
      if (minimap) {
        minimap.style.top = `calc(-${window.scrollY * 0.1}px + 5rem)`
      }/**  (windowHeight / (documentHeight * scale))*/
    };

    updateMinimap();
    window.addEventListener('resize', updateMinimap);
    window.addEventListener('scroll', handleScroll);

    minimapRef.current.style.opacity = 1

    return () => {
      window.removeEventListener('resize', updateMinimap);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div
      ref={minimapRef}
      style={{
        position: 'fixed',
        top: '5rem',
        left: '15%',
        zIndex: 9999,
        opacity: 0
      }}
    >
      <div
        ref={contentRef}
        style={{
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
      <div
        ref={viewportRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          border: '1px rgba(120, 120, 120, 1) solid'
        }}
      />
    </div>
  );
};

export default Minimap;