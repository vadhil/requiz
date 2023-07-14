export default function ProgressBar({ data, index, points }) {
  return (
    <div className="flex justify-between">
      <h4 className="text-base text-gray-400">
        Question number {index} / {data.length}
      </h4>
      <h4 className="text-base text-gray-400">points: {points}</h4>
    </div>
  );
}
