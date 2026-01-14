import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsArgsObjectSchema as tblAgreementsArgsObjectSchema } from './tblAgreementsArgs.schema'

const makeSchema = () => z.object({
  RoyID: z.boolean().optional(),
  AgrID: z.boolean().optional(),
  AgrRightID: z.boolean().optional(),
  RoyNr: z.boolean().optional(),
  EnterDate: z.boolean().optional(),
  RoyDate: z.boolean().optional(),
  Copies: z.boolean().optional(),
  Price: z.boolean().optional(),
  RoyRate: z.boolean().optional(),
  XRate: z.boolean().optional(),
  ThisRoy: z.boolean().optional(),
  AdvLeft: z.boolean().optional(),
  RoyDue: z.boolean().optional(),
  Pay: z.boolean().optional(),
  AdvID: z.boolean().optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsArgsObjectSchema)]).optional()
}).strict();
export const tblRoyaltySelectObjectSchema: z.ZodType<Prisma.tblRoyaltySelect> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltySelect>;
export const tblRoyaltySelectObjectZodSchema = makeSchema();
