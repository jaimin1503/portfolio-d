import React, { useState, useEffect } from "react";
import { ArrowRight, Clock, ExternalLink, Sparkles } from "lucide-react";

function Redirect() {
  const [progress, setProgress] = useState(0);
  const [redirecting, setRedirecting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  // Redirect configuration
  const redirectUrl = "https://dhimahi-pathak1.vercel.app";
  const redirectDelay = 5000; // 5 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (redirectDelay / 100);
        if (newProgress >= 100) {
          setRedirecting(true);
          setTimeout(() => {
            window.location.href = redirectUrl;
          }, 500);
          clearInterval(timer);
        }
        return Math.min(newProgress, 100);
      });
    }, 100);

    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          clearInterval(countdownTimer);
        }
        return Math.max(newTime, 0);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  const handleSkipRedirect = () => {
    window.location.href = redirectUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 p-8 md:p-12 max-w-2xl w-full text-center shadow-2xl transform transition-all duration-700 hover:scale-105">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mb-6 transform transition-transform duration-300 hover:rotate-12">
              <Sparkles className="w-10 h-10 text-white animate-spin" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-pink-200 bg-clip-text text-transparent mb-4">
              Redirecting...
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-2">
              Hold tight! We're taking you somewhere amazing
            </p>
            <p className="text-sm text-white/60">
              Destination:{" "}
              <span className="font-semibold text-white/80"> Somewhere</span>
            </p>
          </div>

          {/* Progress Section */}
          <div className="mb-8">
            {/* Progress Bar */}
            <div className="relative w-full h-3 bg-white/20 rounded-full mb-6 overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>

            {/* Progress Stats */}
            <div className="flex justify-between items-center text-white/70 text-sm mb-6">
              <span>{Math.round(progress)}% Complete</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{timeLeft}s remaining</span>
              </div>
            </div>

            {/* Fun Loading Messages */}
            <div className="text-white/60 text-sm">
              {progress < 25 && "🚀 Preparing for takeoff..."}
              {progress >= 25 &&
                progress < 50 &&
                "✨ Loading awesome content..."}
              {progress >= 50 && progress < 75 && "🎯 Almost there..."}
              {progress >= 75 && progress < 100 && "🎉 Ready to go!"}
              {progress >= 100 && "🌟 Redirecting now!"}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleSkipRedirect}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:scale-105 hover:shadow-xl transform"
            >
              <span>Skip Wait</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => window.open(redirectUrl, "_blank")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>
          </div>

          {/* Redirect Status */}
          {redirecting && (
            <div className="mt-6 text-green-300 font-semibold animate-bounce">
              Redirecting now... ✨
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Redirect;
