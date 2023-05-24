
function Participant() {
  return (
      <div className=" hidden md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 bg-overlay backdrop-blur-lg p-6 mt-32 rounded-lg">
        <div className="text-center border-r">
          <span className="text-gray-400 font-medium font-jarkata block">Hosted events</span>
          <span className="text-gray-200  font-jarkata font-bold text-4xl">32</span>
        </div>
        <div className="text-center border-r">
          <span className="text-gray-400 font-medium font-jarkata block">Participants</span>
          <span className="text-gray-200 font-jarkata  font-bold text-4xl">420</span>
        </div>
        <div className="text-center">
          <span className="text-gray-400 font-medium font-jarkata block">Issued poap</span>
          <span className="text-gray-200 font-jarkata   font-bold text-4xl">5000</span>
        </div>
      </div>
  );
}

export default Participant;
