import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  AgrRightID: z.literal(true).optional(),
  RoyNr: z.literal(true).optional(),
  Copies: z.literal(true).optional(),
  Price: z.literal(true).optional(),
  RoyRate: z.literal(true).optional(),
  XRate: z.literal(true).optional(),
  ThisRoy: z.literal(true).optional(),
  AdvLeft: z.literal(true).optional(),
  RoyDue: z.literal(true).optional(),
  Pay: z.literal(true).optional(),
  AdvID: z.literal(true).optional()
}).strict();
export const TblRoyaltySumAggregateInputObjectSchema: z.ZodType<Prisma.TblRoyaltySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblRoyaltySumAggregateInputType>;
export const TblRoyaltySumAggregateInputObjectZodSchema = makeSchema();
