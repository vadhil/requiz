export default function ProgressBar({ data, index }) {
  return (
    <div>
      <h4 className="text-base text-gray-400">
        Question number {index} / {data.length}
      </h4>
    </div>
  );
}
