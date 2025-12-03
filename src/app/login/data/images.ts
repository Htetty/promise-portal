export interface ImageItem {
  src: string;
  description: string;
}

// events or other images
export const eventsImages: ImageItem[] = [
  { src: "/images/sliderTop/01.jpg", description: "Student Impact" },
  { src: "/images/sliderTop/02.jpg", description: "Our Amazing Counselors" },
  { src: "/images/sliderTop/03.jpg", description: "All Of Our Scholars" },
  { src: "/images/sliderTop/04.jpg", description: "Promise Scholars Orientation" },
  { src: "/images/sliderTop/05.jpg", description: "Student Ambassadors In Action" },
];

// staff images
export const counselorImages: ImageItem[] = [
  { src: "/images/sliderBottom/coun1.jpg", description: "Kent Gomez - Promise Counselor" },
  { src: "/images/sliderBottom/coun2.jpg", description: "Matt Embry - Promise Counselor" },
  { src: "/images/sliderBottom/coun3.jpg", description: "Manuel Verdin - Promise Counselor" },
  { src: "/images/sliderBottom/coun4.jpg", description: "Mikayla Balan - Retention Specialist" },
  { src: "/images/sliderBottom/coun5.jpg", description: "Jeremy Evangelista-Ramos - Acting Director of PSP" },
  { src: "/images/sliderBottom/coun6.jpg", description: "Albin Lee - Program Services Coordinator" },
  { src: "/images/sliderBottom/coun7.jpg", description: "Dionicio Garcia - Promise Counselor" },
  { src: "/images/sliderBottom/coun8.jpg", description: "Kim Davalos - Promise Counselor" },
  { src: "/images/sliderBottom/coun9.jpg", description: "Lucy Jovel - Promise Counselor" },
  { src: "/images/sliderBottom/coun10.jpg", description: "Angelica Peña - Promise Counselor" },
  { src: "/images/sliderBottom/coun11.jpg", description: "Angela - Promise Counselor" },
  { src: "/images/sliderBottom/coun12.jpg", description: "Andrea Hernandez - Promise Counselor" },
  { src: "/images/sliderBottom/coun13.jpg", description: "Mandy Lucas - Promise Counselor" },
];

// still images
export const staticImages = {
  promiseShirt: {
    src: "/images/promise-shirt.jpg",
    description: "We've got your back - Promise Scholars Program"
  },
  counseling: {
    src: "/images/ApplyToday.jpg", 
    description: "Personalized counseling and academic support"
  }
};
