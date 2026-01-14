import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInput.schema';
import { tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema as tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  CopyTypeID: z.number().int().optional(),
  CopyType: z.string().max(30).optional().nullable(),
  tblSubmissions: z.lazy(() => tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema).optional()
}).strict();
export const dictCopyTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUncheckedCreateInput>;
export const dictCopyTypeUncheckedCreateInputObjectZodSchema = makeSchema();
