import { Carousel } from "../../../../shared/components/Carousel";
import { eventsImages, counselorImages, staticImages } from "../../data/images";

export function ImageGallery() {
    return (
        <div className='grid grid-cols-2 grid-rows-2 gap-6 p-8'>
            {/* still image #1 */}
            <div className='group rounded-2xl overflow-hidden shadow-lg'>
                <div className='relative w-full h-full'>
                    <img
                        src={staticImages.promiseShirt.src}
                        alt={staticImages.promiseShirt.description}
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>

            {/* Top Slider */}
            <div className='shadow-lg hover:scale-105 transition p-0'>
                <Carousel imageData={eventsImages} />
            </div>

            {/* Bottom Slider */}
            <div className='shadow-lg hover:scale-105 transition p-0'>
                <Carousel imageData={counselorImages} />
            </div>

            {/* still image #2 */}
            <div className='rounded-2xl overflow-hidden shadow-lg'>
                <img
                    src={staticImages.counseling.src}
                    alt={staticImages.counseling.description}
                    className='w-full h-full object-cover'
                />
            </div>

        </div>
    );
}
