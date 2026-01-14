import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyID: z.number().int().optional(),
  AgrID: z.number().int(),
  AgrRightID: z.number().int(),
  RoyNr: z.number().int(),
  EnterDate: z.coerce.date().optional().nullable(),
  RoyDate: z.coerce.date().optional().nullable(),
  Copies: z.number().int().optional().nullable(),
  Price: z.number().optional().nullable(),
  RoyRate: z.number().optional().nullable(),
  XRate: z.number().optional().nullable(),
  ThisRoy: z.number().optional().nullable(),
  AdvLeft: z.number().optional().nullable(),
  RoyDue: z.number().optional().nullable(),
  Pay: z.number().optional().nullable(),
  AdvID: z.number().int().optional().nullable()
}).strict();
export const tblRoyaltyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblRoyaltyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyUncheckedCreateInput>;
export const tblRoyaltyUncheckedCreateInputObjectZodSchema = makeSchema();
