"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { TiTick } from "react-icons/ti";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { SendEmailParams } from "@/app/api/mail/route";
import { sendToWebhook } from "@/lib/webhook";

const ConsolidatedCTA = () => {
  const [isThankYouDialogOpen, setIsThankYouDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFeedbackChecked, setIsFeedbackChecked] = useState(false);

  const [formData, setFormData] = useState<SendEmailParams>({
    to: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Проверяем, что email заполнен
    if (!formData.to || !formData.to.includes("@")) {
      alert("Пожалуйста, введите корректный email адрес");
      return;
    }

    // Track form submission
    sendToWebhook({
      type: "lead_submission",
      email: formData.to, // Передаем реальный email пользователя
      to: formData.to, // Admin email is auto-set in the API
      timestamp: new Date().toISOString(),
      feedbackCall: isFeedbackChecked, // Добавляем состояние чекбокса
    });

    setIsThankYouDialogOpen(true);
    setIsSubmitting(true);
    try {
    } catch (error) {
      // Track error
      sendToWebhook({
        type: "email_error",
        error: String(error),
        to: formData.to,
        email: formData.to, // Также добавляем email в сообщение об ошибке
        timestamp: new Date().toISOString(),
      });
    } finally {
      setIsSubmitting(false);
      setFormData({
        to: "",
      });
      setIsFeedbackChecked(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-gradient-to-r from-violet-500 to-[#792abf] text-white text-xs font-bold py-1 px-3 rounded-full mb-3 animate-pulse">
          LIMITED OFFER - ONLY A FEW SPOTS LEFT
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-violet-500 to-[#792abf] bg-clip-text text-transparent">
          Don&apos;t miss this opportunity!
        </h3>
      </div>

      <div className="flex gap-4 items-center justify-center mb-6">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-violet-500/30"></div>
        <span className="text-lg font-semibold text-gray-700">
          Limited time offer
        </span>
        <div className="h-px flex-grow bg-gradient-to-r from-violet-500/30 to-transparent"></div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-teal-300 flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-teal-600">✓</span>
            </div>
            <p className="text-sm font-semibold">
              First 100 users get free access
            </p>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-teal-300 flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-teal-600">✓</span>
            </div>
            <p className="text-sm font-semibold">1000 credits included</p>
          </div>
        </div>
      </div>

      {/* Email Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 md:space-y-0 md:flex gap-4"
      >
        <Input
          type="email"
          placeholder="Your email address"
          className="flex-grow shadow-sm"
          value={formData.to}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, to: e.target.value }))
          }
          required
          disabled={isSubmitting}
        />

        <Button
          className="w-full md:w-auto bg-gradient-to-r from-[#a947e7] to-[#792abf] hover:from-indigo-600 hover:to-purple-500 hover:shadow-purple-600/50 shadow-lg text-white font-bold py-2 px-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Processing..."
          ) : (
            <>
              <span>Claim Your Spot</span>
              <Rocket className="ml-1" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 font-montserrat">
          Spots are filling up fast! Join now to secure your free access.
        </p>
        <div className="flex gap-2 items-center justify-center my-2">
          <Checkbox 
            id="feedback-checkbox" 
            checked={isFeedbackChecked} 
            onCheckedChange={setIsFeedbackChecked} 
          />
          <label 
            htmlFor="feedback-checkbox" 
            className="text-sm text-gray-500 font-montserrat cursor-pointer"
          >
            Yes, I&apos;m ready to give feedback on a 15 min call
          </label>
        </div>
      </div>
      {/* Thank You Dialog */}
      <Dialog
        open={isThankYouDialogOpen}
        onOpenChange={setIsThankYouDialogOpen}
      >
        <DialogContent className="dialogContentStyle">
          <DialogHeader>
            <DialogTitle className="dialogTitleStyle">Thank You!</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-lg">
              We have received your request, and the details will be sent to
              your email shortly.
            </p>
          </div>
          <DialogFooter className="flex justify-center mt-4">
            <Button
              variant="accent"
              onClick={() => {
                setIsThankYouDialogOpen(false);
              }}
            >
              Good!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConsolidatedCTA; 