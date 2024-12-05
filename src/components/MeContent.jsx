import Photo from "../assets/potrait.png";

function MeContent() {
  return (
    <div className="flex w-full max-w-[50%] justify-center px-5">
      <img src={Photo} className="bg-gray-300 rounded-2xl w-4/6" alt="Felipe Santos" />
    </div>
  );
}

export default MeContent;
