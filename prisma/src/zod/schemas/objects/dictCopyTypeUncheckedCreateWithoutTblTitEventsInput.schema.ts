import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  CopyTypeID: z.number().int().optional(),
  CopyType: z.string().optional().nullable(),
  tblSubmissions: z.lazy(() => tblSubmissionsUncheckedCreateNestedManyWithoutDictCopyTypeInputObjectSchema).optional()
}).strict();
export const dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUncheckedCreateWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUncheckedCreateWithoutTblTitEventsInput>;
export const dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectZodSchema = makeSchema();
