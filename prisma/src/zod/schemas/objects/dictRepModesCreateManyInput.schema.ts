import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RepModeDesc: z.string().max(30)
}).strict();
export const dictRepModesCreateManyInputObjectSchema: z.ZodType<Prisma.dictRepModesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesCreateManyInput>;
export const dictRepModesCreateManyInputObjectZodSchema = makeSchema();
