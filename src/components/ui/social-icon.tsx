/**
 * Icon mạng xã hội dạng chữ viết tắt trong vòng tròn — đồng bộ phong cách
 * với các icon khác của trang, không phụ thuộc vào bộ icon thương hiệu bên
 * ngoài (một số thư viện icon không cung cấp logo mạng xã hội do bản quyền).
 */
export function SocialIcon({ label }: { label: string }) {
  return (
    <span className="text-[11px] font-bold leading-none" aria-hidden="true">
      {label}
    </span>
  );
}
