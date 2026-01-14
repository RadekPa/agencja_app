import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateNestedManyWithoutDictEventsInputObjectSchema as tblTitEventsCreateNestedManyWithoutDictEventsInputObjectSchema } from './tblTitEventsCreateNestedManyWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  EventCode: z.number().int(),
  EventDesc: z.string().max(50),
  tblTitEvents: z.lazy(() => tblTitEventsCreateNestedManyWithoutDictEventsInputObjectSchema).optional()
}).strict();
export const dictEventsCreateWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.dictEventsCreateWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsCreateWithoutTblSubmEventsInput>;
export const dictEventsCreateWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
