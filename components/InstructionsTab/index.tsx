import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  InstructionType,
  solveInstructions,
  submitInstructions,
} from "@/constants/instructions";

export default function InstructionsTab() {
  function renderInstructions(instructionType: Array<InstructionType>) {
    return (
      <>
        {instructionType.map((instruction, index) => (
          <div
            key={index}
            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
            <div className="space-y-1">
              <p className="text-md font-medium leading-none text-white">
                {instruction.title}
              </p>
              <p className="text-sm text-grey">{instruction.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <Tabs defaultValue="submit" className="w-[500px] mt-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="submit">Submit Problem</TabsTrigger>
        <TabsTrigger value="solve">Solve Problem</TabsTrigger>
      </TabsList>
      <TabsContent value="submit">
        <Card className="bg-black">
          <CardContent className="p-5">
            {renderInstructions(submitInstructions)}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="solve">
        <Card className="bg-black">
          <CardContent className="p-5">
            {renderInstructions(solveInstructions)}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
