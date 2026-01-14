import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictSubmSentTypeWhereInputObjectSchema as dictSubmSentTypeWhereInputObjectSchema } from './dictSubmSentTypeWhereInput.schema';
import { dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUpdateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictSubmSentTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictSubmSentTypeUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictSubmSentTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const dictSubmSentTypeUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeUpdateToOneWithWhereWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeUpdateToOneWithWhereWithoutTblSubmissionsInput>;
export const dictSubmSentTypeUpdateToOneWithWhereWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
