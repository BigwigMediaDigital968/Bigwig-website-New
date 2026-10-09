/**
 * Google's required reCAPTCHA attribution. The floating reCAPTCHA badge is hidden site-wide (see brand.css),
 * which Google allows only when this text is shown in the form's flow, so every form that submits through
 * useSubmitLead must render it. Keep the wording and both links as they are.
 */
export default function RecaptchaNotice({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed ${className}`}>
      This site is protected by reCAPTCHA and the Google{" "}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        Privacy Policy
      </a>{" "}
      and{" "}
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
}
