/**
 * Biểu tượng Zalo thật (không dùng icon bong bóng chat chung chung) — nền
 * tròn xanh dương thương hiệu Zalo (#0068FF) với chữ "Zalo" trắng, để nhận
 * diện đúng ứng dụng khi khách hàng nhấn nút liên hệ.
 */
export function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Zalo">
      <circle cx="24" cy="24" r="24" fill="#0068FF" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="15"
        fill="#ffffff"
        letterSpacing="-0.3"
      >
        Zalo
      </text>
    </svg>
  );
}
