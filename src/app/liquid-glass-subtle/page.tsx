import { LiquidGlassSubtleDemo } from "@/components/ui/liquid-glass-subtle-demo";

export default function LiquidGlassSubtlePage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Subtle Liquid Glass Effects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Demonstrating how gentle, soft backgrounds can create beautiful liquid glass effects 
            without being punchy or overwhelming.
          </p>
        </div>
        <LiquidGlassSubtleDemo />
      </div>
    </div>
  );
} 