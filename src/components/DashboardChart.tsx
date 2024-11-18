import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 186, mobile: 80 },
  { month: "August", desktop: 305, mobile: 200 },
  { month: "September", desktop: 237, mobile: 120 },
  { month: "October", desktop: 73, mobile: 190 },
  { month: "November", desktop: 209, mobile: 130 },
  { month: "December", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Sandbox",
    color: "#ABABAB",
  },
  mobile: {
    label: "Live",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
export default function DashboardChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart accessibilityLayer data={chartData} margin={{ bottom: 40 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={true}
          tickMargin={10}
          axisLine={true}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={0} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={0} />
      </BarChart>
    </ChartContainer>
  );
}
