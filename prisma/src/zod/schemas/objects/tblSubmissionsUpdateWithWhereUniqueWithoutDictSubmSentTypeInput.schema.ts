import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUpdateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUpdateWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsUncheckedUpdateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUncheckedUpdateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUncheckedUpdateWithoutDictSubmSentTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmissionsUpdateWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateWithoutDictSubmSentTypeInputObjectSchema)])
}).strict();
export const tblSubmissionsUpdateWithWhereUniqueWithoutDictSubmSentTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateWithWhereUniqueWithoutDictSubmSentTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateWithWhereUniqueWithoutDictSubmSentTypeInput>;
export const tblSubmissionsUpdateWithWhereUniqueWithoutDictSubmSentTypeInputObjectZodSchema = makeSchema();
