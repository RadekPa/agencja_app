import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrID: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  CountryID: z.literal(true).optional(),
  TitleID: z.literal(true).optional(),
  ValidYY: z.literal(true).optional(),
  PubTermMM: z.literal(true).optional(),
  MaxNoOfCopies: z.literal(true).optional(),
  MinNoOfCopies: z.literal(true).optional(),
  Commission: z.literal(true).optional(),
  GraalAgentID: z.literal(true).optional(),
  GraalShare: z.literal(true).optional(),
  EstimatedCopyPrice: z.literal(true).optional(),
  CopiesToOwner: z.literal(true).optional(),
  CopiesToGraal: z.literal(true).optional(),
  ClientID: z.literal(true).optional(),
  CommissionMaterials: z.literal(true).optional(),
  AgentID: z.literal(true).optional(),
  PropID: z.literal(true).optional()
}).strict();
export const TblAgreementsSumAggregateInputObjectSchema: z.ZodType<Prisma.TblAgreementsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblAgreementsSumAggregateInputType>;
export const TblAgreementsSumAggregateInputObjectZodSchema = makeSchema();
