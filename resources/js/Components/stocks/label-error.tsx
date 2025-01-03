import { Label } from "../ui/label";

/**
 * LabelError component
 * @param param0
 * @returns
 * @example
 * ```tsx
 * <LabelError value={errors.email} />
 * ```
 */
export default function LabelError({value}: {value?: string}) {
  return (
    <div>
      {value ? (
        <Label className="text-destructive">{value}</Label>
      ) : null}
    </div>
  )
}
