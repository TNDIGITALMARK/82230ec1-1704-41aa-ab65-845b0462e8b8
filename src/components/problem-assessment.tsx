'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import {
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Clock,
  DollarSign,
  FileText,
  Users,
  Calculator,
  BarChart3
} from 'lucide-react';

const assessmentQuestions = [
  {
    id: 'frequency',
    question: 'How often do you currently update your books?',
    options: [
      { value: 'daily', label: 'Daily', weight: 1 },
      { value: 'weekly', label: 'Weekly', weight: 2 },
      { value: 'monthly', label: 'Monthly', weight: 3 },
      { value: 'quarterly', label: 'Quarterly or less', weight: 4 }
    ]
  },
  {
    id: 'accuracy',
    question: 'How confident are you in your bookkeeping accuracy?',
    options: [
      { value: 'very-confident', label: 'Very confident', weight: 1 },
      { value: 'somewhat-confident', label: 'Somewhat confident', weight: 2 },
      { value: 'not-confident', label: 'Not confident', weight: 3 },
      { value: 'no-idea', label: 'I have no idea', weight: 4 }
    ]
  },
  {
    id: 'time-spent',
    question: 'How much time do you spend on bookkeeping per week?',
    options: [
      { value: 'none', label: 'None (I avoid it)', weight: 4 },
      { value: '1-3', label: '1-3 hours', weight: 2 },
      { value: '4-8', label: '4-8 hours', weight: 3 },
      { value: '8-plus', label: '8+ hours', weight: 4 }
    ]
  },
  {
    id: 'tax-stress',
    question: 'How stressful is tax time for your business?',
    options: [
      { value: 'not-stressful', label: 'Not stressful at all', weight: 1 },
      { value: 'somewhat-stressful', label: 'Somewhat stressful', weight: 2 },
      { value: 'very-stressful', label: 'Very stressful', weight: 3 },
      { value: 'nightmare', label: 'Complete nightmare', weight: 4 }
    ]
  },
  {
    id: 'cash-flow',
    question: 'How well do you understand your business cash flow?',
    options: [
      { value: 'excellent', label: 'Excellent understanding', weight: 1 },
      { value: 'good', label: 'Good understanding', weight: 2 },
      { value: 'poor', label: 'Poor understanding', weight: 3 },
      { value: 'clueless', label: 'I\'m completely clueless', weight: 4 }
    ]
  }
];

const serviceRecommendations = {
  low: {
    level: 'Low Priority',
    description: 'Your bookkeeping seems to be in good shape! Consider our consultation services for optimization.',
    services: ['Business Planning', 'Financial Analysis', 'Quarterly Reviews'],
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    icon: CheckCircle
  },
  medium: {
    level: 'Medium Priority',
    description: 'There are some areas where professional bookkeeping help could save you time and reduce stress.',
    services: ['Monthly Bookkeeping', 'Tax Preparation', 'Financial Statements'],
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 border-yellow-200',
    icon: AlertTriangle
  },
  high: {
    level: 'High Priority',
    description: 'Your bookkeeping challenges are significant. Professional help is strongly recommended.',
    services: ['Complete Bookkeeping Overhaul', 'Monthly Services', 'Tax Prep', 'Cash Flow Analysis'],
    color: 'text-red-600',
    bgColor: 'bg-red-50 border-red-200',
    icon: AlertTriangle
  }
};

export default function ProblemAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, answerValue: string) => {
    const newAnswers = { ...answers, [questionId]: answerValue };
    setAnswers(newAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const question = assessmentQuestions.find(q => q.id === questionId);
      const option = question?.options.find(o => o.value === answerValue);
      if (option) {
        totalScore += option.weight;
      }
    });
    return totalScore;
  };

  const getRecommendation = () => {
    const score = calculateScore();
    if (score <= 8) return serviceRecommendations.low;
    if (score <= 15) return serviceRecommendations.medium;
    return serviceRecommendations.high;
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = ((Object.keys(answers).length) / assessmentQuestions.length) * 100;

  if (showResults) {
    const recommendation = getRecommendation();
    const RecommendationIcon = recommendation.icon;

    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${recommendation.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <RecommendationIcon className={`w-8 h-8 ${recommendation.color}`} />
                </div>
                <CardTitle className="text-2xl">Your Bookkeeping Assessment Results</CardTitle>
                <CardDescription>Based on your responses, here are our recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className={`p-6 rounded-lg border ${recommendation.bgColor}`}>
                  <h3 className={`text-xl font-bold mb-2 ${recommendation.color}`}>
                    {recommendation.level}
                  </h3>
                  <p className="text-muted-foreground mb-4">{recommendation.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Recommended Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="bg-white">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Icons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">Bookkeeping</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <FileText className="w-8 h-8 text-accent-foreground mx-auto mb-2" />
                    <div className="text-sm font-medium">Tax Prep</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <BarChart3 className="w-8 h-8 text-secondary-foreground mx-auto mb-2" />
                    <div className="text-sm font-medium">Analysis</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">Planning</div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Ready to solve these bookkeeping challenges with our 30+ years of expertise?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                      asChild
                    >
                      <a href="/contact">Schedule Free Consultation</a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={resetAssessment}
                      className="rounded-full px-8"
                    >
                      Retake Assessment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  const question = assessmentQuestions[currentQuestion];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Bookkeeping Problem Assessment
            </h2>
            <p className="text-lg text-muted-foreground">
              Answer a few quick questions to get personalized service recommendations
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg">
                  Question {currentQuestion + 1} of {assessmentQuestions.length}
                </CardTitle>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="w-full" />
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground">
                  {question.question}
                </h3>

                <div className="space-y-3">
                  {question.options.map((option) => (
                    <Button
                      key={option.value}
                      variant="outline"
                      size="lg"
                      className="w-full justify-start text-left h-auto p-4 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      onClick={() => handleAnswer(question.id, option.value)}
                    >
                      <div>
                        <div className="font-medium">{option.label}</div>
                      </div>
                    </Button>
                  ))}
                </div>

                {currentQuestion > 0 && (
                  <Button
                    variant="ghost"
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    className="mt-4"
                  >
                    Previous Question
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              This assessment takes less than 2 minutes and provides personalized recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}