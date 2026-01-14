import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblAdvance: z.boolean().optional(),
  tblAgrEvents: z.boolean().optional(),
  tblAgrRights: z.boolean().optional(),
  tblPubLocal: z.boolean().optional(),
  tblRoyalty: z.boolean().optional(),
  tblRoyRates: z.boolean().optional()
}).strict();
export const TblAgreementsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TblAgreementsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TblAgreementsCountOutputTypeSelect>;
export const TblAgreementsCountOutputTypeSelectObjectZodSchema = makeSchema();
