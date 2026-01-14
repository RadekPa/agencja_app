import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsCreateNestedManyWithoutDictAgrEventsInputObjectSchema as tblAgrEventsCreateNestedManyWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsCreateNestedManyWithoutDictAgrEventsInput.schema'

const makeSchema = () => z.object({
  AgrEventCode: z.number().int(),
  AgrEventDesc: z.string().max(255),
  Status: z.string().max(1).optional().nullable(),
  tblAgrEvents: z.lazy(() => tblAgrEventsCreateNestedManyWithoutDictAgrEventsInputObjectSchema).optional()
}).strict();
export const dictAgrEventsCreateInputObjectSchema: z.ZodType<Prisma.dictAgrEventsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsCreateInput>;
export const dictAgrEventsCreateInputObjectZodSchema = makeSchema();
