import { LiquidGlassDemo } from "@/components/ui/liquid-glass-demo";

export default function LiquidGlassTestPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Liquid Glass Effect Demo</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The liquid glass effect requires rich backgrounds to show the distortion and refraction properly. 
            Here are examples with different background types.
          </p>
        </div>
        <LiquidGlassDemo />
      </div>
    </div>
  );
} 