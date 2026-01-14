import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrEventCode: z.number().int(),
  AgrEventDesc: z.string().max(255),
  Status: z.string().max(1).optional().nullable()
}).strict();
export const dictAgrEventsCreateManyInputObjectSchema: z.ZodType<Prisma.dictAgrEventsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsCreateManyInput>;
export const dictAgrEventsCreateManyInputObjectZodSchema = makeSchema();
