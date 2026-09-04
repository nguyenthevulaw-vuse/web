import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description: `Chính sách bảo mật thông tin khách hàng của ${siteConfig.fullName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Chính sách bảo mật" breadcrumb="Chính sách bảo mật" />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="prose-legal mx-auto max-w-3xl text-base">
            <p>
              {siteConfig.fullName} (&quot;chúng tôi&quot;) cam kết tôn trọng và bảo vệ quyền
              riêng tư đối với thông tin cá nhân của khách hàng truy cập và sử dụng website
              này. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ
              thông tin của bạn.
            </p>
            <h2 className="mt-8 text-lg font-bold text-ink">1. Thông tin chúng tôi thu thập</h2>
            <p>
              Chúng tôi có thể thu thập họ tên, số điện thoại, địa chỉ email và nội dung yêu
              cầu tư vấn khi bạn chủ động điền vào biểu mẫu liên hệ trên website.
            </p>
            <h2 className="mt-8 text-lg font-bold text-ink">2. Mục đích sử dụng thông tin</h2>
            <p>
              Thông tin được sử dụng nhằm mục đích phản hồi yêu cầu tư vấn, liên hệ trao đổi
              công việc và nâng cao chất lượng dịch vụ. Chúng tôi không bán, trao đổi hoặc
              chia sẻ thông tin cá nhân của khách hàng cho bên thứ ba vì mục đích thương mại.
            </p>
            <h2 className="mt-8 text-lg font-bold text-ink">3. Bảo mật thông tin</h2>
            <p>
              Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý phù hợp để bảo vệ thông tin
              khách hàng khỏi truy cập, sử dụng hoặc tiết lộ trái phép, phù hợp với nguyên
              tắc bảo mật thông tin khách hàng của nghề luật sư.
            </p>
            <h2 className="mt-8 text-lg font-bold text-ink">4. Quyền của khách hàng</h2>
            <p>
              Khách hàng có quyền yêu cầu truy cập, chỉnh sửa hoặc yêu cầu xóa thông tin cá
              nhân đã cung cấp bằng cách liên hệ qua email {siteConfig.contact.email}.
            </p>
            <h2 className="mt-8 text-lg font-bold text-ink">5. Thay đổi chính sách</h2>
            <p>
              Chính sách bảo mật có thể được cập nhật theo thời gian. Mọi thay đổi sẽ được
              đăng tải trên trang này.
            </p>
            <p className="mt-8 text-sm text-ink/50">Cập nhật lần cuối: 04/09/2026</p>
          </div>
        </Container>
      </section>
    </>
  );
}
