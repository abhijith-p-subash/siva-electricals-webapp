export function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full border-4 border-muted border-t-secondary animate-spin" />
        <h1 className="text-xl font-heading font-bold text-foreground">
          Siva <span className="text-secondary">Electricals</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Loading website...</p>
      </div>
    </div>
  );
}

