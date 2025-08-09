import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ExperimentButtons from "@/components/ExperimentButtons";

const Experiment: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Cybersecurity Experiments</h1>
      <p className="text-muted-foreground mb-8">
        Engage in hands-on cybersecurity training with these interactive labs and challenges.
      </p>
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>External Labs & CTFs</CardTitle>
            <CardDescription>
              Practice your skills on real-world scenarios with these popular platforms.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ExperimentButtons />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Experiment;
