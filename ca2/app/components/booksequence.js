import { useEffect, useRef } from 'react';

const BookSequence = () => {
        const canvasRef = useRef(null);
        const imgRef = useRef(new Image());
        const frameCount = 189;

        const currentFrame = (index) => (
                `/images/book sequence/${index.toString().padStart(4, '0')}.png`
        );

        useEffect(() => {
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');
                const img = imgRef.current;

                canvas.width = 600;
                canvas.height = 600;

                const preloadImages = () => {
                for (let i = 1; i < frameCount; i++) {
                        const img = new Image();
                        img.src = currentFrame(i);
                }
                };

                img.src = currentFrame(1);
                img.onload = () => {
                        context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
                        context.drawImage(img, 0, 0);
                };

                const updateImage = (index) => {
                        img.src = currentFrame(index);
                        context.drawImage(img, 0, 0);
                };

                const onScroll = () => {
                        const scrollTop = document.documentElement.scrollTop;
                        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
                        const scrollFraction = scrollTop / maxScrollTop;
                        const frameIndex = Math.min(
                                frameCount - 1,
                                Math.ceil(scrollFraction * frameCount)
                        );

                        requestAnimationFrame(() => updateImage(frameIndex + 1));
                };

                window.addEventListener('scroll', onScroll);
                preloadImages();

                return () => {
                        window.removeEventListener('scroll', onScroll);
                };
        }, [frameCount]);

        return (
        <canvas id="book-sequence" ref={canvasRef}></canvas>
        );
};

export default BookSequence;
