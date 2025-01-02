import { Icons } from "@/components/icons";

function LoadingPage({ text }: { text?: string }) {
  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <Icons.spinner className="h-8 w-8 animate-spin stroke-primary" />
      <div>
        {text && <p className="text-sm text-muted-foreground">{text}</p>}
      </div>
    </div>
  );
}

export default LoadingPage;
