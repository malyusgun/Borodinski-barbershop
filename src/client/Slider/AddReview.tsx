import { AddReviewProps } from "@/types";

const AddReview: React.FC<AddReviewProps> = ({setReviewForm}) => {
  return (
    <>
      <button
        className="header-button max-sm:hidden"
        onClick={() => setReviewForm(true)}
      >
        <span>ОСТАВИТЬ СВОЙ</span>
      </button>
    </>
  );
}
export default AddReview