import { Enum } from "@/types/content-type";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

function Filter({
  name,
  options,
  onChange,
}: {
  name: string;
  options: Enum;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="my-5">
      <p className="mb-3 font-bold capitalize">{name}</p>
      <RadioGroup onValueChange={(value) => onChange(name, value)}>
        {options.enum.map((origin) => (
          <div key={origin} className="flex items-center space-x-2">
            <RadioGroupItem value={origin} id={origin} />
            <Label htmlFor={origin}>{origin}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default Filter;
