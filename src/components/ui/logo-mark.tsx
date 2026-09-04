import { cn } from "@/lib/utils";

/**
 * Biểu tượng (icon mark) của NTVLaw — vòng cam bao quanh chữ "T" màu đỏ
 * mận kiểu chữ serif, phỏng theo bộ nhận diện thương hiệu (logo gốc:
 * vòng oval cam + khối chữ "NTV Law" đỏ mận + tagline "Your Trusted Legal
 * Partner"). Dùng làm icon compact cho Header/Footer/Favicon.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-10 w-10", className)}
      aria-hidden="true"
    >
      <ellipse
        cx="24"
        cy="24"
        rx="21.5"
        ry="14.5"
        fill="none"
        stroke="#EF7604"
        strokeWidth="3"
      />
      <text
        x="24"
        y="33"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="30"
        fontWeight="700"
        fill="#B30000"
      >
        T
      </text>
    </svg>
  );
}
