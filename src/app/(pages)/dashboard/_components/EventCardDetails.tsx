import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EventCardDetails = ({
  title,
  icon,
  content,
}: {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}) => {
  return (
    <Card className="flex flex-col min-h-48 w-full max-w-72">
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center h-full ">
        {content}
      </CardContent>
    </Card>
  );
};

export default EventCardDetails;
