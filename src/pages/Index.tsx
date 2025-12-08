import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KNNPlayground } from '@/components/KNNPlayground';
import { ExamplesView } from '@/components/ExamplesView';
import { QuizView } from '@/components/QuizView';
import { HelpDialog } from '@/components/HelpDialog';
import { AboutDialog } from '@/components/AboutDialog';
import { Beaker, BookOpen, GraduationCap } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('playground');

  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Explainable KNN – Interactive Playground
              </h1>
              <p className="text-xs text-muted-foreground">
                Interactive machine learning demo. Explore how k-Nearest Neighbors classification works with synthetic datasets.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <HelpDialog />
              <AboutDialog />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-muted/50">
            <TabsTrigger value="playground" className="gap-2">
              <Beaker className="h-4 w-4" />
              Playground
            </TabsTrigger>
            <TabsTrigger value="examples" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Examples
            </TabsTrigger>
            <TabsTrigger value="quiz" className="gap-2">
              <GraduationCap className="h-4 w-4" />
              Quiz
            </TabsTrigger>
          </TabsList>

          <TabsContent value="playground" className="mt-6">
            <KNNPlayground />
          </TabsContent>

          <TabsContent value="examples" className="mt-6">
            <ExamplesView />
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <QuizView />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Yana Evteeva • BWSI 2025 • Explainable KNN Playground
        </div>
      </footer>
    </div>
  );
};

export default Index;
