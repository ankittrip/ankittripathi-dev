import ReactFlow, {
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const nodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 350, y: 0 },
    data: {
      title: "GitHub Repository",
      description: "Source Code Input",
    },
  },

  {
    id: "2",
    type: "custom",
    position: { x: 350, y: 150 },
    data: {
      title: "BullMQ Queue",
      description: "Background Processing",
      featured: true,
    },
  },

  {
    id: "3",
    type: "custom",
    position: { x: 0, y: 350 },
    data: {
      title: "Architecture Agent",
      description: "System Design Review",
    },
  },

  {
    id: "4",
    type: "custom",
    position: { x: 200, y: 350 },
    data: {
      title: "Security Agent",
      description: "Vulnerability Analysis",
    },
  },

  {
    id: "5",
    type: "custom",
    position: { x: 400, y: 350 },
    data: {
      title: "Code Review Agent",
      description: "Quality Assessment",
    },
  },

  {
    id: "6",
    type: "custom",
    position: { x: 600, y: 350 },
    data: {
      title: "Dependency Agent",
      description: "Package Analysis",
    },
  },

  {
    id: "7",
    type: "custom",
    position: { x: 800, y: 350 },
    data: {
      title: "Performance Agent",
      description: "Optimization Review",
    },
  },

  {
    id: "8",
    type: "custom",
    position: { x: 350, y: 580 },
    data: {
      title: "AI Orchestrator",
      description: "Executive Summary",
      featured: true,
    },
  },

  {
    id: "9",
    type: "custom",
    position: { x: 350, y: 760 },
    data: {
      title: "PostgreSQL + Prisma",
      description: "Report Storage",
      featured: true,
    },
  },

  {
    id: "10",
    type: "custom",
    position: { x: 350, y: 930 },
    data: {
      title: "Socket.IO",
      description: "Real-Time Updates",
    },
  },

  {
    id: "11",
    type: "custom",
    position: { x: 350, y: 1100 },
    data: {
      title: "Dashboard",
      description: "Developer Insights",
    },
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "custom",
    animated: true,
  },

  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "custom",
    animated: true,
  },

  {
    id: "e2-4",
    source: "2",
    target: "4",
    type: "custom",
    animated: true,
  },

  {
    id: "e2-5",
    source: "2",
    target: "5",
    type: "custom",
    animated: true,
  },

  {
    id: "e2-6",
    source: "2",
    target: "6",
    type: "custom",
    animated: true,
  },

  {
    id: "e2-7",
    source: "2",
    target: "7",
    type: "custom",
    animated: true,
  },

  {
    id: "e3-8",
    source: "3",
    target: "8",
    type: "custom",
    animated: true,
  },

  {
    id: "e4-8",
    source: "4",
    target: "8",
    type: "custom",
    animated: true,
  },

  {
    id: "e5-8",
    source: "5",
    target: "8",
    type: "custom",
    animated: true,
  },

  {
    id: "e6-8",
    source: "6",
    target: "8",
    type: "custom",
    animated: true,
  },

  {
    id: "e7-8",
    source: "7",
    target: "8",
    type: "custom",
    animated: true,
  },

  {
    id: "e8-9",
    source: "8",
    target: "9",
    type: "custom",
    animated: true,
  },

  {
    id: "e9-10",
    source: "9",
    target: "10",
    type: "custom",
    animated: true,
  },

  {
    id: "e10-11",
    source: "10",
    target: "11",
    type: "custom",
    animated: true,
  },
];

export default function ArchitectureFlow() {
  return (
    <div className="h-[1250px] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}