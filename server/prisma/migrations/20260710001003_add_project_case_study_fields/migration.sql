-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "businessProblem" TEXT,
ADD COLUMN     "features" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN     "results" TEXT,
ADD COLUMN     "solution" TEXT,
ADD COLUMN     "timeline" TEXT;
