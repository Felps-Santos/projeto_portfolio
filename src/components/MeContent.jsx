import Photo from "../assets/potrait.png";

function MeContent() {
  return (
    <div className="flex w-1/2 justify-center">
      <img src={Photo} className="bg-gray-300 rounded-2xl w-4/6" />
    </div>
  );
}

export default MeContent;
