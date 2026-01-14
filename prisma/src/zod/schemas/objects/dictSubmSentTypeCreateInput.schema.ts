import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateNestedManyWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsCreateNestedManyWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsCreateNestedManyWithoutDictSubmSentTypeInput.schema'

const makeSchema = () => z.object({
  SubmSentType: z.string().max(30),
  tblSubmissions: z.lazy(() => tblSubmissionsCreateNestedManyWithoutDictSubmSentTypeInputObjectSchema).optional()
}).strict();
export const dictSubmSentTypeCreateInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeCreateInput>;
export const dictSubmSentTypeCreateInputObjectZodSchema = makeSchema();
