import { ChartOptions, ChartData, ChartType } from 'chart.js';

/**
 * Default chart options for all charts
 */
export const defaultChartOptions: ChartOptions<'line' | 'bar' | 'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 12,
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        font: {
          size: 12,
        },
      },
      grid: {
        color: 'rgba(0,0,0,0.05)',
      },
    },
  },
};

/**
 * Generates a reusable chart data structure
 */
export function createChartData(
  labels: string[],
  datasets: { label: string; data: number[]; backgroundColor?: string; borderColor?: string }[]
): ChartData<'line' | 'bar' | 'pie'> {
  return {
    labels,
    datasets: datasets.map((ds) => ({
      ...ds,
      backgroundColor: ds.backgroundColor || 'rgba(75, 192, 192, 0.2)',
      borderColor: ds.borderColor || 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      tension: 0.4,
    })),
  };
}

/**
 * Supported chart types
 */
export const chartTypes: ChartType[] = ['line', 'bar', 'pie'];
