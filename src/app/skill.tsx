export function Skill({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div>
      <div className="mb-1.5">
        <i className={`ti ti-${icon} md:text-4xl text-3xl`} />
      </div>
      <h4 className="md:text-xl text-lg font-semibold mb-2">{title}</h4>
      <p className="md:text-sm text-xs font-normal text-gray-400 line-clamp-4">
        {description}
      </p>
    </div>
  );
}
