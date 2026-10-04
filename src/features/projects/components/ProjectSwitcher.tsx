import { Button } from "@/shared/components/ui/Button";
import { Icon } from "@/shared/components/ui/Icon";
import type { Project } from "@/features/projects/types/types";

export function ProjectSwitcher({ project }: { project: Project }) {
  return (
    <Button variant="secondary" aria-label={`Current project: ${project.name}`}>
      <span className="grid size-5 place-items-center rounded-[5px] bg-lime-100 text-[11px] font-semibold text-lime-900 uppercase">
        {project.name.charAt(0)}
      </span>
      {project.name}
      <Icon name="chevronsUpDown" size={14} className="text-zinc-400" />
    </Button>
  );
}
