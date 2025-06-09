# NextStage Development Notes

## Page Structure Guidelines

### Required Components for All Pages:
1. **NextStageNavbar** - Always import and place at the top
2. **Footer** - Always import and place at the bottom (outside of main)

### Standard Page Structure:
```tsx
import NextStageNavbar from "@/components/NextStageNavbar";
import Footer from "@/components/Footer";
// ... other component imports

export default function PageName() {
  return (
    <>
      <NextStageNavbar />
      <main className="min-h-screen bg-obsidian">
        {/* Page content here */}
      </main>
      <Footer />
    </>
  );
}
```

### Design System:
- **Colors**: obsidian (background), bone (text), accent (highlights)
- **Typography**: font-display for headings, default for body
- **Animations**: Use framer-motion for sophisticated interactions
- **Spacing**: Use consistent Tailwind spacing scale

### Component Patterns:
- Follow CTASection.tsx and AboutCTA.tsx patterns for sophisticated animations
- Use flowing lines, convergence geometry, and premium button interactions
- Maintain Apple × Nike design philosophy (precision + energy)

## Current Pages:
- `/` - Home page (complete with Footer)
- `/about` - About page (complete with Footer)
- Future pages should follow the same structure 