import { cn } from "@/lib/utils";

/**
 * Wordmark đầy đủ của NTVLaw, phỏng theo logo thương hiệu: chữ "N" và "V"
 * đứng hai bên một chữ "T" cao vượt lên (dấu ấn chính của logo), theo sau
 * là "Law" — tất cả màu đỏ mận, đặt trong hai vệt cung màu cam mở (không
 * khép kín thành oval) phía trên và dưới.
 *
 * Dùng cho những chỗ có đủ không gian và nền sáng (Header). Ở nơi cần icon
 * nhỏ gọn trên nền tối (Footer, favicon) dùng {@link LogoIcon} thay thế.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 232 100"
      className={cn("h-10 w-auto", className)}
      role="img"
      aria-label="NTVLaw"
    >
      <path
        d="M 14 34 Q 116 -4 218 34"
        fill="none"
        stroke="#EF7604"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 22 78 Q 116 108 210 78"
        fill="none"
        stroke="#EF7604"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fill="#8B0000"
      >
        <tspan x="10" y="70" fontSize="34">
          N
        </tspan>
        <tspan x="38" y="82" fontSize="68">
          T
        </tspan>
        <tspan x="86" y="70" fontSize="34">
          V
        </tspan>
        <tspan x="118" y="70" fontSize="42">
          Law
        </tspan>
      </text>
    </svg>
  );
}

/**
 * Icon rút gọn (chỉ chữ "T" trong vòng cam) — dùng ở nơi cần biểu tượng nhỏ
 * gọn, vuông: Footer, favicon.
 */
export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("h-10 w-10", className)} aria-hidden="true">
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
        fill="#8B0000"
      >
        T
      </text>
    </svg>
  );
}
