import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

function OathButton({ isLoading }: { isLoading: boolean }) {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.instagram className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </>
  );
}

export default OathButton;
