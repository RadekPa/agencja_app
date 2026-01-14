import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateNestedManyWithoutDictCopyTypeInputObjectSchema as tblSubmissionsCreateNestedManyWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsCreateNestedManyWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  CopyType: z.string().max(30).optional().nullable(),
  tblSubmissions: z.lazy(() => tblSubmissionsCreateNestedManyWithoutDictCopyTypeInputObjectSchema).optional()
}).strict();
export const dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeCreateWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeCreateWithoutTblTitEventsInput>;
export const dictCopyTypeCreateWithoutTblTitEventsInputObjectZodSchema = makeSchema();
