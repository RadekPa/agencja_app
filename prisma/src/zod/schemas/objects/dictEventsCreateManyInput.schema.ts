import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  EventCode: z.number().int(),
  EventDesc: z.string().max(50)
}).strict();
export const dictEventsCreateManyInputObjectSchema: z.ZodType<Prisma.dictEventsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsCreateManyInput>;
export const dictEventsCreateManyInputObjectZodSchema = makeSchema();
