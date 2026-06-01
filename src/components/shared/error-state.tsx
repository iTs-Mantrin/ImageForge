import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ErrorState({ title, message, onRetry }: { title: string; message: string; onRetry?: () => void }) {
  return (
    <Card className="flex items-start gap-4 p-5">
      <AlertTriangle className="mt-1 size-5 text-destructive" />
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{message}</p>
      </div>
      {onRetry ? <Button variant="outline" size="sm" onClick={onRetry}>Retry</Button> : null}
    </Card>
  );
}
