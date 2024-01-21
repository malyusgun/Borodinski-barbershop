export interface AddReviewProps {
  setReviewForm: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ArrowsProps {
  moveSlides: (direction: number) => void
}
export interface SlideObj {
  url: string;
  title: string;
  text: string;
}
export interface DotsProps {
  slide: number,
  slidesdata: {
    slides: SlideObj[],
    count: number
  },
  goToSlide: (slide: number) => void
}
export type SlidesList = Omit<DotsProps, 'goToSlide'>;

export interface FormAddReviewProps {
  reviewForm: boolean,
  setReviewForm: React.Dispatch<React.SetStateAction<boolean>>,
  slidesdata: {
    slides: SlideObj[],
    count: number
  },
}
export type SliderProps = {
  reviewForm: boolean,
  setReviewForm: React.Dispatch<React.SetStateAction<boolean>>,
  slides: SlideObj[]
}

export interface SignInFormProps {
  activeSignInForm: boolean,
  setActiveSignInForm: React.Dispatch<React.SetStateAction<boolean>>,
  setActiveSignUpForm: React.Dispatch<React.SetStateAction<boolean>>
}
export interface SignUpFormProps {
  activeSignUpForm: boolean,
  setActiveSignUpForm: React.Dispatch<React.SetStateAction<boolean>>,
  setActiveSignInForm: React.Dispatch<React.SetStateAction<boolean>>
}
