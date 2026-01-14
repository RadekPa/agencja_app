import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsCreateNestedManyWithoutDictEventsInputObjectSchema as tblSubmEventsCreateNestedManyWithoutDictEventsInputObjectSchema } from './tblSubmEventsCreateNestedManyWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  EventCode: z.number().int(),
  EventDesc: z.string().max(50),
  tblSubmEvents: z.lazy(() => tblSubmEventsCreateNestedManyWithoutDictEventsInputObjectSchema).optional()
}).strict();
export const dictEventsCreateWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictEventsCreateWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsCreateWithoutTblTitEventsInput>;
export const dictEventsCreateWithoutTblTitEventsInputObjectZodSchema = makeSchema();
