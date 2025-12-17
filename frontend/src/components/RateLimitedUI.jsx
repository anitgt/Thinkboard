import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">

          {/* Icon */}
          <AlertTriangle className="w-14 h-14 text-warning" />

          {/* Title */}
          <h2 className="card-title text-2xl mt-2">
            Too Many Requests
          </h2>

          {/* Message */}
          <p className="text-base-content/70">
            You’re hitting the server too fast.
            Please wait a few seconds and try again.
          </p>

          {/* Actions */}
          <div className="card-actions mt-4 gap-2">
            <button
              className="btn btn-primary gap-2"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="w-4 h-4" />
              Retry
            </button>

            <button
              className="btn btn-outline gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs text-base-content/50 mt-4">
            Error 429 · Rate limit exceeded
          </p>

        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
