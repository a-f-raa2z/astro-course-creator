
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Brain, ChevronRight, BrainCircuit } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-space-gradient flex items-center justify-center p-4">
      <div className="max-w-2xl w-full animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Space Learning Platform</h1>
          <p className="text-purple-200">Explore the universe through interactive learning experiences</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-700/30 hover:shadow-purple-500/20 hover:shadow-md transition-all">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-purple-800/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-purple-300" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">Astronomy Course</h2>
                <p className="text-purple-200 text-sm mb-4">Explore planets, stars, and solar systems</p>
                <Button 
                  onClick={() => navigate("/astronomy-course")}
                  className="w-full bg-purple-700 hover:bg-purple-600"
                >
                  Start Learning <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-blue-700/30 hover:shadow-blue-500/20 hover:shadow-md transition-all">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-blue-800/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-blue-300" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">AI Course</h2>
                <p className="text-blue-200 text-sm mb-4">Learn about artificial intelligence basics</p>
                <Button 
                  onClick={() => navigate("/ai-course")}
                  className="w-full bg-blue-700 hover:bg-blue-600"
                >
                  Start Learning <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-900/60 to-orange-800/40 border-orange-700/30 hover:shadow-orange-500/20 hover:shadow-md transition-all">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-orange-800/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BrainCircuit className="h-6 w-6 text-orange-300" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">Quiz Mode</h2>
                <p className="text-orange-200 text-sm mb-4">Test your astronomy knowledge</p>
                <Button 
                  onClick={() => navigate("/astronomy-quiz")}
                  className="w-full bg-orange-700 hover:bg-orange-600"
                >
                  Start Quizzes <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
