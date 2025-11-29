import Link from "next/link";

export function ReferButton({ className }: { className?: string }) {
  return (
    <Link href="/cta" className={`refer-button ${className || ""}`}>
      Refer
      <div className="refer-button-effect">
        <div />
      </div>
    </Link>
  );
}
