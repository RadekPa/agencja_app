import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema as tblSubmEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema } from './tblSubmEventsUncheckedCreateNestedManyWithoutDictEventsInput.schema';
import { tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema as tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema } from './tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  EventCode: z.number().int(),
  EventDesc: z.string().max(50),
  tblSubmEvents: z.lazy(() => tblSubmEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsUncheckedCreateNestedManyWithoutDictEventsInputObjectSchema).optional()
}).strict();
export const dictEventsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictEventsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUncheckedCreateInput>;
export const dictEventsUncheckedCreateInputObjectZodSchema = makeSchema();
