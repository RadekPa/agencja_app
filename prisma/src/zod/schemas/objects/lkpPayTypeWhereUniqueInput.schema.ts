import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PayTypeID: z.number().int().optional()
}).strict();
export const lkpPayTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.lkpPayTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.lkpPayTypeWhereUniqueInput>;
export const lkpPayTypeWhereUniqueInputObjectZodSchema = makeSchema();
