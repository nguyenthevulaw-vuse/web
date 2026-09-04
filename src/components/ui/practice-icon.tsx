import {
  Building2,
  Globe2,
  Lightbulb,
  Landmark,
  HeartHandshake,
  Briefcase,
  Scale,
  FileSignature,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  Building2,
  Globe2,
  Lightbulb,
  Landmark,
  HeartHandshake,
  Briefcase,
  Scale,
  FileSignature,
} as const;

export type PracticeIconName = keyof typeof iconMap;

/**
 * Icon minh họa cho từng lĩnh vực dịch vụ pháp lý. Tên icon được lưu dạng
 * chuỗi trong dữ liệu (Supabase hoặc dữ liệu mẫu) để dễ cấu hình mà không
 * cần sửa code — xem `iconMap` phía trên để biết các tên hợp lệ.
 */
export function PracticeIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const IconComponent = iconMap[name as PracticeIconName] ?? Scale;
  return <IconComponent {...props} />;
}
