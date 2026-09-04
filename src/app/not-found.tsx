import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">Lỗi 404</p>
        <h1 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
          Không tìm thấy trang bạn yêu cầu
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink/60">
          Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
        </p>
        <div className="mt-8">
          <Button href="/">
            Về trang chủ
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
