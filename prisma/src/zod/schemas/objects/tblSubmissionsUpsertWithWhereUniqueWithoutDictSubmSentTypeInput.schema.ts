import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUpdateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUpdateWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsUncheckedUpdateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUncheckedUpdateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUncheckedUpdateWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsCreateWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblSubmissionsUpdateWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateWithoutDictSubmSentTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema)])
}).strict();
export const tblSubmissionsUpsertWithWhereUniqueWithoutDictSubmSentTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpsertWithWhereUniqueWithoutDictSubmSentTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpsertWithWhereUniqueWithoutDictSubmSentTypeInput>;
export const tblSubmissionsUpsertWithWhereUniqueWithoutDictSubmSentTypeInputObjectZodSchema = makeSchema();
