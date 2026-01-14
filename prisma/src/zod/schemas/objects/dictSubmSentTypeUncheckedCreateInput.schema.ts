import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsUncheckedCreateNestedManyWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUncheckedCreateNestedManyWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUncheckedCreateNestedManyWithoutDictSubmSentTypeInput.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: z.number().int().optional(),
  SubmSentType: z.string().max(30),
  tblSubmissions: z.lazy(() => tblSubmissionsUncheckedCreateNestedManyWithoutDictSubmSentTypeInputObjectSchema).optional()
}).strict();
export const dictSubmSentTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeUncheckedCreateInput>;
export const dictSubmSentTypeUncheckedCreateInputObjectZodSchema = makeSchema();
