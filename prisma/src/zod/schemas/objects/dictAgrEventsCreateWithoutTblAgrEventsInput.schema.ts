import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrEventCode: z.number().int(),
  AgrEventDesc: z.string().max(255),
  Status: z.string().max(1).optional().nullable()
}).strict();
export const dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.dictAgrEventsCreateWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsCreateWithoutTblAgrEventsInput>;
export const dictAgrEventsCreateWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
