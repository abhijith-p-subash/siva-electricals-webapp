export function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        <p className="font-heading text-xl font-bold text-foreground">
          Siva <span className="text-primary">Electricals</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
}
