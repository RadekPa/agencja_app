import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  StateAbb: z.string().max(2).optional()
}).strict();
export const dictStatesWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictStatesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesWhereUniqueInput>;
export const dictStatesWhereUniqueInputObjectZodSchema = makeSchema();
