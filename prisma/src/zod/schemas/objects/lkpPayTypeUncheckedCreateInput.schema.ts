import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PayTypeID: z.number().int(),
  Description: z.string().max(100).optional().nullable(),
  DescriptionPL: z.string().max(100).optional().nullable()
}).strict();
export const lkpPayTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.lkpPayTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.lkpPayTypeUncheckedCreateInput>;
export const lkpPayTypeUncheckedCreateInputObjectZodSchema = makeSchema();
