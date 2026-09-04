"use client";

import { useState } from "react";
import { Loader2, Send, CircleCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error ?? "Có lỗi xảy ra, vui lòng thử lại.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Không thể kết nối máy chủ. Vui lòng kiểm tra mạng và thử lại.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-14 text-center">
        <CircleCheck className="h-10 w-10 text-primary" />
        <h3 className="text-lg font-bold text-ink">Gửi yêu cầu thành công!</h3>
        <p className="max-w-sm text-sm text-ink/60">
          Cảm ơn bạn đã liên hệ. Đội ngũ của chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>
        <Button
          type="button"
          variant="ghost"
          className="mt-2 ring-1 ring-ink/10"
          onClick={() => setStatus("idle")}
        >
          Gửi yêu cầu khác
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot chống spam — ẩn khỏi người dùng thật bằng CSS, không dùng display:none để bot khó phát hiện */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Họ và tên <span className="text-accent">*</span>
          </label>
          <input id="name" name="name" required className={inputClasses} placeholder="Nguyễn Văn A" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Số điện thoại <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            required
            className={inputClasses}
            placeholder="0901 234 567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClasses}
          placeholder="ban@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
          Chủ đề <span className="text-accent">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          required
          className={inputClasses}
          placeholder="Tư vấn thành lập doanh nghiệp"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Nội dung <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClasses}
          placeholder="Mô tả ngắn gọn vấn đề pháp lý bạn đang gặp phải..."
        />
      </div>

      {status === "error" ? (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Gửi yêu cầu tư vấn
      </Button>
    </form>
  );
}
